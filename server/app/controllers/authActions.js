const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");
require("dotenv").config();

const checkAuth = async (req, res, next) => {
  try {
    const { auth } = req.cookies;

    if (!auth) {
      res.sendStatus(401);
    } else {
      const decode = jwt.verify(auth, process.env.APP_SECRET);
      if (!decode) res.sendStatus(401);
      else {
        const user = await tables.user.read(decode.id);
        res
          .status(200)
          .json({ id: user.id, username: user.username, role: user.role });
      }
    }
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("auth");
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    res.cookie("auth", req.token).json({
      message: "Connexion réussie",
      id: req.user.id,
      email: req.user.email,
      username: req.user.username,
      role: req.user.role,
    });
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
    const { username, hashedPassword, email, role = 0 } = req.body;
    console.info(hashedPassword);
    await tables.user.create({
      username,
      password: hashedPassword,
      email,
      role,
    });

    res.status(200).json({ message: "Inscription réussie" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkAuth,
  logout,
  login,
  register,
};

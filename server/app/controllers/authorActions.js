const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const authors = await tables.author.readAll();
    if (authors.length) {
      res.json({ result: authors });
    } else {
      res.json({ message: "Aucun auteur trouvé", result: authors });
    }
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const author = await tables.author.read(req.params.id);
    if (author) {
      res.json(author);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const insertId = await tables.author.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const affectedRows = await tables.author.update(req.params.id, req.body);
    if (affectedRows) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const affectedRows = await tables.author.delete(req.params.id);
    if (affectedRows) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, add, edit, destroy };

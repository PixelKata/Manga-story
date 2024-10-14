const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const { search } = req.query;
    let mangas;

    if (search) {
      mangas = await tables.manga.searchByTitle(search);
    } else {
      mangas = await tables.manga.readAll();
    }

    if (mangas.length) {
      res.json({ result: mangas });
    } else {
      res.json({ message: "Aucun manga trouvé", result: mangas });
    }
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const manga = await tables.manga.read(req.params.id);
    if (manga) {
      res.json(manga);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const insertId = await tables.manga.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const affectedRows = await tables.manga.update(req.params.id, req.body);
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
    const affectedRows = await tables.manga.delete(req.params.id);
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

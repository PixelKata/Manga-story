const express = require("express");

const router = express.Router();

const authorRouter = require("./router/authorRouter");
const mangaRouter = require("./router/mangaRouter");

router.use("/authors", authorRouter);
router.use("/mangas", mangaRouter);

module.exports = router;

const express = require("express");

const router = express.Router();

const authorRouter = require("./router/authorRouter");
const mangaRouter = require("./router/mangaRouter");
const uploadRouter = require("./router/uploadRouter");

router.use("/authors", authorRouter);
router.use("/mangas", mangaRouter);
router.use("/upload", uploadRouter);

module.exports = router;

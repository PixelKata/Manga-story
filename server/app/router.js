const express = require("express");

const router = express.Router();

const itemsRouter = require("./router/itemsRouter");
const userRouter = require("./router/userRouter");
const authorRouter = require("./router/authorRouter");
const mangaRouter = require("./router/mangaRouter");
const uploadRouter = require("./router/uploadRouter");
const authRouter = require("./router/authRouter");

router.use("/items", itemsRouter);
router.use("/user", userRouter);
router.use("/authors", authorRouter);
router.use("/mangas", mangaRouter);
router.use("/upload", uploadRouter);
router.use("/auth", authRouter);

module.exports = router;

const express = require("express");

const router = express.Router();
const mangaActions = require("../controllers/mangaActions");

const { verifyToken } = require("../services/auth");

router.get("/", mangaActions.browse);
router.get("/:id", mangaActions.read);
router.post("/", verifyToken, mangaActions.add);
router.put("/:id", mangaActions.edit);
router.delete("/:id", verifyToken, mangaActions.destroy);

module.exports = router;

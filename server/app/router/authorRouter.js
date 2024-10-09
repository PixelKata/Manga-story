const express = require("express");

const router = express.Router();
const authorActions = require("../controllers/authorActions");

const { verifyToken } = require("../services/auth");

router.get("/", authorActions.browse);
router.get("/:id", authorActions.read);
router.post("/", verifyToken, authorActions.add);
router.put("/:id", authorActions.edit);
router.delete("/:id", verifyToken, authorActions.destroy);

module.exports = router;

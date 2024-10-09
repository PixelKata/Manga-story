const express = require("express");

const router = express.Router();
const userActions = require("../controllers/userActions");

const { hashPassword, verifyToken } = require("../services/auth");

router.get("/", userActions.browse);
router.get("/:id", userActions.read);
router.post("/", hashPassword, userActions.add);
router.put("/:id", verifyToken, userActions.edit);
router.delete("/:id", verifyToken, userActions.destroy);

module.exports = router;

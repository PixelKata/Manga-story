const express = require("express");

const router = express.Router();
const authorActions = require("../controllers/authorActions");

router.get("/", authorActions.browse);
router.get("/:id", authorActions.read);
router.post("/", authorActions.add);
router.put("/:id", authorActions.edit);
router.delete("/:id", authorActions.destroy);

module.exports = router;

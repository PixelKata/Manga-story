const express = require("express");

const router = express.Router();
const mangaActions = require("../controllers/mangaActions");

router.get("/", mangaActions.browse);
router.get("/:id", mangaActions.read);
router.post("/", mangaActions.add);
router.put("/:id", mangaActions.edit);
router.delete("/:id", mangaActions.destroy);

module.exports = router;

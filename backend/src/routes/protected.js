const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();

router.get("/me", auth(), (req, res) => res.json({ user: req.user }));
router.get("/admin", auth(["admin"]), (_req, res) => res.json({ ok: true }));

module.exports = router;

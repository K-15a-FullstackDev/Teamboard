const express = require("express");
const authRoutes = require("./auth");
const router = express.Router();

const protectedRoutes = require("./protected");
router.use("/protected", protectedRoutes);

router.use("/auth", authRoutes);
router.get("/health", (_req, res) => res.json({ ok: true }));

module.exports = router;

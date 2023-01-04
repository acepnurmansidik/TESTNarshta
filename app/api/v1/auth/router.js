const express = require("express");
const { register, login } = require("./controller");
const router = express.Router();

router.get("/sign-in", login);
router.post("/sign-up", register);

module.exports = router;

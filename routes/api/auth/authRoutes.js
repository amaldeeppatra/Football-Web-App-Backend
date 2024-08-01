const express = require('express');
const { signupHandler } = require('../../../controllers/auth/signupController');
const { signinHandler } = require('../../../controllers/auth/signinController');
const router = express.Router();

router.get("/working", (req, res) => {
    res.send("authRoutes working")
})

router.post("/signup", signupHandler);

router.post("/signin", signinHandler);

module.exports = router;
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("admin")
})

router.post("/", (req, res) => {
    res.redirect("/data")
})

module.exports = router;
const express = require('express');
const { eplData } = require('../controllers/data/league/epl/epl');
const router = express.Router();
const multer = require('multer');
const { laligaData } = require('../controllers/data/league/laliga');
const { newsData } = require('../controllers/data/news/news');
const { recentMatchesData } = require('../controllers/data/league/epl/recentmatches');
const upload = multer({ dest: '../uploads' });


router.get("/", (req, res) => {
    res.render("data")
})

router.get("/epl", (req, res) => {
    res.render("league/epl")
})

router.get("/laliga", (req, res) => {
    res.render("league/laliga")
})

router.get("/news", (req, res) => {
    res.render("news")
})

router.get("/recent-matches", (req, res) => {
    res.render("recentmatches")
})


router.post("/epl", upload.single('file'), eplData);
router.post("/laliga", upload.single('file'), laligaData);

router.post("/news", upload.single('file'), newsData);

router.post("/recent-matches", upload.single('file'), recentMatchesData);


module.exports = router;
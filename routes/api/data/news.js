const express = require('express');
const News = require('../../../models/data/news')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching the news data.');
    }
});

module.exports = router;


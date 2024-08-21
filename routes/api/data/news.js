const express = require('express');
const News = require('../../../models/data/news')
const router = express.Router();

// router.get('/', async (req, res) => {
//     try {
//         const news = await News.find();
//         res.status(200).json(news);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while fetching the news data.');
//     }
// });


// Get all news articles
router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching the news data.');
    }
});

// Get a specific news article by title
router.get('/:title', async (req, res) => {
    try {
        const title = decodeURIComponent(req.params.title); // Decode the title
        console.log('Backend received title:', title); // Debugging

        const newsArticle = await News.findOne({ title });

        if (!newsArticle) {
            return res.status(404).json({ message: 'News article not found' });
        }

        res.status(200).json(newsArticle);
    } catch (error) {
        console.error('Error fetching news article:', error);
        res.status(500).send('An error occurred while fetching the news article.');
    }
});


module.exports = router;


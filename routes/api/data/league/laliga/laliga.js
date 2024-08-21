const express = require('express');
const Laliga = require('../../../../../models/data/league/epl');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const laligaData = await Laliga.find({});
      res.status(200).json(laligaData);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching Laliga data');
    }
});

module.exports = router;
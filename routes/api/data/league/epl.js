const express = require('express');
const Epl = require('../../../../models/data/league/epl');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const eplData = await Epl.find({});
      res.status(200).json(eplData);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching EPL data');
    }
});

module.exports = router;
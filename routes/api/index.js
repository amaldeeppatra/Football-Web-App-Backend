const express = require('express');
const router = express.Router();


// Authentication Routes
router.use('/auth', require('./auth/authRoutes'))

router.use('/epl', require('./data/league/epl'))
router.use('/laliga', require('./data/league/laliga'))

router.use('/news', require('./data/news'))

router.use('/recent-matches', require('./data/recentmatches'))


module.exports = router; // Ensure you are exporting the router
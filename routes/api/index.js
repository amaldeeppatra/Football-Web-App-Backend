const express = require('express');
const router = express.Router();


// Authentication Routes
router.use('/auth', require('./auth/authRoutes'))

router.use('/epl', require('./data/league/epl/epl'))
router.use('/laliga', require('./data/league/laliga/laliga'))

router.use('/news', require('./data/news'))

router.use('/epl/recent-matches', require('./data/league/epl/recentmatches'))
router.use('/laliga/recent-matches', require('./data/league/laliga/recentmatches'))


module.exports = router; // Ensure you are exporting the router
const express = require('express');
const router = express.Router();


// Authentication Routes
router.use('/auth', require('./auth/authRoutes'))


module.exports = router; // Ensure you are exporting the router
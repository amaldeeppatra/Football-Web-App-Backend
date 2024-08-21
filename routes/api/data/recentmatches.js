const express = require('express');
const RecentMatches = require('../../../models/data/recentmatches'); // Import the RecentMatches model
const router = express.Router();

// Define a route to fetch all recent matches
router.get('/', async (req, res) => {
  try {
    // Fetch all recent matches from the database
    const recentMatches = await RecentMatches.find();
    
    // Send the fetched data as a JSON response
    res.status(200).json(recentMatches);
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error('Error fetching recent matches:', error);
    res.status(500).send('An error occurred while fetching recent matches');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../../models/user');

// Example Express route for sign-in
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, token, fullName: user.fullName }); // Send fullName with the token
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    if (!user.isAdmin) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    const payload = {
      id: user.id,
      isAdmin: user.isAdmin,
    };

    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: '1h',
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token, user: { ...user._doc, password: undefined } });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

// middlewares/Authenticate.js
const jwt = require('jsonwebtoken');
const User = require('../models/User.models');
const { JWT_SECRET } = require('../../config/app');

const Authenticate = async (req, res, next) => {
  try {
    // 1️⃣ Get token from header
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    // 2️⃣ Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // 3️⃣ Find user based on decoded data
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // 4️⃣ Attach user to request
    req.user = user;

    // 5️⃣ Go to next middleware
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error.message);

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = Authenticate;
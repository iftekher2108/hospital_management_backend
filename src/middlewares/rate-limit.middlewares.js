const { rateLimit } = require('express-rate-limit')

exports.limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 4, // every 1 min 4 request allowed
  message: "Too many requests from this IP, And this is Demo  Buy it for full access (iftekher mahmud)",
})
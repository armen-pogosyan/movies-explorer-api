const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 200, // Limit each IP
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;

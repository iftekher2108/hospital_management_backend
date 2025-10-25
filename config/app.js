require('dotenv').config()

exports.JWT_SECRET = process.env.JWT_SECRET
exports.JWT_EXPIRE = process.env.JWT_EXPIRE

exports.PORT = process.env.PORT;
exports.MONGODB_URI = process.env.MONGODB_URI;



const connectDB = require('../config/db');
const mongoose = require('mongoose');
const Patient = require('../src/models/Patient.models');

(async () => {
  try {
    await connectDB();
    const p = await Patient.findOne();
    if (!p) {
      console.log('No patient found - create one or check DB.');
      process.exit(0);
    }
    console.log('Document as object:', p.toObject());
    console.log('Document as JSON (toJSON):', p.toJSON());
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

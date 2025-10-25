const Patient = require("../models/Patient.models");

// const page = parseInt(req.query.page) || 1;     // current page
    // const limit = parseInt(req.query.limit) || 10;  // per page
    // const skip = (page - 1) * limit;                // docs to skip

    // const patients = await Patient.find()
    //   .lean()
    //   .skip(skip)
    //   .limit(limit)
      // .sort({ createdAt: -1 }); // optional: newest first

    // const total = await Patient.countDocuments(); // total number of patients

    // res.status(200).json({
    //   currentPage: page,
    //   totalPages: Math.ceil(total / limit),
    //   totalPatients: total,
    //   data: patients,
    // });
    
// Get All Patients     
exports.getPatients = async (req, res) => {
   try {
 
    const data = await Patient.paginate({page:req.query.page || 1})

    res.status(200).json({data})

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Patient
exports.createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Single Patient
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Patient
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
     if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Patient
exports.deletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
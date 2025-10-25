const Doctor = require("../models/Doctor.models");

exports.createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({doctor});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getDoctors = async (req, res) => {
//   const doctors = await Doctor.find().populate("department");
  const data = await Doctor.paginate({page: req.query.page || 1,populate:['department','user']})
  res.json({data});
};

exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate('department');
        if(!doctor) {
            return res.status(404).json({message: "Doctor not found"})
        }
        res.status(200).json({doctor})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json({doctor});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if(!doctor) {
            return res.status(404).json({message: "Doctor not found"});
        }
        res.status(200).json({message:"Doctor deleted successfully"});
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

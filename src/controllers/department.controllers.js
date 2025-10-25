const Department = require("../models/Department.models")

exports.getDepartments = async (req, res) => {
    try {
        
        const data = await Department.paginate({page:req.query.page || 1});
        res.status(200).json({data});
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

exports.createDepartment = async (req, res) => {
    try {
        const department = await Department.create(req.body);
        res.status(201).json({ department });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if(!department) {
            return res.status(404).json({ message: "Department not found" })
        }
        res.status(200).json({ department })
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.updateDepartment = async (req, res) => {
    try {
        const department = await Department.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!department) {
            return res.status(404).json({ message: "Department not found" })
        }
        res.status(200).json({ department })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(req.params.id);
        if(!department) {
            return res.status(404).json({ message: "Department not found" })
        }
        res.status(200).json({ message: "Department deleted successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

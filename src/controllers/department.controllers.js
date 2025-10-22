const Department = require("../models/Department.models")
const { paginate } = require('../../helper/paginate')
exports.createDepartment = async (req, res) => {
    try {
        const department = await Department.create(req.body);
        res.status(201).json({ department });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.getDepartments = async (req, res) => {
    try {
        const data = await paginate(req, Department);
        res.status(200).json({data});
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
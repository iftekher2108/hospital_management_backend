const router = require('express').Router();
const departmentController = require("../controllers/department.controllers")

router.get('/',departmentController.getDepartments);
router.post('/',departmentController.createDepartment);

module.exports = router;


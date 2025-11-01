const router = require('express').Router();
const departmentController = require("../controllers/department.controllers")

router.get('/',departmentController.getDepartments);
router.post('/',departmentController.createDepartment);
router.get("/:id", departmentController.getDepartmentById);
router.put("/:id", departmentController.updateDepartment);
router.put('/:id/status', departmentController.departmentStatusById);
router.delete("/:id", departmentController.deleteDepartment);

module.exports = router;


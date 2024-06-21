const departmentController = require("../Controllers/departmentController");
const router = require("express").Router();

router.get("/", departmentController.getAllDepartments);

router.get("/:id", departmentController.getDeaprtmentById);

router.post("/", departmentController.createDepartment);

router.put("/:id", departmentController.update);

router.delete("/:id", departmentController.deleteDepart);

module.exports = router;

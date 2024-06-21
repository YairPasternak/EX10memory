const employeeController = require("../Controllers/employeeController");
const router = require("express").Router();

router.get("/", employeeController.getAllEmployee);

router.get("/:id", employeeController.getEmployeeById);

//router.post("/", employeeController.createEmployee);

router.put("/:id", employeeController.updateEmployee);

router.delete("/:id", employeeController.deleteEmployee);

router.post("/", employeeController.createEmployee2);

module.exports = router;
const employeeController = require("../Controllers/employeeController")
const router = require("express").Router()

router.get("/", employeeController.getAllEmployees)

router.get("/:id", employeeController.getEmployeeById)

//router.post("/", employeeController.createEmployee);

router.put("/:id", employeeController.updateEmployee)

router.delete("/:id", employeeController.deleteEmployee)

router.post("/", employeeController.createEmployee)

module.exports = router

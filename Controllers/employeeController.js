const employeeService = require("../Services/employeeService")

async function getAllEmployees(req, res) {
  return res.status(200).json(employeeService.getAllEmployees())
}

async function getEmployeeById(req, res) {
  const { id } = req.params
  return res.status(200).json(employeeService.getEmployeeById(+id))
}

//createEmployee
// async function createEmployee(req, res) {
//   const newEmployee = req.body;
//   employeeService.createEmployee(newEmployee);
//   console.log("newEmployee", newEmployee);
//   return res.status(200).json({ status: "created" });
// }

async function updateEmployee(req, res) {
  const { id } = req.params
  const updatedFieldsEmployee = req.body
  employeeService.updateEmployee(+id, updatedFieldsEmployee)
  return res.status(200).json({ status: "updated" })
}

async function deleteEmployee(req, res) {
  const { id } = req.params
  const isDelete = employeeService.deleteEmployee(+id)
  return res
    .status(200)
    .json({ msg: isDelete ? "deleted successfully" : "not found" })
}

async function createEmployee2(req, res) {
  debugger
  const newEmployee = req.body
  let createdEmployee
  try {
    createdEmployee = employeeService.createEmployee2(newEmployee)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
  return res.status(200).json(createdEmployee)
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  //createEmployee,
  updateEmployee,
  deleteEmployee,
  createEmployee2,
}

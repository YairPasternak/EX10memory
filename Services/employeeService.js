const { getDeaprtmentById } = require("./departmentService")

let employees = [
  { id: 1, firstName: "keren", lastName: "duchan", deptId: 1 },
  { id: 2, firstName: "yair", lastName: "pas", deptId: 1 },
  { id: 3, firstName: "butten", lastName: "duchan", deptId: 2 },
  { id: 4, firstName: "huldi", lastName: "duchan", deptId: 1 },
  { id: 5, firstName: "koki", lastName: "pas", deptId: 2 },
]
let nextId = 6
function getAllEmployees() {
  return employees
}

const getEmployeeById = (id) => {
  const employee = employees.find((employee) => (employee.id = id))
  console.log(employee)
  return employee
}

const updateEmployee = (id, newEmployeeData) => {
  const { firstName, lastName, deptId } = newEmployeeData

  newEmployeeData = {
    id,
    firstName,
    lastName,
    deptId,
  }

  const indexEmployee = employees.findIndex((employee) => employee.id === id)
  if (indexEmployee === -1) {
    return "Car  Not Found"
  }
  employees[indexEmployee] = newEmployeeData
  return "Updated..."
}

const deleteEmployee = (id) => {
  const newEmployee = employees.filter((employee) => employee.id !== id)
  if (newEmployee.length < employees.length) {
    employees = newEmployee
    return true
  }
  return false
}
function createEmployee(newEmployee) {
  const { firstName, lastName, deptId } = newEmployee

  // VALIDATIONS

  //  if (!firstName || !lastName || !deptId) {
  if (
    firstName === undefined ||
    lastName === undefined ||
    deptId === undefined
  ) {
    throw new Error("Missing mandatory field")
  }

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof deptId !== "number"
  ) {
    throw Error("Incorrect field type")
  }
  const dept = getDeaprtmentById(deptId)
  if (dept === undefined) {
    throw new Error(`Department with ID ${deptId} does not exist`)
  }

  newEmployee = {
    id: nextId,
    firstName,
    lastName,
    deptId,
  }

  employees.push(newEmployee)
  nextId++
  return newEmployee
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  // createEmployee,
  updateEmployee,
  deleteEmployee,
  createEmployee,
}

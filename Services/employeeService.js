let employee = [
  { id: 1, firstName: "keren", lastName: "duchan", deptId: 1 },
  { id: 2, firstName: "yair", lastName: "pas", deptId: 1 },
  { id: 3, firstName: "butten", lastName: "duchan", deptId: 2 },
  { id: 4, firstName: "huldi", lastName: "duchan", deptId: 1 },
  { id: 5, firstName: "koki", lastName: "pas", deptId: 2 },
];
let nextId = 6;
function getAllEmployee() {
  return employee;
}

const getEmployeeById = (id) => {
  const employee = emplyess.find((employee) => (employee.id = id));
  console.log(employee);
  return employee;
};

// const createEmployee = (newEmployee) => {
//   const { id, firstName, lastName, deptId } = newEmployee;
//   newEmployee = {
//     id: nextId,
//     firstName,
//     lastName,
//     deptId,
// //   };
//   employee.push(newEmployee);
//   nextId++;
//   return "created";
// };
// }

const updateEmployee = (id, newEmployeeData) => {
  const { firstName, lastName, deptId } = newEmployeeData;

  newEmployeeData = {
    id,
    firstName,
    lastName,
    deptId,
  };

  const indexEmployee = employee.findIndex((employee) => employee.id === id);
  if (indexEmployee === -1) {
    return "Car  Not Found";
  }
  employee[indexEmployee] = newEmployeeData;
  return "Updated...";
};

const deleteEmployee = (id) => {
  const newEmployee = employee.filter((employee) => employee.id !== id);
  if (newEmployee.length < employee.length) {
    employee = newEmployee;
    return true;
  }
  return false;
};
const createEmployee2 = (newEmployee2) => {
  debugger;
  const { id, firstName, lastName, deptId } = newEmployee2;
  newEmployee2 = {
    id: nextId,
    firstName,
    lastName,
    deptId,
  };
  if (
    newEmployee2.id === id &&
    newEmployee2.firstName === firstName &&
    newEmployee2.deptId === deptId
  ) {
    employee.push(newEmployee2);
    nextId++;
  }
  return "created";
};

module.exports = {
  getAllEmployee,
  getEmployeeById,
  // createEmployee,
  updateEmployee,
  deleteEmployee,
  createEmployee2,
};

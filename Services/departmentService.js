let departments = [
  { id: 1, name: "Accounting", managerId: 2 },
  { id: 2, name: "video", managerId: 3 },
];

// GET ALL CARS
// const getAlldepartments = () => {
//     return departments;
//   };

let nextId = 3;

function getAllDepartments() {
  return departments;
}

const getDeaprtmentById = (id) => {
  const department = departments.find((department) => department.id === id);
  console.log(department);
  return department;
};
//createDepartment

const createDepartment = (newDepartment) => {
  const { name, managerId } = newDepartment;

  newDepartment = {
    id: nextId,
    name,
    managerId,
  };
  departments.push(newDepartment);
  nextId++;
  return "Created...";
};

const updateDepartment = (id, newDeptData) => {
  // 1, {id: 1, model: "Audi", year: 2008, color: "dark blue" }
  const { name, managerId } = newDeptData;
  newDeptData = {
    name,
    managerId,
  };

  const index = departments.findIndex((dept) => dept.id === id);
  if (index === -1) {
    return "Car Not Found!";
  }

  departments[index] = newDeptData;
  return "Updated....";
};

const isDeleteDepart = (id) => {
  // 3

  const newDepartment = departments.filter((depart) => depart.id !== id); // true | true | false
  if (newDepartment.length < departments.length) {
    departments = newDepartment;
    return true;
  }

  return false;
};

module.exports = {
  getAllDepartments,
  getDeaprtmentById,
  createDepartment,
  updateDepartment,
  isDeleteDepart,
};

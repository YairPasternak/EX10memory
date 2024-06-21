const departmentService = require("../Services/departmentService");

async function getAllDepartments(req, res) {
  return res.status(200).json(departmentService.getAllDepartments());
}

async function getDeaprtmentById(req, res) {
  const { id } = req.params;

  return res.status(200).json(departmentService.getDeaprtmentById(+id));
}
//createDepartment
async function createDepartment(req, res) {
  const newCDepartment = req.body;
  departmentService.createDepartment(newCDepartment);
  console.log("newDepartment", newCDepartment);
  return res.status(200).json({ status: "created" });
}

async function update(req, res) {
  const { id } = req.params;
  const updatedFields = req.body;
  departmentService.updateDepartment(+id, updatedFields);
  return res.status(200).json({ status: "updated" });
}

async function deleteDepart(req, res) {
  const { id } = req.params;
  const isDeleted = departmentService.isDeleteDepart(+id);

  // return res.status(200).json({ status: isDeleted });
  return res
    .status(200)
    .json({ msg: isDeleted ? "deleted successfully" : "not found" });
}

module.exports = {
  getAllDepartments,
  getDeaprtmentById,
  createDepartment,
  update,
  deleteDepart,
};

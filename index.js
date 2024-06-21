const express = require("express")
const departmentRoutes = require("./Routes/departmentRoutes")
const employeeRoutes = require("./Routes/employeeRoutes")
const app = express()
app.use(express.json())

app.use("/departments", departmentRoutes)
app.use("/employee", employeeRoutes)

// app.delete("/", (req, res) => {
//   res.send("delete!!!");
// });
// app.post("/", (req, res) => {
//   res.send("Got a POST request");
// });

// app.get("/hello", (req, res) => {
//   res.send("Hello World!");
// });

// app.put("/user", (req, res) => {
//   res.send("put");
// });

app.listen(8000, () => {
  console.log("Listening on port 8000")
})

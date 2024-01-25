const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const mongoose = require("mongoose")
const Course = require("./models/Course")
const {createUser, getAllUsers, getUserByID, updateUser, deleteUser} = require("./controllers/userControllers");

mongoose
  .connect(`${process.env.MONGO_DB_URL}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
 

app.post("/api/users", createUser)
app.get("/api/users", getAllUsers)
app.get("/api/users/:id", getUserByID)
app.put("/api/users/:id", updateUser)
app.delete("/api/users/:id", deleteUser)

////////////////////////////////////////////////////////////
// const createRecord = async() => {
//     const record = await Course.create({
//         title: "JavaScript development create",
//         author: "Evelina",
//         modules: ["Databases", "JavaScript", "NodeJS"]
//     });
//     console.log(record)
// }
// createRecord()

// const saveRecord = async() => {
//     const record = await new Course({
//         title: "JavaScript development save",
//         author: "Evelina",
//         modules: ["Databases", "JavaScript", "NodeJS"]
//     })
//     const result = await record.save()
//     console.log(result)
// }
// saveRecord()

// const getAllCourses = async () => {
//     const allCourses = await Course.find()
//     console.log(allCourses)
// }
// getAllCourses()

// const getCourse = async (id) => {
//     const course = await Course.findById(id)
//     console.log(course)
// }
// getCourse('65b21fdd29eeca1af9956917')

// const findOneCourseByAuthor = async(myAuthor) => {
//     const course = await Course.findOne({ author: myAuthor})
//     console.log((course))
// }
// findOneCourseByAuthor("Evelina")

// const updateCourse = async(id) => {
//     const course = await Course.findById(id)

//     if(!course){
//         console.log("not found")
//     }
//     course.modules.push("TypeScript")
//     const result = await course.save()
//     console.log(result)
// }
// updateCourse("65b21eaf397c47b33a2a23bd")

// const deleteOne = async(id) => {
//     const course = await Course.deleteOne({ _id: id})
//     console.log(course)
// }
// deleteOne("65b222caa51cf0a2b7fde453")

// const deleteMany = async(author) => {
//     const courses = await Course.deleteMany({ author: author})
//     console.log(courses)
// }
// deleteMany("Evelina")
//////////////////////////////////////////////////////////////////




app.listen(process.env.PORT, () => {
  console.log("Server is runing on" + process.env.PORT);
});
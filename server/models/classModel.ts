import mongoose from "mongoose";
const Joi = require("joi");
import { NameSchema } from "./usersModel";


export const StudentSchema = new mongoose.Schema({
    studentId: String,
    name: NameSchema,
    image: String,


});

export const ClassSchema = new mongoose.Schema({
  classname:String,
  instructor:NameSchema,
  instructorId:String,
  studentsEnrolled:[StudentSchema],
  lastUpdated:String,
  price:String,
  rating:Number,
  classId:String,
  language:String,
  subtitles:String,
  classCoverImg:String,
  numberOfLessons:Number,
  description:String,
  reviews:[String]



//   username: String,
//   password: {
//     type: String,
//     required: [true, "Please enter a password"],
//     minlength: 8,
//   },
//   email: {
//     type: String,
//     required: [true, "Please enter a email"],
//     unique: true,
//     lowercase: true,
//   },
  });
    const Course = mongoose.model("classes", ClassSchema);
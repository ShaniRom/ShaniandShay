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


});

const Course = mongoose.model("classes", ClassSchema);
const validateCourse = (course) => {
  const schema = Joi.object({
    classname:Joi.string().required(),
    // instructor:NameSchema,
    // instructorId:String,
    // studentsEnrolled:[StudentSchema],
    // lastUpdated:String,
    // price:String,
    rating:Joi.number().required(),
    // classId:String,
    language:Joi.string().required(),
    subtitles:Joi.string().required(),
    // classCoverImg:String,
    numberOfLessons:Joi.number().required(),
    description:Joi.string().required(),
    // reviews:[String]

 
  });
  return schema.validate(course);
};

    
    
    export { Course,validateCourse};
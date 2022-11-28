import mongoose from "mongoose";


export enum UserTypeSchema {
  STUDENT = "student",
  INSTRUCTOR = "instructor",
}

export const MediaSchema = new mongoose.Schema({
    facebook: String,
    twitter: String,
    linkedin: String,
    youtube: String,
    other:String
  });
export const NameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

export const UserSchema = new mongoose.Schema({
  name: NameSchema,
  username: String,
  password: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  // type: {
  //   type: String,
  //   enum: UserTypeSchema,
  //   default: UserTypeSchema.STUDENT,
  // },
  // created: { type: Date, default: Date.now },
  // image: String,
  // language: String,
  // country: String,
  // phone: String,
  // socialmedia:MediaSchema,
  // description:String,
  // mycourses:[String],
  // coursesioffer:[String]




});


const User = mongoose.model('users', UserSchema)
export default User;
//------------------------------------------------------------------------
// var userSchema = mongoose.Schema({
//     username: String,
//     password: String,
//       email: String,
//       first_name: String,
//       last_name: String,
//       created: { type: Date, default: Date.now },
//   });

//   userSchema.methods.joiValidate = function(obj) {
//       var Joi = require('joi');
//       var schema = {
//           username: Joi.types.String().min(6).max(30).required(),
//           password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
//           email: Joi.types.String().email().required(),
//           first_name: Joi.types.String().required(),
//           last_name: Joi.types.String().required(),
//           created: Joi.types.Date(),
//       }
//       return Joi.validate(obj, schema);
//   }

//   module.exports = mongoose.model('User', userSchema);

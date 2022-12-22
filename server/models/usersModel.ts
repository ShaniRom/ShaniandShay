import mongoose from "mongoose";
const Joi = require("joi");

export enum UserTypeSchema {
  STUDENT = "student",
  INSTRUCTOR = "instructor",
}

export const MediaSchema = new mongoose.Schema({
  facebook: String,
  twitter: String,
  linkedin: String,
  youtube: String,
  other: String,
});
export const NameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

export const UserSchema = new mongoose.Schema({
   //name: NameSchema,
  username: String,
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 8,
  },
  email: {
    type: String,
    required: [true, "Please enter a email"],
    unique: true,
    lowercase: true,
  },
  typeOfUser: {
    type: String,
    enum: UserTypeSchema,
    default: UserTypeSchema.STUDENT,
  },
   created: { type: Date, default: Date.now },
  // image: String,
  // language: String,
  // country: String,
  // phone: String,
  // socialmedia:MediaSchema,
  // description:String,
  // mycourses:[String],
  // coursesioffer:[String]
});

const User = mongoose.model("users", UserSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(3),
    email: Joi.string().email().min(5).max(500).required(),
    password: Joi.string().min(8).max(1024).required(),
    typeOfUser: Joi.string().default(UserTypeSchema.STUDENT).valid(...Object.values(UserTypeSchema)),
    created: Joi.date().min('now').default(Date.now) 
  });
  return schema.validate(user);
};
export {
  User,
  validateUser
};

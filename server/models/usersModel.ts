import mongoose from "mongoose";
const Joi = require("joi");

export enum UserTypeSchema {
  STUDENT = "student",
  INSTRUCTOR = "instructor",
}

// export const MediaSchema = new mongoose.Schema({
//   facebook: String,
//   twitter: String,
//   linkedin: String,
//   youtube: String,
//   other: String,
// });
export const NameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
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
  joinedDate: String,
  description: String,
  birthYear: Number,
  country: String,
  phoneNum: String,
  language: String,
  facebookLink: String,
  twitterLink: String,
  linkedinLink: String,
  youtubeLink: String,
  otherLink: String,
  // image: String,=== cloudinary
  // mycourses:[String],
  // coursesUserMade:[String]
});

const User = mongoose.model("users", UserSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().min(3),
    email: Joi.string().email().min(5).max(500).required(),
    password: Joi.string().min(8).max(1024).required(),
    typeOfUser: Joi.string()
      .default(UserTypeSchema.STUDENT)
      .valid(...Object.values(UserTypeSchema)),
    joinedDate: Joi.date(),
    description: Joi.string(),
    birthYear: Joi.number().integer().min(1950).max(2023),
    country: Joi.string(),
    phoneNum: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/),
    language: Joi.string(),
    facebookLink: Joi.string(),
    twitterLink: Joi.string(),
    linkedinLink: Joi.string(),
    youtubeLink: Joi.string(),
    otherLink: Joi.string(),
  });
  return schema.validate(user);
};

export { User, validateUser };

//--nested schema try
// const NameJoiSchema = Joi.object().keys({
//  firstName: Joi.string(),
//  lastName: Joi.string(),
// }).required();
//--- can use for enum kind that it can only be ios or andriod in the options
// const schema = Joi.object({
//   type: Joi.string().valid('android', 'ios').insensitive()
// })

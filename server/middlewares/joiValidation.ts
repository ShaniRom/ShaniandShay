const Joi = require("joi");

export enum UserTypeSchema {
  STUDENT = "student",
  INSTRUCTOR = "instructor",
}

export const MediaSchema = Joi.object({
  facebook: Joi.string(),
  twitter: Joi.string(),
  linkedin: Joi.string(),
  youtube: Joi.string(),
  other: Joi.string(),
});
export const NameSchema = Joi.object({
  firstName: Joi.string().required,
  lastName: Joi.string().required,
});

const UserValidation = {
  addUserValidation: {
    body: Joi.object({
      // name: NameSchema,
      username: Joi.string().alphanum().min(3).max(30).required(),
      //  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      // email: Joi.string().email({
      //   required: true,
      //   unique: true,
      //   minDomainSegments: 2,
      //   tlds: { allow: ["com", "net"] },
      // }),
      // type: Joi.string().default(UserTypeSchema.STUDENT).valid(...Object.values(UserTypeSchema)),
      // birth_year:Joi.number()
      // .integer()
      // .min(1900)
      // .max(2022),
      // created: Joi.date().min('now').default(Date.now) ,
      // image:Joi.string().base64(),
      // language: Joi.string(),
      // country: Joi.string(),
      // phone: Joi.string().required,
      // socialmedia:MediaSchema,
      // description:Joi.string(),
      // mycourses:Joi.array().items(Joi.string(), Joi.number()),
      // coursesioffer:Joi.array().items(Joi.string(), Joi.number())
    }),
  },
};
export default UserValidation;

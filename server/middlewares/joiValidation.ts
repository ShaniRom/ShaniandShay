

// const UserValidation = {
//   addUserValidation: {
//     body: Joi.object({
//       // name: NameSchema,
//       username: Joi.string().alphanum().min(3).max(30).required(),
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
//     }),
//   },
// };
// export default UserValidation;


//is a middleware so it cehcks if the validation of user is correct
module.exports = (validator) => {
  return (req, res, next) => {

    ///req.body is the new user added
    console.log(req.body)
    const { error } = validator(req.body)   
    if (error) {
      console.error('error:', error)
    //  return res.send({ error: 'problem in joi validation' });
       return res.status(400).send(error.details[0].message)
    }
    
    next()
  }
}
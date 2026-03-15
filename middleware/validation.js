//import joi
const Joi = require('joi');

exports.userValidator = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().pattern(/^[a-zA-Z]{3,}$/).required().messages({
            'any.required': "First name is required",
            'string.empty': "First name cannot be null",
            'string.pattern.base': "first name cannot contain digits or whitespace and must be minimum of 3 characters",
        }),
        lastName: Joi.string().pattern(/^[a-zA-Z]{3,}$/).required().messages({
            'any.required': "last name is required",
            'string.empty': "last name cannot be null",
            'string.pattern.base': "last name cannot contain digits or whitespace and must be minimum of 3 characters",
        }),
        email: Joi.string().email().required().messages({
            'any.required': "email is required",
            'string.empty': "email cannot be null",
            'string.email': "invalid email format",
        }),
        phoneNumber: Joi.string().pattern(/^\d{11,15}$/).required().messages({
           'any.required': "phone number is required",
            'string.empty': "phone number must have a value",
            'string.pattern.base': "phone number cannot contain digits and must be minimum of 11 digits or maximum of 15 digits",
        }),
        password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/).required().messages({
            'any.required': "password is required",
            'string.empty': "password cannot be null",
            'string.pattern.base': "password must be minimum of 8 characters, contain at least one uppercase letter, one lowercase letter and one special character",
        }),
    })

   //console.log(result.error.details[0].message);

    const {error} = schema.validate(req.body);
    if(error) {
        res.status(400).json({
            message: error.details[0].message
        })
    }

    next()

}


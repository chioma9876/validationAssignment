const Joi = require('joi')

exports.supermarketValidator= (req,res, next) => {
    const schema = Joi.object({
        shopName: Joi.string().pattern(/^[a-zA-Z]{3,}$/).required().messages({
            "any.required": "Supermarket name is required",
            "string.empty": "Supermarket name cannot be null",
            "string.pattern.base": "Supermarket name cannot contain digits or whitespace and must be minimum of 3 characters",
        }),
        shopEmail: Joi.string().email().messages({
            "any.required": "shopEmail is required",
            "string.empty": "shopEmail cannot be null",
            "string.email": "Invalid email format",
        }),
        shopNumber: Joi.string().pattern(/^\d{11,15}$/).required().messages({
           "any.required": "shopNumber is required",
            "string.empty": "shopNumber must have a value",
            "string.pattern.base": "shopNumber cannot contain digits and must be minimum of 11 digits or maximum of 15 digits",
        }),
        shopAddress: Joi.string().min(15).required().messages({
           "any.required": "shopAddress is required",
            "string.empty": "shopAddress must have a value",
        }),
        userID: Joi.string().required(),
    })                  
    const {error} = schema.validate(req.body);
    
    if (error) {
        res.status(400).json({
            message: error.details[0].message
        })
    }
    next();
}

exports.updateValidator = (req, res, next) => {
    const schema = Joi.object({
         shopName: Joi.string().pattern(/^[a-zA-Z]{3,}$/).required().messages({
            "any.required": "Supermarket name is required",
            "string.empty": "Supermarket name cannot be null",
            "string.pattern.base": "Supermarket name cannot contain digits or whitespace and must be minimum of 3 characters",
    }),
    shopEmail: Joi.string().email().messages({
            "any.required": "shopEmail is required",
            "string.empty": "shopEmail cannot be null",
            "string.email": "Invalid email format",
        }),
        shopNumber: Joi.string().pattern(/^\d{11,15}$/).required().messages({
           "any.required": "shopNumber is required",
            "string.empty": "shopNumber must have a value",
            "string.pattern.base": "shopNumber cannot contain digits and must be minimum of 11 digits or maximum of 15 digits",
        }),
        shopAddress: Joi.string().min(15).required().messages({
           "any.required": "shopAddress is required",
            "string.empty": "shopAddress must have a value",
        }),
  })
  const {error} = schema.validate(req.body);

  if (error) {
    res.status(400).json({
        message: error.details[0].message
    })
  }
  next();
}
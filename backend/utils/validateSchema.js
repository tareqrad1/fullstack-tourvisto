import Joi from "joi";

export const validateSchema = Joi.object({
    name: Joi.string().min(4).max(20).required().messages({
        'string.empty': "Name cannot be an empty field",
        'any.required': 'Name is a required field',
        'string.min': 'Name must be at least 4 characters long',
        'string.max': 'Name must be less than or equal to 20 characters long'
    }),   
    email: Joi.string().trim().lowercase().email({tlds: { allow: ['com', 'net'] }}).required().messages({
        'string.empty': `Email cannot be an empty field`,
        'string.email': `Email must be a valid email address`,
        'any.required': 'Email is a required field'
    }),
    password: Joi.string().min(6).max(20).required().label('password').regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/).messages({
        "string.empty": "Password cannot be an empty field",
        "string.min": "Password Must have at least 6 characters",
        "string.pattern.base": "Must have a Strong Password",
        'any.required': 'Password is a required field'
    }),
    confirmPassword: Joi.any().equal(Joi.ref('password')).required().messages({ 
        'any.only': 'Confirm password does not match',
        'any.required': 'Confirm password is a required field'
    }),
    avatar: Joi.string().optional(),
})
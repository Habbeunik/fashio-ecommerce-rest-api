import Joi from '@hapi/joi';

const customerRegSchema = Joi.object({
	name: Joi.string().min(3).max(30).required(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
	address: Joi.string().max(150).required(),
	phone: Joi.string().required()
});

export const validateCustomerRegData = (data) =>
	customerRegSchema.validate(data);

const customerLoginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required()
});

export const validateCustomerLoginData = (data) =>
	customerLoginSchema.validate(data);

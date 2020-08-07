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

const addToCartShema = Joi.object({
	quantity: Joi.number().required(),
	product_id: Joi.number().required()
});

export const validateAddToCartData = (data) => addToCartShema.validate(data);

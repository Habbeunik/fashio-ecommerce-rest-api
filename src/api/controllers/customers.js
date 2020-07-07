import userService from '../../services/userService';
import { validateCustomerRegData } from '../validations/customerValidation';
import { pickFirstValidationErrorMessage } from '../../utils/error';

export function getCustomer(req, res) {
	res.status(200).json({});
}

export function updateCustomer(req, res) {
	res.status(200).json({});
}

export function createCustomer(req, res) {
	const { value, error } = validateCustomerRegData(req.body);

	if (error) {
		res
			.status(400)
			.send({
				message: 'Invalid data supplied',
				data: pickFirstValidationErrorMessage(error)
			});
	}

	userService
		.registerCustomer(value)
		.then((user) => {
			res.status(200).json({ data: user });
		})
		.catch((e) => {
			console.log('error on custoemr', e);
			res.status(400).json({ message: e });
		});
}

export function loginCustomer(req, res) {
	res.status(200).json({});
}

export function addToCart(req, res) {
	res.status(200).json({});
}

export function updateCart(req, res) {
	res.status(200).json({});
}

export function removeFromCart(req, res) {
	res.status(200).json({});
}

export function addToWishlist(req, res) {
	res.status(200).json({});
}

export function removeFromWishlist(req, res) {
	res.status(200).json({});
}

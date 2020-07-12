import userService from '../../services/userService';
import {
	validateCustomerRegData,
	validateCustomerLoginData
} from '../validations/customerValidation';
import { pickFirstValidationErrorMessage } from '../../utils/error';
import wishlistService from '../../services/wishlistService';

export function getCustomer(req, res) {
	res.status(200).json({});
}

export function updateCustomer(req, res) {
	res.status(200).json({});
}

export function createCustomer(req, res) {
	const { value, error } = validateCustomerRegData(req.body);

	if (error) {
		res.status(400).send({
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
	const { value, error } = validateCustomerLoginData(req.body);

	if (error) {
		res.status(400).json({
			message: 'Invalid data supplied',
			data: pickFirstValidationErrorMessage(error)
		});
	}

	userService
		.loginCustomer(value)
		.then(({ error, status, result }) => {
			if (error) {
				res.status(status).json({
					message: error,
					data: {}
				});
				return;
			}

			res.status(200).json({
				data: result,
				message: 'Login success'
			});
		})
		.catch(({ status, error }) => {
			res.status(status).json({
				message: error,
				data: {}
			});
		});
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
	const customerId = req.params.id;
	const { productId } = req.body;

	if (!customerId || !productId) {
		res
			.status(400)
			.json({ message: 'Customer Id or productId not passed', data: {} });
		return;
	}

	wishlistService
		.add(customerId, productId)
		.then(({ result }) => {
			res.status(200).json({
				message: 'Product successfully saved to wishlist',
				data: result
			});
		})
		.catch((e) => {
			res.status(422).json({ message: e, data: {} });
		});
}

export function getWishlist(req, res) {
	const customerId = req.params.id;

	wishlistService
		.get(customerId)
		.then(({ result, error }) => {
			res
				.status(200)
				.json({ message: 'Wishlist fetched successfully', data: result });
		})
		.catch((error) => {
			res.status(422).json({ message: error, data: {} });
		});
}

export function removeWishlist(req, res) {
	const customerId = req.params.id;
	const productId = req.params.productId;

	wishlistService
		.remove(customerId, productId)
		.then(() => {
			res
				.status(200)
				.json({ message: 'Item removed from wishlist successfully' });
		})
		.catch((e) => {
			res.status(400).json({
				message: 'An error ocurred when deleting item',
				data: e
			});
		});
}

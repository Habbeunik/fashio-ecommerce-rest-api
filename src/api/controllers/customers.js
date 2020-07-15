import userService from '../../services/userService';
import {
	validateCustomerRegData,
	validateCustomerLoginData
} from '../validations/customerValidation';
import { pickFirstValidationErrorMessage } from '../../utils/error';
import wishlistService from '../../services/wishlistService';
import * as cartService from '../../services/cartService';

export function getCustomer(req, res) {
	const customerId = req.params.id;

	userService
		.getById(customerId)
		.then(({ result }) => {
			res
				.status(200)
				.json({ message: 'customer fetched successfully', data: result });
		})
		.catch((e) => {
			res.status(422).json({ message: e });
		});
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
	const { id: customer_id } = req.params;
	const { quantity, product_id } = req.body;

	cartService
		.saveToCart({ customer_id, quantity, product_id })
		.then(({ result }) => {
			res
				.status(200)
				.json({ message: 'Added to cart successfully', data: result });
		})
		.catch((e) => {
			res.status(422).json({ message: e, data: {} });
		});
}

export function getCustomerCartItems(req, res) {
	const customerId = req.params.id;
	cartService
		.getCustomerCartItems(customerId)
		.then(({ result }) => {
			res.status(200).json({
				message: 'Fetched customer cart items succesfully',
				data: result
			});
		})
		.catch((e) => {
			res.status(422).json({ message: e, data: {} });
		});
}

export function updateCart(req, res) {
	const { id: customer_id, productId: product_id } = req.params;
	const { quantity } = req.body;

	cartService
		.updateCartItem({
			quantity,
			product_id,
			customer_id
		})
		.then(({ result }) => {
			res.status(200).json({
				message: 'Cart item updated successfully',
				data: result
			});
		})
		.catch((e) => {
			res.status(422).json({ message: e, data: {} });
		});
}

export function removeFromCart(req, res) {
	const { id: customer_id, productId: product_id } = req.params;

	cartService
		.removeProductFromCustomerCart(customer_id, product_id)
		.then(({ result }) => {
			res.status(200).json({
				message: 'Product succesfully removed from cart',
				data: result
			});
		})
		.catch((e) => {
			res.status(422).json({ message: e, data: {} });
		});
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

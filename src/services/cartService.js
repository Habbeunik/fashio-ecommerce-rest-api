import cartRepository from '../db/repository/cartRepository';

export async function saveToCart(payload) {
	try {
		const result = await cartRepository.save(payload);

		return { result };
	} catch (e) {
		throw e;
	}
}

export async function getCustomerCartItems(customerId) {
	try {
		const result = await cartRepository.getByCustomerId(customerId);

		return { result };
	} catch (e) {
		throw e;
	}
}

export async function updateCartItem(payload) {
	try {
		const result = await cartRepository.updateQuantity(payload);

		return { result };
	} catch (e) {
		throw e;
	}
}

export async function removeProductFromCustomerCart(customerId, productId) {
	try {
		await cartRepository.remove(customerId, productId);

		return {};
	} catch (e) {
		throw e;
	}
}

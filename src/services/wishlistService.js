import wishlistRepository from '../db/repository/wishlistRepository';

export async function add(customerId, productId) {
	try {
		const res = await wishlistRepository.save(productId, customerId);

		return { result: res };
	} catch (e) {
		throw e;
	}
}

export async function get(customerId) {
	try {
		const result = await wishlistRepository.getCustomerList(customerId);

		return { result };
	} catch (e) {
		throw e;
	}
}

export async function remove(customerId, productId) {
	try {
		await wishlistRepository.remove(customerId, productId);

		return { result: {} };
	} catch (e) {
		console.log('error', e);
		throw e;
	}
}

const wishlistService = {
	remove,
	add,
	get
};

export default wishlistService;

import db from '..';
import wishlistQuery from '../query/wishlistQuery';

async function save(productId, customerId) {
	const res = await db.query(wishlistQuery.save, [productId, customerId]);

	return res.rows[0];
}

async function getCustomerList(customerId) {
	const res = await db.query(wishlistQuery.getByCustomerId, [customerId]);

	return res.rows;
}

async function remove(customerId, productId) {
	const res = await db.query(wishlistQuery.remove, [customerId, productId]);

	return {};
}

const wishlistRepository = {
	save,
	getCustomerList,
	remove
};

export default wishlistRepository;

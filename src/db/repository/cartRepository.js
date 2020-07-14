import db from '..';
import { cartQuery } from '../query';
import { func } from '@hapi/joi';

async function save(payload) {
	const { product_id, customer_id, quantity } = payload;

	const res = await db.query(cartQuery.save, [
		product_id,
		customer_id,
		quantity
	]);

	return res.rows[0];
}

async function updateQuantity(payload) {
	const { quantity, customer_id, product_id } = payload;

	const res = await db.query(cartQuery.updateQuantity, [
		quantity,
		product_id,
		customer_id
	]);

	return res.rows[0];
}

async function getByCustomerId(customer_id) {
	const res = await db.query(cartQuery.getByCustomerId, [customer_id]);

	return res.rows;
}

async function remove(customer_id, product_id) {
	const res = await db.query(cartQuery.remove, [product_id, customer_id]);
}

const cartRepository = {
	save,
	getByCustomerId,
	remove,
	updateQuantity
};

export default cartRepository;

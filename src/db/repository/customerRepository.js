import db from '..';
import { customerQuery } from '../query';

async function createCustomer(customer) {
	const { name, email, password, address, phone } = customer;

	const res = await db.query(customerQuery.create, [
		name,
		email,
		password,
		address,
		phone
	]);

	return res.rows[0];
}

async function getOne(match = 'id', value) {
	const getOneQuery = customerQuery.generateGetOneQuery(match);

	const res = await db.query(getOneQuery, [value]);

	return res.rows[0];
}

const customerRepository = {
	createCustomer,
	getOne
};

export default customerRepository;

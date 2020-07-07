import db from '..';
import customerQuery from '../query/customerQuery';

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

const customerRepository = {
	createCustomer
};

export default customerRepository;
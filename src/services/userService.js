import customerRepository from '../db/repository/customerRepository';
import { hashPassword, generateToken } from '../utils/auth';

export async function registerCustomer(customer) {
	try {
		const password = hashPassword(customer.password);

		const user = await customerRepository.createCustomer({
			...customer,
			password
		});

		const token = generateToken(user);

		return { token };
	} catch (e) {
		console.log('error on register', e);
	}
}

const userService = {
	registerCustomer
};

export default userService;

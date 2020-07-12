import customerRepository from '../db/repository/customerRepository';
import { hashPassword, generateToken, passwordMatches } from '../utils/auth';
import wishlistRepository from '../db/repository/wishlistRepository';

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
		return { error: e };
	}
}

export async function loginCustomer(values) {
	try {
		const { email, password } = values;

		const customer = await customerRepository.getOne('email', email);

		if (!customer) {
			return { error: 'Incorrect email or passord', status: 400 };
		}
		if (!passwordMatches(password, customer.password)) {
			return { error: 'Incorrect email or passord', status: 400 };
		}

		const user = { ...customer, password: undefined };
		const token = generateToken(customer);
		return { result: { user, token } };
	} catch (e) {
		return { error: e, status: 422 };
	}
}

const userService = {
	registerCustomer,
	loginCustomer
};

export default userService;

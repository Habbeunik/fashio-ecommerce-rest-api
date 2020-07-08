const create = `INSERT INTO customers (name, email, password, address, phone) VALUES ($1, $2, $3, $4, $5) RETURNING name, email, address, phone, id`;
const generateGetOneQuery = (match = 'id') =>
	`SELECT * FROM customers WHERE ${match}=$1`;

const customerQuery = {
	create,
	getOneByEmail: generateGetOneQuery('email'),
	getOneById: generateGetOneQuery('id'),
	generateGetOneQuery
};

export default customerQuery;

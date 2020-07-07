const create = `INSERT INTO customers (name, email, password, address, phone) VALUES ($1, $2, $3, $4, $5) RETURNING name, email, address, phone, id`;

const customerQuery = {
	create
};

export default customerQuery;

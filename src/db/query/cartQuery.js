const save = `
INSERT INTO  cart (product_id, customer_id, quantity) 
VALUES ($1, $2, $3) 
RETURNING *`;

const getByCustomerId = `
  SELECT * FROM cart WHERE cart.customer_id = $1 
`;

const updateQuantity = `UPDATE cart SET quantity = $1 WHERE cart.product_id = $2 AND cart.customer_id = $3`;

const remove = `DELETE FROM cart WHERE cart.product_id = $1 AND cart.customer_id = $2`;

const cartQuery = {
	save,
	remove,
	getByCustomerId,
	updateQuantity
};

export default cartQuery;

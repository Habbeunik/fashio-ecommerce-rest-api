const save = `
INSERT INTO  whishlist (product_id, customer_id) 
VALUES ($1, $2) 
RETURNING *`;

const getByCustomerId = `
  SELECT * FROM whishlist  
  INNER JOIN products ON whishlist.product_id = products.id 
  WHERE whishlist.customer_id = $1;
`;

const remove = `
DELETE FROM whishlist WHERE whishlist.customer_id = $1 AND whishlist.product_id = $2
`;

const wishlistQuery = {
	save,
	getByCustomerId,
	remove
};

export default wishlistQuery;

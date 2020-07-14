const save = `
INSERT INTO  whishlist (product_id, customer_id) 
VALUES ($1, $2) 
RETURNING *`;

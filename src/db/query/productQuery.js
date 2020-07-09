export const generateGetInCategoryQuery = (numberOfCategories) => `
SELECT product_id, 
COUNT(product_id), 
MAX(name) AS name, 
MAX(description) AS description, 
MAX(specifications) AS specifications, 
MAX(price) as price, 
MAX(quantity) as quantity, 
MAX(brand) as brand 
FROM product_category 
INNER JOIN products ON product_category.product_id = products.id 
WHERE category_id IN (${Array.from(
	new Array(numberOfCategories),
	(_, i) => `$${i + 1}${i + 1 === numberOfCategories ? '' : ','}`
).reduce(
	(acc, value) => acc + value,
	''
)}) GROUP BY product_id HAVING COUNT(*) = ${numberOfCategories};`;

const getOne = `
SELECT * FROM products WHERE products.id = $1
`;

const productQuery = {
	generateGetInCategoryQuery,
	getOne
};

export default productQuery;

import db from '..';
import { productQuery } from '../query';

async function getProductsInCategories(categories = []) {
	const getProductInCategoriesQuery = productQuery.generateGetInCategoryQuery(
		categories.length
	);

	const res = await db.query(getProductInCategoriesQuery, categories);

	return res.rows;
}

async function getById(id) {
	const res = await db.query(productQuery.getOne, [id]);
	console.log('res', res);
	return res.rows[0];
}

const productRepository = {
	getProductsInCategories,
	getById
};

export default productRepository;

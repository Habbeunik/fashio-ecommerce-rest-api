import productRepository from '../db/repository/productRepository';

export async function getProduct(categories) {
	try {
		const products = await productRepository.getProductsInCategories(
			categories
		);

		return { result: products };
	} catch (e) {
		return { error: e };
	}
}

async function getOneById(id) {
	try {
		const product = await productRepository.getById(id);

		return { result: product };
	} catch (e) {
		return { error: e, errorCode: 422 };
	}
}

const productService = {
	getProduct,
	getOneById
};

export default productService;

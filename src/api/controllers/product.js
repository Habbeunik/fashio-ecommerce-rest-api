import productService from '../../services/productService';

export function getProducts(req, res) {
	const categories = [...new Set(req.query.category)]; // to remove repating categories

	if (!categories || categories.length < 1) {
		res.status(400).json({ message: 'No category was specified', data: [] });
	}

	productService
		.getProduct(categories)
		.then(({ error, errorCode, result }) => {
			if (error) {
				res.status(errorCode).json({ message: error, data: [] });
				return;
			}

			res
				.status(200)
				.json({ data: result, message: 'products fetched successfully' });
		})
		.catch(({ error }) => {
			res.status(422).json({ message: error, data: [] });
		});
}

export function saveProduct(req, res) {
	res.status(200).json({ data: req.body });
}

export function getOneProduct(req, res) {
	const id = req.params.id;

	if (!id) {
		res.status(400).json({ message: 'product id not specified', data: {} });
		return;
	}

	productService
		.getOneById(id)
		.then(({ result }) => {
			res
				.status(200)
				.json({ message: 'product fetched succesfully', data: result });
		})
		.catch(({ error, errorCode }) => {
			res.status(errorCode).json({ message: error, data: {} });
		});
}

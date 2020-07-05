export function getProducts(req, res) {
	res.status(200).json({ data: [] });
}

export function saveProduct(req, res) {
	res.status(200).json({ data: req.body });
}

export function getOneProduct(req, res) {
	res.status(200).json({ data: {} });
}

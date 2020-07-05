import { Router } from 'express';
import productRouter from './routes/products';
import customerRouter from './routes/customers';

const api = Router();

api.use(function (req, res, next) {
	console.log('clled api route');

	next();
});

api.use('/products', productRouter);
api.use('/customers', customerRouter);

export default api;

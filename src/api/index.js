import { Router } from 'express';
import productRouter from './routes/products';
import customerRouter from './routes/customers';

const api = Router();

api.use('/products', productRouter);
api.use('/customers', customerRouter);

export default api;

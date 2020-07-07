import { Router } from 'express';
import * as controller from '../controllers/customers';

const customerRouter = new Router();

customerRouter.get('/:id', controller.getCustomer);
customerRouter.patch('/:id', controller.updateCustomer);
customerRouter.post('/signup', controller.createCustomer);
customerRouter.post('/login', controller.loginCustomer);

export default customerRouter;

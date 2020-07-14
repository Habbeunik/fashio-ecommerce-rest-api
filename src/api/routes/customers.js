import { Router } from 'express';
import * as controller from '../controllers/customers';

const customerRouter = new Router();

customerRouter.get('/:id', controller.getCustomer);
customerRouter.patch('/:id', controller.updateCustomer);
customerRouter.post('/signup', controller.createCustomer);
customerRouter.post('/login', controller.loginCustomer);
customerRouter.post('/:id/wishlist', controller.addToWishlist);
customerRouter.get('/:id/wishlist', controller.getWishlist);
customerRouter.delete('/:id/wishlist/:productId', controller.removeWishlist);
customerRouter.post('/:id/cart', controller.addToCart);
customerRouter.get('/:id/cart', controller.getCustomerCartItems);
customerRouter.patch('/:id/cart/:productId', controller.updateCart);
customerRouter.delete('/:id/cart/:productId', controller.removeFromCart);

export default customerRouter;

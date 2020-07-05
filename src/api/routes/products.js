import { Router } from 'express';
import * as controller from '../controllers/product';

const productRouter = Router();

productRouter.get('/', controller.getProducts);
productRouter.post('/', controller.saveProduct);
productRouter.get('/:id', controller.getOneProduct);

export default productRouter;

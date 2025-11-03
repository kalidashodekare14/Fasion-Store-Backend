import express from 'express';
import { productAdd, productEdit, productDelete, allProducts } from './controller';
import validateRequest from '../../middlewares/validateRequest';
import { productAddValidation, productGetValidation } from './validation';
const router = express.Router();

router.post('/add_product', validateRequest(productAddValidation), productAdd);
router.patch('/edit_product', validateRequest(productAddValidation), productEdit);
router.delete('/delete_product', productDelete);
router.get('/total_product', validateRequest(productGetValidation), allProducts)


export const sellerPortalRoutes = router;



import express from 'express';
import { productAdd, productEdit, productDelete, allProducts, productStatusChange } from './controller';
import validateRequest from '../../middlewares/validateRequest';
import { productAddValidation, productGetValidation, productStatusValidation } from './validation';
const router = express.Router();

// Seller Product Add
router.post('/add_product', validateRequest(productAddValidation), productAdd);
// Seller Product Edit
router.patch('/edit_product', validateRequest(productAddValidation), productEdit);
// Seller Product Delete
router.delete('/delete_product', productDelete);
// Seller Total Product Show
router.get('/total_product', validateRequest(productGetValidation), allProducts);
// Seller Product Status Change
router.patch('/product_status', validateRequest(productStatusValidation), productStatusChange)

export const sellerPortalRoutes = router;



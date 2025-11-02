import express from 'express';
import { productAdd, productEdit, productDelete } from './controller';
import validateRequest from '../../middlewares/validateRequest';
import { productAddValidation } from './validation';
const router = express.Router();

router.post('/add_product', validateRequest(productAddValidation), productAdd);
router.patch('/edit_product', validateRequest(productAddValidation), productEdit);
router.delete('/delete_product', productDelete);


export const sellerPortalRoutes = router;



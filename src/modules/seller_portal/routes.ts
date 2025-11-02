import express from 'express';
import { productAdd, productEdit } from './controller';
import validateRequest from '../../middlewares/validateRequest';
import { productAddValidation } from './validation';
const router = express.Router();

router.post('/add_product', validateRequest(productAddValidation), productAdd);
router.patch('/edit_product', validateRequest(productAddValidation), productEdit);


export const sellerPortalRoutes = router;



import express, { Router } from 'express';
import { getAllProdcut, getProductDetails } from './controller';
import validateRequest from '../../middlewares/validateRequest';
import { allProductValidation } from './validation';
const router = express.Router();



router.get('/products', validateRequest(allProductValidation), getAllProdcut);
router.get('/products/:id', getProductDetails);


export const BuyerPortalRoutes = router;
import express, { Router } from 'express';
import { getAllProdcut, getProductDetails, productOrder, getOrderTrack } from './controller';
import validateRequest from '../../middlewares/validateRequest';
import { allProductValidation, orderValidation } from './validation';
const router = express.Router();

// 


router.get('/products', validateRequest(allProductValidation), getAllProdcut);
router.get('/products/:id', getProductDetails);
router.post('/order', validateRequest(orderValidation), productOrder);
router.get('/order/:email', getOrderTrack);


export const BuyerPortalRoutes = router;
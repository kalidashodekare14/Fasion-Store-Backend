import express from 'express';
import { getAllUser } from './controller';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router()




router.get('/users', getAllUser);



export const AdminPortalRoutes = router
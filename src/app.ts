import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { AuthRoutes } from './modules/auth/routes';
import { sellerPortalRoutes } from './modules/seller_portal/routes';
import { BuyerPortalRoutes } from './modules/buyer_portal/routes';
import { AdminPortalRoutes } from './modules/admin_portal/routes';

const app = express();


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send(`
        <div>
            <h1>Fasion Store Backend Running 🚀</h1>
            <p>🎉 Welcome to the Fasion Store</p>
        </div>
        `)
})


// API routes version 1
app.use("/api/v1/auth", AuthRoutes);
app.use('/api/v1/admin', AdminPortalRoutes);
app.use("/api/v1/seller_product", sellerPortalRoutes);
app.use("/api/v1/buyer_product", BuyerPortalRoutes);


export default app;
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { AuthRoutes } from './modules/auth/routes';

const app = express();


app.use(cors({
    origin: true,
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


// API routes
app.use("/api/v1/auth", AuthRoutes);


export default app;
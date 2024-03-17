import cors from 'cors';
import dotenv from "dotenv";
import express, { Express } from "express";
import connectDB from './config/db';
import router from './routes/dashboardRoutes';
/** 
 * Create an Express application anf get the 
 * value of the PORT environmental variable
 * from the `process.env`
*/
const app: Express = express();
const PORT = process.env.PORT || 4000;
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api", router)
// app.get('/', () => <h1>connect to backend < /h1>);
app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});

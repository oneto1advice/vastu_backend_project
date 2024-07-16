import express from 'express';
import bodyParser from 'body-parser';
import paymentRoutes from './routes/paymentRoutes';
import  { sequelize } from '../config/databaseConfig';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = 8000;

// console.log(PORT)

app.use(bodyParser.json());
app.use('/api/v1/payment', paymentRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
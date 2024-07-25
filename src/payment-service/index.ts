import express from 'express';
import bodyParser from 'body-parser';
import paymentRoutes from './routes/paymentRoutes';
import  { sequelize } from '../config/databaseConfig';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.payment-service' });  // Specify the path to the .env file
const app = express();
const PORT = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/payment', paymentRoutes);

sequelize.authenticate().then(() => {
  console.log('Connection to database has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// sequelize.sync({ alter: true })
//   .then(() => {
//     console.log("Database & tables created!");
//   });

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Error syncing with the database:', err);
});

app.on('error', (err) => {
  console.error('Server error:', err);
});

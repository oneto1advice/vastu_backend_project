import express from 'express';
import userRoutes from './routes/userRoutes';
import  { sequelize } from '../config/databaseConfig';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/v1/users', userRoutes);

sequelize.authenticate().then(() => {
  console.log('Connection to database has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

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

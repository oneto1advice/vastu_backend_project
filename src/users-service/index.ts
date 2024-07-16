import express from 'express';
import userRoutes from './routes/userRoutes';
import  { sequelize } from '../config/databaseConfig';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api/v1/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
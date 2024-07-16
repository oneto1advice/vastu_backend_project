import express from 'express';
import quoteRoutes from './routes/quoteRoutes';
import  { sequelize } from '../config/databaseConfig';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api/v1/quotes', quoteRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
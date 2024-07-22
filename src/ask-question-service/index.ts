import express from 'express';
import questionRoutes from './routes/questionRoutes';
import  { sequelize } from '../config/databaseConfig';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.ask-question-service' });  // Specify the path to the .env file
const app = express();
const PORT = process.env.PORT || 6001;


app.use(express.json());
app.use('/api/v1/askQuestion', questionRoutes);



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
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'appointment-service'
  ? '.env.appointment-service' : process.env.NODE_ENV === 'users-service' ?
   '.env.users-service' : '.env.quote-service';

dotenv.config({ path: envFile });
export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

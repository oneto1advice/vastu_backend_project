import { sequelize } from "../../config/databaseConfig";
import { DataType } from "sequelize-typescript";

const user = sequelize.define('users', {
  name: DataType.STRING,
  email: DataType.STRING,
  mobile: DataType.STRING,
  password: DataType.STRING,
  role: DataType.STRING,
  otp: DataType.STRING,
  status: DataType.INTEGER
});

user.sync();

export default user;
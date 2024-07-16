import { sequelize } from "../../config/databaseConfig";
import { DataType } from "sequelize-typescript";

const quote = sequelize.define('quote', {
  name: DataType.STRING,
  email: DataType.STRING,
  mobile: DataType.STRING,
  region: DataType.STRING,
  city: DataType.STRING,
  type: DataType.STRING,
  size: DataType.STRING,
  floor: DataType.BOOLEAN,
  message: DataType.STRING
});

quote.sync();

export default quote;
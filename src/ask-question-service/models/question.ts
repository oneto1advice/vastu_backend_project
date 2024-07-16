import { sequelize } from "../../config/databaseConfig";
import { DataType } from "sequelize-typescript";

const question = sequelize.define('question', {
  name: DataType.STRING,
  email: DataType.STRING,
  mobile: DataType.STRING,
  message: DataType.STRING
});

question.sync();

export default question;
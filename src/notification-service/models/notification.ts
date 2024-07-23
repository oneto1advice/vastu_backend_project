import { sequelize } from "../../config/databaseConfig";
import { DataType } from "sequelize-typescript";

const notification = sequelize.define('notification', {
  title: DataType.STRING,
  body: DataType.STRING
});

notification.sync();

export default notification;
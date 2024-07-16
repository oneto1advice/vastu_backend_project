import { sequelize } from "../../config/databaseConfig";
import { DataType } from "sequelize-typescript";

const payment = sequelize.define('payment', {
  userId: DataType.STRING,
  consultantId: DataType.STRING,
  currency: DataType.STRING,
  amount : DataType.STRING,
  status: DataType.STRING,
  razorpay_payment_id: DataType.STRING,
  razorpay_order_id :DataType.STRING
});

payment.sync();

export default payment;
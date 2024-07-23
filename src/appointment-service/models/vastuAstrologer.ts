import { sequelize } from "../../config/databaseConfig";
import { DataType } from "sequelize-typescript";

const vastuAstrogler = sequelize.define('vastuAstrogler', {
  name: DataType.STRING,
  image: DataType.STRING,
  exp: DataType.INTEGER,
  charge: DataType.INTEGER,
  industryExp: DataType.INTEGER,
  commercialExp: DataType.INTEGER,
  residentialExp: DataType.INTEGER,
  availability: {
    type: DataType.JSONB,
    allowNull: true
  }
});

vastuAstrogler.sync();

export default vastuAstrogler;
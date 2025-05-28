import { Sequelize } from "sequelize";
import dotenv from "dotenv";
<<<<<<< HEAD
dotenv.config();

const db = new Sequelize("rmjrentcar", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: "mysql",
  dialectOptions: {
    socketPath: `${process.env.DB_SOCKET_PATH}/${process.env.INSTANCE_CONNECTION_NAME}`,
  },
  logging: false, // opsional: matikan log SQL
});

export default db;
=======

dotenv.config();

const DB_Name = "rmjrentcar";
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const db = new Sequelize(DB_Name, DB_USERNAME, DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

export default db;
>>>>>>> f574b70bfa51830aa3afbbf1fb739e7e725c4b00

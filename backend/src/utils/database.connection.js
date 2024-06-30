import mongoose, { connection } from "mongoose";
import configs from "../configs";
import logger from "./logger";

let database;

const connect = async () => {
  const URL = configs.DB_CONNECTION_STRING;

  if (database) {
    return;
  }
  mongoose
    .connect(URL)
    .then((connection) => {
      database = connection;
      logger.info(`Database connected`);
    })
    .catch((error) => {
      logger.error(error.message);
    });
};

export default connect;

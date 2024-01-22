import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

import app from './src/app';

dotenv.config({ path: "./config.env" });

const DB = process.env.DB_CONNECTION_STRING!.replace(
  "<password>",
  process.env.DB_PW!
);

const options: ConnectOptions = {};

mongoose
  .connect(DB, options)
  .then((res) => console.log("DB connected successfully"))
  .catch((e) => console.log("DB connection error", e));

const server = app.listen(process.env.PORT);

// Unhandle Reject handling
process.on("unhandledRejection", (err: any) => {
  console.log(err.name, err.message);
  console.log("Unhandle rejection - server is shutting down...💥");
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED. Server is shutting down gracefully ...");
  server.close(() => {
    console.log("Process terminated !");
  });
});

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE_CONNECTION!.replace(
  "<password>",
  process.env.DATABASE_PASSWORD!
);

mongoose.connect(DB, {}).then((res) => console.log("DB connection successful"));

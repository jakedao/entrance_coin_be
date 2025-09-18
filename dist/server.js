"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config({ path: "./.env" });
const DB = process.env.DATABASE_CONNECTION.replace("<password>", process.env.DATABASE_PASSWORD);
mongoose_1.default.connect(DB, {}).then((res) => console.log("DB connection successful"));

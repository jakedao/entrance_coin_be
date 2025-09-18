import cors from "cors";
import express, { json } from "express";
import mongoose from "mongoose";

import { couponRoutes } from "./routes";

const COINS_API = "/api/v1/coins";
const COUPON_API = "api/v1/coupon";

const app = express();

// SERVICE USAGES
app.use(json());
app.use(cors());

// ROUTER - DECLARATION
app.use(COUPON_API, couponRoutes);

export default app;

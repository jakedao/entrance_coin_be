import cors from "cors";
import express, { json, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { couponRoutes, itemRoutes } from "./routes";

const app = express();

const port = process.env.PORT || 3000;

const ITEM_API = "/api/v1/items";
const COUPON_API = "/api/v1/coupon";

app.use(cors());

// Body request parser
app.use(express.json());

app.use(ITEM_API, itemRoutes);
app.use(COUPON_API, couponRoutes);

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

import cors from 'cors';
import express, { json } from 'express';
import mongoose from 'mongoose';

import { coinRouter } from './routes';

const COINS_API = "/api/v1/coins";

const app = express();

// SERVICE USAGES
app.use(json());
app.use(cors());

// ROUTER - DECLARATION
app.use(COINS_API, coinRouter);

export default app;

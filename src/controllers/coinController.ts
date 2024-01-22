import { NextFunction, Request, Response } from 'express';

import { CoinModel } from '../models';
import AppError from '../utils/appError';

const createCoin = async (req: Request, res: Response) => {
  try {
    const newCoins = req.body;
    const coinExisted = await CoinModel.findById(newCoins.id);

    // handle coin existed
    if (coinExisted) {
      return new AppError("Existed coin", 400);
    }

    const newDoc = await CoinModel.create(newCoins);

    res.status(201).json({
      status: "success",
      data: { data: newDoc },
    });
  } catch (e: any) {
    throw new Error(e);
  }
};

const getCoinList = async (req: Request, res: Response) => {
  try {
    const list = await CoinModel.find();
    res.status(200).json({
      data: list,
      length: list.length,
    });
  } catch (e: any) {
    throw new Error(e);
  }
};

const deleteCoin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedDocs = await CoinModel.findByIdAndDelete(req.params.id);
    if (!deletedDocs) {
      next(new AppError(`No document found with id: ${req.params.id}`, 404));
      return;
    }

    res.status(201).json({
      status: "success",
      message: "Document deleted successful",
    });
  } catch (e: any) {
    throw new Error(e);
  }
};

export { getCoinList, createCoin, deleteCoin };

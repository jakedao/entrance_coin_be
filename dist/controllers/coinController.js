"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoin = exports.createCoin = exports.getCoinList = void 0;
const models_1 = require("../models");
const appError_1 = __importDefault(require("../utils/appError"));
const createCoin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCoins = req.body;
        const coinExisted = yield models_1.CoinModel.findById(newCoins.id);
        // handle coin existed
        if (coinExisted) {
            return new appError_1.default("Existed coin", 400);
        }
        const newDoc = yield models_1.CoinModel.create(newCoins);
        res.status(201).json({
            status: "success",
            data: { data: newDoc },
        });
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.createCoin = createCoin;
const getCoinList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield models_1.CoinModel.find();
        res.status(200).json({
            data: list,
            length: list.length,
        });
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.getCoinList = getCoinList;
const deleteCoin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedDocs = yield models_1.CoinModel.findByIdAndDelete(req.params.id);
        if (!deletedDocs) {
            next(new appError_1.default(`No document found with id: ${req.params.id}`, 404));
            return;
        }
        res.status(201).json({
            status: "success",
            message: "Document deleted successful",
        });
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.deleteCoin = deleteCoin;

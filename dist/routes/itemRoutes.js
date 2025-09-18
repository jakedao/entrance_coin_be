"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/").get((req, res, next) => {
    res.status(200).json({
        status: "success",
        result: 0,
        data: [{ test: "" }],
    });
    next();
});
router.route("/").post((req, res, next) => {
    const body = req.body;
    // HANDLE APPENDING DATA
    res.status(201).json({
        status: "success",
        data: body,
    });
    next();
});
exports.default = router;

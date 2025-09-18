"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coinController_1 = require("../controllers/coinController");
const router = (0, express_1.Router)();
router.route("/").get(coinController_1.getCoinList).post(coinController_1.createCoin);
router.route("/:id").delete(coinController_1.deleteCoin);
exports.default = router;

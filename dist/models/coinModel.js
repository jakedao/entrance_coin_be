"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const linksSchema = new mongoose_1.Schema({
    homepage: {
        type: String,
    },
    github: {
        type: String,
    },
    facebook: {
        type: String,
    },
    twitter: {
        type: String,
    },
});
const coinSchema = new mongoose_1.Schema({
    id: {
        type: String,
        require: true,
    },
    name: { type: String, require: true },
    symbol: {
        type: String,
    },
    description: {
        type: String,
    },
    current_price: {
        type: Number,
    },
    links: linksSchema,
    image: {
        type: String,
        require: true,
    },
});
exports.default = (0, mongoose_1.model)("Coin", coinSchema);

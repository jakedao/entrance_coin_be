"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAttribute = exports.EStatus = void 0;
var EStatus;
(function (EStatus) {
    EStatus["AVAIL"] = "Available";
    EStatus["SOLD_OUT"] = "Sold out";
    EStatus["PENDING"] = "Pending";
    EStatus["RESERVED"] = "Reserved";
})(EStatus || (exports.EStatus = EStatus = {}));
var EAttribute;
(function (EAttribute) {
    EAttribute["DARK"] = "Dark";
    EAttribute["LIGHT"] = "Light";
    EAttribute["FIRE"] = "Fire";
    EAttribute["WATER"] = "Water";
    EAttribute["WIND"] = "Wind";
})(EAttribute || (exports.EAttribute = EAttribute = {}));

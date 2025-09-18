"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EServer = exports.EStatus = void 0;
var EStatus;
(function (EStatus) {
    EStatus["Active"] = "active";
    EStatus["Expired"] = "expired";
    EStatus["Used"] = "used";
})(EStatus || (exports.EStatus = EStatus = {}));
var EServer;
(function (EServer) {
    EServer["ASIA"] = "asia";
    EServer["GLOBAL"] = "global";
    EServer["EUROPE"] = "europe";
    EServer["KOREA"] = "korea";
    EServer["CHINA"] = "china";
    EServer["JAPAN"] = "japan";
})(EServer || (exports.EServer = EServer = {}));

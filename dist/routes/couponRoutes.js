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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios = require("axios");
const FormData = require("form-data");
const router = (0, express_1.Router)();
router.route("/").get((req, res, next) => {
    res.status(200).json({
        status: "success",
        result: 0,
        data: [{ test: "" }],
    });
    next();
});
router.route("/").post((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("checking request", req.body);
    const { code, hiveId, server, lang, country } = req.body;
    const data = new FormData();
    data.append("country", country);
    data.append("lang", lang);
    data.append("server", server);
    data.append("hiveid", hiveId);
    data.append("coupon", code);
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://event.withhive.com/ci/smon/evt_coupon/useCoupon",
        headers: Object.assign({ Accept: "application/json, text/javascript, */*; q=0.01", "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5,ko;q=0.4", Connection: "keep-alive", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", Origin: "https://event.withhive.com", Referer: "https://event.withhive.com/ci/smon/evt_coupon?fbclid=IwAR0pjyfYyYtL0k5syyi7AgzpbyjdlKpfsoV-T3oxKDafIyPhwIqxcjWfry8", "Sec-Fetch-Dest": "empty", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Site": "same-origin", "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36", "X-Requested-With": "XMLHttpRequest", "sec-ch-ua": '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"', "sec-ch-ua-mobile": "?0", "sec-ch-ua-platform": '"macOS"', Cookie: "_ga=GA1.1.124289012.1737539878; gdpr_section=true; language=vi; _ga_FWV2C4HMXW=GS2.1.s1758039716$o37$g1$t1758042354$j54$l0$h0" }, data.getHeaders()),
        data: data,
    };
    try {
        const response = yield axios.request(config);
        const data = response.data;
        if (data) {
            res.status(201).json({
                message: "success",
                data,
            });
        }
    }
    catch (e) {
        console.error(e);
    }
    next();
}));
exports.default = router;

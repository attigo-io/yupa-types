"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBitcoinRatesResponseSchema = void 0;
const zod_1 = require("zod");
exports.getBitcoinRatesResponseSchema = zod_1.z.object({
    bitcoin: zod_1.z.object({
        usd: zod_1.z.number(),
        vef: zod_1.z.number(),
        inr: zod_1.z.number(),
        php: zod_1.z.number(),
        pkr: zod_1.z.number(),
    }),
});

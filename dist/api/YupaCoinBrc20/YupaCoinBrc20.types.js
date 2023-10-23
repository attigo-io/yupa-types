"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetYupaCoinBalanceResponseSchema = exports.getYupaCoinBuyFromUsOrderBlocksResponseSchema = exports.yupaCoinBuyFromUsOrderBlockSchema = exports.buyFromUsBrc20PayLaterResponseSchema = void 0;
const zod_1 = require("zod");
exports.buyFromUsBrc20PayLaterResponseSchema = zod_1.z.object({
    orderId: zod_1.z.string(),
    paymentRequest: zod_1.z.string(),
    quantity: zod_1.z.number(),
});
exports.yupaCoinBuyFromUsOrderBlockSchema = zod_1.z.object({
    id: zod_1.z.string(),
    quantity: zod_1.z.number(),
    price: zod_1.z.number(),
});
exports.getYupaCoinBuyFromUsOrderBlocksResponseSchema = zod_1.z.object({
    orderBlocks: zod_1.z.array(exports.yupaCoinBuyFromUsOrderBlockSchema),
});
exports.GetYupaCoinBalanceResponseSchema = zod_1.z.object({
    balance: zod_1.z.object({
        balance: zod_1.z.number(),
        MBalace: zod_1.z.number(),
    }),
});

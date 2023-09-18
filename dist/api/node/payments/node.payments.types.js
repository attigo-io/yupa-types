"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodePaymentsHistoryResponseSchema = void 0;
const zod_1 = require("zod");
const getNodePaymentsHistoryQuerySchema = zod_1.z.object({
    invoicesToken: zod_1.z.string().nullable(),
    paymentsToken: zod_1.z.string().nullable(),
});
const getNodePaymentsHistorySchema = zod_1.z.object({
    query: getNodePaymentsHistoryQuerySchema,
});
exports.getNodePaymentsHistoryResponseSchema = zod_1.z.object({
    history: zod_1.z.array(zod_1.z.object({
        memo: zod_1.z.string(),
        amount: zod_1.z.number(),
        date: zod_1.z.string().or(zod_1.z.date()),
        fee: zod_1.z.number(),
        in: zod_1.z.boolean(),
        is_paid: zod_1.z.boolean(),
        is_expired: zod_1.z.boolean(),
    })),
    meta: zod_1.z.object({
        invoicesToken: zod_1.z.string().optional(),
        paymentsToken: zod_1.z.string().optional(),
    })
});

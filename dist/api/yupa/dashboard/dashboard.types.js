"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardPerWalletDataSchema = exports.allWalletsResumeSchema = void 0;
const zod_1 = require("zod");
const apiPaymentSchema = zod_1.z.object({
    checking_id: zod_1.z.string(),
    amount: zod_1.z.bigint().or(zod_1.z.number()),
    fee: zod_1.z.number(),
    wallet: zod_1.z.string(),
    pending: zod_1.z.boolean(),
    memo: zod_1.z.string().nullable(),
    time: zod_1.z.date().or(zod_1.z.string()),
    hash: zod_1.z.string().nullable(),
    preimage: zod_1.z.string().nullable(),
    bolt11: zod_1.z.string().nullable(),
    extra: zod_1.z.string().nullable(),
    webhook: zod_1.z.string().nullable(),
    webhook_status: zod_1.z.string().nullable(),
});
exports.allWalletsResumeSchema = zod_1.z.object({
    total: zod_1.z.number(),
    out: zod_1.z.number(),
    in: zod_1.z.number(),
});
exports.dashboardPerWalletDataSchema = zod_1.z.object({
    wallet: zod_1.z.string(),
    latest: zod_1.z.string(),
    incom: zod_1.z.number(),
    outcom: zod_1.z.number(),
});
const getDahboardSchema = zod_1.z.object({
    walletsData: zod_1.z.array(exports.dashboardPerWalletDataSchema),
    latestTransactions: zod_1.z.array(apiPaymentSchema),
    allWalletsResume: exports.allWalletsResumeSchema,
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const chanellBalanceSchema = zod_1.z.object({
    channel_balance: zod_1.z.number().optional(),
    channel_balance_mtokens: zod_1.z.string().optional(),
    inbound: zod_1.z.number().optional(),
    inbound_mtokens: zod_1.z.string().optional(),
    pending_balance: zod_1.z.number().optional(),
    pending_inbound: zod_1.z.number().optional(),
    unsettled_balance: zod_1.z.number().optional(),
    unsettled_balance_mtokens: zod_1.z.string().optional(),
});
const getNodeBalanceResponseSchema = zod_1.z.object({
    chaineBalance: zod_1.z.number().optional(),
    tottalBalance: zod_1.z.number(),
    chanellBalance: chanellBalanceSchema.optional(),
});
const getNodeOnChaineBallanceResponseSchema = zod_1.z.object({
    chaineBalance: zod_1.z.number(),
});
const getNodeChannelBalanceResponseSchema = zod_1.z.object({
    chanellBalance: chanellBalanceSchema.optional(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const walletSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    user: zod_1.z.string(),
    adminkey: zod_1.z.string(),
    inkey: zod_1.z.string(),
    balance_msat: zod_1.z.string().or(zod_1.z.number()).or(zod_1.z.bigint()),
    lightning_address: zod_1.z.string().nullable()
});
const getWalletResponseSchema = zod_1.z.object({
    wallet: walletSchema,
});
const getWalletsResponseSchema = zod_1.z.object({
    wallets: zod_1.z.array(walletSchema),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnChainTransactionsResponseSchema = exports.onChainTransactionSchema = exports.sendToOnChainResponseSchema = exports.bitcoinTransactionSchema = exports.CreateNodeOnChainAddresseSchema = exports.GetNodeOnChainAddresseSchema = exports.NodeOnChainAddresseSchema = void 0;
const zod_1 = require("zod");
exports.NodeOnChainAddresseSchema = zod_1.z.object({
    address: zod_1.z.string(),
    is_change: zod_1.z.boolean(),
    tokens: zod_1.z.number(),
});
exports.GetNodeOnChainAddresseSchema = zod_1.z.object({
    addresses: zod_1.z.array(exports.NodeOnChainAddresseSchema),
});
exports.CreateNodeOnChainAddresseSchema = zod_1.z.object({
    addresse: zod_1.z.string(),
});
exports.bitcoinTransactionSchema = zod_1.z.object({
    id: zod_1.z.string(),
    is_confirmed: zod_1.z.boolean(),
    tokens: zod_1.z.number(),
});
exports.sendToOnChainResponseSchema = zod_1.z.object({
    transaction: exports.bitcoinTransactionSchema,
});
exports.onChainTransactionSchema = zod_1.z.object({
    block_id: zod_1.z.string().optional(),
    confirmation_count: zod_1.z.number().optional(),
    confirmation_height: zod_1.z.number().optional(),
    created_at: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    fee: zod_1.z.number().optional(),
    id: zod_1.z.string(),
    inputs: zod_1.z.array(zod_1.z.object({
        is_local: zod_1.z.boolean(),
        transaction_id: zod_1.z.string(),
        transaction_vout: zod_1.z.number(),
    })),
    is_confirmed: zod_1.z.boolean(),
    is_outgoing: zod_1.z.boolean(),
    output_addresses: zod_1.z.array(zod_1.z.string()),
    tokens: zod_1.z.number(),
    transaction: zod_1.z.string().optional(),
});
exports.getOnChainTransactionsResponseSchema = zod_1.z.object({
    transactions: zod_1.z.array(exports.onChainTransactionSchema),
});

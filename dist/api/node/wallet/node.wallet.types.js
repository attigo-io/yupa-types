"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const nodeWalletInfoSchema = zod_1.z.object({
    active_channels_count: zod_1.z.number(),
    alias: zod_1.z.string(),
    chains: zod_1.z.array(zod_1.z.string()),
    color: zod_1.z.string(),
    current_block_hash: zod_1.z.string(),
    current_block_height: zod_1.z.number(),
    features: zod_1.z.array(zod_1.z.object({
        bit: zod_1.z.number(),
        is_known: zod_1.z.boolean(),
        is_required: zod_1.z.boolean(),
        type: zod_1.z.string(),
    })),
    is_synced_to_chain: zod_1.z.boolean(),
    latest_block_at: zod_1.z.string(),
    peers_count: zod_1.z.number(),
    pending_channels_count: zod_1.z.number(),
    public_key: zod_1.z.string(),
    version: zod_1.z.string(),
});
const getNodeWalletInfoResponseSchema = zod_1.z.object({
    walletInfo: nodeWalletInfoSchema,
});
const createNodeInvoiceSchema = zod_1.z.object({
    chain_address: zod_1.z.string().optional(),
    created_at: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    id: zod_1.z.string(),
    mtokens: zod_1.z.string().optional(),
    payment: zod_1.z.string().optional(),
    request: zod_1.z.string(),
    secret: zod_1.z.string(),
    tokens: zod_1.z.number().optional(),
});
const createNodeInvoiceResponseSchema = zod_1.z.object({
    invoice: createNodeInvoiceSchema,
});
const payInvoiceWithNodeDataSchema = zod_1.z.object({
    confirmed_at: zod_1.z.string(),
    fee: zod_1.z.number(),
    fee_mtokens: zod_1.z.string(),
    hops: zod_1.z.array(zod_1.z.object({
        channel: zod_1.z.string(),
        channel_capacity: zod_1.z.number(),
        fee: zod_1.z.number(),
        fee_mtokens: zod_1.z.string(),
        forward_mtokens: zod_1.z.string(),
        public_key: zod_1.z.string(),
        timeout: zod_1.z.number(),
    })),
    id: zod_1.z.string(),
    mtokens: zod_1.z.string(),
    paths: zod_1.z.array(zod_1.z.object({
        fee_mtokens: zod_1.z.string(),
        hops: zod_1.z.array(zod_1.z.object({
            channel: zod_1.z.string(),
            channel_capacity: zod_1.z.number(),
            fee: zod_1.z.number(),
            fee_mtokens: zod_1.z.string(),
            forward_mtokens: zod_1.z.string(),
            public_key: zod_1.z.string(),
            timeout: zod_1.z.number(),
        })),
        mtokens: zod_1.z.string(),
    })),
    safe_fee: zod_1.z.number(),
    safe_tokens: zod_1.z.number(),
    secret: zod_1.z.string(),
    timeout: zod_1.z.number(),
    tokens: zod_1.z.number(),
});
const payInvoiceWithNodeResponseSchmea = zod_1.z.object({
    payment: payInvoiceWithNodeDataSchema,
});

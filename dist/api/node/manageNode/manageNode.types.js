"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeStatusResponseSchema = exports.NodeStatusEnumSchema = void 0;
const zod_1 = require("zod");
const okayResponse = zod_1.z.object({
    ok: zod_1.z.string(),
});
const postAddNodeResponseSchema = okayResponse;
const getHasNodeResponseSchema = okayResponse;
const getNodeResultSchema = zod_1.z.object({
    alias: zod_1.z.string(),
    capacity: zod_1.z.number(),
    channel_count: zod_1.z.number(),
    channels: zod_1.z
        .array(zod_1.z.object({
        capacity: zod_1.z.number(),
        id: zod_1.z.string(),
        policies: zod_1.z.array(zod_1.z.object({
            base_fee_mtokens: zod_1.z.string().optional(),
            cltv_delta: zod_1.z.number().optional(),
            fee_rate: zod_1.z.number().optional(),
            is_disabled: zod_1.z.boolean().optional(),
            max_htlc_mtokens: zod_1.z.string().optional(),
            min_htlc_mtokens: zod_1.z.string().optional(),
            public_key: zod_1.z.string(),
            updated_at: zod_1.z.string().optional(),
        })),
        transaction_id: zod_1.z.string(),
        transaction_vout: zod_1.z.number(),
        updated_at: zod_1.z.string().optional(),
    }))
        .optional(),
    color: zod_1.z.string(),
    features: zod_1.z.array(zod_1.z.object({
        bit: zod_1.z.number(),
        is_known: zod_1.z.boolean(),
        is_required: zod_1.z.boolean(),
        type: zod_1.z.string().optional(),
    })),
    sockets: zod_1.z.array(zod_1.z.object({
        socket: zod_1.z.string(),
        type: zod_1.z.string(),
    })),
    updated_at: zod_1.z.string().optional(),
});
const getNodeInfoResponseSchema = zod_1.z.object({ node: getNodeResultSchema });
exports.NodeStatusEnumSchema = zod_1.z.enum([
    'online',
    'starting',
    'offline',
    'error',
]);
exports.getNodeStatusResponseSchema = zod_1.z.object({
    status: exports.NodeStatusEnumSchema,
});

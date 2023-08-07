"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoltCardTypeResponseShema = exports.getBoltCardStatsSchema = exports.getBoltCardHitsUserResponseSchema = exports.getBoltCardUserRouteResponse = exports.getBoltCardRefundsUserReponseSchema = exports.boltCardRefundSchema = exports.getBoltCardsUserRouteResponseSchema = exports.boltCardHitSchema = exports.createBoltCardResponseSchema = exports.boltCardSchema = exports.boltCardTypeSchema = void 0;
const zod_1 = require("zod");
const yupa_types_1 = require("../yupa/yupa.types");
exports.boltCardTypeSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    min_withdrawable: zod_1.z.number(),
    max_withdrawable: zod_1.z.number(),
    daily_limit: zod_1.z.number(),
    weekly_limit: zod_1.z.number(),
    monthly_limit: zod_1.z.number(),
});
exports.boltCardSchema = zod_1.z.object({
    id: zod_1.z.string(),
    wallet_id: zod_1.z.string().nullable(),
    card_name: zod_1.z.string(),
    card_type_id: zod_1.z.string(),
    uid: zod_1.z.string(),
    external_id: zod_1.z.string(),
    counter: zod_1.z.number(),
    enabled: zod_1.z.boolean(),
    min_withdrawable: zod_1.z.number(),
    max_withdrawable: zod_1.z.number(),
    daily_limit: zod_1.z.number(),
    weekly_limit: zod_1.z.number(),
    monthly_limit: zod_1.z.number(),
    k0: zod_1.z.string(),
    k1: zod_1.z.string(),
    k2: zod_1.z.string(),
    prev_k0: zod_1.z.string(),
    prev_k1: zod_1.z.string(),
    prev_k2: zod_1.z.string(),
    otp: zod_1.z.string(),
    created_at: zod_1.z.date(),
    card_type: exports.boltCardTypeSchema
});
exports.createBoltCardResponseSchema = zod_1.z.object({
    boltCard: exports.boltCardSchema,
});
exports.boltCardHitSchema = zod_1.z.object({
    id: zod_1.z.string(),
    card_id: zod_1.z.string(),
    ip: zod_1.z.string(),
    is_triggered: zod_1.z.boolean(),
    is_paid: zod_1.z.boolean(),
    user_agent: zod_1.z.string(),
    olc_ctr: zod_1.z.number(),
    new_ctr: zod_1.z.number(),
    amount: zod_1.z.bigint(),
    payment_id: zod_1.z.string().nullable(),
    created_at: zod_1.z.date(),
});
exports.getBoltCardsUserRouteResponseSchema = zod_1.z.object({
    cards: zod_1.z.array(exports.boltCardSchema),
});
exports.boltCardRefundSchema = zod_1.z.object({
    id: zod_1.z.string(),
    hit_id: zod_1.z.string(),
    refund_amount: zod_1.z.bigint(),
    payment_id: zod_1.z.string().nullable(),
    created_at: zod_1.z.date(),
});
exports.getBoltCardRefundsUserReponseSchema = zod_1.z.object({
    refunds: zod_1.z.array(exports.boltCardRefundSchema.extend({
        api_payment: yupa_types_1.yupaApiPaymentSchema.nullable(),
    })),
});
exports.getBoltCardUserRouteResponse = zod_1.z.object({
    card: exports.boltCardSchema,
});
exports.getBoltCardHitsUserResponseSchema = zod_1.z.object({
    hits: zod_1.z.array(exports.boltCardHitSchema.extend({
        api_payment: yupa_types_1.yupaApiPaymentSchema.nullable(),
    })),
});
exports.getBoltCardStatsSchema = zod_1.z.object({
    monthly: zod_1.z.object({
        sum: zod_1.z.number(),
        total: zod_1.z.number(),
    }),
    daily: zod_1.z.object({
        sum: zod_1.z.number(),
        total: zod_1.z.number(),
    }),
    weekly: zod_1.z.object({
        sum: zod_1.z.number(),
        total: zod_1.z.number(),
    }),
});
exports.getBoltCardTypeResponseShema = zod_1.z.object({
    type: exports.boltCardTypeSchema,
});

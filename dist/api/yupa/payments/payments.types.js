"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYupaInvoiceStatusResponseSchema = exports.payYupaInvoiceResponseSchema = exports.createYupaInvoiceResponseSchema = exports.getYupaPaymentsForWaleltResponseSchema = exports.yupaApiPaymentSchema = void 0;
const zod_1 = require("zod");
exports.yupaApiPaymentSchema = zod_1.z.object({
    checking_id: zod_1.z.string(),
    amount: zod_1.z.number().or(zod_1.z.string()).or(zod_1.z.bigint()),
    fee: zod_1.z.number(),
    yupa_fee: zod_1.z.number(),
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
    tpos_id: zod_1.z.string().nullable()
});
exports.getYupaPaymentsForWaleltResponseSchema = zod_1.z.object({
    payments: zod_1.z.array(exports.yupaApiPaymentSchema),
});
exports.createYupaInvoiceResponseSchema = zod_1.z.object({
    invoice: zod_1.z.object({
        payment_hash: zod_1.z.string().nullable(),
        payment_request: zod_1.z.string(),
        checking_id: zod_1.z.string().nullable(),
        lnurl_response: zod_1.z.boolean(),
    }),
});
exports.payYupaInvoiceResponseSchema = zod_1.z.object({
    invoice: zod_1.z.object({
        payment_hash: zod_1.z.string(),
    }),
});
exports.getYupaInvoiceStatusResponseSchema = zod_1.z.object({
    status: zod_1.z.object({
        paid: zod_1.z.boolean().optional(),
        pending: zod_1.z.boolean().optional(),
        failed: zod_1.z.boolean().optional(),
        failureReason: zod_1.z.string().optional(),
    }),
});

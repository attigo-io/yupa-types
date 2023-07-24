"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPosInvoiceResponseSchema = exports.getPosTodayInvoicesSchema = exports.createPosResponseSchema = exports.getTposResponseSchema = exports.getTpossResponseSchema = void 0;
const zod_1 = require("zod");
const payments_types_1 = require("../payments/payments.types");
const posSchema = zod_1.z.object({
    id: zod_1.z.string(),
    wallet: zod_1.z.string(),
    name: zod_1.z.string(),
    currency: zod_1.z.string(),
});
exports.getTpossResponseSchema = zod_1.z.object({
    poss: zod_1.z.array(posSchema),
});
exports.getTposResponseSchema = zod_1.z.object({
    pos: posSchema,
});
exports.createPosResponseSchema = exports.getTposResponseSchema;
exports.getPosTodayInvoicesSchema = zod_1.z.object({
    payments: zod_1.z.array(payments_types_1.yupaApiPaymentSchema),
});
exports.createPosInvoiceResponseSchema = zod_1.z.object({
    invoice: zod_1.z.object({
        payment_hash: zod_1.z.string().optional(),
        payment_request: zod_1.z.string(),
    }),
});

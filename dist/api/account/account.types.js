"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferralProgrammeResponseSchema = exports.getReferralCodeResponseBodySchema = exports.yupaReferralProgrammeSchema = exports.yupaReferralCodeSchema = void 0;
const zod_1 = require("zod");
exports.yupaReferralCodeSchema = zod_1.z.object({
    code: zod_1.z.string(),
    user_id: zod_1.z.string(),
    created_at: zod_1.z.date().nullable(),
    last_used: zod_1.z.date().nullable(),
});
exports.yupaReferralProgrammeSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    is_active: zod_1.z.boolean(),
    msat_amount: zod_1.z.number()
});
exports.getReferralCodeResponseBodySchema = zod_1.z.object({
    referralCode: exports.yupaReferralCodeSchema
});
exports.getReferralProgrammeResponseSchema = zod_1.z.object({
    referralProgramme: exports.yupaReferralProgrammeSchema
});

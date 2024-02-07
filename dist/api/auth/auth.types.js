"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRefreshTokenResponseSchema = void 0;
const zod_1 = require("zod");
const postLoginResponseSchema = zod_1.z.object({
    token: zod_1.z.string(),
    id: zod_1.z.string(),
    refreshToken: zod_1.z.string(),
    user: zod_1.z.object({
        id: zod_1.z.string(),
        email: zod_1.z.string(),
        role_id: zod_1.z.number(),
        name: zod_1.z.string()
    }),
});
exports.postRefreshTokenResponseSchema = zod_1.z.object({
    token: zod_1.z.string(),
    id: zod_1.z.string(),
    refreshToken: zod_1.z.string(),
});
const getMeResponseSchema = zod_1.z.object({
    user: zod_1.z.object({
        id: zod_1.z.string(),
        email: zod_1.z.string(),
        role_id: zod_1.z.number(),
        master_id: zod_1.z.number().optional().nullable(),
        phone_number: zod_1.z.string().optional().nullable(),
        country_code: zod_1.z.string().optional().nullable(),
        company_id: zod_1.z.number().optional().nullable(),
        is_authy_tfa: zod_1.z.boolean().optional().nullable(),
        name: zod_1.z.string(),
        is_email_verified: zod_1.z.boolean(),
        is_banned: zod_1.z.boolean(),
    }),
});
const postRegisterResponseSchema = zod_1.z.object({
    token: zod_1.z.string(),
    refreshToken: zod_1.z.string(),
    user: zod_1.z.object({
        id: zod_1.z.string(),
        email: zod_1.z.string().email(),
        role_id: zod_1.z.string(),
        name: zod_1.z.string()
    })
});

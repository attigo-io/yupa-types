"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const lnurlPLinkSchema = zod_1.z.object({
    id: zod_1.z.number(),
    wallet: zod_1.z.string(),
    description: zod_1.z.string(),
    min: zod_1.z.number(),
    served_meta: zod_1.z.number(),
    served_pr: zod_1.z.number(),
    webhook_url: zod_1.z.string().nullable(),
    success_text: zod_1.z.string().nullable(),
    success_url: zod_1.z.string().nullable(),
    currency: zod_1.z.string().nullable(),
    comment_chars: zod_1.z.number().nullable(),
    max: zod_1.z.number().nullable(),
    lnurl: zod_1.z.string()
});
const getLnurlPLinksResponseSchema = zod_1.z.object({
    links: zod_1.z.array(lnurlPLinkSchema),
});
const getLnurlPLinkResponseSchema = zod_1.z.object({
    link: lnurlPLinkSchema,
});
const postLnurlPLinkResponseSchema = getLnurlPLinkResponseSchema;
const putLnurlPLinkResponseSchema = getLnurlPLinkResponseSchema;

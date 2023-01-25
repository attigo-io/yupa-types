import { z } from "zod";
declare const lnurlPLinkSchema: z.ZodObject<{
    id: z.ZodNumber;
    wallet: z.ZodString;
    description: z.ZodString;
    min: z.ZodNumber;
    served_meta: z.ZodNumber;
    served_pr: z.ZodNumber;
    webhook_url: z.ZodNullable<z.ZodString>;
    success_text: z.ZodNullable<z.ZodString>;
    success_url: z.ZodNullable<z.ZodString>;
    currency: z.ZodNullable<z.ZodString>;
    comment_chars: z.ZodNullable<z.ZodNumber>;
    max: z.ZodNullable<z.ZodNumber>;
    lnurl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    description: string;
    wallet: string;
    currency: string | null;
    min: number;
    served_meta: number;
    served_pr: number;
    webhook_url: string | null;
    success_text: string | null;
    success_url: string | null;
    comment_chars: number | null;
    max: number | null;
    lnurl: string;
}, {
    id: number;
    description: string;
    wallet: string;
    currency: string | null;
    min: number;
    served_meta: number;
    served_pr: number;
    webhook_url: string | null;
    success_text: string | null;
    success_url: string | null;
    comment_chars: number | null;
    max: number | null;
    lnurl: string;
}>;
export type lnurlPLinkType = z.infer<typeof lnurlPLinkSchema>;
declare const getLnurlPLinksResponseSchema: z.ZodObject<{
    links: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        wallet: z.ZodString;
        description: z.ZodString;
        min: z.ZodNumber;
        served_meta: z.ZodNumber;
        served_pr: z.ZodNumber;
        webhook_url: z.ZodNullable<z.ZodString>;
        success_text: z.ZodNullable<z.ZodString>;
        success_url: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        comment_chars: z.ZodNullable<z.ZodNumber>;
        max: z.ZodNullable<z.ZodNumber>;
        lnurl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        description: string;
        wallet: string;
        currency: string | null;
        min: number;
        served_meta: number;
        served_pr: number;
        webhook_url: string | null;
        success_text: string | null;
        success_url: string | null;
        comment_chars: number | null;
        max: number | null;
        lnurl: string;
    }, {
        id: number;
        description: string;
        wallet: string;
        currency: string | null;
        min: number;
        served_meta: number;
        served_pr: number;
        webhook_url: string | null;
        success_text: string | null;
        success_url: string | null;
        comment_chars: number | null;
        max: number | null;
        lnurl: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    links: {
        id: number;
        description: string;
        wallet: string;
        currency: string | null;
        min: number;
        served_meta: number;
        served_pr: number;
        webhook_url: string | null;
        success_text: string | null;
        success_url: string | null;
        comment_chars: number | null;
        max: number | null;
        lnurl: string;
    }[];
}, {
    links: {
        id: number;
        description: string;
        wallet: string;
        currency: string | null;
        min: number;
        served_meta: number;
        served_pr: number;
        webhook_url: string | null;
        success_text: string | null;
        success_url: string | null;
        comment_chars: number | null;
        max: number | null;
        lnurl: string;
    }[];
}>;
export type getLnurlPLinksResponseType = z.infer<typeof getLnurlPLinksResponseSchema>;
declare const getLnurlPLinkResponseSchema: z.ZodObject<{
    link: z.ZodObject<{
        id: z.ZodNumber;
        wallet: z.ZodString;
        description: z.ZodString;
        min: z.ZodNumber;
        served_meta: z.ZodNumber;
        served_pr: z.ZodNumber;
        webhook_url: z.ZodNullable<z.ZodString>;
        success_text: z.ZodNullable<z.ZodString>;
        success_url: z.ZodNullable<z.ZodString>;
        currency: z.ZodNullable<z.ZodString>;
        comment_chars: z.ZodNullable<z.ZodNumber>;
        max: z.ZodNullable<z.ZodNumber>;
        lnurl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        description: string;
        wallet: string;
        currency: string | null;
        min: number;
        served_meta: number;
        served_pr: number;
        webhook_url: string | null;
        success_text: string | null;
        success_url: string | null;
        comment_chars: number | null;
        max: number | null;
        lnurl: string;
    }, {
        id: number;
        description: string;
        wallet: string;
        currency: string | null;
        min: number;
        served_meta: number;
        served_pr: number;
        webhook_url: string | null;
        success_text: string | null;
        success_url: string | null;
        comment_chars: number | null;
        max: number | null;
        lnurl: string;
    }>;
}, "strip", z.ZodTypeAny, {
    link: {
        id: number;
        description: string;
        wallet: string;
        currency: string | null;
        min: number;
        served_meta: number;
        served_pr: number;
        webhook_url: string | null;
        success_text: string | null;
        success_url: string | null;
        comment_chars: number | null;
        max: number | null;
        lnurl: string;
    };
}, {
    link: {
        id: number;
        description: string;
        wallet: string;
        currency: string | null;
        min: number;
        served_meta: number;
        served_pr: number;
        webhook_url: string | null;
        success_text: string | null;
        success_url: string | null;
        comment_chars: number | null;
        max: number | null;
        lnurl: string;
    };
}>;
export type getLnurlPLinkResponseType = z.infer<typeof getLnurlPLinkResponseSchema>;
export type postLnurlPLinkResponseType = getLnurlPLinkResponseType;
export type puttLnurlPLinkResponseType = getLnurlPLinkResponseType;
export {};
//# sourceMappingURL=lnurlp.crud.types.d.ts.map
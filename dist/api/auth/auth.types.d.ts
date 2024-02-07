import { z } from 'zod';
export interface createUserAttigoResponseType {
    data: {
        msg: string;
        token: string;
        id: string;
        user: {
            id: string;
            email: string;
            role_id: number;
        };
    };
}
declare const postLoginResponseSchema: z.ZodObject<{
    token: z.ZodString;
    id: z.ZodString;
    refreshToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        role_id: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        role_id: number;
        name: string;
    }, {
        id: string;
        email: string;
        role_id: number;
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    token: string;
    id: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        role_id: number;
        name: string;
    };
}, {
    token: string;
    id: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        role_id: number;
        name: string;
    };
}>;
export type postLoginResponseType = z.infer<typeof postLoginResponseSchema>;
export declare const postRefreshTokenResponseSchema: z.ZodObject<{
    token: z.ZodString;
    id: z.ZodString;
    refreshToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    id: string;
    refreshToken: string;
}, {
    token: string;
    id: string;
    refreshToken: string;
}>;
export type postRefreshTokenResponseType = z.infer<typeof postRefreshTokenResponseSchema>;
declare const getMeResponseSchema: z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        role_id: z.ZodNumber;
        master_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        phone_number: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        country_code: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        company_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        is_authy_tfa: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodString;
        is_email_verified: z.ZodBoolean;
        is_banned: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        role_id: number;
        name: string;
        is_email_verified: boolean;
        is_banned: boolean;
        master_id?: number | null | undefined;
        phone_number?: string | null | undefined;
        country_code?: string | null | undefined;
        company_id?: number | null | undefined;
        is_authy_tfa?: boolean | null | undefined;
    }, {
        id: string;
        email: string;
        role_id: number;
        name: string;
        is_email_verified: boolean;
        is_banned: boolean;
        master_id?: number | null | undefined;
        phone_number?: string | null | undefined;
        country_code?: string | null | undefined;
        company_id?: number | null | undefined;
        is_authy_tfa?: boolean | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    user: {
        id: string;
        email: string;
        role_id: number;
        name: string;
        is_email_verified: boolean;
        is_banned: boolean;
        master_id?: number | null | undefined;
        phone_number?: string | null | undefined;
        country_code?: string | null | undefined;
        company_id?: number | null | undefined;
        is_authy_tfa?: boolean | null | undefined;
    };
}, {
    user: {
        id: string;
        email: string;
        role_id: number;
        name: string;
        is_email_verified: boolean;
        is_banned: boolean;
        master_id?: number | null | undefined;
        phone_number?: string | null | undefined;
        country_code?: string | null | undefined;
        company_id?: number | null | undefined;
        is_authy_tfa?: boolean | null | undefined;
    };
}>;
export type getMeResponseType = z.infer<typeof getMeResponseSchema>;
declare const postRegisterResponseSchema: z.ZodObject<{
    token: z.ZodString;
    refreshToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        role_id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        role_id: string;
        name: string;
    }, {
        id: string;
        email: string;
        role_id: string;
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    token: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        role_id: string;
        name: string;
    };
}, {
    token: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        role_id: string;
        name: string;
    };
}>;
export type postRegisterResponseType = z.infer<typeof postRegisterResponseSchema>;
export {};
//# sourceMappingURL=auth.types.d.ts.map
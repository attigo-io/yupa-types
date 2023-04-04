import { z } from 'zod';
export declare const yupaReferralCodeSchema: z.ZodObject<{
    code: z.ZodString;
    user_id: z.ZodString;
    created_at: z.ZodNullable<z.ZodDate>;
    last_used: z.ZodNullable<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    code: string;
    created_at: Date | null;
    user_id: string;
    last_used: Date | null;
}, {
    code: string;
    created_at: Date | null;
    user_id: string;
    last_used: Date | null;
}>;
export declare const yupaReferralProgrammeSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    is_active: z.ZodBoolean;
    msat_amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    is_active: boolean;
    msat_amount: number;
}, {
    id: string;
    name: string;
    is_active: boolean;
    msat_amount: number;
}>;
export type YupaReferralTypeProgrammeType = z.infer<typeof yupaReferralProgrammeSchema>;
export type YupaReferralCodeType = z.infer<typeof yupaReferralCodeSchema>;
export declare const getReferralCodeResponseBodySchema: z.ZodObject<{
    referralCode: z.ZodObject<{
        code: z.ZodString;
        user_id: z.ZodString;
        created_at: z.ZodNullable<z.ZodDate>;
        last_used: z.ZodNullable<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        created_at: Date | null;
        user_id: string;
        last_used: Date | null;
    }, {
        code: string;
        created_at: Date | null;
        user_id: string;
        last_used: Date | null;
    }>;
}, "strip", z.ZodTypeAny, {
    referralCode: {
        code: string;
        created_at: Date | null;
        user_id: string;
        last_used: Date | null;
    };
}, {
    referralCode: {
        code: string;
        created_at: Date | null;
        user_id: string;
        last_used: Date | null;
    };
}>;
export type getReferralCodeResponseType = z.infer<typeof getReferralCodeResponseBodySchema>;
export declare const getReferralProgrammeResponseSchema: z.ZodObject<{
    referralProgramme: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        is_active: z.ZodBoolean;
        msat_amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        is_active: boolean;
        msat_amount: number;
    }, {
        id: string;
        name: string;
        is_active: boolean;
        msat_amount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    referralProgramme: {
        id: string;
        name: string;
        is_active: boolean;
        msat_amount: number;
    };
}, {
    referralProgramme: {
        id: string;
        name: string;
        is_active: boolean;
        msat_amount: number;
    };
}>;
export type getReferralProgrammeResponseType = z.infer<typeof getReferralProgrammeResponseSchema>;
//# sourceMappingURL=account.types.d.ts.map
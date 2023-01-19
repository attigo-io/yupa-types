import { z } from "zod";
declare const posSchema: z.ZodObject<{
    id: z.ZodString;
    wallet: z.ZodString;
    name: z.ZodString;
    currency: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    wallet: string;
    currency: string;
}, {
    id: string;
    name: string;
    wallet: string;
    currency: string;
}>;
export type posType = z.infer<typeof posSchema>;
declare const getTpossResponseSchema: z.ZodObject<{
    poss: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        wallet: z.ZodString;
        name: z.ZodString;
        currency: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        wallet: string;
        currency: string;
    }, {
        id: string;
        name: string;
        wallet: string;
        currency: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    poss: {
        id: string;
        name: string;
        wallet: string;
        currency: string;
    }[];
}, {
    poss: {
        id: string;
        name: string;
        wallet: string;
        currency: string;
    }[];
}>;
export type getTpossResponseType = z.infer<typeof getTpossResponseSchema>;
declare const getTposResponseSchema: z.ZodObject<{
    pos: z.ZodObject<{
        id: z.ZodString;
        wallet: z.ZodString;
        name: z.ZodString;
        currency: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        wallet: string;
        currency: string;
    }, {
        id: string;
        name: string;
        wallet: string;
        currency: string;
    }>;
}, "strip", z.ZodTypeAny, {
    pos: {
        id: string;
        name: string;
        wallet: string;
        currency: string;
    };
}, {
    pos: {
        id: string;
        name: string;
        wallet: string;
        currency: string;
    };
}>;
export type getTposResponseType = z.infer<typeof getTposResponseSchema>;
export type createPosResponseType = getTposResponseType;
declare const getPosTodayInvoicesSchema: z.ZodObject<{
    payments: z.ZodArray<z.ZodObject<{
        checking_id: z.ZodString;
        amount: z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodString]>, z.ZodBigInt]>;
        fee: z.ZodNumber;
        wallet: z.ZodString;
        pending: z.ZodBoolean;
        memo: z.ZodNullable<z.ZodString>;
        time: z.ZodUnion<[z.ZodDate, z.ZodString]>;
        hash: z.ZodNullable<z.ZodString>;
        preimage: z.ZodNullable<z.ZodString>;
        bolt11: z.ZodNullable<z.ZodString>;
        extra: z.ZodNullable<z.ZodString>;
        webhook: z.ZodNullable<z.ZodString>;
        webhook_status: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        fee: number;
        checking_id: string;
        amount: string | number | bigint;
        wallet: string;
        pending: boolean;
        memo: string | null;
        time: string | Date;
        hash: string | null;
        preimage: string | null;
        bolt11: string | null;
        extra: string | null;
        webhook: string | null;
        webhook_status: string | null;
    }, {
        fee: number;
        checking_id: string;
        amount: string | number | bigint;
        wallet: string;
        pending: boolean;
        memo: string | null;
        time: string | Date;
        hash: string | null;
        preimage: string | null;
        bolt11: string | null;
        extra: string | null;
        webhook: string | null;
        webhook_status: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    payments: {
        fee: number;
        checking_id: string;
        amount: string | number | bigint;
        wallet: string;
        pending: boolean;
        memo: string | null;
        time: string | Date;
        hash: string | null;
        preimage: string | null;
        bolt11: string | null;
        extra: string | null;
        webhook: string | null;
        webhook_status: string | null;
    }[];
}, {
    payments: {
        fee: number;
        checking_id: string;
        amount: string | number | bigint;
        wallet: string;
        pending: boolean;
        memo: string | null;
        time: string | Date;
        hash: string | null;
        preimage: string | null;
        bolt11: string | null;
        extra: string | null;
        webhook: string | null;
        webhook_status: string | null;
    }[];
}>;
export type getPosTodayInvoicesType = z.infer<typeof getPosTodayInvoicesSchema>;
export {};
//# sourceMappingURL=tpos.types.d.ts.map
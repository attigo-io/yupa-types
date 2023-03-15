import { z } from 'zod';
export type getDahboardPaymentsPerWalletFromDbType = {
    wallet: string;
    latest: string;
    incom: number;
    outcom: number;
};
export type getDashboardBalancePerWalletFromDbType = {
    wallet: string;
    balance: number;
};
export type DashboardTransaction = {
    checking_id: string;
    amount: bigint;
    fee: number;
    wallet: string;
    pending: boolean;
    memo: string | null;
    time: Date;
    hash: string | null;
    preimage: string | null;
    bolt11: string | null;
    extra: string | null;
    webhook: string | null;
    webhook_status: string | null;
};
export declare const allWalletsResumeSchema: z.ZodObject<{
    total: z.ZodNumber;
    out: z.ZodNumber;
    in: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    in: number;
    total: number;
    out: number;
}, {
    in: number;
    total: number;
    out: number;
}>;
export type dashboardAllWalletsResumeType = z.infer<typeof allWalletsResumeSchema>;
export declare const dashboardPerWalletDataSchema: z.ZodObject<{
    wallet: z.ZodString;
    latest: z.ZodString;
    incom: z.ZodNumber;
    outcom: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    wallet: string;
    latest: string;
    incom: number;
    outcom: number;
}, {
    wallet: string;
    latest: string;
    incom: number;
    outcom: number;
}>;
export type dashboardPerWalletDataType = z.infer<typeof dashboardPerWalletDataSchema>;
declare const getDahboardSchema: z.ZodObject<{
    walletsData: z.ZodArray<z.ZodObject<{
        wallet: z.ZodString;
        latest: z.ZodString;
        incom: z.ZodNumber;
        outcom: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        wallet: string;
        latest: string;
        incom: number;
        outcom: number;
    }, {
        wallet: string;
        latest: string;
        incom: number;
        outcom: number;
    }>, "many">;
    latestTransactions: z.ZodArray<z.ZodObject<{
        checking_id: z.ZodString;
        amount: z.ZodUnion<[z.ZodBigInt, z.ZodNumber]>;
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
        memo: string | null;
        amount: number | bigint;
        fee: number;
        checking_id: string;
        wallet: string;
        pending: boolean;
        time: string | Date;
        hash: string | null;
        preimage: string | null;
        bolt11: string | null;
        extra: string | null;
        webhook: string | null;
        webhook_status: string | null;
    }, {
        memo: string | null;
        amount: number | bigint;
        fee: number;
        checking_id: string;
        wallet: string;
        pending: boolean;
        time: string | Date;
        hash: string | null;
        preimage: string | null;
        bolt11: string | null;
        extra: string | null;
        webhook: string | null;
        webhook_status: string | null;
    }>, "many">;
    allWalletsResume: z.ZodObject<{
        total: z.ZodNumber;
        out: z.ZodNumber;
        in: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        in: number;
        total: number;
        out: number;
    }, {
        in: number;
        total: number;
        out: number;
    }>;
}, "strip", z.ZodTypeAny, {
    walletsData: {
        wallet: string;
        latest: string;
        incom: number;
        outcom: number;
    }[];
    latestTransactions: {
        memo: string | null;
        amount: number | bigint;
        fee: number;
        checking_id: string;
        wallet: string;
        pending: boolean;
        time: string | Date;
        hash: string | null;
        preimage: string | null;
        bolt11: string | null;
        extra: string | null;
        webhook: string | null;
        webhook_status: string | null;
    }[];
    allWalletsResume: {
        in: number;
        total: number;
        out: number;
    };
}, {
    walletsData: {
        wallet: string;
        latest: string;
        incom: number;
        outcom: number;
    }[];
    latestTransactions: {
        memo: string | null;
        amount: number | bigint;
        fee: number;
        checking_id: string;
        wallet: string;
        pending: boolean;
        time: string | Date;
        hash: string | null;
        preimage: string | null;
        bolt11: string | null;
        extra: string | null;
        webhook: string | null;
        webhook_status: string | null;
    }[];
    allWalletsResume: {
        in: number;
        total: number;
        out: number;
    };
}>;
export type getResponseDahboardType = z.infer<typeof getDahboardSchema>;
export {};
//# sourceMappingURL=dashboard.types.d.ts.map
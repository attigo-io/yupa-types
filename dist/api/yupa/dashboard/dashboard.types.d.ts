import { z } from "zod";
export type DashboardPaymentPerWallet = {
    wallet: string;
    latest: string;
    incom: number;
    outcom: number;
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
export declare const dashboardPaymentPerWalletSchema: z.ZodObject<{
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
export type dashboardPaymentPerWalletType = z.infer<typeof dashboardPaymentPerWalletSchema>;
declare const getDahboardSchema: z.ZodObject<{
    paymentsPerWallet: z.ZodArray<z.ZodObject<{
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
        fee: number;
        checking_id: string;
        amount: number | bigint;
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
        amount: number | bigint;
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
    paymentsPerWallet: {
        wallet: string;
        latest: string;
        incom: number;
        outcom: number;
    }[];
    latestTransactions: {
        fee: number;
        checking_id: string;
        amount: number | bigint;
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
    paymentsPerWallet: {
        wallet: string;
        latest: string;
        incom: number;
        outcom: number;
    }[];
    latestTransactions: {
        fee: number;
        checking_id: string;
        amount: number | bigint;
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
export type getResponseDahboardType = z.infer<typeof getDahboardSchema>;
export {};
//# sourceMappingURL=dashboard.types.d.ts.map
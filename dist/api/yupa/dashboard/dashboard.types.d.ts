export type DashboardPaymentPerWallet = {
    wallet: string;
    latest: string;
    incom: number;
    outcom: number;
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
//# sourceMappingURL=dashboard.types.d.ts.map
import { z } from 'zod';
export declare const yupaApiPaymentSchema: z.ZodObject<{
    checking_id: z.ZodString;
    amount: z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodString]>, z.ZodBigInt]>;
    fee: z.ZodNumber;
    yupa_fee: z.ZodNumber;
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
    tpos_id: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    memo: string | null;
    amount: string | number | bigint;
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
    yupa_fee: number;
    tpos_id: string | null;
}, {
    memo: string | null;
    amount: string | number | bigint;
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
    yupa_fee: number;
    tpos_id: string | null;
}>;
export declare const getYupaPaymentsForWaleltResponseSchema: z.ZodObject<{
    payments: z.ZodArray<z.ZodObject<{
        checking_id: z.ZodString;
        amount: z.ZodUnion<[z.ZodUnion<[z.ZodNumber, z.ZodString]>, z.ZodBigInt]>;
        fee: z.ZodNumber;
        yupa_fee: z.ZodNumber;
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
        tpos_id: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        memo: string | null;
        amount: string | number | bigint;
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
        yupa_fee: number;
        tpos_id: string | null;
    }, {
        memo: string | null;
        amount: string | number | bigint;
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
        yupa_fee: number;
        tpos_id: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    payments: {
        memo: string | null;
        amount: string | number | bigint;
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
        yupa_fee: number;
        tpos_id: string | null;
    }[];
}, {
    payments: {
        memo: string | null;
        amount: string | number | bigint;
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
        yupa_fee: number;
        tpos_id: string | null;
    }[];
}>;
export type getYupaApiPaymentsForWaleltResponseType = z.infer<typeof getYupaPaymentsForWaleltResponseSchema>;
export declare const createYupaInvoiceResponseSchema: z.ZodObject<{
    invoice: z.ZodObject<{
        payment_hash: z.ZodNullable<z.ZodString>;
        payment_request: z.ZodString;
        checking_id: z.ZodNullable<z.ZodString>;
        lnurl_response: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        checking_id: string | null;
        payment_hash: string | null;
        payment_request: string;
        lnurl_response: boolean;
    }, {
        checking_id: string | null;
        payment_hash: string | null;
        payment_request: string;
        lnurl_response: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    invoice: {
        checking_id: string | null;
        payment_hash: string | null;
        payment_request: string;
        lnurl_response: boolean;
    };
}, {
    invoice: {
        checking_id: string | null;
        payment_hash: string | null;
        payment_request: string;
        lnurl_response: boolean;
    };
}>;
export type createYupaInvoiceResponseType = z.infer<typeof createYupaInvoiceResponseSchema>;
export declare const payYupaInvoiceResponseSchema: z.ZodObject<{
    invoice: z.ZodObject<{
        payment_hash: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        payment_hash: string;
    }, {
        payment_hash: string;
    }>;
}, "strip", z.ZodTypeAny, {
    invoice: {
        payment_hash: string;
    };
}, {
    invoice: {
        payment_hash: string;
    };
}>;
export type payYupaInvoiceResponseType = z.infer<typeof payYupaInvoiceResponseSchema>;
export declare const getYupaInvoiceStatusResponseSchema: z.ZodObject<{
    status: z.ZodObject<{
        paid: z.ZodOptional<z.ZodBoolean>;
        pending: z.ZodOptional<z.ZodBoolean>;
        failed: z.ZodOptional<z.ZodBoolean>;
        failureReason: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        pending?: boolean | undefined;
        paid?: boolean | undefined;
        failed?: boolean | undefined;
        failureReason?: string | undefined;
    }, {
        pending?: boolean | undefined;
        paid?: boolean | undefined;
        failed?: boolean | undefined;
        failureReason?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    status: {
        pending?: boolean | undefined;
        paid?: boolean | undefined;
        failed?: boolean | undefined;
        failureReason?: string | undefined;
    };
}, {
    status: {
        pending?: boolean | undefined;
        paid?: boolean | undefined;
        failed?: boolean | undefined;
        failureReason?: string | undefined;
    };
}>;
export type getYupaInvoiceStatusResponseType = z.infer<typeof getYupaInvoiceStatusResponseSchema>;
//# sourceMappingURL=payments.types.d.ts.map
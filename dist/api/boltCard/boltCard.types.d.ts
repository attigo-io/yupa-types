import { z } from 'zod';
export declare const boltCardTypeSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    min_withdrawable: z.ZodNumber;
    max_withdrawable: z.ZodNumber;
    daily_limit: z.ZodNumber;
    weekly_limit: z.ZodNumber;
    monthly_limit: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    min_withdrawable: number;
    max_withdrawable: number;
    daily_limit: number;
    weekly_limit: number;
    monthly_limit: number;
}, {
    id: string;
    name: string;
    min_withdrawable: number;
    max_withdrawable: number;
    daily_limit: number;
    weekly_limit: number;
    monthly_limit: number;
}>;
export type BoltCardTypeType = z.infer<typeof boltCardTypeSchema>;
export declare const boltCardSchema: z.ZodObject<{
    id: z.ZodString;
    wallet_id: z.ZodNullable<z.ZodString>;
    card_name: z.ZodString;
    card_type_id: z.ZodString;
    uid: z.ZodString;
    external_id: z.ZodString;
    counter: z.ZodNumber;
    enabled: z.ZodBoolean;
    min_withdrawable: z.ZodNumber;
    max_withdrawable: z.ZodNumber;
    daily_limit: z.ZodNumber;
    weekly_limit: z.ZodNumber;
    monthly_limit: z.ZodNumber;
    k0: z.ZodString;
    k1: z.ZodString;
    k2: z.ZodString;
    prev_k0: z.ZodString;
    prev_k1: z.ZodString;
    prev_k2: z.ZodString;
    otp: z.ZodString;
    created_at: z.ZodDate;
    card_type: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        min_withdrawable: z.ZodNumber;
        max_withdrawable: z.ZodNumber;
        daily_limit: z.ZodNumber;
        weekly_limit: z.ZodNumber;
        monthly_limit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
    }, {
        id: string;
        name: string;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    created_at: Date;
    min_withdrawable: number;
    max_withdrawable: number;
    daily_limit: number;
    weekly_limit: number;
    monthly_limit: number;
    wallet_id: string | null;
    card_name: string;
    card_type_id: string;
    uid: string;
    external_id: string;
    counter: number;
    enabled: boolean;
    k0: string;
    k1: string;
    k2: string;
    prev_k0: string;
    prev_k1: string;
    prev_k2: string;
    otp: string;
    card_type: {
        id: string;
        name: string;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
    };
}, {
    id: string;
    created_at: Date;
    min_withdrawable: number;
    max_withdrawable: number;
    daily_limit: number;
    weekly_limit: number;
    monthly_limit: number;
    wallet_id: string | null;
    card_name: string;
    card_type_id: string;
    uid: string;
    external_id: string;
    counter: number;
    enabled: boolean;
    k0: string;
    k1: string;
    k2: string;
    prev_k0: string;
    prev_k1: string;
    prev_k2: string;
    otp: string;
    card_type: {
        id: string;
        name: string;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
    };
}>;
export type BoltCardType = z.infer<typeof boltCardSchema>;
export declare const createBoltCardResponseSchema: z.ZodObject<{
    boltCard: z.ZodObject<{
        id: z.ZodString;
        wallet_id: z.ZodNullable<z.ZodString>;
        card_name: z.ZodString;
        card_type_id: z.ZodString;
        uid: z.ZodString;
        external_id: z.ZodString;
        counter: z.ZodNumber;
        enabled: z.ZodBoolean;
        min_withdrawable: z.ZodNumber;
        max_withdrawable: z.ZodNumber;
        daily_limit: z.ZodNumber;
        weekly_limit: z.ZodNumber;
        monthly_limit: z.ZodNumber;
        k0: z.ZodString;
        k1: z.ZodString;
        k2: z.ZodString;
        prev_k0: z.ZodString;
        prev_k1: z.ZodString;
        prev_k2: z.ZodString;
        otp: z.ZodString;
        created_at: z.ZodDate;
        card_type: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            min_withdrawable: z.ZodNumber;
            max_withdrawable: z.ZodNumber;
            daily_limit: z.ZodNumber;
            weekly_limit: z.ZodNumber;
            monthly_limit: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        }, {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    }, {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    boltCard: {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    };
}, {
    boltCard: {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    };
}>;
export type CreateBoltCardResponseType = z.infer<typeof createBoltCardResponseSchema>;
export declare const boltCardHitSchema: z.ZodObject<{
    id: z.ZodString;
    card_id: z.ZodString;
    ip: z.ZodString;
    is_triggered: z.ZodBoolean;
    is_paid: z.ZodBoolean;
    user_agent: z.ZodString;
    olc_ctr: z.ZodNumber;
    new_ctr: z.ZodNumber;
    amount: z.ZodBigInt;
    payment_id: z.ZodNullable<z.ZodString>;
    created_at: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    amount: bigint;
    is_paid: boolean;
    created_at: Date;
    card_id: string;
    ip: string;
    is_triggered: boolean;
    user_agent: string;
    olc_ctr: number;
    new_ctr: number;
    payment_id: string | null;
}, {
    id: string;
    amount: bigint;
    is_paid: boolean;
    created_at: Date;
    card_id: string;
    ip: string;
    is_triggered: boolean;
    user_agent: string;
    olc_ctr: number;
    new_ctr: number;
    payment_id: string | null;
}>;
export declare const getBoltCardsUserRouteResponseSchema: z.ZodObject<{
    cards: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        wallet_id: z.ZodNullable<z.ZodString>;
        card_name: z.ZodString;
        card_type_id: z.ZodString;
        uid: z.ZodString;
        external_id: z.ZodString;
        counter: z.ZodNumber;
        enabled: z.ZodBoolean;
        min_withdrawable: z.ZodNumber;
        max_withdrawable: z.ZodNumber;
        daily_limit: z.ZodNumber;
        weekly_limit: z.ZodNumber;
        monthly_limit: z.ZodNumber;
        k0: z.ZodString;
        k1: z.ZodString;
        k2: z.ZodString;
        prev_k0: z.ZodString;
        prev_k1: z.ZodString;
        prev_k2: z.ZodString;
        otp: z.ZodString;
        created_at: z.ZodDate;
        card_type: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            min_withdrawable: z.ZodNumber;
            max_withdrawable: z.ZodNumber;
            daily_limit: z.ZodNumber;
            weekly_limit: z.ZodNumber;
            monthly_limit: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        }, {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    }, {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    cards: {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    }[];
}, {
    cards: {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    }[];
}>;
export declare const boltCardRefundSchema: z.ZodObject<{
    id: z.ZodString;
    hit_id: z.ZodString;
    refund_amount: z.ZodBigInt;
    payment_id: z.ZodNullable<z.ZodString>;
    created_at: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    created_at: Date;
    payment_id: string | null;
    hit_id: string;
    refund_amount: bigint;
}, {
    id: string;
    created_at: Date;
    payment_id: string | null;
    hit_id: string;
    refund_amount: bigint;
}>;
export type boltCardRefundType = z.infer<typeof boltCardRefundSchema>;
export declare const getBoltCardRefundsUserReponseSchema: z.ZodObject<{
    refunds: z.ZodArray<z.ZodObject<z.extendShape<{
        id: z.ZodString;
        hit_id: z.ZodString;
        refund_amount: z.ZodBigInt;
        payment_id: z.ZodNullable<z.ZodString>;
        created_at: z.ZodDate;
    }, {
        api_payment: z.ZodNullable<z.ZodObject<{
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
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        created_at: Date;
        payment_id: string | null;
        hit_id: string;
        refund_amount: bigint;
        api_payment: {
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
        } | null;
    }, {
        id: string;
        created_at: Date;
        payment_id: string | null;
        hit_id: string;
        refund_amount: bigint;
        api_payment: {
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
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    refunds: {
        id: string;
        created_at: Date;
        payment_id: string | null;
        hit_id: string;
        refund_amount: bigint;
        api_payment: {
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
        } | null;
    }[];
}, {
    refunds: {
        id: string;
        created_at: Date;
        payment_id: string | null;
        hit_id: string;
        refund_amount: bigint;
        api_payment: {
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
        } | null;
    }[];
}>;
export type getBoltCardRefundsUserReponseType = z.infer<typeof getBoltCardRefundsUserReponseSchema>;
export type getBoltCardsUserRouteResponseType = z.infer<typeof getBoltCardsUserRouteResponseSchema>;
export declare const getBoltCardUserRouteResponse: z.ZodObject<{
    card: z.ZodObject<{
        id: z.ZodString;
        wallet_id: z.ZodNullable<z.ZodString>;
        card_name: z.ZodString;
        card_type_id: z.ZodString;
        uid: z.ZodString;
        external_id: z.ZodString;
        counter: z.ZodNumber;
        enabled: z.ZodBoolean;
        min_withdrawable: z.ZodNumber;
        max_withdrawable: z.ZodNumber;
        daily_limit: z.ZodNumber;
        weekly_limit: z.ZodNumber;
        monthly_limit: z.ZodNumber;
        k0: z.ZodString;
        k1: z.ZodString;
        k2: z.ZodString;
        prev_k0: z.ZodString;
        prev_k1: z.ZodString;
        prev_k2: z.ZodString;
        otp: z.ZodString;
        created_at: z.ZodDate;
        card_type: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            min_withdrawable: z.ZodNumber;
            max_withdrawable: z.ZodNumber;
            daily_limit: z.ZodNumber;
            weekly_limit: z.ZodNumber;
            monthly_limit: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        }, {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    }, {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    card: {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    };
}, {
    card: {
        id: string;
        created_at: Date;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
        wallet_id: string | null;
        card_name: string;
        card_type_id: string;
        uid: string;
        external_id: string;
        counter: number;
        enabled: boolean;
        k0: string;
        k1: string;
        k2: string;
        prev_k0: string;
        prev_k1: string;
        prev_k2: string;
        otp: string;
        card_type: {
            id: string;
            name: string;
            min_withdrawable: number;
            max_withdrawable: number;
            daily_limit: number;
            weekly_limit: number;
            monthly_limit: number;
        };
    };
}>;
export type getBoltCardUserRouteResponseType = z.infer<typeof getBoltCardUserRouteResponse>;
export declare const getBoltCardHitsUserResponseSchema: z.ZodObject<{
    hits: z.ZodArray<z.ZodObject<z.extendShape<{
        id: z.ZodString;
        card_id: z.ZodString;
        ip: z.ZodString;
        is_triggered: z.ZodBoolean;
        is_paid: z.ZodBoolean;
        user_agent: z.ZodString;
        olc_ctr: z.ZodNumber;
        new_ctr: z.ZodNumber;
        amount: z.ZodBigInt;
        payment_id: z.ZodNullable<z.ZodString>;
        created_at: z.ZodDate;
    }, {
        api_payment: z.ZodNullable<z.ZodObject<{
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
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        amount: bigint;
        is_paid: boolean;
        created_at: Date;
        card_id: string;
        ip: string;
        is_triggered: boolean;
        user_agent: string;
        olc_ctr: number;
        new_ctr: number;
        payment_id: string | null;
        api_payment: {
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
        } | null;
    }, {
        id: string;
        amount: bigint;
        is_paid: boolean;
        created_at: Date;
        card_id: string;
        ip: string;
        is_triggered: boolean;
        user_agent: string;
        olc_ctr: number;
        new_ctr: number;
        payment_id: string | null;
        api_payment: {
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
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    hits: {
        id: string;
        amount: bigint;
        is_paid: boolean;
        created_at: Date;
        card_id: string;
        ip: string;
        is_triggered: boolean;
        user_agent: string;
        olc_ctr: number;
        new_ctr: number;
        payment_id: string | null;
        api_payment: {
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
        } | null;
    }[];
}, {
    hits: {
        id: string;
        amount: bigint;
        is_paid: boolean;
        created_at: Date;
        card_id: string;
        ip: string;
        is_triggered: boolean;
        user_agent: string;
        olc_ctr: number;
        new_ctr: number;
        payment_id: string | null;
        api_payment: {
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
        } | null;
    }[];
}>;
export type getBoltCardHitsResponseType = z.infer<typeof getBoltCardHitsUserResponseSchema>;
export declare const getBoltCardStatsSchema: z.ZodObject<{
    monthly: z.ZodObject<{
        sum: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total: number;
        sum: number;
    }, {
        total: number;
        sum: number;
    }>;
    daily: z.ZodObject<{
        sum: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total: number;
        sum: number;
    }, {
        total: number;
        sum: number;
    }>;
    weekly: z.ZodObject<{
        sum: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total: number;
        sum: number;
    }, {
        total: number;
        sum: number;
    }>;
}, "strip", z.ZodTypeAny, {
    monthly: {
        total: number;
        sum: number;
    };
    daily: {
        total: number;
        sum: number;
    };
    weekly: {
        total: number;
        sum: number;
    };
}, {
    monthly: {
        total: number;
        sum: number;
    };
    daily: {
        total: number;
        sum: number;
    };
    weekly: {
        total: number;
        sum: number;
    };
}>;
export type getBoltCardStatsResponseType = z.infer<typeof getBoltCardStatsSchema>;
export declare const getBoltCardTypeResponseShema: z.ZodObject<{
    type: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        min_withdrawable: z.ZodNumber;
        max_withdrawable: z.ZodNumber;
        daily_limit: z.ZodNumber;
        weekly_limit: z.ZodNumber;
        monthly_limit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
    }, {
        id: string;
        name: string;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: {
        id: string;
        name: string;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
    };
}, {
    type: {
        id: string;
        name: string;
        min_withdrawable: number;
        max_withdrawable: number;
        daily_limit: number;
        weekly_limit: number;
        monthly_limit: number;
    };
}>;
export type getBoltCardTypeResponseType = z.infer<typeof getBoltCardTypeResponseShema>;
//# sourceMappingURL=boltCard.types.d.ts.map
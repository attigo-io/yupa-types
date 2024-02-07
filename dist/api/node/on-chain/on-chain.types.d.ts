import { z } from 'zod';
export declare const NodeOnChainAddresseSchema: z.ZodObject<{
    address: z.ZodString;
    is_change: z.ZodBoolean;
    tokens: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tokens: number;
    address: string;
    is_change: boolean;
}, {
    tokens: number;
    address: string;
    is_change: boolean;
}>;
export type NodeOnChainAddresseType = z.infer<typeof NodeOnChainAddresseSchema>;
export declare const GetNodeOnChainAddresseSchema: z.ZodObject<{
    addresses: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        is_change: z.ZodBoolean;
        tokens: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tokens: number;
        address: string;
        is_change: boolean;
    }, {
        tokens: number;
        address: string;
        is_change: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    addresses: {
        tokens: number;
        address: string;
        is_change: boolean;
    }[];
}, {
    addresses: {
        tokens: number;
        address: string;
        is_change: boolean;
    }[];
}>;
export type GetNodeOnChainAddresseType = z.infer<typeof GetNodeOnChainAddresseSchema>;
export declare const CreateNodeOnChainAddresseSchema: z.ZodObject<{
    addresse: z.ZodString;
}, "strip", z.ZodTypeAny, {
    addresse: string;
}, {
    addresse: string;
}>;
export type CreateNodeOnChainAddresseType = z.infer<typeof CreateNodeOnChainAddresseSchema>;
export declare const bitcoinTransactionSchema: z.ZodObject<{
    id: z.ZodString;
    is_confirmed: z.ZodBoolean;
    tokens: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    tokens: number;
    is_confirmed: boolean;
}, {
    id: string;
    tokens: number;
    is_confirmed: boolean;
}>;
export type BitcoinTransactionType = z.infer<typeof bitcoinTransactionSchema>;
export declare const sendToOnChainResponseSchema: z.ZodObject<{
    transaction: z.ZodObject<{
        id: z.ZodString;
        is_confirmed: z.ZodBoolean;
        tokens: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        tokens: number;
        is_confirmed: boolean;
    }, {
        id: string;
        tokens: number;
        is_confirmed: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    transaction: {
        id: string;
        tokens: number;
        is_confirmed: boolean;
    };
}, {
    transaction: {
        id: string;
        tokens: number;
        is_confirmed: boolean;
    };
}>;
export type sendToOnChainResponseType = z.infer<typeof sendToOnChainResponseSchema>;
export declare const onChainTransactionSchema: z.ZodObject<{
    block_id: z.ZodOptional<z.ZodString>;
    confirmation_count: z.ZodOptional<z.ZodNumber>;
    confirmation_height: z.ZodOptional<z.ZodNumber>;
    created_at: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    fee: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    inputs: z.ZodArray<z.ZodObject<{
        is_local: z.ZodBoolean;
        transaction_id: z.ZodString;
        transaction_vout: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        transaction_id: string;
        transaction_vout: number;
        is_local: boolean;
    }, {
        transaction_id: string;
        transaction_vout: number;
        is_local: boolean;
    }>, "many">;
    is_confirmed: z.ZodBoolean;
    is_outgoing: z.ZodBoolean;
    output_addresses: z.ZodArray<z.ZodString, "many">;
    tokens: z.ZodNumber;
    transaction: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    created_at: string;
    tokens: number;
    is_confirmed: boolean;
    inputs: {
        transaction_id: string;
        transaction_vout: number;
        is_local: boolean;
    }[];
    is_outgoing: boolean;
    output_addresses: string[];
    block_id?: string | undefined;
    confirmation_count?: number | undefined;
    confirmation_height?: number | undefined;
    description?: string | undefined;
    fee?: number | undefined;
    transaction?: string | undefined;
}, {
    id: string;
    created_at: string;
    tokens: number;
    is_confirmed: boolean;
    inputs: {
        transaction_id: string;
        transaction_vout: number;
        is_local: boolean;
    }[];
    is_outgoing: boolean;
    output_addresses: string[];
    block_id?: string | undefined;
    confirmation_count?: number | undefined;
    confirmation_height?: number | undefined;
    description?: string | undefined;
    fee?: number | undefined;
    transaction?: string | undefined;
}>;
export type OnChainTransactionsype = z.infer<typeof onChainTransactionSchema>;
export declare const getOnChainTransactionsResponseSchema: z.ZodObject<{
    transactions: z.ZodArray<z.ZodObject<{
        block_id: z.ZodOptional<z.ZodString>;
        confirmation_count: z.ZodOptional<z.ZodNumber>;
        confirmation_height: z.ZodOptional<z.ZodNumber>;
        created_at: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        fee: z.ZodOptional<z.ZodNumber>;
        id: z.ZodString;
        inputs: z.ZodArray<z.ZodObject<{
            is_local: z.ZodBoolean;
            transaction_id: z.ZodString;
            transaction_vout: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            transaction_id: string;
            transaction_vout: number;
            is_local: boolean;
        }, {
            transaction_id: string;
            transaction_vout: number;
            is_local: boolean;
        }>, "many">;
        is_confirmed: z.ZodBoolean;
        is_outgoing: z.ZodBoolean;
        output_addresses: z.ZodArray<z.ZodString, "many">;
        tokens: z.ZodNumber;
        transaction: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        created_at: string;
        tokens: number;
        is_confirmed: boolean;
        inputs: {
            transaction_id: string;
            transaction_vout: number;
            is_local: boolean;
        }[];
        is_outgoing: boolean;
        output_addresses: string[];
        block_id?: string | undefined;
        confirmation_count?: number | undefined;
        confirmation_height?: number | undefined;
        description?: string | undefined;
        fee?: number | undefined;
        transaction?: string | undefined;
    }, {
        id: string;
        created_at: string;
        tokens: number;
        is_confirmed: boolean;
        inputs: {
            transaction_id: string;
            transaction_vout: number;
            is_local: boolean;
        }[];
        is_outgoing: boolean;
        output_addresses: string[];
        block_id?: string | undefined;
        confirmation_count?: number | undefined;
        confirmation_height?: number | undefined;
        description?: string | undefined;
        fee?: number | undefined;
        transaction?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    transactions: {
        id: string;
        created_at: string;
        tokens: number;
        is_confirmed: boolean;
        inputs: {
            transaction_id: string;
            transaction_vout: number;
            is_local: boolean;
        }[];
        is_outgoing: boolean;
        output_addresses: string[];
        block_id?: string | undefined;
        confirmation_count?: number | undefined;
        confirmation_height?: number | undefined;
        description?: string | undefined;
        fee?: number | undefined;
        transaction?: string | undefined;
    }[];
}, {
    transactions: {
        id: string;
        created_at: string;
        tokens: number;
        is_confirmed: boolean;
        inputs: {
            transaction_id: string;
            transaction_vout: number;
            is_local: boolean;
        }[];
        is_outgoing: boolean;
        output_addresses: string[];
        block_id?: string | undefined;
        confirmation_count?: number | undefined;
        confirmation_height?: number | undefined;
        description?: string | undefined;
        fee?: number | undefined;
        transaction?: string | undefined;
    }[];
}>;
export type GetOnChainTransactionsResponseType = z.infer<typeof getOnChainTransactionsResponseSchema>;
//# sourceMappingURL=on-chain.types.d.ts.map
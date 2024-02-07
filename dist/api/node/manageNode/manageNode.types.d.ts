import { z } from 'zod';
declare const postAddNodeResponseSchema: z.ZodObject<{
    ok: z.ZodString;
}, "strip", z.ZodTypeAny, {
    ok: string;
}, {
    ok: string;
}>;
export type postAddNodeResponseType = z.infer<typeof postAddNodeResponseSchema>;
declare const getHasNodeResponseSchema: z.ZodObject<{
    ok: z.ZodString;
}, "strip", z.ZodTypeAny, {
    ok: string;
}, {
    ok: string;
}>;
export type getHasNodeResponseType = z.infer<typeof getHasNodeResponseSchema>;
declare const getNodeInfoResponseSchema: z.ZodObject<{
    node: z.ZodObject<{
        alias: z.ZodString;
        capacity: z.ZodNumber;
        channel_count: z.ZodNumber;
        channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
            capacity: z.ZodNumber;
            id: z.ZodString;
            policies: z.ZodArray<z.ZodObject<{
                base_fee_mtokens: z.ZodOptional<z.ZodString>;
                cltv_delta: z.ZodOptional<z.ZodNumber>;
                fee_rate: z.ZodOptional<z.ZodNumber>;
                is_disabled: z.ZodOptional<z.ZodBoolean>;
                max_htlc_mtokens: z.ZodOptional<z.ZodString>;
                min_htlc_mtokens: z.ZodOptional<z.ZodString>;
                public_key: z.ZodString;
                updated_at: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                public_key: string;
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
            }, {
                public_key: string;
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
            }>, "many">;
            transaction_id: z.ZodString;
            transaction_vout: z.ZodNumber;
            updated_at: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            capacity: number;
            policies: {
                public_key: string;
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
            }[];
            transaction_id: string;
            transaction_vout: number;
            updated_at?: string | undefined;
        }, {
            id: string;
            capacity: number;
            policies: {
                public_key: string;
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
            }[];
            transaction_id: string;
            transaction_vout: number;
            updated_at?: string | undefined;
        }>, "many">>;
        color: z.ZodString;
        features: z.ZodArray<z.ZodObject<{
            bit: z.ZodNumber;
            is_known: z.ZodBoolean;
            is_required: z.ZodBoolean;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            bit: number;
            is_known: boolean;
            is_required: boolean;
            type?: string | undefined;
        }, {
            bit: number;
            is_known: boolean;
            is_required: boolean;
            type?: string | undefined;
        }>, "many">;
        sockets: z.ZodArray<z.ZodObject<{
            socket: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            socket: string;
        }, {
            type: string;
            socket: string;
        }>, "many">;
        updated_at: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        alias: string;
        capacity: number;
        channel_count: number;
        color: string;
        features: {
            bit: number;
            is_known: boolean;
            is_required: boolean;
            type?: string | undefined;
        }[];
        sockets: {
            type: string;
            socket: string;
        }[];
        channels?: {
            id: string;
            capacity: number;
            policies: {
                public_key: string;
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
            }[];
            transaction_id: string;
            transaction_vout: number;
            updated_at?: string | undefined;
        }[] | undefined;
        updated_at?: string | undefined;
    }, {
        alias: string;
        capacity: number;
        channel_count: number;
        color: string;
        features: {
            bit: number;
            is_known: boolean;
            is_required: boolean;
            type?: string | undefined;
        }[];
        sockets: {
            type: string;
            socket: string;
        }[];
        channels?: {
            id: string;
            capacity: number;
            policies: {
                public_key: string;
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
            }[];
            transaction_id: string;
            transaction_vout: number;
            updated_at?: string | undefined;
        }[] | undefined;
        updated_at?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    node: {
        alias: string;
        capacity: number;
        channel_count: number;
        color: string;
        features: {
            bit: number;
            is_known: boolean;
            is_required: boolean;
            type?: string | undefined;
        }[];
        sockets: {
            type: string;
            socket: string;
        }[];
        channels?: {
            id: string;
            capacity: number;
            policies: {
                public_key: string;
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
            }[];
            transaction_id: string;
            transaction_vout: number;
            updated_at?: string | undefined;
        }[] | undefined;
        updated_at?: string | undefined;
    };
}, {
    node: {
        alias: string;
        capacity: number;
        channel_count: number;
        color: string;
        features: {
            bit: number;
            is_known: boolean;
            is_required: boolean;
            type?: string | undefined;
        }[];
        sockets: {
            type: string;
            socket: string;
        }[];
        channels?: {
            id: string;
            capacity: number;
            policies: {
                public_key: string;
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
            }[];
            transaction_id: string;
            transaction_vout: number;
            updated_at?: string | undefined;
        }[] | undefined;
        updated_at?: string | undefined;
    };
}>;
export type getNodeInfoResponseType = z.infer<typeof getNodeInfoResponseSchema>;
export declare const NodeStatusEnumSchema: z.ZodEnum<["online", "starting", "offline", "error"]>;
export type NodeStatusEnum = z.infer<typeof NodeStatusEnumSchema>;
export declare const getNodeStatusResponseSchema: z.ZodObject<{
    status: z.ZodEnum<["online", "starting", "offline", "error"]>;
}, "strip", z.ZodTypeAny, {
    status: "error" | "online" | "starting" | "offline";
}, {
    status: "error" | "online" | "starting" | "offline";
}>;
export type getNodeStatusResponseType = z.infer<typeof getNodeStatusResponseSchema>;
export {};
//# sourceMappingURL=manageNode.types.d.ts.map
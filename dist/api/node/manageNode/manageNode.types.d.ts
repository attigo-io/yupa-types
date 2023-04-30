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
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
                public_key: string;
            }, {
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
                public_key: string;
            }>, "many">;
            transaction_id: z.ZodString;
            transaction_vout: z.ZodNumber;
            updated_at: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            updated_at?: string | undefined;
            id: string;
            capacity: number;
            policies: {
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
                public_key: string;
            }[];
            transaction_id: string;
            transaction_vout: number;
        }, {
            updated_at?: string | undefined;
            id: string;
            capacity: number;
            policies: {
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
                public_key: string;
            }[];
            transaction_id: string;
            transaction_vout: number;
        }>, "many">>;
        color: z.ZodString;
        features: z.ZodArray<z.ZodObject<{
            bit: z.ZodNumber;
            is_known: z.ZodBoolean;
            is_required: z.ZodBoolean;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type?: string | undefined;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }, {
            type?: string | undefined;
            bit: number;
            is_known: boolean;
            is_required: boolean;
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
        updated_at?: string | undefined;
        channels?: {
            updated_at?: string | undefined;
            id: string;
            capacity: number;
            policies: {
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
                public_key: string;
            }[];
            transaction_id: string;
            transaction_vout: number;
        }[] | undefined;
        alias: string;
        capacity: number;
        channel_count: number;
        color: string;
        features: {
            type?: string | undefined;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }[];
        sockets: {
            type: string;
            socket: string;
        }[];
    }, {
        updated_at?: string | undefined;
        channels?: {
            updated_at?: string | undefined;
            id: string;
            capacity: number;
            policies: {
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
                public_key: string;
            }[];
            transaction_id: string;
            transaction_vout: number;
        }[] | undefined;
        alias: string;
        capacity: number;
        channel_count: number;
        color: string;
        features: {
            type?: string | undefined;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }[];
        sockets: {
            type: string;
            socket: string;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    node: {
        updated_at?: string | undefined;
        channels?: {
            updated_at?: string | undefined;
            id: string;
            capacity: number;
            policies: {
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
                public_key: string;
            }[];
            transaction_id: string;
            transaction_vout: number;
        }[] | undefined;
        alias: string;
        capacity: number;
        channel_count: number;
        color: string;
        features: {
            type?: string | undefined;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }[];
        sockets: {
            type: string;
            socket: string;
        }[];
    };
}, {
    node: {
        updated_at?: string | undefined;
        channels?: {
            updated_at?: string | undefined;
            id: string;
            capacity: number;
            policies: {
                base_fee_mtokens?: string | undefined;
                cltv_delta?: number | undefined;
                fee_rate?: number | undefined;
                is_disabled?: boolean | undefined;
                max_htlc_mtokens?: string | undefined;
                min_htlc_mtokens?: string | undefined;
                updated_at?: string | undefined;
                public_key: string;
            }[];
            transaction_id: string;
            transaction_vout: number;
        }[] | undefined;
        alias: string;
        capacity: number;
        channel_count: number;
        color: string;
        features: {
            type?: string | undefined;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }[];
        sockets: {
            type: string;
            socket: string;
        }[];
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
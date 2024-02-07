import { z } from 'zod';
declare const nodeWalletInfoSchema: z.ZodObject<{
    active_channels_count: z.ZodNumber;
    alias: z.ZodString;
    chains: z.ZodArray<z.ZodString, "many">;
    color: z.ZodString;
    current_block_hash: z.ZodString;
    current_block_height: z.ZodNumber;
    features: z.ZodArray<z.ZodObject<{
        bit: z.ZodNumber;
        is_known: z.ZodBoolean;
        is_required: z.ZodBoolean;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        bit: number;
        is_known: boolean;
        is_required: boolean;
    }, {
        type: string;
        bit: number;
        is_known: boolean;
        is_required: boolean;
    }>, "many">;
    is_synced_to_chain: z.ZodBoolean;
    latest_block_at: z.ZodString;
    peers_count: z.ZodNumber;
    pending_channels_count: z.ZodNumber;
    public_key: z.ZodString;
    version: z.ZodString;
}, "strip", z.ZodTypeAny, {
    alias: string;
    public_key: string;
    color: string;
    features: {
        type: string;
        bit: number;
        is_known: boolean;
        is_required: boolean;
    }[];
    active_channels_count: number;
    chains: string[];
    current_block_hash: string;
    current_block_height: number;
    is_synced_to_chain: boolean;
    latest_block_at: string;
    peers_count: number;
    pending_channels_count: number;
    version: string;
}, {
    alias: string;
    public_key: string;
    color: string;
    features: {
        type: string;
        bit: number;
        is_known: boolean;
        is_required: boolean;
    }[];
    active_channels_count: number;
    chains: string[];
    current_block_hash: string;
    current_block_height: number;
    is_synced_to_chain: boolean;
    latest_block_at: string;
    peers_count: number;
    pending_channels_count: number;
    version: string;
}>;
export type nodeWalletInfoType = z.infer<typeof nodeWalletInfoSchema>;
declare const getNodeWalletInfoResponseSchema: z.ZodObject<{
    walletInfo: z.ZodObject<{
        active_channels_count: z.ZodNumber;
        alias: z.ZodString;
        chains: z.ZodArray<z.ZodString, "many">;
        color: z.ZodString;
        current_block_hash: z.ZodString;
        current_block_height: z.ZodNumber;
        features: z.ZodArray<z.ZodObject<{
            bit: z.ZodNumber;
            is_known: z.ZodBoolean;
            is_required: z.ZodBoolean;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }, {
            type: string;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }>, "many">;
        is_synced_to_chain: z.ZodBoolean;
        latest_block_at: z.ZodString;
        peers_count: z.ZodNumber;
        pending_channels_count: z.ZodNumber;
        public_key: z.ZodString;
        version: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        alias: string;
        public_key: string;
        color: string;
        features: {
            type: string;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }[];
        active_channels_count: number;
        chains: string[];
        current_block_hash: string;
        current_block_height: number;
        is_synced_to_chain: boolean;
        latest_block_at: string;
        peers_count: number;
        pending_channels_count: number;
        version: string;
    }, {
        alias: string;
        public_key: string;
        color: string;
        features: {
            type: string;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }[];
        active_channels_count: number;
        chains: string[];
        current_block_hash: string;
        current_block_height: number;
        is_synced_to_chain: boolean;
        latest_block_at: string;
        peers_count: number;
        pending_channels_count: number;
        version: string;
    }>;
}, "strip", z.ZodTypeAny, {
    walletInfo: {
        alias: string;
        public_key: string;
        color: string;
        features: {
            type: string;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }[];
        active_channels_count: number;
        chains: string[];
        current_block_hash: string;
        current_block_height: number;
        is_synced_to_chain: boolean;
        latest_block_at: string;
        peers_count: number;
        pending_channels_count: number;
        version: string;
    };
}, {
    walletInfo: {
        alias: string;
        public_key: string;
        color: string;
        features: {
            type: string;
            bit: number;
            is_known: boolean;
            is_required: boolean;
        }[];
        active_channels_count: number;
        chains: string[];
        current_block_hash: string;
        current_block_height: number;
        is_synced_to_chain: boolean;
        latest_block_at: string;
        peers_count: number;
        pending_channels_count: number;
        version: string;
    };
}>;
export type getWalletInfoResponseType = z.infer<typeof getNodeWalletInfoResponseSchema>;
declare const createNodeInvoiceSchema: z.ZodObject<{
    chain_address: z.ZodOptional<z.ZodString>;
    created_at: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    mtokens: z.ZodOptional<z.ZodString>;
    payment: z.ZodOptional<z.ZodString>;
    request: z.ZodString;
    secret: z.ZodString;
    tokens: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    created_at: string;
    request: string;
    secret: string;
    chain_address?: string | undefined;
    description?: string | undefined;
    mtokens?: string | undefined;
    payment?: string | undefined;
    tokens?: number | undefined;
}, {
    id: string;
    created_at: string;
    request: string;
    secret: string;
    chain_address?: string | undefined;
    description?: string | undefined;
    mtokens?: string | undefined;
    payment?: string | undefined;
    tokens?: number | undefined;
}>;
export type createNodeInvoiceType = z.infer<typeof createNodeInvoiceSchema>;
declare const createNodeInvoiceResponseSchema: z.ZodObject<{
    invoice: z.ZodObject<{
        chain_address: z.ZodOptional<z.ZodString>;
        created_at: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        mtokens: z.ZodOptional<z.ZodString>;
        payment: z.ZodOptional<z.ZodString>;
        request: z.ZodString;
        secret: z.ZodString;
        tokens: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        created_at: string;
        request: string;
        secret: string;
        chain_address?: string | undefined;
        description?: string | undefined;
        mtokens?: string | undefined;
        payment?: string | undefined;
        tokens?: number | undefined;
    }, {
        id: string;
        created_at: string;
        request: string;
        secret: string;
        chain_address?: string | undefined;
        description?: string | undefined;
        mtokens?: string | undefined;
        payment?: string | undefined;
        tokens?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    invoice: {
        id: string;
        created_at: string;
        request: string;
        secret: string;
        chain_address?: string | undefined;
        description?: string | undefined;
        mtokens?: string | undefined;
        payment?: string | undefined;
        tokens?: number | undefined;
    };
}, {
    invoice: {
        id: string;
        created_at: string;
        request: string;
        secret: string;
        chain_address?: string | undefined;
        description?: string | undefined;
        mtokens?: string | undefined;
        payment?: string | undefined;
        tokens?: number | undefined;
    };
}>;
export type createNodeInvoiceResponseType = z.infer<typeof createNodeInvoiceResponseSchema>;
declare const payInvoiceWithNodeDataSchema: z.ZodObject<{
    confirmed_at: z.ZodString;
    fee: z.ZodNumber;
    fee_mtokens: z.ZodString;
    hops: z.ZodArray<z.ZodObject<{
        channel: z.ZodString;
        channel_capacity: z.ZodNumber;
        fee: z.ZodNumber;
        fee_mtokens: z.ZodString;
        forward_mtokens: z.ZodString;
        public_key: z.ZodString;
        timeout: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        public_key: string;
        fee: number;
        fee_mtokens: string;
        channel: string;
        channel_capacity: number;
        forward_mtokens: string;
        timeout: number;
    }, {
        public_key: string;
        fee: number;
        fee_mtokens: string;
        channel: string;
        channel_capacity: number;
        forward_mtokens: string;
        timeout: number;
    }>, "many">;
    id: z.ZodString;
    mtokens: z.ZodString;
    paths: z.ZodArray<z.ZodObject<{
        fee_mtokens: z.ZodString;
        hops: z.ZodArray<z.ZodObject<{
            channel: z.ZodString;
            channel_capacity: z.ZodNumber;
            fee: z.ZodNumber;
            fee_mtokens: z.ZodString;
            forward_mtokens: z.ZodString;
            public_key: z.ZodString;
            timeout: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }, {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }>, "many">;
        mtokens: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        mtokens: string;
        fee_mtokens: string;
        hops: {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }[];
    }, {
        mtokens: string;
        fee_mtokens: string;
        hops: {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }[];
    }>, "many">;
    safe_fee: z.ZodNumber;
    safe_tokens: z.ZodNumber;
    secret: z.ZodString;
    timeout: z.ZodNumber;
    tokens: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    fee: number;
    mtokens: string;
    secret: string;
    tokens: number;
    confirmed_at: string;
    fee_mtokens: string;
    hops: {
        public_key: string;
        fee: number;
        fee_mtokens: string;
        channel: string;
        channel_capacity: number;
        forward_mtokens: string;
        timeout: number;
    }[];
    timeout: number;
    paths: {
        mtokens: string;
        fee_mtokens: string;
        hops: {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }[];
    }[];
    safe_fee: number;
    safe_tokens: number;
}, {
    id: string;
    fee: number;
    mtokens: string;
    secret: string;
    tokens: number;
    confirmed_at: string;
    fee_mtokens: string;
    hops: {
        public_key: string;
        fee: number;
        fee_mtokens: string;
        channel: string;
        channel_capacity: number;
        forward_mtokens: string;
        timeout: number;
    }[];
    timeout: number;
    paths: {
        mtokens: string;
        fee_mtokens: string;
        hops: {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }[];
    }[];
    safe_fee: number;
    safe_tokens: number;
}>;
export type payInvoiceWithNodeDataType = z.infer<typeof payInvoiceWithNodeDataSchema>;
declare const payInvoiceWithNodeResponseSchmea: z.ZodObject<{
    payment: z.ZodObject<{
        confirmed_at: z.ZodString;
        fee: z.ZodNumber;
        fee_mtokens: z.ZodString;
        hops: z.ZodArray<z.ZodObject<{
            channel: z.ZodString;
            channel_capacity: z.ZodNumber;
            fee: z.ZodNumber;
            fee_mtokens: z.ZodString;
            forward_mtokens: z.ZodString;
            public_key: z.ZodString;
            timeout: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }, {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }>, "many">;
        id: z.ZodString;
        mtokens: z.ZodString;
        paths: z.ZodArray<z.ZodObject<{
            fee_mtokens: z.ZodString;
            hops: z.ZodArray<z.ZodObject<{
                channel: z.ZodString;
                channel_capacity: z.ZodNumber;
                fee: z.ZodNumber;
                fee_mtokens: z.ZodString;
                forward_mtokens: z.ZodString;
                public_key: z.ZodString;
                timeout: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                public_key: string;
                fee: number;
                fee_mtokens: string;
                channel: string;
                channel_capacity: number;
                forward_mtokens: string;
                timeout: number;
            }, {
                public_key: string;
                fee: number;
                fee_mtokens: string;
                channel: string;
                channel_capacity: number;
                forward_mtokens: string;
                timeout: number;
            }>, "many">;
            mtokens: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            mtokens: string;
            fee_mtokens: string;
            hops: {
                public_key: string;
                fee: number;
                fee_mtokens: string;
                channel: string;
                channel_capacity: number;
                forward_mtokens: string;
                timeout: number;
            }[];
        }, {
            mtokens: string;
            fee_mtokens: string;
            hops: {
                public_key: string;
                fee: number;
                fee_mtokens: string;
                channel: string;
                channel_capacity: number;
                forward_mtokens: string;
                timeout: number;
            }[];
        }>, "many">;
        safe_fee: z.ZodNumber;
        safe_tokens: z.ZodNumber;
        secret: z.ZodString;
        timeout: z.ZodNumber;
        tokens: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        fee: number;
        mtokens: string;
        secret: string;
        tokens: number;
        confirmed_at: string;
        fee_mtokens: string;
        hops: {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }[];
        timeout: number;
        paths: {
            mtokens: string;
            fee_mtokens: string;
            hops: {
                public_key: string;
                fee: number;
                fee_mtokens: string;
                channel: string;
                channel_capacity: number;
                forward_mtokens: string;
                timeout: number;
            }[];
        }[];
        safe_fee: number;
        safe_tokens: number;
    }, {
        id: string;
        fee: number;
        mtokens: string;
        secret: string;
        tokens: number;
        confirmed_at: string;
        fee_mtokens: string;
        hops: {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }[];
        timeout: number;
        paths: {
            mtokens: string;
            fee_mtokens: string;
            hops: {
                public_key: string;
                fee: number;
                fee_mtokens: string;
                channel: string;
                channel_capacity: number;
                forward_mtokens: string;
                timeout: number;
            }[];
        }[];
        safe_fee: number;
        safe_tokens: number;
    }>;
}, "strip", z.ZodTypeAny, {
    payment: {
        id: string;
        fee: number;
        mtokens: string;
        secret: string;
        tokens: number;
        confirmed_at: string;
        fee_mtokens: string;
        hops: {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }[];
        timeout: number;
        paths: {
            mtokens: string;
            fee_mtokens: string;
            hops: {
                public_key: string;
                fee: number;
                fee_mtokens: string;
                channel: string;
                channel_capacity: number;
                forward_mtokens: string;
                timeout: number;
            }[];
        }[];
        safe_fee: number;
        safe_tokens: number;
    };
}, {
    payment: {
        id: string;
        fee: number;
        mtokens: string;
        secret: string;
        tokens: number;
        confirmed_at: string;
        fee_mtokens: string;
        hops: {
            public_key: string;
            fee: number;
            fee_mtokens: string;
            channel: string;
            channel_capacity: number;
            forward_mtokens: string;
            timeout: number;
        }[];
        timeout: number;
        paths: {
            mtokens: string;
            fee_mtokens: string;
            hops: {
                public_key: string;
                fee: number;
                fee_mtokens: string;
                channel: string;
                channel_capacity: number;
                forward_mtokens: string;
                timeout: number;
            }[];
        }[];
        safe_fee: number;
        safe_tokens: number;
    };
}>;
export type payInvoiceWithNodeResponseTypa = z.infer<typeof payInvoiceWithNodeResponseSchmea>;
export {};
//# sourceMappingURL=node.wallet.types.d.ts.map
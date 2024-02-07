import { z } from 'zod';
declare const chanellBalanceSchema: z.ZodObject<{
    channel_balance: z.ZodOptional<z.ZodNumber>;
    channel_balance_mtokens: z.ZodOptional<z.ZodString>;
    inbound: z.ZodOptional<z.ZodNumber>;
    inbound_mtokens: z.ZodOptional<z.ZodString>;
    pending_balance: z.ZodOptional<z.ZodNumber>;
    pending_inbound: z.ZodOptional<z.ZodNumber>;
    unsettled_balance: z.ZodOptional<z.ZodNumber>;
    unsettled_balance_mtokens: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    channel_balance?: number | undefined;
    channel_balance_mtokens?: string | undefined;
    inbound?: number | undefined;
    inbound_mtokens?: string | undefined;
    pending_balance?: number | undefined;
    pending_inbound?: number | undefined;
    unsettled_balance?: number | undefined;
    unsettled_balance_mtokens?: string | undefined;
}, {
    channel_balance?: number | undefined;
    channel_balance_mtokens?: string | undefined;
    inbound?: number | undefined;
    inbound_mtokens?: string | undefined;
    pending_balance?: number | undefined;
    pending_inbound?: number | undefined;
    unsettled_balance?: number | undefined;
    unsettled_balance_mtokens?: string | undefined;
}>;
export type channelBalanceType = z.infer<typeof chanellBalanceSchema>;
declare const getNodeBalanceResponseSchema: z.ZodObject<{
    chaineBalance: z.ZodOptional<z.ZodNumber>;
    tottalBalance: z.ZodNumber;
    chanellBalance: z.ZodOptional<z.ZodObject<{
        channel_balance: z.ZodOptional<z.ZodNumber>;
        channel_balance_mtokens: z.ZodOptional<z.ZodString>;
        inbound: z.ZodOptional<z.ZodNumber>;
        inbound_mtokens: z.ZodOptional<z.ZodString>;
        pending_balance: z.ZodOptional<z.ZodNumber>;
        pending_inbound: z.ZodOptional<z.ZodNumber>;
        unsettled_balance: z.ZodOptional<z.ZodNumber>;
        unsettled_balance_mtokens: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        channel_balance?: number | undefined;
        channel_balance_mtokens?: string | undefined;
        inbound?: number | undefined;
        inbound_mtokens?: string | undefined;
        pending_balance?: number | undefined;
        pending_inbound?: number | undefined;
        unsettled_balance?: number | undefined;
        unsettled_balance_mtokens?: string | undefined;
    }, {
        channel_balance?: number | undefined;
        channel_balance_mtokens?: string | undefined;
        inbound?: number | undefined;
        inbound_mtokens?: string | undefined;
        pending_balance?: number | undefined;
        pending_inbound?: number | undefined;
        unsettled_balance?: number | undefined;
        unsettled_balance_mtokens?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    tottalBalance: number;
    chaineBalance?: number | undefined;
    chanellBalance?: {
        channel_balance?: number | undefined;
        channel_balance_mtokens?: string | undefined;
        inbound?: number | undefined;
        inbound_mtokens?: string | undefined;
        pending_balance?: number | undefined;
        pending_inbound?: number | undefined;
        unsettled_balance?: number | undefined;
        unsettled_balance_mtokens?: string | undefined;
    } | undefined;
}, {
    tottalBalance: number;
    chaineBalance?: number | undefined;
    chanellBalance?: {
        channel_balance?: number | undefined;
        channel_balance_mtokens?: string | undefined;
        inbound?: number | undefined;
        inbound_mtokens?: string | undefined;
        pending_balance?: number | undefined;
        pending_inbound?: number | undefined;
        unsettled_balance?: number | undefined;
        unsettled_balance_mtokens?: string | undefined;
    } | undefined;
}>;
export type getNodeBalanceResponseType = z.infer<typeof getNodeBalanceResponseSchema>;
declare const getNodeOnChaineBallanceResponseSchema: z.ZodObject<{
    chaineBalance: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    chaineBalance: number;
}, {
    chaineBalance: number;
}>;
export type getNodeOnChaineBallanceResponseType = z.infer<typeof getNodeOnChaineBallanceResponseSchema>;
declare const getNodeChannelBalanceResponseSchema: z.ZodObject<{
    chanellBalance: z.ZodOptional<z.ZodObject<{
        channel_balance: z.ZodOptional<z.ZodNumber>;
        channel_balance_mtokens: z.ZodOptional<z.ZodString>;
        inbound: z.ZodOptional<z.ZodNumber>;
        inbound_mtokens: z.ZodOptional<z.ZodString>;
        pending_balance: z.ZodOptional<z.ZodNumber>;
        pending_inbound: z.ZodOptional<z.ZodNumber>;
        unsettled_balance: z.ZodOptional<z.ZodNumber>;
        unsettled_balance_mtokens: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        channel_balance?: number | undefined;
        channel_balance_mtokens?: string | undefined;
        inbound?: number | undefined;
        inbound_mtokens?: string | undefined;
        pending_balance?: number | undefined;
        pending_inbound?: number | undefined;
        unsettled_balance?: number | undefined;
        unsettled_balance_mtokens?: string | undefined;
    }, {
        channel_balance?: number | undefined;
        channel_balance_mtokens?: string | undefined;
        inbound?: number | undefined;
        inbound_mtokens?: string | undefined;
        pending_balance?: number | undefined;
        pending_inbound?: number | undefined;
        unsettled_balance?: number | undefined;
        unsettled_balance_mtokens?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    chanellBalance?: {
        channel_balance?: number | undefined;
        channel_balance_mtokens?: string | undefined;
        inbound?: number | undefined;
        inbound_mtokens?: string | undefined;
        pending_balance?: number | undefined;
        pending_inbound?: number | undefined;
        unsettled_balance?: number | undefined;
        unsettled_balance_mtokens?: string | undefined;
    } | undefined;
}, {
    chanellBalance?: {
        channel_balance?: number | undefined;
        channel_balance_mtokens?: string | undefined;
        inbound?: number | undefined;
        inbound_mtokens?: string | undefined;
        pending_balance?: number | undefined;
        pending_inbound?: number | undefined;
        unsettled_balance?: number | undefined;
        unsettled_balance_mtokens?: string | undefined;
    } | undefined;
}>;
export type getNodeChannelBalanceResponseType = z.infer<typeof getNodeChannelBalanceResponseSchema>;
export {};
//# sourceMappingURL=node.balance.types.d.ts.map
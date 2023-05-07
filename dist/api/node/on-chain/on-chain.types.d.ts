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
//# sourceMappingURL=on-chain.types.d.ts.map
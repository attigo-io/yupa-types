import { z } from 'zod';
declare const walletSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    user: z.ZodString;
    adminkey: z.ZodString;
    inkey: z.ZodString;
    balance_msat: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    user: string;
    name: string;
    adminkey: string;
    inkey: string;
    balance_msat: string | number | bigint;
}, {
    id: string;
    user: string;
    name: string;
    adminkey: string;
    inkey: string;
    balance_msat: string | number | bigint;
}>;
export type walletType = z.infer<typeof walletSchema>;
declare const getWalletResponseSchema: z.ZodObject<{
    wallet: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        user: z.ZodString;
        adminkey: z.ZodString;
        inkey: z.ZodString;
        balance_msat: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
    }, {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
    }>;
}, "strip", z.ZodTypeAny, {
    wallet: {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
    };
}, {
    wallet: {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
    };
}>;
declare const getWalletsResponseSchema: z.ZodObject<{
    wallets: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        user: z.ZodString;
        adminkey: z.ZodString;
        inkey: z.ZodString;
        balance_msat: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
    }, {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    wallets: {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
    }[];
}, {
    wallets: {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
    }[];
}>;
export type getWalletsResponseType = z.infer<typeof getWalletsResponseSchema>;
export type getWalletResponseType = z.infer<typeof getWalletResponseSchema>;
export {};
//# sourceMappingURL=wallet.types.d.ts.map
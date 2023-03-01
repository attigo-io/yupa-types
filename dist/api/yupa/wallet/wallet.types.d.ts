import { z } from 'zod';
declare const walletSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    user: z.ZodString;
    adminkey: z.ZodString;
    inkey: z.ZodString;
    balance_msat: z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>;
    lightning_address: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    user: string;
    name: string;
    adminkey: string;
    inkey: string;
    balance_msat: string | number | bigint;
    lightning_address: string | null;
}, {
    id: string;
    user: string;
    name: string;
    adminkey: string;
    inkey: string;
    balance_msat: string | number | bigint;
    lightning_address: string | null;
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
        lightning_address: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
        lightning_address: string | null;
    }, {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
        lightning_address: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    wallet: {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
        lightning_address: string | null;
    };
}, {
    wallet: {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
        lightning_address: string | null;
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
        lightning_address: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
        lightning_address: string | null;
    }, {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
        lightning_address: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    wallets: {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
        lightning_address: string | null;
    }[];
}, {
    wallets: {
        id: string;
        user: string;
        name: string;
        adminkey: string;
        inkey: string;
        balance_msat: string | number | bigint;
        lightning_address: string | null;
    }[];
}>;
export type getWalletsResponseType = z.infer<typeof getWalletsResponseSchema>;
export type getWalletResponseType = z.infer<typeof getWalletResponseSchema>;
export {};
//# sourceMappingURL=wallet.types.d.ts.map
import { z } from 'zod';
declare const getNodePaymentsHistoryQuerySchema: z.ZodObject<{
    invoicesToken: z.ZodNullable<z.ZodString>;
    paymentsToken: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    invoicesToken: string | null;
    paymentsToken: string | null;
}, {
    invoicesToken: string | null;
    paymentsToken: string | null;
}>;
export type getNodePaymentsHistoryQueryType = z.infer<typeof getNodePaymentsHistoryQuerySchema>;
export declare const getNodePaymentsHistoryResponseSchema: z.ZodObject<{
    history: z.ZodArray<z.ZodObject<{
        memo: z.ZodString;
        amount: z.ZodNumber;
        date: z.ZodUnion<[z.ZodString, z.ZodDate]>;
        fee: z.ZodNumber;
        in: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        date: string | Date;
        memo: string;
        amount: number;
        fee: number;
        in: boolean;
    }, {
        date: string | Date;
        memo: string;
        amount: number;
        fee: number;
        in: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    history: {
        date: string | Date;
        memo: string;
        amount: number;
        fee: number;
        in: boolean;
    }[];
}, {
    history: {
        date: string | Date;
        memo: string;
        amount: number;
        fee: number;
        in: boolean;
    }[];
}>;
export type getNodePaymentsHistoryResponseType = z.infer<typeof getNodePaymentsHistoryResponseSchema>;
export {};
//# sourceMappingURL=node.payments.types.d.ts.map
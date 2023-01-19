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
export {};
//# sourceMappingURL=node.payments.types.d.ts.map
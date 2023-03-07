import { z } from 'zod';
export declare const getBitcoinRatesResponseSchema: z.ZodObject<{
    bitcoin: z.ZodObject<{
        usd: z.ZodNumber;
        vef: z.ZodNumber;
        inr: z.ZodNumber;
        php: z.ZodNumber;
        pkr: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        usd: number;
        vef: number;
        inr: number;
        php: number;
        pkr: number;
    }, {
        usd: number;
        vef: number;
        inr: number;
        php: number;
        pkr: number;
    }>;
}, "strip", z.ZodTypeAny, {
    bitcoin: {
        usd: number;
        vef: number;
        inr: number;
        php: number;
        pkr: number;
    };
}, {
    bitcoin: {
        usd: number;
        vef: number;
        inr: number;
        php: number;
        pkr: number;
    };
}>;
export type getBitcoinRatesResponseType = z.infer<typeof getBitcoinRatesResponseSchema>;
//# sourceMappingURL=rates.types.d.ts.map
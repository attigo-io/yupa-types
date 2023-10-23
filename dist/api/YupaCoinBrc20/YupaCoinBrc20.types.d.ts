import { z } from 'zod';
export declare const buyFromUsBrc20PayLaterResponseSchema: z.ZodObject<{
    orderId: z.ZodString;
    paymentRequest: z.ZodString;
    quantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    orderId: string;
    paymentRequest: string;
    quantity: number;
}, {
    orderId: string;
    paymentRequest: string;
    quantity: number;
}>;
export type BuyFromUsBrc20PayLaterResponseType = z.infer<typeof buyFromUsBrc20PayLaterResponseSchema>;
export declare const yupaCoinBuyFromUsOrderBlockSchema: z.ZodObject<{
    id: z.ZodString;
    quantity: z.ZodNumber;
    price: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    quantity: number;
    price: number;
}, {
    id: string;
    quantity: number;
    price: number;
}>;
export type YupaCoinBuyFromUsOrderBlockType = z.infer<typeof yupaCoinBuyFromUsOrderBlockSchema>;
export declare const getYupaCoinBuyFromUsOrderBlocksResponseSchema: z.ZodObject<{
    orderBlocks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        quantity: z.ZodNumber;
        price: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        quantity: number;
        price: number;
    }, {
        id: string;
        quantity: number;
        price: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    orderBlocks: {
        id: string;
        quantity: number;
        price: number;
    }[];
}, {
    orderBlocks: {
        id: string;
        quantity: number;
        price: number;
    }[];
}>;
export type GetYupaCoinBuyFromUsOrderBlocksResponseType = z.infer<typeof getYupaCoinBuyFromUsOrderBlocksResponseSchema>;
export declare const GetYupaCoinBalanceResponseSchema: z.ZodObject<{
    balance: z.ZodObject<{
        balance: z.ZodNumber;
        MBalace: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        balance: number;
        MBalace: number;
    }, {
        balance: number;
        MBalace: number;
    }>;
}, "strip", z.ZodTypeAny, {
    balance: {
        balance: number;
        MBalace: number;
    };
}, {
    balance: {
        balance: number;
        MBalace: number;
    };
}>;
export type GetYupaCoinBalanceResponseType = z.infer<typeof GetYupaCoinBalanceResponseSchema>;
//# sourceMappingURL=YupaCoinBrc20.types.d.ts.map
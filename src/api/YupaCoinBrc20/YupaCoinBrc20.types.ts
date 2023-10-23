import { z } from 'zod'

export const buyFromUsBrc20PayLaterResponseSchema = z.object({
  orderId: z.string(),
  paymentRequest: z.string(),
  quantity: z.number(),
})

export type BuyFromUsBrc20PayLaterResponseType = z.infer<
  typeof buyFromUsBrc20PayLaterResponseSchema
>

export const yupaCoinBuyFromUsOrderBlockSchema = z.object({
  id: z.string(),
  quantity: z.number(),
  price: z.number(),
})

export type YupaCoinBuyFromUsOrderBlockType = z.infer<
  typeof yupaCoinBuyFromUsOrderBlockSchema
>

export const getYupaCoinBuyFromUsOrderBlocksResponseSchema = z.object({
  orderBlocks: z.array(yupaCoinBuyFromUsOrderBlockSchema),
})

export type GetYupaCoinBuyFromUsOrderBlocksResponseType = z.infer<
  typeof getYupaCoinBuyFromUsOrderBlocksResponseSchema
>

export const GetYupaCoinBalanceResponseSchema = z.object({
  balance: z.object({
    balance: z.number(),
    MBalace: z.number(),
  }),
})

export type GetYupaCoinBalanceResponseType = z.infer<
  typeof GetYupaCoinBalanceResponseSchema
>

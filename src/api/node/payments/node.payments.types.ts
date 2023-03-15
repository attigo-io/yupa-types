import { z } from 'zod'

const getNodePaymentsHistoryQuerySchema = z.object({
  invoicesToken: z.string().nullable(),
  paymentsToken: z.string().nullable(),
})

const getNodePaymentsHistorySchema = z.object({
  query: getNodePaymentsHistoryQuerySchema,
})

export type getNodePaymentsHistoryQueryType = z.infer<
  typeof getNodePaymentsHistoryQuerySchema
>

export const getNodePaymentsHistoryResponseSchema = z.object({
  history: z.array(
    z.object({
      memo: z.string(),
      amount: z.number(),
      date: z.string().or(z.date()),
      fee: z.number(),
      in: z.boolean(),
      is_paid: z.boolean()
    })
  ),
  meta: z.object({
    invoicesToken: z.string().optional(),
    paymentsToken: z.string().optional(),
  })
})

export type getNodePaymentsHistoryResponseType = z.infer<
  typeof getNodePaymentsHistoryResponseSchema
>

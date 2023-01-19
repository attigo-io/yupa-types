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

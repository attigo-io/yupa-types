import { z } from 'zod'
import { yupaApiPaymentSchema } from '../payments/payments.types'

const posSchema = z.object({
  id: z.string(),
  wallet: z.string(),
  name: z.string(),
  currency: z.string(),
})

export type posType = z.infer<typeof posSchema>

export const getTpossResponseSchema = z.object({
  poss: z.array(posSchema),
})

export type getTpossResponseType = z.infer<typeof getTpossResponseSchema>
 
export const getTposResponseSchema = z.object({
  pos: posSchema,
})

export type getTposResponseType = z.infer<typeof getTposResponseSchema>

export const createPosResponseSchema = getTposResponseSchema
export type createPosResponseType = getTposResponseType

export const getPosTodayInvoicesSchema = z.object({
  payments: z.array(yupaApiPaymentSchema),
})

export type getPosTodayInvoicesType = z.infer<typeof getPosTodayInvoicesSchema>

export const createPosInvoiceResponseSchema = z.object({
  invoice: z.object({
    payment_hash: z.string().optional(),
    payment_request: z.string(),
  }),
})

export type createPosInvoiceResponseType = z.infer<
  typeof createPosInvoiceResponseSchema
>

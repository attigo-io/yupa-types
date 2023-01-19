import { z } from 'zod'

export const yupaApiPaymentSchema = z.object({
  checking_id: z.string(),
  amount: z.number().or(z.string()).or(z.bigint()),
  fee: z.number(),
  wallet: z.string(),
  pending: z.boolean(),
  memo: z.string().nullable(),
  time: z.date().or(z.string()),
  hash: z.string().nullable(),
  preimage: z.string().nullable(),
  bolt11: z.string().nullable(),
  extra: z.string().nullable(),
  webhook: z.string().nullable(),
  webhook_status: z.string().nullable(),
})

export const getYupaPaymentsForWaleltResponseSchema = z.object({
  payments: z.array(yupaApiPaymentSchema),
})

export type getYupaApiPaymentsForWaleltResponseType = z.infer<
  typeof getYupaPaymentsForWaleltResponseSchema
>

export const createYupaInvoiceResponseSchema = z.object({
  invoice: z.object({
    payment_hash: z.string().nullable(),
    payment_request: z.string(),
    checking_id: z.string().nullable(),
    lnurl_response: z.boolean(),
  }),
})

export type createYupaInvoiceResponseType = z.infer<
  typeof createYupaInvoiceResponseSchema
>

export const payYupaInvoiceResponseSchema = z.object({
  invoice: z.object({
    payment_hash: z.string(),
  }),
})

export type payYupaInvoiceResponseType = z.infer<
  typeof payYupaInvoiceResponseSchema
>

export const getYupaInvoiceStatusResponseSchema = z.object({
  status: z.object({
    paid: z.boolean().optional(),
    pending: z.boolean().optional(),
    failed: z.boolean().optional(),
    failureReason: z.string().optional(),
  }),
})


export type getYupaInvoiceStatusResponseType = z.infer<typeof getYupaInvoiceStatusResponseSchema>
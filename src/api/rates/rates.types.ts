import { z } from 'zod'

export const getBitcoinRatesResponseSchema = z.object({
  bitcoin: z.object({
    usd: z.number(),
    vef: z.number(),
    inr: z.number(),
    php: z.number(),
    pkr: z.number(),
  }),
})

export type getBitcoinRatesResponseType = z.infer<typeof getBitcoinRatesResponseSchema>

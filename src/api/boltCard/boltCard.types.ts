import { z } from 'zod'
import { yupaApiPaymentSchema } from '../yupa/yupa.types'

export const boltCardSchema = z.object({
    id: z.string(),
    wallet_id: z.string().nullable(),
    card_name: z.string(),
    uid: z.string(),
    external_id: z.string(),
    counter: z.number(),
    tx_limit: z.number(),
    daily_limit: z.number(),
    enabled: z.boolean(),
    k0: z.string(),
    k1: z.string(),
    k2: z.string(),
    prev_k0: z.string(),
    prev_k1: z.string(),
    prev_k2: z.string(),
    otp: z.string(),
    created_at: z.date(),
  })
  
  export type BoltCardType = z.infer<typeof boltCardSchema>
  
  export const createBoltCardResponseSchema = z.object({
    boltCard: boltCardSchema,
  })
  
  export type CreateBoltCardResponseType = z.infer<
    typeof createBoltCardResponseSchema
  >
  

export const boltCardHitSchema = z.object({
  id: z.string(),
  card_id: z.string(),
  ip: z.string(),
  is_triggered: z.boolean(),
  is_paid: z.boolean(),
  user_agent: z.string(),
  olc_ctr: z.number(),
  new_ctr: z.number(),
  amount: z.bigint(),
  payment_id: z.string().nullable(),
  created_at: z.date(),
})

export const getBoltCardsUserRouteResponseSchema = z.object({
  cards: z.array(boltCardSchema),
})

export const boltCardRefundSchema = z.object({
  id: z.string(),
  hit_id: z.string(),
  refund_amount: z.bigint(),
  payment_id: z.string().nullable(),
  created_at: z.date(),
})

export type boltCardRefundType = z.infer<typeof boltCardRefundSchema>

export const getBoltCardRefundsUserReponseSchema = z.object({
  refunds: z.array(
    boltCardRefundSchema.extend({
      api_payment: yupaApiPaymentSchema.nullable(),
    })
  ),
})

export type getBoltCardRefundsUserReponseType = z.infer<
  typeof getBoltCardRefundsUserReponseSchema
>

export type getBoltCardsUserRouteResponseType = z.infer<
  typeof getBoltCardsUserRouteResponseSchema
>

export const getBoltCardUserRouteResponse = z.object({
  card: boltCardSchema,
})

export type getBoltCardUserRouteResponseType = z.infer<
  typeof getBoltCardUserRouteResponse
>

export const getBoltCardHitsUserResponseSchema = z.object({
  hits: z.array(
    boltCardHitSchema.extend({
      api_payment: yupaApiPaymentSchema.nullable(),
    })
  ),
})

export type getBoltCardHitsResponseType = z.infer<
  typeof getBoltCardHitsUserResponseSchema
>

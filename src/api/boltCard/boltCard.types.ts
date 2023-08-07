import { z } from 'zod'
import { yupaApiPaymentSchema } from '../yupa/yupa.types'

export const boltCardTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  min_withdrawable: z.number(),
  max_withdrawable: z.number(),
  daily_limit: z.number(),
  weekly_limit: z.number(),
  monthly_limit: z.number(),
})

export type BoltCardTypeType = z.infer<typeof boltCardTypeSchema>


export const boltCardSchema = z.object({
  id: z.string(),
  wallet_id: z.string().nullable(),
  card_name: z.string(),
  card_type_id: z.string(),
  uid: z.string(),
  external_id: z.string(),
  counter: z.number(),
  enabled: z.boolean(),
  min_withdrawable: z.number(),
  max_withdrawable: z.number(),
  daily_limit: z.number(),
  weekly_limit: z.number(),
  monthly_limit: z.number(),
  k0: z.string(),
  k1: z.string(),
  k2: z.string(),
  prev_k0: z.string(),
  prev_k1: z.string(),
  prev_k2: z.string(),
  otp: z.string(),
  created_at: z.date(),
  card_type: boltCardTypeSchema
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

export const getBoltCardStatsSchema = z.object({
  monthly: z.object({
    sum: z.number(),
    total: z.number(),
  }),
  daily: z.object({
    sum: z.number(),
    total: z.number(),
  }),
  weekly: z.object({
    sum: z.number(),
    total: z.number(),
  }),
})

export type getBoltCardStatsResponseType = z.infer<
  typeof getBoltCardStatsSchema
>

export const getBoltCardTypeResponseShema = z.object({
  type: boltCardTypeSchema,
})

export type getBoltCardTypeResponseType = z.infer<
  typeof getBoltCardTypeResponseShema
>

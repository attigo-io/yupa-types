import { z } from 'zod'

const okayResponse = z.object({
  ok: z.string(),
})

const postAddNodeResponseSchema = okayResponse
export type postAddNodeResponseType = z.infer<typeof postAddNodeResponseSchema>

const getHasNodeResponseSchema = okayResponse
export type getHasNodeResponseType = z.infer<typeof getHasNodeResponseSchema>

const getNodeResultSchema = z.object({
  alias: z.string(),
  capacity: z.number(),
  channel_count: z.number(),
  channels: z
    .array(
      z.object({
        capacity: z.number(),
        id: z.string(),
        policies: z.array(
          z.object({
            base_fee_mtokens: z.string().optional(),
            cltv_delta: z.number().optional(),
            fee_rate: z.number().optional(),
            is_disabled: z.boolean().optional(),
            max_htlc_mtokens: z.string().optional(),
            min_htlc_mtokens: z.string().optional(),
            public_key: z.string(),
            updated_at: z.string().optional(),
          })
        ),
        transaction_id: z.string(),
        transaction_vout: z.number(),
        updated_at: z.string().optional(),
      })
    )
    .optional(),
  color: z.string(),
  features: z.array(
    z.object({
      bit: z.number(),
      is_known: z.boolean(),
      is_required: z.boolean(),
      type: z.string().optional(),
    })
  ),
  sockets: z.array(
    z.object({
      socket: z.string(),
      type: z.string(),
    })
  ),
  updated_at: z.string().optional(),
})

const getNodeInfoResponseSchema = z.object({ node: getNodeResultSchema })
export type getNodeInfoResponseType = z.infer<typeof getNodeInfoResponseSchema>

export const NodeStatusEnumSchema = z.enum([
  'online',
  'starting',
  'offline',
  'error',
])

export type NodeStatusEnum = z.infer<typeof NodeStatusEnumSchema>

export const getNodeStatusResponseSchema = z.object({
  status: NodeStatusEnumSchema,
})
export type getNodeStatusResponseType = z.infer<typeof getNodeStatusResponseSchema>

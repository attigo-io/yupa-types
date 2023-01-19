import { z } from 'zod'

const chanellBalanceSchema = z.object({
  channel_balance: z.number().optional(),
  channel_balance_mtokens: z.string().optional(),
  inbound: z.number().optional(),
  inbound_mtokens: z.string().optional(),
  pending_balance: z.number().optional(),
  pending_inbound: z.number().optional(),
  unsettled_balance: z.number().optional(),
  unsettled_balance_mtokens: z.string().optional(),
})

export type channelBalanceType = z.infer<typeof chanellBalanceSchema>

const getNodeBalanceResponseSchema = z.object({
  chaineBalance: z.number().optional(),
  tottalBalance: z.number(),
  chanellBalance: chanellBalanceSchema.optional(),
})

export type getNodeBalanceResponseType = z.infer<
  typeof getNodeBalanceResponseSchema
>

const getNodeOnChaineBallanceResponseSchema = z.object({
  chaineBalance: z.number(),
})

export type getNodeOnChaineBallanceResponseType = z.infer<
  typeof getNodeOnChaineBallanceResponseSchema
>

const getNodeChannelBalanceResponseSchema = z.object({
  chanellBalance: chanellBalanceSchema.optional(),
})

export type getNodeChannelBalanceResponseType = z.infer<
  typeof getNodeChannelBalanceResponseSchema
>

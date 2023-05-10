import { z } from 'zod'

export const NodeOnChainAddresseSchema = z.object({
  address: z.string(),
  is_change: z.boolean(),
  tokens: z.number(),
})

export type NodeOnChainAddresseType = z.infer<typeof NodeOnChainAddresseSchema>

export const GetNodeOnChainAddresseSchema = z.object({
  addresses: z.array(NodeOnChainAddresseSchema),
})

export type GetNodeOnChainAddresseType = z.infer<
  typeof GetNodeOnChainAddresseSchema
>

export const CreateNodeOnChainAddresseSchema = z.object({
  addresse: z.string(),
})

export type CreateNodeOnChainAddresseType = z.infer<
  typeof CreateNodeOnChainAddresseSchema
>

export const bitcoinTransactionSchema = z.object({
  id: z.string(),
  is_confirmed: z.boolean(),
  tokens: z.number(),
})

export type BitcoinTransactionType = z.infer<typeof bitcoinTransactionSchema>

export const sendToOnChainResponseSchema = z.object({
  transaction: bitcoinTransactionSchema,
})

export type sendToOnChainResponseType = z.infer<
  typeof sendToOnChainResponseSchema
>

export const onChainTransactionSchema = z.object({
  block_id: z.string().optional(),
  confirmation_count: z.number().optional(),
  confirmation_height: z.number().optional(),
  created_at: z.string(),
  description: z.string().optional(),
  fee: z.number().optional(),
  id: z.string(),
  inputs: z.array(
    z.object({
      is_local: z.boolean(),
      transaction_id: z.string(),
      transaction_vout: z.number(),
    })
  ),
  is_confirmed: z.boolean(),
  is_outgoing: z.boolean(),
  output_addresses: z.array(z.string()),
  tokens: z.number(),
  transaction: z.string().optional(),
})

export type OnChainTransactionsype = z.infer<typeof onChainTransactionSchema>

export const getOnChainTransactionsResponseSchema = z.object({
  transactions: z.array(onChainTransactionSchema),
})

export type GetOnChainTransactionsResponseType = z.infer<
  typeof getOnChainTransactionsResponseSchema
>
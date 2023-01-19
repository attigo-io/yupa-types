import { z } from 'zod'

const nodeWalletInfoSchema = z.object({
  active_channels_count: z.number(),
  alias: z.string(),
  chains: z.array(z.string()),
  color: z.string(),
  current_block_hash: z.string(),
  current_block_height: z.number(),
  features: z.array(
    z.object({
      bit: z.number(),
      is_known: z.boolean(),
      is_required: z.boolean(),
      type: z.string(),
    })
  ),
  is_synced_to_chain: z.boolean(),
  latest_block_at: z.string(),
  peers_count: z.number(),
  pending_channels_count: z.number(),
  public_key: z.string(),
  version: z.string(),
})

export type nodeWalletInfoType = z.infer<typeof nodeWalletInfoSchema>

const getNodeWalletInfoResponseSchema = z.object({
  walletInfo: nodeWalletInfoSchema,
})

export type getWalletInfoResponseType = z.infer<
  typeof getNodeWalletInfoResponseSchema
>

const createNodeInvoiceSchema = z.object({
  chain_address: z.string().optional(),
  created_at: z.string(),
  description: z.string().optional(),
  id: z.string(),
  mtokens: z.string().optional(),
  payment: z.string().optional(),
  request: z.string(),
  secret: z.string(),
  tokens: z.number().optional(),
})

export type createNodeInvoiceType = z.infer<typeof createNodeInvoiceSchema>

const createNodeInvoiceResponseSchema = z.object({
  invoice: createNodeInvoiceSchema,
})

export type createNodeInvoiceResponseType = z.infer<
  typeof createNodeInvoiceResponseSchema
>

const payInvoiceWithNodeDataSchema = z.object({
  confirmed_at: z.string(),
  fee: z.number(),
  fee_mtokens: z.string(),
  hops: z.array(
    z.object({
      channel: z.string(),
      channel_capacity: z.number(),
      fee: z.number(),
      fee_mtokens: z.string(),
      forward_mtokens: z.string(),
      public_key: z.string(),
      timeout: z.number(),
    })
  ),
  id: z.string(),
  mtokens: z.string(),
  paths: z.array(
    z.object({
      fee_mtokens: z.string(),
      hops: z.array(
        z.object({
          channel: z.string(),
          channel_capacity: z.number(),
          fee: z.number(),
          fee_mtokens: z.string(),
          forward_mtokens: z.string(),
          public_key: z.string(),
          timeout: z.number(),
        })
      ),
      mtokens: z.string(),
    })
  ),
  safe_fee: z.number(),
  safe_tokens: z.number(),
  secret: z.string(),
  timeout: z.number(),
  tokens: z.number(),
})

export type payInvoiceWithNodeDataType = z.infer<
  typeof payInvoiceWithNodeDataSchema
>

const payInvoiceWithNodeResponseSchmea = z.object({
  payment: payInvoiceWithNodeDataSchema,
})

export type payInvoiceWithNodeResponseTypa = z.infer<
  typeof payInvoiceWithNodeResponseSchmea
>

import { z } from 'zod'

export const NodeOnChainAddresseSchema = z.object({
  address: z.string(),
  is_change: z.boolean(),
  tokens: z.number(),
})

export type  NodeOnChainAddresseType = z.infer<typeof NodeOnChainAddresseSchema>

export const GetNodeOnChainAddresseSchema = z.object({ 
    addresses: z.array(NodeOnChainAddresseSchema)
})

export type GetNodeOnChainAddresseType = z.infer<typeof GetNodeOnChainAddresseSchema>


export const CreateNodeOnChainAddresseSchema = z.object({
    addresse: z.string()
})

export type CreateNodeOnChainAddresseType = z.infer<typeof CreateNodeOnChainAddresseSchema>
import { z } from 'zod'

const walletSchema = z.object({
  id: z.string(),
  name: z.string(),
  user: z.string(),
  adminkey: z.string(),
  inkey: z.string(),
  balance_msat: z.string().or(z.number()).or(z.bigint()),
})

export type walletType = z.infer<typeof walletSchema>

const getWalletResponseSchema = z.object({
  wallet: walletSchema,
})

const getWalletsResponseSchema = z.object({
  wallets: z.array(walletSchema),
})

export type getWalletsType = z.infer<typeof getWalletsResponseSchema>

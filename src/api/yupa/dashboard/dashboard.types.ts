import { z } from 'zod'

export type getDahboardPaymentsPerWalletFromDbType = {
  wallet: string
  latest: string
  incom: number
  outcom: number
}

export type getDashboardBalancePerWalletFromDbType = {
  wallet: string
  balance: number
}

const apiPaymentSchema = z.object({
  checking_id: z.string(),
  amount: z.bigint().or(z.number()),
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

export type DashboardTransaction = {
  checking_id: string
  amount: bigint
  fee: number
  wallet: string
  pending: boolean
  memo: string | null
  time: Date
  hash: string | null
  preimage: string | null
  bolt11: string | null
  extra: string | null
  webhook: string | null
  webhook_status: string | null
}

export const allWalletsResumeSchema = z.object({
  total: z.number(),
  out: z.number(),
  in: z.number(),
})

export type dashboardAllWalletsResumeType = z.infer<
  typeof allWalletsResumeSchema
>

export const dashboardPerWalletDataSchema = z.object({
  wallet: z.string(),
  latest: z.string(),
  incom: z.number(),
  outcom: z.number(),
})

export type dashboardPerWalletDataType = z.infer<
  typeof dashboardPerWalletDataSchema
>

const getDahboardSchema = z.object({
  walletsData: z.array(dashboardPerWalletDataSchema),
  latestTransactions: z.array(apiPaymentSchema),
  allWalletsResume: allWalletsResumeSchema,
})

export type getResponseDahboardType = z.infer<typeof getDahboardSchema>

import { z } from "zod";

export type DashboardPaymentPerWallet = {
  wallet: string;
  latest: string;
  incom: number;
  outcom: number;
};

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
});

export type DashboardTransaction = {
  checking_id: string;
  amount: bigint;
  fee: number;
  wallet: string;
  pending: boolean;
  memo: string | null;
  time: Date;
  hash: string | null;
  preimage: string | null;
  bolt11: string | null;
  extra: string | null;
  webhook: string | null;
  webhook_status: string | null;
};

const getDahboardSchema = z.object({
  paymentsPerWallet: z.array(
    z.object({
      wallet: z.string(),
      latest: z.string(),
      incom: z.number(),
      outcom: z.number(),
    })
  ),
  latestTransactions: z.array(apiPaymentSchema),
});

export type getResponseDahboardType = z.infer<typeof getDahboardSchema> 
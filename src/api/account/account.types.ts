import { z } from 'zod'

export const yupaReferralCodeSchema = z.object({
  code: z.string(),
  user_id: z.string(),
  created_at: z.date().nullable(),
  last_used: z.date().nullable(),
})

export const yupaReferralProgrammeSchema = z.object({
  id: z.string(),
  name: z.string(),
  is_active: z.boolean(),
  msat_amount: z.number()
})

export type YupaReferralTypeProgrammeType = z.infer<typeof yupaReferralProgrammeSchema>

export type YupaReferralCodeType = z.infer<typeof yupaReferralCodeSchema>

export const getReferralCodeResponseBodySchema = z.object({
    referralCode: yupaReferralCodeSchema
})

export type getReferralCodeResponseType = z.infer<typeof getReferralCodeResponseBodySchema>

export const getReferralProgrammeResponseSchema = z.object({
    referralProgramme: yupaReferralProgrammeSchema
})

export type getReferralProgrammeResponseType = z.infer<typeof getReferralProgrammeResponseSchema>
import { z } from 'zod'

export interface createUserAttigoResponseType {
  data: {
    msg: string
    token: string
    id: string
    user: { id: string; email: string; role_id: number }
  }
}

const postLoginResponseSchema = z.object({
  token: z.string(),
  id: z.string(),
  refreshToken: z.string(),
  user: z.object({
    id: z.string(),
    email: z.string(),
    role_id: z.number(),
    name: z.string()
  }),
})

export type postLoginResponseType = z.infer<typeof postLoginResponseSchema>

export const postRefreshTokenResponseSchema = z.object({
  token: z.string(),
  id: z.string(),
  refreshToken: z.string(),
})

export type postRefreshTokenResponseType = z.infer<
  typeof postRefreshTokenResponseSchema
>

const getMeResponseSchema = z.object({
  user: z.object({
    id: z.string(),
    email: z.string(),
    role_id: z.number(),
    master_id: z.number().optional().nullable(),
    phone_number: z.string().optional().nullable(),
    country_code: z.string().optional().nullable(),
    company_id: z.number().optional().nullable(),
    is_authy_tfa: z.boolean().optional().nullable(),
    name: z.string(),
    is_email_verified: z.boolean(),
  }),
})

export type getMeResponseType = z.infer<typeof getMeResponseSchema>

const postRegisterResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
  user: z.object({
    id: z.string(),
    email: z.string().email(),
    role_id: z.string(),
    name: z.string()
  })
})

export type postRegisterResponseType = z.infer<typeof postRegisterResponseSchema>
import { z } from "zod";
import { yupaApiPaymentSchema } from "../payments/payments.types";

const posSchema =  z.object({
    id: z.string(),
    wallet: z.string(),
    name: z.string(),
    currency: z.string()
})

export type  posType = z.infer<typeof posSchema>

const getTpossResponseSchema = z.object({
    poss: z.array(posSchema)
})

export type getTpossResponseType = z.infer<typeof getTpossResponseSchema>

const getTposResponseSchema = z.object({
    pos: posSchema
})

export type getTposResponseType = z.infer<typeof getTposResponseSchema>

const createPosResponseSchema = getTposResponseSchema
export type createPosResponseType = getTposResponseType

const getPosTodayInvoicesSchema = z.object({
    payments: z.array(yupaApiPaymentSchema)
})

export type getPosTodayInvoicesType = z.infer<typeof getPosTodayInvoicesSchema>
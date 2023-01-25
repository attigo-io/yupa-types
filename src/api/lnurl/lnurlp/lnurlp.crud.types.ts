import { z } from "zod";

const lnurlPLinkSchema = z.object({
  id: z.number(),
  wallet: z.string(),
  description: z.string(),
  min: z.number(),
  served_meta: z.number(),
  served_pr: z.number(),
  webhook_url: z.string().nullable(),
  success_text: z.string().nullable(),
  success_url: z.string().nullable(),
  currency: z.string().nullable(),
  comment_chars: z.number().nullable(),
  max: z.number().nullable(),
});

export type lnurlPLinkType = z.infer<typeof lnurlPLinkSchema>;

const getLnurlPLinksResponseSchema = z.object({
  links: z.array(lnurlPLinkSchema),
});

export type getLnurlPLinksResponseType = z.infer<
  typeof getLnurlPLinksResponseSchema
>;

const getLnurlPLinkResponseSchema = z.object({
  link: lnurlPLinkSchema,
});

export type getLnurlPLinkResponseType = z.infer<
  typeof getLnurlPLinkResponseSchema
>;

const postLnurlPLinkResponseSchema = getLnurlPLinkResponseSchema;
export type postLnurlPLinkResponseType = getLnurlPLinkResponseType;

export type puttLnurlPLinkResponseType = getLnurlPLinkResponseType;
const putLnurlPLinkResponseSchema = getLnurlPLinkResponseSchema;

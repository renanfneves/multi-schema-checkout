import { z } from 'zod'

import { i18n } from '@/libs/i18n'

export const paymentInformationFormSchema = z.object({
  cardDetails: z
    .string()
    .min(1, {
      message: i18n.t('form.validation_messages.required_card_number', {
        ns: 'checkout',
      }),
    })
    .max(16, {
      message: i18n.t('form.validation_messages.card_number_too_long', {
        ns: 'checkout',
      }),
    }),
})

export type PaymentInformationForm = z.infer<
  typeof paymentInformationFormSchema
>

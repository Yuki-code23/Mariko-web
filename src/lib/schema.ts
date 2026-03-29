import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'お名前は必須です').max(50, 'お名前は50文字以内で入力してください'),
  email: z
    .string()
    .min(1, 'メールアドレスは必須です')
    .email('正しいメールアドレスを入力してください'),
  subject: z.string().min(1, '件名は必須です').max(100, '件名は100文字以内で入力してください'),
  message: z
    .string()
    .min(10, '内容は10文字以上で入力してください')
    .max(2000, '内容は2000文字以内で入力してください'),
});

export type ContactInput = z.infer<typeof contactSchema>;

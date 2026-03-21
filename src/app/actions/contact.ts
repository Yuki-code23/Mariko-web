'use server';

import { contactSchema } from '@/lib/schema';

export async function submitContact(formData: FormData) {
  // Mock delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      error: '入力内容に誤りがあります',
      details: parsed.error.flatten().fieldErrors,
    };
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log('--- お問い合わせ受信 ---');
    console.log(parsed.data);
  }

  return {
    success: true,
    message: 'お問い合わせを受け付けました。内容を確認次第ご連絡いたします。',
  };
}

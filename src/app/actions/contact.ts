'use server';

import { contactSchema } from '@/lib/schema';
import nodemailer from 'nodemailer';

export async function submitContact(formData: FormData) {
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

  const { name, email, subject, message } = parsed.data;

  // Gmail SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    // 1. 管理者宛ての通知メール
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `【お問い合わせ】${subject}`,
      text: `サイトからお問い合わせがありました。
      
お名前: ${name}
メールアドレス: ${email}
件名: ${subject}

【お問い合わせ内容】
${message}
`,
    });

    // 2. ユーザー宛ての自動返信メール
    await transporter.sendMail({
      from: `"きっかけ番長☆てんつくマン オフィシャルサイト" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `【自動返信】お問い合わせを受け付けました`,
      text: `${name} 様

この度は「きっかけ番長☆てんつくマン オフィシャルサイト」へお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを受け付けました。
担当者より内容を確認のうえ、順次ご返信させていただきますので、今しばらくお待ちください。

──────────────────────────
お名前: ${name} 様
メールアドレス: ${email}
件名: ${subject}

【お問い合わせ内容】
${message}
──────────────────────────

※このメールは送信専用アドレスから自動配信されています。
お心当たりのない場合やご不明な点がございましたら、本メールにご返信いただいても対応できかねる場合がございます。
`,
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('--- お問い合わせ送信完了 ---');
      console.log(parsed.data);
    }

    return {
      success: true,
      message: 'お問い合わせを受け付けました。内容を確認次第ご連絡いたします。',
    };
  } catch (error) {
    console.error('メール送信エラー:', error);
    return {
      success: false,
      error: 'メールの送信に失敗しました。時間をおいて再度お試しください。',
    };
  }
}

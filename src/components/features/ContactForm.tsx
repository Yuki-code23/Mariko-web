'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactInput } from '@/lib/schema';
import { submitContact } from '@/app/actions/contact';

export function ContactForm() {
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ type: 'idle' });
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus({ type: 'loading' });
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => formData.append(k, v));
      const res = await submitContact(formData);
      
      if (res.success) {
        setStatus({ type: 'success', message: res.message });
        reset();
      } else {
        setStatus({ type: 'error', message: res.error });
      }
    } catch {
      setStatus({ type: 'error', message: '予期せぬエラーが発生しました。時間をおいて再試行してください。' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-2xl mx-auto bg-background p-8 rounded-2xl shadow-xl border border-foreground/5">
      <FormField id="name" label="お名前" error={errors.name?.message}>
        <input id="name" {...register('name')} className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all" placeholder="山田 太郎" disabled={status.type === 'loading'} />
      </FormField>
      <FormField id="email" label="メールアドレス" error={errors.email?.message}>
        <input type="email" id="email" {...register('email')} className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all" placeholder="example@example.com" disabled={status.type === 'loading'} />
      </FormField>
      <FormField id="subject" label="件名" error={errors.subject?.message}>
        <input id="subject" {...register('subject')} className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all" placeholder="講演の依頼について" disabled={status.type === 'loading'} />
      </FormField>
      <FormField id="message" label="内容" error={errors.message?.message}>
        <textarea id="message" {...register('message')} rows={5} className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all" placeholder="お問い合わせ内容をご入力ください" disabled={status.type === 'loading'} />
      </FormField>
      
      {status.message && (
        <div className={`p-4 rounded-lg font-bold text-center ${status.type === 'success' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-pink/10 text-brand-pink'}`}>
          {status.message}
        </div>
      )}
      
      <button type="submit" disabled={status.type === 'loading'} className="mt-4 bg-brand-orange-light text-white font-bold py-4 rounded-full transition-all hover:bg-brand-orange-dark disabled:opacity-50 disabled:cursor-not-allowed">
        {status.type === 'loading' ? '送信中...' : '送信する'}
      </button>
    </form>
  );
}

function FormField({ id, label, error, children }: { id: string, label: string, error?: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-sm text-foreground/80">{label}</label>
      {children}
      {error && <p className="text-brand-pink text-xs font-bold">{error}</p>}
    </div>
  );
}

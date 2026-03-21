import { ContactForm } from '@/components/features/ContactForm';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-foreground/5 text-foreground relative border-t border-foreground/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4 tracking-tight">問合せ</h2>
          <p className="opacity-80">サービスに関することなどお気軽にご相談ください</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

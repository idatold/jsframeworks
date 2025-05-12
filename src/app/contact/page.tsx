import { metadata as rootMeta } from "../layout";
import { chango, robotoMono } from "@/lib/fonts";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  ...rootMeta,
  title: "Contact Us – Pistachio",
};

export default function ContactPage() {
  return (
    <main className={`${robotoMono.className} container mx-auto px-4 py-8`}>
      <h1 className={`${chango.className} text-3xl font-bold mb-6`}>
        Contact Us
      </h1>
      <ContactForm />
    </main>
  );
}

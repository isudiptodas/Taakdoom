import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Taakdoom",
  description: "Learn how Taakdoom collects, uses, and protects information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="min-h-screen bg-black px-5 py-6 text-white sm:px-8 lg:px-16">
        <article className="mx-auto max-w-4xl py-14 sm:py-20">
        <Link href="/" className="mb-10 inline-block text-sm text-white/55 transition-colors hover:text-white">
          Go back
        </Link>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d7005d]">Legal</p>
        <h1 className="font-Lemon text-4xl leading-tight sm:text-6xl">Privacy Policy</h1>
        <p className="mt-5 text-sm text-white/55">Effective date: August 27, 2026</p>

        <div className="mt-12 space-y-10 text-base leading-8 text-white/75">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Our commitment to privacy</h2>
            <p>
              Taakdoom respects your privacy and is committed to handling your information responsibly.
              This policy explains what we collect when you use our website, why we collect it, and the
              choices available to you.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Information we collect</h2>
            <p>
              When you contact us, we may collect your name, email address, company, and the message or
              project details you choose to provide. We may also receive basic technical information,
              such as browser type, device information, and pages visited, to keep the website secure and
              improve its experience.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">How we use information</h2>
            <p>
              We use information to respond to enquiries, understand project requirements, provide our
              services, maintain and improve the website, prevent misuse, and meet legal obligations. We
              do not sell your personal information.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Sharing and retention</h2>
            <p>
              Information is shared only with trusted service providers who help us operate the website
              or deliver our services, where necessary and under appropriate safeguards. We retain
              information only for as long as needed for the purposes described here or as required by law.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Your choices</h2>
            <p>
              You may ask us to access, correct, or delete personal information you have provided. To
              make a request or ask a privacy question, please use the contact details available on our
              website. We may need to verify your identity before completing a request.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Policy updates</h2>
            <p>
              We may update this policy when our practices or legal requirements change. The latest
              version will always be published on this page with its effective date.
            </p>
          </section>
        </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Taakdoom",
  description: "The terms that apply to using the Taakdoom website.",
};

export default function TermsOfUse() {
  return (
    <>
      <main className="min-h-screen bg-black px-5 py-6 text-white sm:px-8 lg:px-16">
        <article className="mx-auto max-w-4xl py-14 sm:py-20">
        <Link href="/" className="mb-10 inline-block text-sm text-white/55 transition-colors hover:text-white">
          Go back
        </Link>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d7005d]">Legal</p>
        <h1 className="font-Lemon text-4xl leading-tight sm:text-6xl">Terms of Use</h1>
        <p className="mt-5 text-sm text-white/55">Effective date: August 27, 2026</p>

        <div className="mt-12 space-y-10 text-base leading-8 text-white/75">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Acceptance of these terms</h2>
            <p>
              By accessing or using the Taakdoom website, you agree to these Terms of Use. If you do not
              agree with them, please do not use the website.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Website content</h2>
            <p>
              The website and its content are provided for general information about Taakdoom, our work,
              and our services. Content may change without notice and is not a substitute for a written
              project proposal, contract, or professional advice.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Acceptable use</h2>
            <p>
              You agree not to misuse the website, interfere with its operation, attempt unauthorized
              access, introduce malicious code, or use its content in a way that violates applicable law
              or the rights of others.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Intellectual property</h2>
            <p>
              Unless stated otherwise, the Taakdoom name, logo, original text, graphics, videos, and
              other materials on this website belong to Taakdoom or are used with permission. You may
              view the website for personal or internal business purposes, but you may not reproduce,
              distribute, or adapt its content without prior written permission.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Disclaimers and liability</h2>
            <p>
              We aim to keep the website accurate and available, but we do not guarantee that it will
              always be complete, uninterrupted, or error-free. To the extent permitted by law, Taakdoom
              is not liable for losses arising from your use of, or reliance on, the website.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Changes and contact</h2>
            <p>
              We may revise these terms from time to time. Continued use of the website after an update
              means you accept the revised terms. Questions about these terms can be sent through our
              website contact form.
            </p>
          </section>
        </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

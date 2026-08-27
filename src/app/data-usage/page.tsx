import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Usage | Taakdoom",
  description: "Understand how Taakdoom uses data to operate and improve its website.",
};

export default function DataUsage() {
  return (
    <>
      <main className="min-h-screen bg-black px-5 py-6 text-white sm:px-8 lg:px-16">
        <article className="mx-auto max-w-4xl py-14 sm:py-20">
        <Link href="/" className="mb-10 inline-block text-sm text-white/55 transition-colors hover:text-white">
          Go back
        </Link>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d7005d]">Legal</p>
        <h1 className="font-Lemon text-4xl leading-tight sm:text-6xl">Data Usage</h1>
        <p className="mt-5 text-sm text-white/55">Effective date: August 27, 2026</p>

        <div className="mt-12 space-y-10 text-base leading-8 text-white/75">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">What this page covers</h2>
            <p>
              This page explains how information is used across Taakdoom&apos;s website and enquiry
              process. It should be read together with our <Link href="/privacy-policy" className="text-white underline underline-offset-4">Privacy Policy</Link>.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Enquiry data</h2>
            <p>
              Details submitted through our contact form are used to understand your request, reply to
              you, prepare relevant information, and coordinate a potential engagement. We limit access
              to people and providers who need it for these purposes.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Technical data</h2>
            <p>
              Basic technical and usage information may be used to monitor performance, troubleshoot
              problems, protect the website from abuse, and understand which areas are useful to visitors.
              We use this information in aggregate where possible.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Cookies and similar tools</h2>
            <p>
              The website may use essential browser storage or similar technologies to support reliable
              operation. If analytics or other optional tools are introduced, we will provide appropriate
              notice and choices where required by applicable law.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Security and retention</h2>
            <p>
              We use reasonable administrative and technical safeguards appropriate to the information
              we handle. No online service can guarantee absolute security. Data is kept only as long as
              it is needed for legitimate business, operational, or legal purposes.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">Questions about your data</h2>
            <p>
              If you want to understand, update, or remove information you have shared with us, contact
              Taakdoom through the website. We will review and respond to requests in accordance with
              applicable law.
            </p>
          </section>
        </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ShieldAlert,
  Users,
  CreditCard,
  Scale,
  CheckCircle2,
  Mail,
  HelpCircle,
} from "lucide-react";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { CHURCH } from "@/components/content";

export const metadata: Metadata = {
  title: "Terms of Use | All Souls' Church, Lekki",
  description:
    "Review the Terms of Use governing your access to the All Souls' Church, Lekki website, member mobile app, digital kiosk, and community services.",
};

export default function TermsOfUsePage() {
  return (
    <PolicyPageLayout
      badge="Terms & Conditions"
      title="Terms of Use"
      subtitle="The agreement and guidelines governing your access to and participation on the digital platforms of All Souls' Church, Lekki."
      lastUpdated="November 2026"
      icon={FileText}
    >
      <div className="space-y-10 text-[#56575d]">
        {/* Intro */}
        <div>
          <p className="text-base leading-relaxed sm:text-lg">
            Welcome to the digital platforms of{" "}
            <strong className="text-[#192C58]">{CHURCH.name}</strong> (
            {CHURCH.affiliation}). These Terms of Use constitute a binding legal
            agreement between you and All Souls&apos; Church, Lekki. By accessing
            or using our website, our member mobile application, or our parish
            kiosk, you acknowledge that you have read, understood, and agree to
            be bound by these terms.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              1
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Eligibility & User Accounts
            </h2>
          </div>
          <p className="leading-relaxed">
            When creating an account on the All Souls&apos; Church mobile application
            or member portal, you agree to:
          </p>
          <ul className="space-y-2.5 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                Provide truthful, accurate, and current personal information.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                Maintain the confidentiality of your login credentials and
                passwords.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                Promptly notify the church office of any unauthorized access or
                security breach concerning your account.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              2
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Christian Fellowship & Community Guidelines
            </h2>
          </div>
          <p className="leading-relaxed">
            Our digital community exists to foster Christian fellowship, spiritual
            growth, and mutual edification. When posting in member forums,
            prayer circles, event comments, or group chats, you agree not to:
          </p>
          <ul className="space-y-2.5 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                Publish or transmit content that is defamatory, abusive,
                harassing, hateful, or contrary to Christian conduct and morals.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                Post unsolicited commercial advertisements, spam, pyramid
                schemes, or unauthorized promotional material.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                Impersonate clergy, church wardens, staff, or other
                parishioners.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                Attempt to hack, reverse engineer, or compromise the security of
                our systems or member databases.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              3
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Tithes, Offerings & Donations
            </h2>
          </div>
          <p className="leading-relaxed">
            Giving through our online portal, kiosk, or mobile app is voluntary.
            All contributions (tithes, thanksgiving, pledges, harvests, and
            welfare donations) are received in faith and dedicated to the mission,
            ministry, and operational upkeep of All Souls&apos; Church, Lekki.
          </p>
          <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
            <h3 className="font-bold text-[#192C58]">Contribution Policy:</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#56575d]">
              In the event of an inadvertent technical error (such as a double
              debit during an online transaction), please contact the church
              accounting office within 7 business days with proof of transaction
              for prompt investigation and reversal.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              4
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Intellectual Property
            </h2>
          </div>
          <p className="leading-relaxed">
            All sermons, audio-visual recordings, parish logos, emblems,
            bulletin texts, and proprietary software code are the intellectual
            property of All Souls&apos; Church, Lekki, the Diocese of Lagos, or our
            technology partners. You may download and share devotional and
            public sermon media for personal, non-commercial spiritual use,
            provided proper attribution is preserved.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              5
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Account Termination & Deletion
            </h2>
          </div>
          <p className="leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate
            these Terms or engage in conduct harmful to parish members. You may
            also voluntarily close or delete your account at any time. For
            instructions on permanent account removal, review our{" "}
            <Link
              href="/account-and-data-deletion"
              className="font-bold text-[#2c4e9c] underline hover:text-[#192C58]"
            >
              Account and Data Deletion instructions
            </Link>
            .
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              6
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Governing Law
            </h2>
          </div>
          <p className="leading-relaxed">
            These terms are governed by and construed in accordance with the
            laws of the Federal Republic of Nigeria, without regard to conflict
            of law principles.
          </p>
        </section>

        {/* Contact Callout */}
        <div className="rounded-2xl border border-[#2c4e9c]/20 bg-[#E8EFFF]/60 p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-lg font-bold text-[#192C58]">
            <HelpCircle size={20} className="text-[#2c4e9c]" />
            Questions Regarding Terms?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#56575d]">
            For inquiries, legal notices, or clarifications regarding these
            Terms of Use, please contact:
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
            <a
              href={`mailto:${CHURCH.email}`}
              className="inline-flex items-center gap-2 font-bold text-[#2c4e9c] hover:underline"
            >
              <Mail size={16} />
              {CHURCH.email}
            </a>
            <span className="text-[#56575d]">{CHURCH.address}</span>
          </div>
        </div>
      </div>
    </PolicyPageLayout>
  );
}

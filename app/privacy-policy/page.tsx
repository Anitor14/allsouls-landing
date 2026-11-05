import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  CreditCard,
  UserCheck,
  Bell,
  Mail,
  HelpCircle,
} from "lucide-react";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { CHURCH } from "@/components/content";

export const metadata: Metadata = {
  title: "Privacy Policy | All Souls' Church, Lekki",
  description:
    "Learn how All Souls' Church, Lekki collects, uses, protects, and handles your personal information across our website, mobile app, and member services.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageLayout
      badge="Data Protection & Privacy"
      title="Privacy Policy"
      subtitle="How All Souls' Church, Lekki protects and respects your personal data across our digital platforms, mobile application, and parish community."
      lastUpdated="November 2026"
      icon={ShieldCheck}
    >
      <div className="space-y-10 text-[#56575d]">
        {/* Intro */}
        <div>
          <p className="text-base leading-relaxed sm:text-lg">
            At <strong className="text-[#192C58]">{CHURCH.name}</strong> (
            {CHURCH.affiliation}), we are committed to safeguarding the privacy
            and personal data of our parishioners, visitors, benefactors, and
            community members. This Privacy Policy outlines our practices
            regarding the collection, use, disclosure, and protection of your
            information when you visit our website, use our mobile application,
            interact with our digital kiosk, or engage with our parish services.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              1
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Information We Collect
            </h2>
          </div>
          <p className="leading-relaxed">
            We collect information that you voluntarily provide to us when
            registering for the parish app, requesting pastoral support, giving,
            or participating in church activities:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-[#192C58]">
                <UserCheck size={18} className="text-[#2c4e9c]" />
                Personal Profile & Contact
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#56575d]">
                Full name, email address, phone number, residential address,
                date of birth, gender, marital status, and family/household
                members.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-[#192C58]">
                <Eye size={18} className="text-[#2c4e9c]" />
                Parish & Ministry Data
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#56575d]">
                Societies or fellowship groups joined, prayer requests,
                testimonies, appointment bookings with clergy, and Sunday
                school or youth records.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-[#192C58]">
                <CreditCard size={18} className="text-[#2c4e9c]" />
                Giving & Contributions
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#56575d]">
                Records of tithes, offerings, pledges, and project donations. We
                do not store full payment card numbers or bank security codes;
                transactions are securely handled by PCI-DSS compliant payment
                gateways.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-[#192C58]">
                <Lock size={18} className="text-[#2c4e9c]" />
                Technical & Device Details
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#56575d]">
                Device type, operating system version, push notification tokens,
                crash diagnostics, and basic app interaction logs to ensure
                stability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              2
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              How We Use Your Information
            </h2>
          </div>
          <p className="leading-relaxed">
            Your data is used strictly in furtherance of church worship, pastoral
            fellowship, and church administration, including:
          </p>
          <ul className="space-y-2.5 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                <strong>Pastoral Care:</strong> Enabling clergy and pastoral
                visitors to minister to you, visit sick parishioners, and pray
                over submitted intentions.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                <strong>Financial Accounting:</strong> Acknowledging and
                receipting tithes, project pledges, and charitable donations in
                compliance with parish audit standards.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                <strong>Parish Communication:</strong> Sending weekly bulletins,
                service times, devotionals, event invitations, and parish
                announcements.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                <strong>Community Directory:</strong> Allowing opted-in members
                to connect with fellow parishioners through controlled directory
                settings.
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
              Data Sharing & Disclosures
            </h2>
          </div>
          <p className="leading-relaxed">
            <strong className="text-[#192C58]">
              We do not sell, rent, or trade your personal information.
            </strong>{" "}
            We only share data with:
          </p>
          <ul className="space-y-2.5 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                <strong>Parish Clergy & Administrators:</strong> Authorized
                personnel who require access to carry out pastoral and parish
                responsibilities.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                <strong>Vetted Technology Partners:</strong> Secure service
                providers (such as cloud hosting, email delivery, and certified
                payment gateways) operating under strict data processing and
                confidentiality agreements.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                <strong>Legal Requirements:</strong> If required by Nigerian law
                or diocesan disciplinary directives, to protect safety and legal
                rights.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              4
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Data Protection & Security
            </h2>
          </div>
          <p className="leading-relaxed">
            We implement industry-standard technical and organizational security
            measures, including SSL/TLS encryption for all data in transit,
            restricted database access, and regular vulnerability assessments.
            We align our practices with the Nigeria Data Protection Act (NDPA)
            and applicable data privacy standards.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              5
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Your Rights & Account Deletion
            </h2>
          </div>
          <p className="leading-relaxed">
            You hold complete rights over your personal data:
          </p>
          <ul className="space-y-2.5 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                You may review, update, or correct your personal profile anytime
                directly within the mobile app.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                You may opt out of promotional notifications and directory
                listings.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2c4e9c]" />
              <span>
                You may request complete account and data deletion at any time.
                Please visit our dedicated{" "}
                <Link
                  href="/account-and-data-deletion"
                  className="font-bold text-[#2c4e9c] underline hover:text-[#192C58]"
                >
                  Account and Data Deletion page
                </Link>{" "}
                for step-by-step instructions.
              </span>
            </li>
          </ul>
        </section>

        {/* Contact Callout */}
        <div className="rounded-2xl border border-[#2c4e9c]/20 bg-[#E8EFFF]/60 p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-lg font-bold text-[#192C58]">
            <HelpCircle size={20} className="text-[#2c4e9c]" />
            Questions or Privacy Requests?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#56575d]">
            If you have questions, comments, or wish to exercise any of your data
            rights under this policy, please reach out to our parish
            administration:
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


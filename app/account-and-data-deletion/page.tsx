import type { Metadata } from "next";
import Link from "next/link";
import {
  Trash2,
  Smartphone,
  Mail,
  AlertTriangle,
  Clock,
  CheckCircle2,
  FileText,
  Shield,
  HelpCircle,
} from "lucide-react";
import PolicyPageLayout from "@/components/PolicyPageLayout";
import { CHURCH } from "@/components/content";

export const metadata: Metadata = {
  title: "Account and Data Deletion | All Souls' Church, Lekki",
  description:
    "Instructions on how to delete your account and associated personal data from the All Souls' Church, Lekki mobile app and online platform.",
};

export default function AccountAndDataDeletionPage() {
  return (
    <PolicyPageLayout
      badge="Account & Data Rights"
      title="Account and Data Deletion"
      subtitle="Clear instructions on how to delete your parish app account and associated personal data from our servers."
      lastUpdated="November 2026"
      icon={Trash2}
    >
      <div className="space-y-10 text-[#56575d]">
        {/* Intro */}
        <div>
          <p className="text-base leading-relaxed sm:text-lg">
            At <strong className="text-[#192C58]">{CHURCH.name}</strong>, we
            respect your control over your personal information. In compliance
            with Apple App Store guidelines, Google Play policies, and the
            Nigeria Data Protection Act (NDPA), you have the right to request
            the permanent deletion of your mobile app account and associated
            personal data at any time.
          </p>
        </div>

        {/* Step-by-Step Options */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              1
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Option A: Delete Directly in the Mobile App (Recommended)
            </h2>
          </div>
          <p className="leading-relaxed">
            You can delete your account yourself from within the mobile app in a
            few simple steps:
          </p>

          <ol className="relative space-y-4 border-l-2 border-[#E8EFFF] pl-6 ml-3">
            <li className="relative">
              <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2c4e9c] text-xs font-bold text-white">
                1
              </span>
              <h3 className="font-bold text-[#192C58]">Open the App</h3>
              <p className="mt-1 text-sm text-[#56575d]">
                Launch the <strong>All Souls&apos; Church App</strong> on your device
                and ensure you are signed in.
              </p>
            </li>

            <li className="relative">
              <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2c4e9c] text-xs font-bold text-white">
                2
              </span>
              <h3 className="font-bold text-[#192C58]">
                Go to Profile / Settings
              </h3>
              <p className="mt-1 text-sm text-[#56575d]">
                Tap the <strong>Profile</strong> tab in the bottom navigation,
                then tap <strong>Settings</strong> (or the gear icon).
              </p>
            </li>

            <li className="relative">
              <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2c4e9c] text-xs font-bold text-white">
                3
              </span>
              <h3 className="font-bold text-[#192C58]">Select Security & Account</h3>
              <p className="mt-1 text-sm text-[#56575d]">
                Navigate to <strong>Account & Security</strong> and locate the{" "}
                <strong>Delete Account</strong> option at the bottom.
              </p>
            </li>

            <li className="relative">
              <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2c4e9c] text-xs font-bold text-white">
                4
              </span>
              <h3 className="font-bold text-[#192C58]">Confirm Deletion</h3>
              <p className="mt-1 text-sm text-[#56575d]">
                Review the warning prompt, enter your password or verification
                code to verify ownership, and tap{" "}
                <strong>Confirm Permanent Deletion</strong>.
              </p>
            </li>
          </ol>
        </section>

        {/* Option B: Web / Email */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              2
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              Option B: Request Deletion via Email
            </h2>
          </div>
          <p className="leading-relaxed">
            If you no longer have access to the mobile application or have
            already uninstalled it, you can submit a manual deletion request by
            emailing our parish office.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-6">
            <h3 className="font-bold text-[#192C58]">
              Send an email to:{" "}
              <a
                href={`mailto:${CHURCH.email}?subject=Account%20and%20Data%20Deletion%20Request`}
                className="text-[#2c4e9c] underline"
              >
                {CHURCH.email}
              </a>
            </h3>
            <p className="mt-2 text-sm text-[#56575d]">
              Please include the following in your email:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#56575d]">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#059669]" />
                <strong>Subject line:</strong> &ldquo;Account & Data Deletion
                Request&rdquo;
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#059669]" />
                <strong>Your full name</strong> as registered on your account
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#059669]" />
                <strong>Your registered phone number and email address</strong>
              </li>
            </ul>
            <p className="mt-4 text-xs text-[#848F9F]">
              Our administrative team will verify your identity to prevent
              unauthorized deletion and process your request within 7 to 14
              business days.
            </p>
          </div>
        </section>

        {/* What gets deleted vs retained */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] font-bold">
              3
            </span>
            <h2 className="text-xl font-bold text-[#192C58] sm:text-2xl">
              What Happens When Your Account is Deleted
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-5">
              <h3 className="flex items-center gap-2 font-bold text-emerald-950">
                <CheckCircle2 size={18} className="text-emerald-600" />
                Data That is Permanently Deleted
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-emerald-900/80">
                <li>• Your name, phone number, and email address</li>
                <li>• Profile photo and household/family links</li>
                <li>• Authentication credentials and active login tokens</li>
                <li>• Private messages, prayer requests, and testimonies</li>
                <li>• App notification preferences and event bookmarks</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5">
              <h3 className="flex items-center gap-2 font-bold text-amber-950">
                <AlertTriangle size={18} className="text-amber-600" />
                Data Retained for Statutory Compliance
              </h3>
              <p className="mt-3 text-sm text-amber-900/80 leading-relaxed">
                Official financial donation records, tithe history, and
                electronic receipts cannot be immediately destroyed because
                Nigerian charity regulations, parish audit standards, and tax
                laws require financial ledgers to be retained for statutory
                accounting periods. These records are permanently disassociated
                from your active app credentials.
              </p>
            </div>
          </div>
        </section>

        {/* Reversibility Notice */}
        <div className="flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50/60 p-5 text-red-900">
          <AlertTriangle size={24} className="mt-0.5 shrink-0 text-red-600" />
          <div className="text-sm">
            <strong className="block font-bold">Deletion is Permanent:</strong>
            Once your account is deleted, it cannot be restored. If you wish to
            use the All Souls&apos; Church mobile application in the future, you will
            need to register a fresh account.
          </div>
        </div>

        {/* Contact Callout */}
        <div className="rounded-2xl border border-[#2c4e9c]/20 bg-[#E8EFFF]/60 p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-lg font-bold text-[#192C58]">
            <HelpCircle size={20} className="text-[#2c4e9c]" />
            Need Assistance with Account Deletion?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#56575d]">
            If you encounter any issues during the deletion process or need help
            removing your data, please contact our parish office:
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


import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, type LucideIcon } from "lucide-react";
import LandingNav from "./LandingNav";
import LandingFooter from "./LandingFooter";

interface PolicyPageLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const PolicyPageLayout: React.FC<PolicyPageLayoutProps> = ({
  badge,
  title,
  subtitle,
  lastUpdated,
  icon: Icon,
  children,
}) => {
  return (
    <div className="landing min-h-screen bg-[#F8FAFC]">
      <LandingNav />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0e1a38] via-[#192c58] to-[#223e80] pt-32 pb-16 text-white md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(54,95,190,0.45),transparent_65%)] pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="mt-6 flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8EFFF]/15 text-[#fde68a]">
              <Icon size={18} />
            </span>
            <span className="eyebrow text-[#fde68a]">{badge}</span>
          </div>

          <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-300">
            <Clock size={14} className="text-[#f5c84c]" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_-10px_rgba(14,26,56,0.06)] sm:p-10 md:p-12">
          {children}
        </article>
      </main>

      <LandingFooter />
    </div>
  );
};

export default PolicyPageLayout;


import { CSSProperties } from "react";
import Image from "next/image";
import {
  BadgeCheck,
  Check,
  CreditCard,
  EyeOff,
  Fingerprint,
  Gift,
  HeartHandshake,
  House,
  Mail,
  MessageCircle,
  ShieldCheck,
  Users,
  UserPlus,
  Video,
  Wallet,
} from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import {
  APP_STORE_URL,
  CHURCH,
  FEATURE_TILES,
  PLAY_STORE_URL,
  TFeatureTile,
  TLandingData,
} from "./content";

const MEMBER_POINTS = [
  "Daily verse, Bible study and the weekly bulletin",
  "Tithes, offerings and project giving with full history",
  "Prayer requests, clergy access and parish chat groups",
  "Events, sermons, hall booking and Vestry elections",
];

const KIOSK_POINTS = [
  "New worshipers register right at the door",
  "Give tithes and offerings securely on the spot",
  "Birthdays, announcements and the weekly bulletin at a glance",
  "Events, church needs and volunteer sign-ups",
];

const ADMIN_POINTS = [
  "Member records, families and bulk registration",
  "Wallet, transactions and giving categories",
  "SMS, email and in-app broadcasts",
  "Elections, media, support tickets and a full audit trail",
];

const ADMIN_NAV = [
  { label: "Dashboard", icon: House },
  { label: "Members", icon: Users },
  { label: "Wallet", icon: Wallet },
  { label: "Events", icon: MessageCircle },
  { label: "Media", icon: Video },
];

const ADMIN_STATS = [
  { label: "Members", value: "1,248" },
  { label: "This month", value: "₦4.2m" },
  { label: "Prayer requests", value: "36" },
];

const GIVING_BARS = [
  { name: "Tithes", width: "82%", color: "#2c4e9c" },
  { name: "Offering", width: "64%", color: "#0D9488" },
  { name: "Building Funds", width: "48%", color: "#6366F1" },
  { name: "Welfare", width: "30%", color: "#15803D" },
];

const WEEKLY_ATTENDANCE = [46, 60, 54, 72, 66, 84, 78, 94];

const TRUST_POINTS = [
  {
    icon: CreditCard,
    title: "Secure giving",
    description:
      "Payments run through licensed, PCI-DSS compliant gateways such as Paystack.",
  },
  {
    icon: EyeOff,
    title: "Your card stays yours",
    description:
      "We never store card numbers, CVVs or bank PINs on our servers.",
  },
  {
    icon: Fingerprint,
    title: "Biometrics on your device",
    description:
      "Face ID and fingerprint login stay on your phone and never reach us.",
  },
  {
    icon: ShieldCheck,
    title: "Never sold",
    description:
      "Your data is not sold or shared with advertisers, and you can delete your account at any time.",
  },
];

const CheckList = ({ points }: { points: string[] }) => (
  <ul className="mt-6 space-y-3">
    {points.map((point) => (
      <li key={point} className="flex gap-3 text-[#56575d]">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFFF] text-[#2c4e9c]">
          <Check size={14} strokeWidth={3} />
        </span>
        {point}
      </li>
    ))}
  </ul>
);

const KioskMockup = ({
  verse,
  theme,
}: Pick<TLandingData, "verse" | "theme">) => (
  <div aria-hidden className="mx-auto w-full max-w-[560px]">
    <div className="rounded-[28px] bg-[#0D111C] p-3 shadow-[0_40px_70px_-30px_rgb(14_26_56/0.75)]">
      <div className="overflow-hidden rounded-[18px] bg-[#F8FAFC] p-4">
        <div className="flex items-center justify-between">
          <Image
            src="/images/church-logo.png"
            alt=""
            width={866}
            height={140}
            className="h-5 w-auto"
          />
          <span className="rounded-lg bg-[#2c4e9c] px-2.5 py-1.5 text-[10px] font-bold text-white">
            Weekly Bulletin
          </span>
        </div>
        <div className="mt-3 overflow-hidden rounded-xl bg-linear-to-r from-[#2c4e9c] via-[#1e3a8a] to-[#2c4e9c] px-3 py-2 text-[11px] font-bold text-white">
          <span className="mr-2 rounded-full bg-white/20 px-2 py-0.5 text-[9px] text-amber-200">
            Theme
          </span>
          {theme ?? "Welcome to All Souls' Church"}
        </div>
        <div className="mt-3 grid grid-cols-[1.15fr_1fr] gap-3">
          <div className="rounded-2xl bg-linear-to-b from-[#192C58] to-[#365FBE] p-3.5 text-white">
            <p className="text-xs font-bold">Verse of the Day</p>
            <p className="mt-2 line-clamp-4 text-[10.5px] leading-relaxed italic">
              &ldquo;{verse.text}&rdquo;
            </p>
            <p className="mt-2 text-right text-[11px] font-bold">
              {verse.reference}
            </p>
          </div>
          <div className="grid gap-2">
            {[
              { title: "New Worshiper", icon: UserPlus },
              { title: "Give", icon: Gift },
              { title: "Church Needs", icon: HeartHandshake },
            ].map((card) => (
              <div
                key={card.title}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-2"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#2c4e9c]">
                  <card.icon size={15} />
                </span>
                <span className="text-[11px] font-bold text-[#2B3A67]">
                  {card.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto h-12 w-20 bg-linear-to-b from-[#1f2a44] to-[#39476b]" />
    <div className="mx-auto h-3 w-52 rounded-t-xl bg-[#1f2a44]" />
  </div>
);

const AdminMockup = () => (
  <div
    aria-hidden
    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_40px_70px_-30px_rgb(14_26_56/0.6)]"
  >
    <div className="flex items-center gap-1.5 border-b border-slate-100 bg-[#F8FAFC] px-3 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
      <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-[10px] text-[#616161]">
        admin.allsoulslekki.church/dashboard
      </span>
    </div>
    <div className="grid grid-cols-[112px_1fr] sm:grid-cols-[148px_1fr]">
      <div className="space-y-1 border-r border-slate-100 p-2.5">
        <Image
          src="/images/church-logo.png"
          alt=""
          width={866}
          height={140}
          className="mb-2 h-auto w-full"
        />
        {ADMIN_NAV.map((item, index) => (
          <div
            key={item.label}
            className={
              index === 0
                ? "flex items-center gap-2 rounded-lg bg-[#2c4e9c] px-2 py-1.5 text-[10px] font-bold text-white"
                : "flex items-center gap-2 rounded-lg px-2 py-1.5 text-[10px] font-bold text-[#56575d]"
            }
          >
            <item.icon size={13} />
            {item.label}
          </div>
        ))}
      </div>
      <div className="min-w-0 p-3 sm:p-4">
        <div className="grid grid-cols-3 gap-2">
          {ADMIN_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-100 p-2"
            >
              <p className="truncate text-[9px] text-[#616161]">{stat.label}</p>
              <p className="mt-0.5 text-sm font-bold text-[#141415] sm:text-base">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-100 p-2.5">
            <p className="text-[10px] font-bold">Giving by category</p>
            <div className="mt-2 space-y-1.5">
              {GIVING_BARS.map((bar, index) => (
                <div key={bar.name}>
                  <p className="text-[9px] text-[#616161]">{bar.name}</p>
                  <div className="h-1.5 rounded-full bg-[#F1F5F9]">
                    <div
                      className="bar-grow h-full rounded-full"
                      style={
                        {
                          width: bar.width,
                          backgroundColor: bar.color,
                          "--bar-delay": `${300 + index * 120}ms`,
                        } as CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 p-2.5">
            <p className="text-[10px] font-bold">Weekly engagement</p>
            <div className="mt-2 flex h-[84px] items-end gap-1.5">
              {WEEKLY_ATTENDANCE.map((height, index) => (
                <div
                  key={index}
                  className="chart-col flex-1 rounded-t bg-linear-to-t from-[#2c4e9c] to-[#365FBE]"
                  style={
                    {
                      height: `${height}%`,
                      "--bar-delay": `${300 + index * 70}ms`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureTile = ({ tile }: { tile: TFeatureTile }) => (
  <div
    className="mr-3 flex h-[72px] w-[208px] shrink-0 items-center justify-between rounded-2xl px-4"
    style={{ backgroundColor: tile.bgColor }}
  >
    <span className="font-bold text-[#0D111C]">{tile.name}</span>
    <tile.icon size={26} color={tile.color} strokeWidth={1.7} />
  </div>
);

const TileRow = ({
  tiles,
  reverse = false,
}: {
  tiles: TFeatureTile[];
  reverse?: boolean;
}) => (
  <div className="marquee-host overflow-hidden">
    <div
      className={reverse ? "marquee marquee-reverse" : "marquee"}
      style={{ "--marquee-speed": "48s" } as CSSProperties}
    >
      {[...tiles, ...tiles].map((tile, index) => (
        <FeatureTile key={`${tile.name}-${index}`} tile={tile} />
      ))}
    </div>
  </div>
);

export const AppShowcase = ({
  verse,
  theme,
}: Pick<TLandingData, "verse" | "theme">) => {
  return (
    <section id="app" className="overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[#365FBE]">The All Souls platform</p>
          <h2 className="font-display mt-4 text-5xl text-[#192C58] lg:text-6xl">
            One parish. Three doors in.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#56575d]">
            A member app for your pocket, a kiosk for the church foyer and an
            admin portal for the parish office, all working from the same
            records, all in step.
          </p>
        </Reveal>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <span className="rounded-full bg-[#E8EFFF] px-3 py-1 text-sm font-bold text-[#2c4e9c]">
              For members
            </span>
            <h3 className="font-display mt-4 text-4xl text-[#192C58] lg:text-5xl">
              Your church, in your hands.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[#56575d]">
              Everything that happens at All Souls, on your phone. Tap through
              the tabs to look around.
            </p>
            <CheckList points={MEMBER_POINTS} />
          </Reveal>
          <Reveal variant="scale" delay={120}>
            <PhoneMockup verse={verse} />
          </Reveal>
        </div>

        <div className="mt-28 grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left" className="order-2 lg:order-1">
            <KioskMockup verse={verse} theme={theme} />
          </Reveal>
          <Reveal variant="right" delay={120} className="order-1 lg:order-2">
            <span className="rounded-full bg-[#FFF6E9] px-3 py-1 text-sm font-bold text-[#B45309]">
              For Sunday mornings
            </span>
            <h3 className="font-display mt-4 text-4xl text-[#192C58] lg:text-5xl">
              A warm welcome at the door.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[#56575d]">
              No login, no download. The touch-screen kiosk greets guests and
              makes giving and getting connected effortless.
            </p>
            <CheckList points={KIOSK_POINTS} />
          </Reveal>
        </div>

        <div className="mt-28 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal variant="left">
            <span className="rounded-full bg-[#EAFDF3] px-3 py-1 text-sm font-bold text-[#047857]">
              For the parish office
            </span>
            <h3 className="font-display mt-4 text-4xl text-[#192C58] lg:text-5xl">
              Run the parish from one place.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[#56575d]">
              Manage church operations, communication and member engagement, all
              in one secure dashboard.
            </p>
            <CheckList points={ADMIN_POINTS} />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <AdminMockup />
          </Reveal>
        </div>

        <p className="mt-14 text-center text-sm text-[#616161]">
          Product screens are illustrative and use sample data.
        </p>
      </div>

      <div className="mt-24">
        <Reveal className="mx-auto mb-9 max-w-2xl px-6 text-center">
          <h3 className="font-display text-4xl text-[#192C58] lg:text-5xl">
            So much more than a calendar.
          </h3>
        </Reveal>
        <div className="space-y-3">
          <TileRow tiles={FEATURE_TILES.slice(0, 9)} />
          <TileRow tiles={FEATURE_TILES.slice(9)} reverse />
        </div>
      </div>
    </section>
  );
};

export const Trust = () => {
  return (
    <section className="relative overflow-hidden bg-[#0e1a38] py-24 text-white lg:py-28">
      <div
        className="absolute -top-40 -right-40 h-[520px] w-[520px] text-white opacity-[0.05] [mask-image:radial-gradient(closest-side,#000,transparent)]"
        aria-hidden
      >
        <div className="checker h-full w-full" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-2 text-amber-200">
            <BadgeCheck size={16} />
            Built on trust
          </p>
          <h2 className="font-display mt-4 text-5xl lg:text-6xl">
            Your giving and your data are a sacred trust.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
                <point.icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-amber-200"
                />
                <h3 className="mt-4 text-lg font-bold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const GetStarted = () => {
  const hasStoreLinks = APP_STORE_URL || PLAY_STORE_URL;

  return (
    <section className="px-4 py-20 sm:px-6">
      <Reveal variant="scale">
        <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-linear-to-br from-[#192C58] to-[#365FBE] px-6 py-16 text-center text-white sm:px-14">
          <Image
            src="/images/sanctuary-wide.jpg"
            alt=""
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="-z-10 object-cover opacity-25 mix-blend-luminosity"
          />
          <h2 className="font-display mx-auto max-w-2xl text-5xl lg:text-6xl">
            Come and see. Stay connected.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-blue-50/90">
            Worship with us this Sunday, then carry All Souls with you through
            the week.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#visit" className="btn btn-light">
              Plan your visit
            </a>
            {APP_STORE_URL && (
              <a href={APP_STORE_URL} className="btn btn-ghost">
                Download on the App Store
              </a>
            )}
            {PLAY_STORE_URL && (
              <a href={PLAY_STORE_URL} className="btn btn-ghost">
                Get it on Google Play
              </a>
            )}
            {!hasStoreLinks && (
              <a
                href={`mailto:${CHURCH.email}?subject=Getting%20the%20All%20Souls%20app`}
                className="btn btn-ghost"
              >
                <Mail size={18} />
                Ask about the app
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

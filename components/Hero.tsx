import { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { CHURCH, SERVICE_TIMES, TLandingData } from "./content";

const MOTES = [
  { top: "24%", left: "56%", size: 5, duration: 11, delay: 0 },
  { top: "62%", left: "62%", size: 4, duration: 14, delay: 3 },
  { top: "40%", left: "90%", size: 6, duration: 12, delay: 1.5 },
  { top: "72%", left: "84%", size: 4, duration: 15, delay: 5 },
  { top: "18%", left: "76%", size: 3, duration: 10, delay: 2 },
  { top: "50%", left: "10%", size: 3, duration: 16, delay: 4 },
];

const GLASS_COLORS = [
  "#93C5FD",
  "#FDE68A",
  "#FCA5A5",
  "#BFDBFE",
  "#FDE68A",
  "#BFDBFE",
  "#FCA5A5",
  "#FDE68A",
  "#93C5FD",
];

const CENTER = 260;
const OUTER_RADIUS = 250;
const INNER_RADIUS = 206;

const polar = (radius: number, degrees: number) => {
  const radians = (degrees * Math.PI) / 180;
  return `${(CENTER + radius * Math.cos(radians)).toFixed(2)} ${(CENTER + radius * Math.sin(radians)).toFixed(2)}`;
};

// One pane of the fanlight, like the stained glass over the sanctuary arch
const glassPane = (index: number) => {
  const step = 180 / GLASS_COLORS.length;
  const start = 180 + index * step + 0.7;
  const end = 180 + (index + 1) * step - 0.7;
  return [
    `M${polar(INNER_RADIUS, start)}`,
    `L${polar(OUTER_RADIUS, start)}`,
    `A${OUTER_RADIUS} ${OUTER_RADIUS} 0 0 1 ${polar(OUTER_RADIUS, end)}`,
    `L${polar(INNER_RADIUS, end)}`,
    `A${INNER_RADIUS} ${INNER_RADIUS} 0 0 0 ${polar(INNER_RADIUS, start)}Z`,
  ].join(" ");
};

const Hero = ({ verse, theme }: Pick<TLandingData, "verse" | "theme">) => {
  return (
    <section
      id="top"
      className="hero flex min-h-svh items-center pt-28 pb-28 lg:pt-32 lg:pb-14"
    >
      <div className="hero-rays" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[520px] w-[520px] text-white opacity-[0.05] [mask-image:radial-gradient(closest-side,#000,transparent)]"
        aria-hidden
      >
        <div className="checker h-full w-full" />
      </div>
      {MOTES.map((mote) => (
        <span
          key={`${mote.top}-${mote.left}`}
          className="hero-mote"
          aria-hidden
          style={
            {
              top: mote.top,
              left: mote.left,
              "--size": `${mote.size}px`,
              "--duration": `${mote.duration}s`,
              "--delay": `${mote.delay}s`,
            } as CSSProperties
          }
        />
      ))}

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div>
          <p
            className="eyebrow hero-rise text-amber-200"
            style={{ "--d": "100ms" } as CSSProperties}
          >
            {CHURCH.affiliation}
          </p>
          <h1
            className="font-display hero-rise mt-5 text-[3.6rem] sm:text-7xl lg:text-[5.6rem]"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            All souls are <em className="text-amber-200">welcome</em> here.
          </h1>
          <p
            className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-blue-50/85"
            style={{ "--d": "360ms" } as CSSProperties}
          >
            A worshipping family in Lekki Phase 1, Lagos. Come as you are on
            Sunday, and stay connected all week: your faith, your community,
            your church, now in your hands.
          </p>
          <div
            className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ "--d": "500ms" } as CSSProperties}
          >
            <a href="#visit" className="btn btn-light">
              Plan your visit
              <ArrowRight size={18} />
            </a>
            <a href="#app" className="btn btn-ghost">
              Explore the app
            </a>
          </div>
          <dl
            className="hero-rise mt-11 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6"
            style={{ "--d": "640ms" } as CSSProperties}
          >
            <div>
              <dt className="text-sm text-blue-100/70">Sunday services</dt>
              <dd className="mt-1 text-lg font-bold">
                {SERVICE_TIMES.map(
                  (service) => `${service.time} ${service.period}`,
                ).join(" & ")}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-blue-100/70">Find us</dt>
              <dd className="mt-1 text-lg font-bold">{CHURCH.addressShort}</dd>
            </div>
          </dl>
        </div>

        <div className="hero-parallax relative mx-auto w-full max-w-[440px]">
          <div className="arch">
            <div className="arch-photo">
              <Image
                src="/images/sanctuary.jpg"
                alt="The sanctuary at All Souls' Church, with a wooden cross above three stained-glass windows"
                fill
                sizes="(min-width: 1024px) 360px, 80vw"
                className="object-cover object-top"
                preload
              />
            </div>
            <svg
              viewBox="0 0 520 660"
              className="absolute inset-0 h-full w-full overflow-visible"
              aria-hidden
            >
              {GLASS_COLORS.map((color, index) => (
                <path
                  key={index}
                  d={glassPane(index)}
                  fill={color}
                  fillOpacity={0.5}
                  className="arch-glass"
                  style={{ "--d": `${900 + index * 110}ms` } as CSSProperties}
                />
              ))}
              <path
                pathLength={1}
                className="arch-line"
                d="M10 660V260a250 250 0 0 1 500 0V660"
              />
              <path
                pathLength={1}
                className="arch-line"
                d="M54 660V260a206 206 0 0 1 412 0V660"
              />
            </svg>
          </div>

          {/* Same treatment as the kiosk's Verse of the Day card */}
          <div
            className="float-card absolute -bottom-16 left-0 w-[86%] overflow-hidden rounded-2xl border border-white/15 bg-linear-to-b from-[#192C58] to-[#365FBE] p-5 shadow-2xl sm:-bottom-6 sm:-left-8 sm:w-[340px]"
            style={{ "--d": "900ms" } as CSSProperties}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                <BookOpen size={18} />
              </span>
              <p className="font-bold">Verse of the Day</p>
            </div>
            <p className="mt-3 line-clamp-4 text-[15px] leading-relaxed italic text-blue-50">
              &ldquo;{verse.text}&rdquo;
            </p>
            <p className="mt-2 text-right text-sm font-bold">
              {verse.reference}
            </p>
          </div>

          {theme && (
            <div
              className="float-card absolute top-[34%] -right-1 max-w-[150px] rounded-2xl bg-white p-3.5 text-[#2B3A67] shadow-2xl sm:-right-8 sm:max-w-[190px]"
              style={{ "--d": "1100ms" } as CSSProperties}
            >
              <p className="flex items-center gap-1.5 text-xs font-bold text-[#D97706]">
                <Sparkles size={13} />
                Theme of the Year
              </p>
              <p className="mt-1 text-[15px] leading-snug font-bold">{theme}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

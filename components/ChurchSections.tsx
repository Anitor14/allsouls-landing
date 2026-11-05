import Image from "next/image";
import { format } from "date-fns";
import {
  ArrowUpRight,
  CalendarDays,
  Church,
  Clock,
  HandHeart,
  MapPin,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";
import { CHURCH, CLERGY, SERVICE_TIMES, TLandingData } from "./content";

const PILLARS = [
  {
    icon: Church,
    title: "Anglican in heritage",
    description:
      "Part of the Diocese of Lagos and the worldwide Anglican Communion, worshipping in Word and Sacrament.",
  },
  {
    icon: HandHeart,
    title: "Rooted in prayer",
    description:
      "A parish that carries one another's joys and burdens, with clergy close at hand for pastoral care.",
  },
  {
    icon: Users,
    title: "A family for everyone",
    description:
      "We believe every person who walks through our doors is a blessing, and there is a place here for you.",
  },
];

const LANCETS = [
  {
    src: "/images/congregation.jpg",
    alt: "A worshipper in blue and white prayer, hands clasped, during a service",
    position: "object-[38%_50%]",
    height: "h-[340px] sm:h-[420px]",
    delay: 150,
  },
  {
    src: "/images/sanctuary.jpg",
    alt: "The cross and stained glass of the All Souls' sanctuary",
    position: "object-[50%_30%]",
    height: "h-[420px] sm:h-[520px]",
    delay: 0,
  },
  {
    src: "/images/congregation.jpg",
    alt: "Members of the congregation standing together in worship",
    position: "object-[92%_50%]",
    height: "h-[340px] sm:h-[420px]",
    delay: 300,
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Pointed window shape used by the three photo lancets */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="lancet-clip" clipPathUnits="objectBoundingBox">
            <path d="M0 1V.3C0 .17 .26 .07 .5 0 .74 .07 1 .17 1 .3V1Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="flex items-end justify-center gap-3 sm:gap-4">
          {LANCETS.map((lancet) => (
            <Reveal
              key={lancet.alt}
              variant="window"
              delay={lancet.delay}
              className="min-w-0 flex-1"
            >
              <div>
                <div className={`lancet ${lancet.height}`}>
                  <Image
                    src={lancet.src}
                    alt={lancet.alt}
                    fill
                    sizes="(min-width: 1024px) 180px, 30vw"
                    className={`object-cover ${lancet.position}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal>
            <p className="eyebrow text-[#365FBE]">Welcome to All Souls</p>
            <h2 className="font-display mt-4 text-5xl text-[#192C58] lg:text-6xl">
              A house of prayer in the heart of Lekki.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#56575d]">
              All Souls&apos; Church is an Anglican parish on Kayode Animashaun
              Street, off Admiralty Way. Whether you are visiting Lagos,
              looking for a church home, or finding your way back to faith, we
              would love to worship with you.
            </p>
          </Reveal>

          <ul className="mt-9 space-y-6">
            {PILLARS.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 120}>
                <li className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2c4e9c]">
                    <pillar.icon size={24} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#2B3A67]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-[#56575d]">
                      {pillar.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export const Visit = ({ events }: Pick<TLandingData, "events">) => {
  return (
    <section
      id="visit"
      className="relative isolate overflow-hidden bg-[#0e1a38] py-24 text-white lg:py-32"
    >
      <Image
        src="/images/sanctuary-wide.jpg"
        alt=""
        fill
        sizes="100vw"
        className="view-parallax -z-20 object-cover object-center opacity-60"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-[#0e1a38] via-[#192c58]/70 to-[#0e1a38]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-amber-200">Join us this Sunday</p>
          <h2 className="font-display mt-4 text-5xl lg:text-6xl">
            There is a seat saved for you.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          <Reveal variant="left">
            <div className="h-full rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md sm:p-9">
              <p className="flex items-center gap-2.5 font-bold text-amber-200">
                <Clock size={20} />
                Every Sunday
              </p>
              <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-4">
                {SERVICE_TIMES.map((service) => (
                  <div key={service.label}>
                    <p className="font-display text-7xl">
                      {service.time}
                      <span className="ml-2 font-[family-name:var(--font-lato)] text-xl font-bold tracking-normal text-blue-100">
                        {service.period}
                      </span>
                    </p>
                    <p className="mt-2 text-blue-100/85">{service.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="flex h-full flex-col rounded-3xl bg-white p-7 text-[#2B3A67] sm:p-9">
              <p className="flex items-center gap-2.5 font-bold text-[#2c4e9c]">
                <MapPin size={20} />
                Find us
              </p>
              <p className="mt-5 text-2xl leading-snug font-bold">
                Kayode Animashaun Street, Road 15
              </p>
              <p className="mt-2 mb-7 text-[#56575d]">
                {CHURCH.landmark}, Lekki Phase 1, Lagos
              </p>
              <a
                href={CHURCH.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary self-start lg:mt-auto"
              >
                Get directions
                <ArrowUpRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        {events.length > 0 && (
          <Reveal className="mt-5">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">
              <p className="flex items-center gap-2.5 font-bold text-amber-200">
                <CalendarDays size={20} />
                Coming up
              </p>
              <ul className="mt-4 divide-y divide-white/15">
                {events.map((event) => (
                  <li
                    key={event.id}
                    className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-center"
                  >
                    <span className="font-bold">{event.title}</span>
                    <span className="text-sm text-blue-100/85">
                      {format(new Date(event.eventDate), "EEE, d MMM yyyy")}
                      {event.location ? ` · ${event.location}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export const Clergy = () => {
  return (
    <section id="clergy" className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-[#365FBE]">Our clergy</p>
          <h2 className="font-display mt-4 text-5xl text-[#192C58] lg:text-6xl">
            Shepherds who know you by name.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.45fr]">
          <Reveal variant="scale">
            <div className="relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl bg-linear-to-b from-[#192C58] to-[#365FBE] p-8 text-white">
              <div
                className="absolute -top-16 -right-16 h-64 w-64 text-white opacity-[0.08] [mask-image:radial-gradient(closest-side,#000,transparent)]"
                aria-hidden
              >
                <div className="checker h-full w-full" />
              </div>
              <span className="font-display flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/15 text-3xl">
                {CLERGY.vicar.initials}
              </span>
              <h3 className="mt-5 text-2xl font-bold">{CLERGY.vicar.name}</h3>
              <p className="mt-1 text-amber-200">{CLERGY.vicar.title}</p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {CLERGY.team.map((priest, index) => (
              <Reveal key={priest.name} delay={index * 90}>
                <div className="lift-card flex h-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5">
                  <span className="lift-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1C2C54] font-bold text-white">
                    {priest.initials}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#2B3A67]">{priest.name}</h3>
                    <p className="text-sm text-[#616161]">{priest.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-8">
          <p className="text-[#56575d]">
            Under the episcopal oversight of{" "}
            <strong className="text-[#2B3A67]">{CLERGY.bishop.name}</strong>,{" "}
            {CLERGY.bishop.title}.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

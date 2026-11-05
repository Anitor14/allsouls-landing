import { AppShowcase, GetStarted, Trust } from "@/components/AppSections";
import { About, Clergy, Visit } from "@/components/ChurchSections";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import LandingFooter from "@/components/LandingFooter";
import LandingNav from "@/components/LandingNav";
import {
  CHURCH,
  FALLBACK_VERSE,
  SERVICE_TIMES,
  TLandingData,
  TUpcomingEvent,
} from "@/components/content";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const REVALIDATE_SECONDS = 600;

// Fetched on the server so the page stays static between refreshes; a failed
// request falls back rather than taking the page down.
const fetchPublicData = async <T,>(path: string): Promise<T | null> => {
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return null;
    const body = await response.json();
    return body.data ?? null;
  } catch {
    return null;
  }
};

const getLandingData = async (): Promise<TLandingData> => {
  const [verse, theme, events] = await Promise.all([
    fetchPublicData<{
      bibleBook: string;
      chapter: number;
      verseRange: string;
      verseText: string;
    }>("/v1/daily-verses/current"),
    fetchPublicData<{ theme: string }>("/v1/theme-of-the-year/active"),
    fetchPublicData<TUpcomingEvent[]>("/v1/events/upcoming"),
  ]);

  return {
    verse: verse
      ? {
          text: verse.verseText,
          reference: `${verse.bibleBook} ${verse.chapter}:${verse.verseRange}`,
        }
      : FALLBACK_VERSE,
    theme: theme?.theme.trim().replace(/\.$/, "") || null,
    events: events ?? [],
  };
};

export default async function Home() {
  const { verse, theme, events } = await getLandingData();

  const tickerItems = [
    theme ? `${new Date().getFullYear()}: ${theme}` : CHURCH.affiliation,
    `Sundays at ${SERVICE_TIMES.map((service) => `${service.time} ${service.period}`).join(" & ")}`,
    `${CHURCH.landmark}, Lekki Phase 1`,
    "All souls are welcome",
  ];

  return (
    <div className="landing">
      <div className="scroll-progress" aria-hidden />
      <LandingNav />
      <main>
        <Hero verse={verse} theme={theme} />

        {/* The kiosk's scrolling theme banner */}
        <div
          className="marquee-host overflow-hidden bg-linear-to-r from-[#2c4e9c] via-[#1e3a8a] to-[#2c4e9c] py-4 text-white"
          aria-hidden
        >
          <div className="marquee">
            {[0, 1, 2, 3].map((group) => (
              <div key={group} className="flex shrink-0 items-center">
                {tickerItems.map((item) => (
                  <span
                    key={item}
                    className="flex items-center whitespace-nowrap font-bold"
                  >
                    {item}
                    <span className="mx-7 text-amber-200">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <About />
        <Visit events={events} />
        <Clergy />
        <Gallery />
        <AppShowcase verse={verse} theme={theme} />
        <Trust />
        <GetStarted />
      </main>
      <LandingFooter />
    </div>
  );
}

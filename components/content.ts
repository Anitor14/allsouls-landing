import {
  BookOpen,
  Box,
  Briefcase,
  Building2,
  Cake,
  CalendarPlus,
  FileText,
  Gift,
  GraduationCap,
  Heart,
  MessageCircle,
  MessagesSquare,
  PartyPopper,
  Sparkles,
  Sprout,
  Store,
  Users,
  Vote,
  type LucideIcon,
} from "lucide-react";

export const CHURCH = {
  name: "All Souls' Church, Lekki",
  shortName: "All Souls' Church",
  affiliation: "Diocese of Lagos · Anglican Communion",
  address: "Kayode Animashaun Street, Road 15, Lekki Phase 1, Lagos",
  addressShort: "Road 15, Lekki Phase 1",
  landmark: "Off Admiralty Way",
  email: "info@allsoulslekki.church",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=All+Souls+Anglican+Church+Kayode+Animashaun+Street+Lekki+Phase+1+Lagos",
};

// Taken from the parish programme; update here if the service pattern changes.
export const SERVICE_TIMES = [
  { label: "First Service", time: "7:30", period: "AM" },
  { label: "Second Service", time: "10:00", period: "AM" },
];

export const CLERGY = {
  vicar: {
    name: "The Ven. John O. Agboro",
    title: "Vicar & Archdeacon of Lekki",
    initials: "JA",
  },
  team: [
    { name: "Ven. Uche Ekwensi", title: "Assisting Priest", initials: "UE" },
    { name: "Ven. Paul Ogedegbe", title: "Assisting Priest", initials: "PO" },
    { name: "Ven. Iyanu Ademowo", title: "Assisting Priest", initials: "IA" },
    {
      name: "Rev'd. Bamidele Olayanju",
      title: "Assisting Priest",
      initials: "BO",
    },
  ],
  bishop: {
    name: "The Rt. Rev. Dr. Ifedola Senasu Gabriel Okupevi",
    title: "Bishop, Diocese of Lagos (Anglican Communion)",
  },
};

// Drop a photo in public/images and add a line here; the slideshow picks it up.
export const GALLERY_SLIDES = [
  {
    src: "/images/congregation.jpg",
    alt: "A worshipper in blue and white prayer, hands clasped, during a service",
    caption: "Prayer and worship together",
  },
  {
    src: "/images/gallery-harvest.jpg",
    alt: "Dancers in bright traditional dress performing in the church during the harvest celebration",
    caption: "National & State Harvest 2026",
  },
  {
    src: "/images/gallery-choir-festival.jpg",
    alt: "A robed crucifer carrying the processional cross past the congregation",
    caption: "12th Choir Festival",
  },
  {
    src: "/images/sanctuary.jpg",
    alt: "The cross and stained glass of the All Souls' sanctuary",
    caption: "The sanctuary at All Souls'",
  },
  {
    src: "/images/gallery-trinity-sunday.jpg",
    alt: "Smiling parishioners in hats and colourful dresses walking through the church",
    caption: "Trinity 20 Sunday",
  },
  {
    src: "/images/gallery-welcome.jpg",
    alt: "A smiling greeter outside the church holding a sign reading Smile, It's Sunday",
    caption: "Smile, it's Sunday!",
  },
];

// Leave null until the store listings are live; the buttons appear once set.
export const APP_STORE_URL: string | null = null;
export const PLAY_STORE_URL: string | null = null;

export const SOCIAL_LINKS = [
  {
    name: "YouTube",
    url: "https://youtube.com/c/AllSoulsAnglicanChurchLekki",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/allsoulsanglicanchurchlekki/",
  },
  { name: "Instagram", url: "https://www.instagram.com/allsoulslekki/" },
];

export type TFeatureTile = {
  name: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
};

// Colours mirror the quick actions on the mobile app's home screen.
export const FEATURE_TILES: TFeatureTile[] = [
  { name: "Bible Study", icon: BookOpen, color: "#D97706", bgColor: "#FFF6E9" },
  { name: "Resources", icon: Box, color: "#CA8A04", bgColor: "#FFFCE6" },
  { name: "Community", icon: Users, color: "#2563EB", bgColor: "#EEF4FF" },
  {
    name: "Prayer Request",
    icon: Heart,
    color: "#DC2626",
    bgColor: "#FFF0F2",
  },
  { name: "Church Needs", icon: Gift, color: "#EA580C", bgColor: "#FFF5EE" },
  {
    name: "Clergy Access",
    icon: MessageCircle,
    color: "#059669",
    bgColor: "#EAFDF3",
  },
  { name: "Job Posting", icon: Briefcase, color: "#9333EA", bgColor: "#FAF0FF" },
  { name: "Vestry Election", icon: Vote, color: "#0284C7", bgColor: "#E0F2FE" },
  { name: "Chat", icon: MessagesSquare, color: "#6366F1", bgColor: "#EEF2FF" },
  { name: "Birthdays", icon: Cake, color: "#EC4899", bgColor: "#FDF2F8" },
  { name: "Bulletin", icon: FileText, color: "#0284C7", bgColor: "#E0F2FE" },
  { name: "Harvest", icon: Sprout, color: "#15803D", bgColor: "#F0FDF4" },
  { name: "Book Event", icon: CalendarPlus, color: "#0D9488", bgColor: "#F0FDFA" },
  { name: "Hall Booking", icon: Building2, color: "#2c4e9c", bgColor: "#E8EFFF" },
  {
    name: "Sunday School",
    icon: GraduationCap,
    color: "#D97706",
    bgColor: "#FFF6E9",
  },
  { name: "Praise Reports", icon: Sparkles, color: "#CA8A04", bgColor: "#FFFCE6" },
  {
    name: "Business Directory",
    icon: Store,
    color: "#0D9488",
    bgColor: "#F0FDFA",
  },
  {
    name: "Youth Engagement",
    icon: PartyPopper,
    color: "#EC4899",
    bgColor: "#FDF2F8",
  },
];

export type TVerse = { text: string; reference: string };

export type TUpcomingEvent = {
  id: string;
  title: string;
  eventDate: string;
  location: string;
};

export type TLandingData = {
  verse: TVerse;
  theme: string | null;
  events: TUpcomingEvent[];
};

export const FALLBACK_VERSE: TVerse = {
  text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
  reference: "Philippians 4:6",
};

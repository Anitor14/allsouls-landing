"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Bell,
  CalendarDays,
  ChevronRight,
  Fingerprint,
  HandCoins,
  History,
  House,
  MapPin,
  Play,
  PlaySquare,
  Ticket,
  User,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FEATURE_TILES, TVerse } from "./content";

const TABS = [
  { name: "Home", icon: House },
  { name: "Give", icon: HandCoins },
  { name: "Media", icon: PlaySquare },
  { name: "Event", icon: CalendarDays },
  { name: "Profile", icon: User },
] as const;

type TTabName = (typeof TABS)[number]["name"];

const TAB_INTERVAL = 3800;

const GIVING_CATEGORIES = [
  { name: "Tithes", color: "#2563EB", bgColor: "#EEF4FF" },
  { name: "Offering", color: "#0D9488", bgColor: "#F0FDFA" },
  { name: "Building Funds", color: "#6366F1", bgColor: "#EEF2FF" },
  { name: "Welfare", color: "#15803D", bgColor: "#F0FDF4" },
  { name: "Missions", color: "#9333EA", bgColor: "#FAF0FF" },
];

const SAMPLE_EVENTS = [
  { day: "08", month: "NOV", title: "Sunday Worship", place: "Main Church" },
  { day: "11", month: "NOV", title: "Bible Study", place: "Parish Hall" },
  { day: "15", month: "NOV", title: "Youth Fellowship", place: "Parish Hall" },
];

const HomeScreen = ({ verse }: { verse: TVerse }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C2C54] text-[10px] font-bold text-white">
          CO
        </span>
        <p className="text-sm font-bold">Hi, Christopher</p>
      </div>
      <Bell size={17} />
    </div>
    <div className="rounded-2xl bg-linear-to-br from-[#192C58] to-[#365FBE] p-3.5 text-white">
      <p className="text-xs font-bold">Verse of the Day</p>
      <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-blue-50">
        {verse.text}
      </p>
      <p className="mt-1.5 text-right text-[11px] font-bold">
        {verse.reference}
      </p>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {FEATURE_TILES.slice(0, 6).map((tile) => (
        <div
          key={tile.name}
          className="flex items-center justify-between rounded-xl px-2.5 py-3"
          style={{ backgroundColor: tile.bgColor }}
        >
          <span className="text-[10.5px] font-bold text-[#0D111C]">
            {tile.name}
          </span>
          <tile.icon size={15} color={tile.color} />
        </div>
      ))}
    </div>
    <p className="pt-1 text-xs font-bold">Upcoming Events</p>
    <div className="flex items-center gap-2 rounded-xl border border-slate-100 p-2">
      <span className="rounded-lg bg-[#E8EFFF] px-2 py-1 text-[10px] font-bold text-[#2c4e9c]">
        SUN
      </span>
      <span className="text-[11px] font-bold">Sunday Worship</span>
    </div>
  </div>
);

const GiveScreen = () => (
  <div className="space-y-3">
    <p className="text-lg font-bold">Give</p>
    <div className="rounded-2xl bg-linear-to-br from-[#192C58] to-[#365FBE] p-4 text-white">
      <p className="text-[11px] text-blue-100">Amount</p>
      <p className="mt-1 text-2xl font-bold">₦10,000</p>
    </div>
    <p className="text-xs font-bold text-[#3D3D3D]">Choose a category</p>
    <div className="space-y-2">
      {GIVING_CATEGORIES.map((category, index) => (
        <div
          key={category.name}
          className={cn(
            "flex items-center justify-between rounded-xl border px-3 py-2.5",
            index === 0 ? "border-[#2c4e9c]" : "border-slate-100",
          )}
        >
          <span className="flex items-center gap-2 text-[11px] font-bold">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-lg"
              style={{ backgroundColor: category.bgColor }}
            >
              <HandCoins size={12} color={category.color} />
            </span>
            {category.name}
          </span>
          <ChevronRight size={14} className="text-[#949494]" />
        </div>
      ))}
    </div>
    <div className="rounded-xl bg-[#2c4e9c] py-3 text-center text-xs font-bold text-white">
      Continue to payment
    </div>
  </div>
);

const MediaScreen = () => (
  <div className="space-y-3">
    <p className="text-lg font-bold">Media</p>
    <div className="flex gap-1.5">
      {["All", "Videos", "Pictures", "Live"].map((category, index) => (
        <span
          key={category}
          className={cn(
            "rounded-full px-2.5 py-1 text-[10px] font-bold",
            index === 0 ? "bg-[#2c4e9c] text-white" : "bg-[#F1F5F9]",
          )}
        >
          {category}
        </span>
      ))}
    </div>
    {[
      { src: "/images/sanctuary-wide.jpg", title: "Sunday Sermon" },
      { src: "/images/congregation.jpg", title: "Worship Moments" },
    ].map((item) => (
      <div
        key={item.title}
        className="overflow-hidden rounded-2xl border border-slate-100"
      >
        <div className="relative h-[108px]">
          <Image src={item.src} alt="" fill sizes="260px" className="object-cover" />
          <span className="absolute inset-0 m-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#2c4e9c]">
            <Play size={15} fill="currentColor" />
          </span>
        </div>
        <p className="p-2.5 text-[11px] font-bold">{item.title}</p>
      </div>
    ))}
  </div>
);

const EventScreen = () => (
  <div className="space-y-3">
    <p className="text-lg font-bold">Events</p>
    {SAMPLE_EVENTS.map((event) => (
      <div
        key={event.title}
        className="flex items-center gap-3 rounded-2xl border border-slate-100 p-2.5"
      >
        <span className="flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c]">
          <span className="text-sm leading-none font-bold">{event.day}</span>
          <span className="mt-0.5 text-[8px] font-bold">{event.month}</span>
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold">{event.title}</p>
          <p className="mt-0.5 flex items-center gap-1 text-[10px] text-[#616161]">
            <MapPin size={10} />
            {event.place}
          </p>
        </div>
        <span className="rounded-lg bg-[#2c4e9c] px-2 py-1 text-[9px] font-bold text-white">
          RSVP
        </span>
      </div>
    ))}
    <div className="rounded-2xl bg-[#F0FDFA] p-3">
      <p className="text-xs font-bold text-[#0D9488]">Reminder set</p>
      <p className="mt-0.5 text-[10.5px] text-[#3D3D3D]">
        We will notify you 24 hours before.
      </p>
    </div>
  </div>
);

const ProfileScreen = () => (
  <div className="space-y-3">
    <div className="flex flex-col items-center pt-1">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1C2C54] text-lg font-bold text-white">
        CO
      </span>
      <p className="mt-2 text-sm font-bold">Christopher O.</p>
      <p className="text-[11px] text-[#616161]">Parish member</p>
    </div>
    {[
      { label: "Personal details", icon: UserRound },
      { label: "Giving history", icon: History },
      { label: "Event RSVPs", icon: Ticket },
      { label: "Notifications", icon: Bell },
      { label: "Biometric login", icon: Fingerprint },
    ].map((row) => (
      <div
        key={row.label}
        className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-3 py-2.5"
      >
        <span className="flex items-center gap-2 text-[11px] font-bold">
          <row.icon size={14} className="text-[#2c4e9c]" />
          {row.label}
        </span>
        <ChevronRight size={14} className="text-[#949494]" />
      </div>
    ))}
  </div>
);

const PhoneMockup = ({ verse }: { verse: TVerse }) => {
  const [activeTab, setActiveTab] = useState<TTabName>("Home");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isPaused || reduceMotion) return;

    const timer = setInterval(() => {
      setActiveTab((current) => {
        const index = TABS.findIndex((tab) => tab.name === current);
        return TABS[(index + 1) % TABS.length].name;
      });
    }, TAB_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="relative mx-auto w-[292px] rounded-[46px] bg-[#0D111C] p-2.5 shadow-[0_40px_70px_-30px_rgb(14_26_56/0.75)] ring-1 ring-black/40"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex h-[596px] flex-col overflow-hidden rounded-[37px] bg-white text-[#0D111C]">
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-xs font-bold">
          <span>9:41</span>
          <span className="absolute top-2.5 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-[#0D111C]" />
          <span>5G</span>
        </div>

        <div className="flex-1 overflow-hidden px-4 pt-3">
          <div key={activeTab} className="phone-screen">
            {activeTab === "Home" && <HomeScreen verse={verse} />}
            {activeTab === "Give" && <GiveScreen />}
            {activeTab === "Media" && <MediaScreen />}
            {activeTab === "Event" && <EventScreen />}
            {activeTab === "Profile" && <ProfileScreen />}
          </div>
        </div>

        <div className="flex justify-around border-t border-slate-100 bg-white px-2 pt-2 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.name}
              type="button"
              aria-label={`Show ${tab.name} screen`}
              aria-pressed={activeTab === tab.name}
              onClick={() => {
                setActiveTab(tab.name);
                setIsPaused(true);
              }}
              className={cn(
                "flex h-11 w-11 flex-col items-center justify-center gap-0.5 rounded-xl text-[9px] font-bold transition-colors",
                activeTab === tab.name ? "text-[#2c4e9c]" : "text-[#8a8e86]",
              )}
            >
              <tab.icon size={19} />
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;

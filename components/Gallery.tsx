"use client";

import {
  FocusEvent,
  KeyboardEvent,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import { GALLERY_SLIDES } from "./content";

const SLIDE_INTERVAL = 6000;
const SWIPE_DISTANCE = 48;

const CONTROL_CLASS =
  "flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHeld, setIsHeld] = useState(false);
  const touchStart = useRef({ x: 0, y: 0 });

  const showSlide = (index: number) => {
    const count = GALLERY_SLIDES.length;
    setActiveIndex((index + count) % count);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsPlaying(false);
    }
  }, []);

  // Keyed on activeIndex so a manual change gets a full interval too
  useEffect(() => {
    if (!isPlaying || isHeld) return;

    const timer = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % GALLERY_SLIDES.length);
    }, SLIDE_INTERVAL);

    return () => clearTimeout(timer);
  }, [activeIndex, isPlaying, isHeld]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") showSlide(activeIndex - 1);
    if (event.key === "ArrowRight") showSlide(activeIndex + 1);
  };

  // Only keyboard focus holds the slide; a mouse click on a control should not
  const handleFocus = (event: FocusEvent) => {
    if (event.target.matches(":focus-visible")) setIsHeld(true);
  };

  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    if (Math.abs(deltaX) < SWIPE_DISTANCE) return;
    if (Math.abs(deltaX) < Math.abs(deltaY)) return;
    showSlide(activeIndex + (deltaX < 0 ? 1 : -1));
  };

  return (
    <section id="gallery" className="bg-[#0e1a38] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-amber-200">Gallery</p>
          <h2 className="font-display mt-4 text-5xl lg:text-6xl">
            Life at All Souls.
          </h2>
        </Reveal>

        <Reveal variant="scale" className="mt-14">
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Photos of All Souls' Church"
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={() => setIsHeld(false)}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setIsHeld(true);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") setIsHeld(false);
            }}
          >
            <div
              className="relative aspect-[4/5] touch-pan-y overflow-hidden rounded-3xl bg-[#192c58] sm:aspect-[16/10] lg:aspect-video"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {GALLERY_SLIDES.map((slide, index) => (
                <div
                  key={slide.src}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${GALLERY_SLIDES.length}`}
                  aria-hidden={index !== activeIndex}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700",
                    index === activeIndex ? "opacity-100" : "opacity-0",
                  )}
                >
                  {/* Photos vary in shape, so each sits uncropped on a blurred copy of itself */}
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    sizes="(min-width: 1152px) 1104px, 100vw"
                    className="scale-110 object-cover opacity-50 blur-2xl"
                  />
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1152px) 1104px, 100vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p
                className="text-lg font-bold"
                aria-live={isPlaying ? "off" : "polite"}
              >
                {GALLERY_SLIDES[activeIndex].caption}
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className={CONTROL_CLASS}
                  aria-label="Previous photo"
                  onClick={() => showSlide(activeIndex - 1)}
                >
                  <ChevronLeft size={22} />
                </button>

                <div className="flex items-center">
                  {GALLERY_SLIDES.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      className="group flex h-11 w-7 items-center justify-center"
                      aria-label={`Show photo ${index + 1}`}
                      aria-current={index === activeIndex}
                      onClick={() => showSlide(index)}
                    >
                      <span
                        className={cn(
                          "h-2.5 w-2.5 rounded-full transition-colors",
                          index === activeIndex
                            ? "bg-amber-200"
                            : "bg-white/30 group-hover:bg-white/60",
                        )}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className={CONTROL_CLASS}
                  aria-label="Next photo"
                  onClick={() => showSlide(activeIndex + 1)}
                >
                  <ChevronRight size={22} />
                </button>

                <button
                  type="button"
                  className={CONTROL_CLASS}
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  onClick={() => setIsPlaying((playing) => !playing)}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Gallery;

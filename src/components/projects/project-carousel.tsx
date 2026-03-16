"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types/portfolio";

type ProjectCarouselProps = {
  images: ProjectImage[];
  title: string;
  priority?: boolean;
  className?: string;
};

const SWIPE_THRESHOLD = 48;

export function ProjectCarousel({
  images,
  title,
  priority = false,
  className,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const canNavigate = images.length > 1;

  const goToPrevious = () => {
    if (!canNavigate) {
      return;
    }

    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const goToNext = () => {
    if (!canNavigate) {
      return;
    }

    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/90",
        className,
      )}
      tabIndex={0}
      role="region"
      aria-label={`${title} screenshots`}
      aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goToPrevious();
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          goToNext();
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) {
          return;
        }

        const delta = touchStartX.current - (event.changedTouches[0]?.clientX ?? 0);

        if (Math.abs(delta) >= SWIPE_THRESHOLD) {
          if (delta > 0) {
            goToNext();
          } else {
            goToPrevious();
          }
        }

        touchStartX.current = null;
      }}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative min-w-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_44%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,1))]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={priority && index === 0}
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="object-contain p-4 sm:p-6"
              />
            </div>
          </div>
        ))}
      </div>

      {canNavigate ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-white shadow-lg backdrop-blur transition hover:border-cyan-300/40 hover:bg-slate-900"
            aria-label="Show previous screenshot"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-white shadow-lg backdrop-blur transition hover:border-cyan-300/40 hover:bg-slate-900"
            aria-label="Show next screenshot"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 font-mono text-xs text-slate-200 backdrop-blur">
            {currentIndex + 1}/{images.length}
          </div>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur">
            {images.map((image, index) => (
              <button
                key={`${image.src}-dot-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  index === currentIndex ? "bg-cyan-300" : "bg-white/25 hover:bg-white/45",
                )}
                aria-label={`Go to screenshot ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

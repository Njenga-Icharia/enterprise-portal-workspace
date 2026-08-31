"use client";

import React from "react";

/**
 * Interface defining the structure of a marquee logo item.
 */
interface LogoItem {
  id: string;
  name: string;
  src: string;
  url: string;
  customClass?: string;
}

// Configuration array for partner logos with URLs and optional scaling overrides
const PARTNER_LOGOS: LogoItem[] = [
  { id: "dogecoin", name: "Dogecoin", src: "/logos/dogecoin.svg", url: "https://dogecoin.com" },
  { id: "burgerking", name: "Burger King", src: "/logos/burgerking.svg", url: "https://www.bk.com" },
  { id: "crunchyroll", name: "Crunchyroll", src: "/logos/crunchyroll.svg", url: "https://www.crunchyroll.com" },
  { id: "cw", name: "CW", src: "/logos/cw.svg", url: "https://www.cwtv.com" },
  { id: "dc", name: "DC", src: "/logos/dc.svg", url: "https://www.dc.com" },
  { id: "dominos", name: "Dominos", src: "/logos/dominos.svg", url: "https://www.dominos.com" },
  { id: "drpepper", name: "Dr Pepper", src: "/logos/drpepper.svg", url: "https://www.drpepper.com" },
  { id: "fenty", name: "Fenty", src: "/logos/fenty.svg", url: "https://fentybeauty.com" },
  { id: "instagram", name: "Instagram", src: "/logos/instagram.svg", url: "https://www.instagram.com" },
  { id: "kfc", name: "KFC", src: "/logos/kfc-kentucky-fried-chicken.svg", url: "https://www.kfc.com" },
  { id: "kitkat", name: "KitKat", src: "/logos/kitkat.svg", url: "https://www.kitkat.com" },
  { id: "lamborghini", name: "Lamborghini", src: "/logos/lamborghini.svg", url: "https://www.lamborghini.com" },
  { id: "loreal", name: "L'Oreal", src: "/logos/l-oreal.svg", url: "https://www.loreal.com", customClass: "scale-150" },
  { id: "marvel", name: "Marvel", src: "/logos/marvel.svg", url: "https://www.marvel.com" },
  { id: "mercedesbenz", name: "Mercedes-Benz", src: "/logos/mercedesbenz.svg", url: "https://www.mercedes-benz.com" },
  { id: "microsoft", name: "Microsoft", src: "/logos/microsoft.svg", url: "https://www.microsoft.com" },
  { id: "pokemon", name: "Pokemon", src: "/logos/pokemon.svg", url: "https://www.pokemon.com" },
  { id: "rovio", name: "Rovio", src: "/logos/rovio.svg", url: "https://www.rovio.com" },
  { id: "steam", name: "Steam", src: "/logos/steam.svg", url: "https://store.steampowered.com" },
  { id: "twitch", name: "Twitch", src: "/logos/twitch.svg", url: "https://www.twitch.tv" },
  { id: "redbull", name: "Red Bull", src: "/logos/redbulle.svg", url: "https://www.redbull.com" },
  { id: "suzuki", name: "Suzuki", src: "/logos/suzuki.svg", url: "https://global.suzuki.com" },
  { id: "tacobell", name: "Taco Bell", src: "/logos/tacobell.svg", url: "https://www.tacobell.com" },
  { id: "tiktok", name: "TikTok", src: "/logos/tiktok.svg", url: "https://www.tiktok.com" },
  { id: "totalenergies", name: "TotalEnergies", src: "/logos/totalenergies.svg", url: "https://www.totalenergies.com" },
  { id: "visa", name: "Visa", src: "/logos/visa.svg", url: "https://www.visa.com" },
  { id: "weeklyshonenjump", name: "Weekly Shonen Jump", src: "/logos/weeklyshonenjump.svg", url: "https://www.viz.com/shonenjump" },
];

export default function LogoMarquee() {
  return (
    <section className="w-full bg-[#4b456f] py-20 border-t-2 border-[#1e1e28] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-extrabold uppercase tracking-widest text-[#f8f9fa]/70">
          Trusted by global leaders, enterprises, and partners worldwide
        </p>
      </div>

      {/* Marquee Viewport Container with 'group' to handle hover pausing */}
      <div className="relative w-full overflow-hidden flex group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-16 items-center">
          
          {/* Primary Render Loop */}
          {PARTNER_LOGOS.map((logo) => (
            <a
              key={`primary-${logo.id}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${logo.name}`}
              className="flex items-center justify-center p-6 border-3 border-[#1e1e28] rounded-3xl bg-white shadow-[6px_6px_0px_0px_#1e1e28] shrink-0 h-36 w-64 overflow-hidden group/card"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className={`w-full h-full object-contain transition-transform duration-300 group-hover/card:scale-110 ${logo.customClass || ""}`} 
              />
            </a>
          ))}

          {/* Secondary Loop for Seamless Infinite Scroll Illusion */}
          {PARTNER_LOGOS.map((logo) => (
            <a
              key={`duplicate-${logo.id}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="true"
              tabIndex={-1}
              className="flex items-center justify-center p-6 border-3 border-[#1e1e28] rounded-3xl bg-white shadow-[6px_6px_0px_0px_#1e1e28] shrink-0 h-36 w-64 overflow-hidden group/card"
            >
              <img 
                src={logo.src} 
                alt="" 
                className={`w-full h-full object-contain transition-transform duration-300 group-hover/card:scale-110 ${logo.customClass || ""}`} 
              />
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
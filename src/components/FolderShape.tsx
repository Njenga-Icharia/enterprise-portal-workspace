"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  link: string;
}

export interface FeaturedSlide {
  image: string;
  title: string;
  category: string;
  link: string;
}

export interface FolderShapeProps {
  sectionTitle: string;
  ctaText: string;
  ctaHref: string;
  featuredSlides: FeaturedSlide[];
  articles: NewsArticle[];
}

export default function FolderShape({
  sectionTitle,
  ctaText,
  ctaHref,
  featuredSlides,
  articles,
}: FolderShapeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  useEffect(() => {
    if (isHovered || featuredSlides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % featuredSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, featuredSlides.length]);

  if (!featuredSlides || featuredSlides.length === 0) return null;

  const activeSlide = featuredSlides[currentSlideIndex];

  return (
    <div
      ref={containerRef}
      className="relative h-[250vh] w-full bg-[#1e1e28] -mt-12"
    >
      <div className="sticky top-24 h-[calc(100vh-6rem)] w-full overflow-hidden bg-[#1e1e28]">
        <section
          className="relative w-full h-full bg-[#071318] text-white px-6 sm:px-8 lg:px-12 flex flex-col justify-center"
          style={{
            clipPath:
              "polygon(0 0, 220px 0, 280px 48px, 100% 48px, 100% 100%, 0 100%)",
            paddingTop: 72,
            paddingBottom: 24,
          }}
        >
          <div className="max-w-7xl mx-auto w-full pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
                {sectionTitle}
              </h2>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center bg-white text-[#071318] px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-gray-100 transition-colors w-max shadow-sm"
              >
                {ctaText}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col">
                <Link
                  href={activeSlide.link}
                  className="group relative h-[480px] rounded-2xl p-8 flex flex-col justify-between overflow-hidden border border-white/10 bg-[#122838] shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer block"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={currentSlideIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 z-0"
                    >
                      <Image
                        src={activeSlide.image}
                        alt={activeSlide.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </motion.div>
                  </AnimatePresence>

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="inline-block bg-white text-[#071318] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded shadow-sm">
                      {activeSlide.category}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-serif font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      {activeSlide.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-2xl" />
                  </div>
                </Link>
              </div>

              <div className="h-[480px] overflow-hidden relative border-y border-white/10 py-2">
                <motion.div
                  style={{ y: translateY }}
                  className="flex flex-col gap-6"
                >
                  {articles.map((article) => (
                    <div
                      key={article.id}
                      className="flex flex-col gap-2 pb-4 border-b border-gray-800/80 min-h-[100px] justify-between"
                    >
                      <h4 className="font-medium text-base sm:text-lg leading-snug text-gray-100 hover:text-white transition-colors">
                        {article.title}
                      </h4>

                      <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 mt-1">
                        <span>{article.date}</span>
                        <Link
                          href={article.link}
                          className="font-bold text-white uppercase tracking-wider hover:text-gray-300 transition-colors"
                        >
                          Read More &gt;
                        </Link>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
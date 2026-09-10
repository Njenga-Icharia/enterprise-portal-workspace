"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface SolutionItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  scopeTags: string[];
  imageUrl: string;
  link: string;
  buttonText?: string;
}

interface AlternatingShowcaseSolutionsProps {
  items: SolutionItem[];
}

export default function AlternatingShowcaseSolutions({
  items,
}: AlternatingShowcaseSolutionsProps) {
  return (
    <section className="bg-[#f2f4f4] py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        {items.map((item, index) => (
          <SolutionCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function SolutionCard({
  item,
  index,
}: {
  item: SolutionItem;
  index: number;
}) {
  const isImageLeft = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${
        isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      } bg-white rounded-3xl overflow-hidden shadow-sm`}
    >
      {/* Text */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 xl:p-20 flex flex-col justify-center">
        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 block">
          {item.badge}
        </span>

        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
          {item.title}
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {item.description}
        </p>

        <div className="mb-10">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Key Capabilities
          </h3>

          <ul className="space-y-2">
            {item.scopeTags.map((tag, i) => (
              <li
                key={i}
                className="text-sm text-gray-600 flex items-center"
              >
                <span className="mr-2 text-gray-400">•</span>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={item.link}
          className="bg-[#2b2b2b] text-white px-8 py-3 rounded text-sm font-medium hover:bg-black transition-colors w-fit"
        >
          {item.buttonText ?? "Learn more"}
        </Link>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
          <h4 className="text-xl font-medium text-gray-900 mb-2">
            {item.subtitle}
          </h4>

          <p className="text-sm text-gray-600">
            {item.scopeTags[0]}
            {item.scopeTags[1] ? ` | ${item.scopeTags[1]}` : ""}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
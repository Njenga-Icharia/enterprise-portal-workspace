import SpotlightGrid from '@/components/SpotlightGrid';

export default function SpotlightGridBpo() {
  return (
    <SpotlightGrid
      headingLine1="Your Entire Customer Lifecycle,"
      headingLine2="Managed Under One Roof"
    //   headingLine2Color="from-indigo-400 to-cyan-400"
      headingLine2Color="from-orange-400 via-amber-400 to-orange-600"
      description="Scale your operations with a 900+ seater facility powered by one of Africa's most proficient English-speaking workforces. From impact sourcing to complex business solutions, we deliver efficiency, cost savings, and world-class quality."
      ctaText="Explore BPO Services"
      ctaHref="/bpo/contact"
      gridBaseColor="text-[rgba(255,255,255,0.08)]"
      gridHighlightColor="text-orange-500/80"
      bgColor="bg-[#030303]"
      buttonColor="bg-[#f97316] hover:bg-orange-600"
      buttonGlow="shadow-[0_0_45px_-5px_rgba(249,115,22,0.6)]"


    />
  );
}
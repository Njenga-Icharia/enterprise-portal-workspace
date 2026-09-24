import React from 'react';
import ScrollCurtain, { ScrollCurtainItem } from '@/components/ScrollCurtain';

const ENGINEERING_SLIDES: ScrollCurtainItem[] = [
  {
    id: 'slide-1',
    imageUrl: 'https://msftstories.thesourcemediaassets.com/sites/133/2018/06/MTC-2-960x640.jpg',
    eyebrow: 'Nairobi · 2018',
    heading: "Africa's first software testing centre.",
    body: "Techno Brain and Microsoft launched the continent's first testing and quality assurance centre — the fourth of its kind worldwide — positioning Kenya as a global leader in ICT services.",
    stat: '1st',
    statLabel: 'in Africa',
    reveal: {
      eyebrow: 'left',
      heading: 'top',
      body: 'bottom',
      stat: 'fade',
    },
  },
  {
    id: 'slide-2',
    imageUrl: 'https://msftstories.thesourcemediaassets.com/sites/133/2018/06/MTC-1.jpg',
    eyebrow: 'The Partnership',
    heading: "Built with Microsoft's Windows Development Group.",
    body: "A Sh100 million investment. Microsoft's WDG engineers from the USA working alongside Techno Brain teams in Nairobi, with direct access to unreleased Windows Insider software.",
    stat: 'Sh100M',
    statLabel: 'Joint investment',
    reveal: {
      eyebrow: 'top',
      heading: 'right',
      body: 'left',
      stat: 'bottom',
    },
  },
  {
    id: 'slide-3',
    imageUrl: 'https://msftstories.thesourcemediaassets.com/sites/133/2018/06/MTC-3-1024x683.jpg',
    eyebrow: 'The Impact',
    heading: 'From consumer to exporter of innovation.',
    body: "Opening with 100 engineers, scaling to 1,000 by year-end. Building the next generation of quality assurance and testing talent on the continent.",
    stat: '100 → 1,000',
    statLabel: 'Engineers',
    reveal: {
      eyebrow: 'right',
      heading: 'left',
      body: 'top',
      stat: 'fade',
    },
  },
];

export default function ScrollCurtainEngineering() {
  return <ScrollCurtain items={ENGINEERING_SLIDES} />;
}
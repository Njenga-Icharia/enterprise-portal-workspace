'use client';

import React from 'react';
import { BlurryCarousel, CarouselItem } from '@/components/BlurryCarousel';

// ─── Footer text shown at the bottom of each card ────────────────────────────
// Edit this string to change the label on every card.
// Set it to "" (empty quotes) to hide the footer row entirely.
const FOOTER_TEXT = "Read the case study";
// ─────────────────────────────────────────────────────────────────────────────

const cloudManagedServicesData: CarouselItem[] = [
  {
    id: 'cloud-migration-deployment',
    title: 'Cloud Migration & Deployment',
    description: 'Move applications, data, and workloads to AWS with proven methods — planned, executed, and validated end to end.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1170&auto=format&fit=crop',
  },
  {
    id: 'cloud-infra-management',
    title: 'Cloud Infrastructure Management',
    description: 'Provisioning, patching, scaling, and resource monitoring — continuous management of your AWS infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop',
  },
  {
    id: 'cloud-security-compliance',
    title: 'Cloud Security & Compliance',
    description: 'Security controls, access management, and compliance monitoring mapped to the regulations your industry requires.',
    //imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1170&auto=format&fit=crop',
    imageUrl: '/privacysecurity.png',
  },
  {
    id: 'backup-disaster-recovery',
    title: 'Backup & Disaster Recovery',
    description: 'Backup and recovery strategies built for business continuity — tested, documented, and repeatable.',
    // imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1170&auto=format&fit=crop',
    imageUrl: '/backup.png',
  },
  {
    id: 'cost-optimization',
    title: 'Cloud Cost Optimization',
    description: 'Reserved instances, rightsizing, and architecture reviews — continuous monitoring to reduce AWS spend.',
    //imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop',
    imageUrl: '/costoptimization.jpg',
  },
  {
    id: 'support-monitoring',
    title: '24/7 Support & Monitoring',
    description: 'Round-the-clock monitoring and support for the availability, performance, and security of your cloud environment.',
    imageUrl:'/monitoring.png', 
  }
];

export default function BlurryCarouselCloud() {
  return (
    <section className="w-full">
      <BlurryCarousel 
        items={cloudManagedServicesData} 
        sectionTitle="Managed Cloud Services" 
        bgColor="bg-[#4b456f]"
        titleColor="text-white"
        footerText=" "
      />
    </section>
  );
}
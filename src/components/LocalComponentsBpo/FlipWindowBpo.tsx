import React from 'react';
import { FlipWindow, FlipWindowItem } from '@/components/FlipWindow';

const BPO_BG_GRADIENT = "bg-gradient-to-r from-[#3b235b] to-[#2a3b5c]";

const bpoData: FlipWindowItem[] = [
  {
    id: 'us-experts',
    frontContent: (
      <img 
        src="/logos/bpo/gisa.png" 
        alt="US-Based Software Experts" 
        className="max-h-[140px] max-w-full object-contain" 
      />
    ),
    backTitle: 'IAOP GISA Winner',
    backItems: [
      'Recognized for Global Impact Sourcing',
      'Intentional hiring from underserved communities',
      'Aligned with UN Sustainable Development Goals',
    ],
  },
  {
    id: 'direct-collab',
    frontContent: (
      <img 
        src="/logos/bpo/hipaa.png" 
        alt="Direct Collaboration with Engineers" 
        className="max-h-[140px] max-w-full object-contain" 
      />
    ),
    backTitle: 'HIPAA Compliant',
    backItems: [
      'Strict protection of patient health data',
      'Adherence to Privacy and Security Rules',
      'Trusted by healthcare entities and associates',
    ],
  },
  {
    id: 'award-winning',
    frontContent: (
      <img 
        src="/logos/bpo/ISO9001.png" 
        alt="Award Winning & Excellent Reviews" 
        className="max-h-[140px] max-w-full object-contain" 
      />
    ),
    backTitle: 'ISO 9001:2015 Certified',
    backItems: [
      'Internationally recognized Quality Management System',
      'Consistent delivery of high-quality services',
      'Commitment to continual improvement',
    ],
  },
  {
    id: 'microsoft-gold',
    frontContent: (
      <img 
        src="/logos/bpo/microsoft-gold.png" 
        alt="Microsoft Gold Partner" 
        className="max-h-[140px] max-w-full object-contain" 
      />
    ),
    backTitle: 'Microsoft Gold Partner',
    backItems: [
      'Proven expertise across Microsoft Cloud solutions',
      'Certified professionals and successful outcomes',
      'Specialized in Business Apps, Azure, and Security',
    ],
  },
];

export default function FlipWindowBpo() {
  return (
    <section className="w-full">
      <FlipWindow
        items={bpoData}
        sectionTitle="Associations And Certifications"
        bgColor={BPO_BG_GRADIENT}
        titleColor="text-white"
      />
    </section>
  );
}
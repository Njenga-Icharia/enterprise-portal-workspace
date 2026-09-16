import React from 'react';
import ResponsiveWindow, { IndustryItem } from '@/components/ResponsiveWindow';

const TECHNO_BRAIN_INDUSTRIES: IndustryItem[] = [
  {
    id: 'government',
    title: 'Government',
    description: 'We empower public sector agencies with secure, scalable digital solutions to enhance citizen services and streamline administrative operations.',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'We deliver compliant, patient-centric digital health solutions that improve care delivery, data interoperability, and operational efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'bfsi',
    title: 'Banking & Finance',
    description: 'We provide secure, innovative fintech solutions that streamline transactions, enhance regulatory compliance, and elevate customer experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'telecom',
    title: 'Telecom',
    description: 'We help telecom providers modernize their networks, optimize operations, and deliver superior connectivity experiences to their subscribers.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'We automate retail operations with advanced technologies that drive customer engagement, optimize supply chains, and boost market growth.',
    imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'We partner with tech companies to accelerate software engineering, enhance product development, and scale their global operations.',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function ResponsiveWindowEngineering() {
  return (
    <ResponsiveWindow 
      items={TECHNO_BRAIN_INDUSTRIES} 
      ColoredSectionTitle="SUCCESSS" 
      sectionTitle="STORIESS" 
      accentColor="text-fuchsia-500" 
    />
  );
}
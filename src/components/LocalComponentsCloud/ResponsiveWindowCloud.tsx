import React from 'react';
import ResponsiveWindow, { IndustryItem } from '@/components/ResponsiveWindow';

const TECHNO_BRAIN_CLOUD_INDUSTRIES: IndustryItem[] = [
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Secure, sovereign cloud fabrics built to empower public sector institutions with maximum data privacy and citizen service uptime.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1742710726634-18e31a278fc2?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D. ' ,
  },
  {
    id: 'finops',
    title: 'FinOps',
    description: 'HIPAA and ISO-compliant health architectures ensuring lightning-fast electronic health record (EHR) access and secure multi-region storage.',
    imageUrl: './fintech.jpg.',
  },
  {
    id: 'genarativeai',
    title: 'Generative AI',
    description: 'High-throughput, low-latency transaction processing environments engineered for strict regulatory frameworks and zero-downtime banking.',
    imageUrl: './artificialintelligence.jpg.',
    imageSrc: './artificialintelligence.jpg.',
  },
  {
    id: 'telecom-managed',
    title: 'Managed Cloud Services',
    description: 'Modernizing telecommunication grids with edge computing nodes that handle massive subscriber data loads with sub-millisecond efficiency.',
    imageUrl: 'https://www.goldenavenue.ae/wp-content/uploads/2022/02/1328841.jpg',
  },
  {
    id: 'telecom-microsoft',
    title: 'Microsoft Workload',
    description: 'Modernizing telecommunication grids with edge computing nodes that handle massive subscriber data loads with sub-millisecond efficiency.',
    imageUrl: 'https://www.reuters.com/resizer/v2/NKRZSNOPANMWXLLGRM3CV52T2U.jpg?auth=e0077a8b5a073ae254a7d259783f9e468df01523499e09f7d3c6dd8bc8166638&width=640&quality=80.',
  },
  {
    id: 'telecom-migration',
    title: 'Migration',
    description: 'Modernizing telecommunication grids with edge computing nodes that handle massive subscriber data loads with sub-millisecond efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function ResponsiveWindowCloud() {
  return (
    <ResponsiveWindow 
      items={TECHNO_BRAIN_CLOUD_INDUSTRIES} 
      ColoredSectionTitle="Cloud" 
      sectionTitle="Services" 
      accentColor="text-fuchsia-500" 
    />
  );
}

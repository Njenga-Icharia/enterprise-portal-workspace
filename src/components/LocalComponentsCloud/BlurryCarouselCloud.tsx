'use client';

import React from 'react';
import { BlurryCarousel, CarouselItem } from '@/components/BlurryCarousel';

const cloudManagedServicesData: CarouselItem[] = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Modernization',
    description: 'Seamlessly transition core legacy workloads to secure, high-performance cloud environments with minimum downtime and maximum optimization.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1542&auto=format&fit=crop',
  },
  {
    id: 'multi-cloud',
    title: 'Multi-Cloud Architecture',
    description: 'Design and deploy resilient multi-cloud strategies across AWS, Azure, and Google Cloud Platform to prevent vendor lock-in and optimize costs.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop',
  },
  {
    id: 'devops-iac',
    title: 'DevOps & Infrastructure as Code',
    description: 'Automate release lifecycles and environment provisioning using modern IaC frameworks, containerization, and continuous integration pipelines.',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?q=80&w=1170&auto=format&fit=crop',
  },
  {
    id: 'iaas',
    title: 'Infrastructure-as-a-Service (IaaS)',
    description: 'Scale your enterprise rapidly with highly resilient, cloud-based computing resources, storage, and networking capabilities designed for scale.',
    imageUrl: 'https://freerangestock.com/_next/image?url=%2Fimages%2Fsample%2F137546%2FCloud_Infrastructure_-_Infrastructure_as_a_Service_-_IaaS.jpg&w=3840&q=75',
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security & Compliance',
    description: 'Implement robust cloud-native security postures, identity and access management (IAM), and continuous threat monitoring for public sectors.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1170&auto=format&fit=crop',
  },
  {
    id: 'soc',
    title: 'Cloud Operations Center (SOC)',
    description: 'Continuous, proactive cloud monitoring and threat hunting utilizing automated heuristics to safeguard enterprise workloads against threats.',
    imageUrl: 'https://datacipher.com/wp-content/uploads/2024/06/l85a1k-xqh8-768x513.jpg',
  }
];

export default function BlurryCarouselCloud() {
  return (
    <section className="w-full">
      <BlurryCarousel 
        items={cloudManagedServicesData} 
        sectionTitle="Cloud Managed Services" 
        bgColor="bg-[#f97316]"
        titleColor="text-white"
      />
    </section>
  );
}
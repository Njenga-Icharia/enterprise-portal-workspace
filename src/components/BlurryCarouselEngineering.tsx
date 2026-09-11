'use client';

import React from 'react';
import { BlurryCarousel, CarouselItem } from './BlurryCarousel';

const managedServicesData: CarouselItem[] = [
  {
    id: 'rpa',
    title: 'Robotic Process Automation',
    description: 'Streamline enterprise workflows by deploying intelligent bots to automate repetitive, high-volume tasks, significantly reducing operational costs and human error.',
    imageUrl: 'https://images.unsplash.com/photo-1684369175809-f9642140a1bd?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'kpo',
    title: 'Knowledge Process Outsourcing',
    description: 'Leverage specialized domain expertise and advanced analytical skills to drive high-level, data-driven decision making and core business strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'helpdesk',
    title: 'IT Helpdesk',
    description: 'Provide comprehensive 24/7 technical support and incident management to ensure seamless operational continuity across corporate infrastructures.',
    imageUrl: 'https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'iaas',
    title: 'Infrastructure-as-a-Service (IaaS)',
    description: 'Scale your enterprise rapidly with highly resilient, cloud-based computing resources, storage, and networking capabilities designed for the modern public and private sectors.',
    imageUrl: 'https://freerangestock.com/_next/image?url=%2Fimages%2Fsample%2F137546%2FCloud_Infrastructure_-_Infrastructure_as_a_Service_-_IaaS.jpg&w=3840&q=75',
  },
  {
    id: 'euc',
    title: 'End-User Computing',
    description: 'Optimize workforce productivity through secure, managed device deployment, virtual desktop infrastructure (VDI), and seamless application delivery.',
    imageUrl: 'https://edgeict.co.za/wp-content/uploads/2023/02/DSC089482-1024x480.jpg',
  },
  {
    id: 'soc',
    title: 'Security Operations Center (SOC)',
    description: 'Continuous, proactive monitoring and threat hunting utilizing advanced heuristics to protect enterprise networks against evolving intrusion vectors.',
    imageUrl: 'https://datacipher.com/wp-content/uploads/2024/06/l85a1k-xqh8-768x513.jpg',
  }
];

export default function BlurryCarouselEngineering() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <BlurryCarousel 
        items={managedServicesData} 
        sectionTitle="Managed Services" 
      />
    </section>
  );
}
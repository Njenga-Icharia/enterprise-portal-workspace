import React from 'react';
import SlidingPictures, { SlideData } from './SlidingPictures';

const engineeringContent: SlideData[] = [
  {
    id: 'end-user-computing',
    title: 'END-USER\nCOMPUTING',
    description: 'Empower your workforce with seamless, secure, and highly available computing environments.',
    buttonText: 'Learn More',
    imageUrl: '/images/end-user.jpg', // Replace with your actual image paths
  },
  {
    id: 'soc',
    title: 'SECURITY\nOPERATIONS\nCENTER (SOC)',
    description: 'Continuous monitoring and advanced threat detection to keep your enterprise infrastructure secure 24/7.',
    buttonText: 'View SOC Services',
    imageUrl: '/images/soc.jpg',
  },
  {
    id: 'rpa',
    title: 'ROBOTIC PROCESS\nAUTOMATION',
    description: 'Streamline repetitive tasks and boost operational efficiency with intelligent, scalable automation.',
    buttonText: 'Automate Now',
    imageUrl: '/images/rpa.jpg',
  },
  {
    id: 'kpo',
    title: 'KNOWLEDGE PROCESS\nOUTSOURCING',
    description: 'Leverage domain expertise and data-driven insights for complex, high-value business processes.',
    buttonText: 'Explore KPO',
    imageUrl: '/images/kpo.jpg',
  },
  {
    id: 'it-helpdesk',
    title: 'IT\nHELPDESK',
    description: 'Reliable, round-the-clock IT support to resolve technical issues quickly and maintain productivity.',
    buttonText: 'Get Support',
    imageUrl: '/images/helpdesk.jpg',
  },
  {
    id: 'iaas',
    title: 'INFRASTRUCTURE\nAS A SERVICE',
    description: 'Scalable, secure, and resilient cloud computing infrastructure tailored for modern demands.',
    buttonText: 'Discover IaaS',
    imageUrl: '/images/iaas.jpg',
  }
];

export default function SlidingPicturesEngineering() {
  return (
    <section className="w-full">
      <SlidingPictures slides={engineeringContent} />
    </section>
  );
}
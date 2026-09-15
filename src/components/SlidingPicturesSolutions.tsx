import React from 'react';
import SlidingPictures, { SlideData } from './SlidingPictures';

const salesContent: SlideData[] = [
  {
    id: 'scania-rental',
    title: 'SCANIA\nRENTAL',
    description: 'Scania Rental provides short-term or long-term hire for truck operators and is an ideal back-up facility for businesses that work contract-to-contract.',
    buttonText: 'Request for a Quote',
    imageUrl: '/images/scania-rental.jpg', // Replace with your actual image paths
  },
  {
    id: 'driver-training',
    title: 'DRIVER\nTRAINING\nKENYA',
    description: 'Skill up with a Scania-certified truck driving training course to ensure safety and efficiency on the road.',
    buttonText: 'Enrol Today',
    imageUrl: '/images/driver-training.jpg',
  },
  {
    id: 'fleet-management',
    title: 'FLEET\nMANAGEMENT\nPACKAGES',
    description: 'Monitor, control and optimise every trip with our advanced telematics and management software.',
    buttonText: 'Subscribe Today',
    imageUrl: '/images/fleet-management.jpg',
  },
  {
    id: 'buy-new-trucks',
    title: 'BUY NEW\nSCANIA\nTRUCKS',
    description: 'Explore our prime movers and rigids for long-haulage, construction, petroleum and cargo transport.',
    buttonText: 'Visit Our Digital Showroom',
    imageUrl: '/images/buy-new.jpg',
  }
];

export default function SlidingPicturesSales() {
  return (
    <section className="w-full">
      <SlidingPictures slides={salesContent} />
    </section>
  );
}
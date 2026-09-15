import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const ENGINEERING_IMAGES: ScrollStackItem[] = [
  {
    id: 'img1',
    imageUrl: 'https://msftstories.thesourcemediaassets.com/sites/133/2018/06/MTC-2-960x640.jpg',
  },
  {
    id: 'img2',
    imageUrl: 'https://msftstories.thesourcemediaassets.com/sites/133/2018/06/MTC-1.jpg',
  },
  {
    id: 'img3',
    imageUrl: 'https://msftstories.thesourcemediaassets.com/sites/133/2018/06/MTC-3-1024x683.jpg',
  },
];

export default function ScrollStackEngineering() {
  return (
    <ScrollStack 
      items={ENGINEERING_IMAGES} 
      bgColor="bg-[#4b456f]" // Matches your new purple theme
    />
  );
}
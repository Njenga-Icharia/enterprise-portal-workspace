import React from 'react';
import ScrollCurtain, { ScrollCurtainItem } from '@/components/ScrollCurtain';

const ENGINEERING_IMAGES: ScrollCurtainItem[] = [
  { id: 'img1', imageUrl: 'https://msftstories.thesourcemediaassets.com/sites/133/2018/06/MTC-2-960x640.jpg' },
  { id: 'img2', imageUrl: 'https://msftstories.thesourcemediaassets.com/sites/133/2018/06/MTC-1.jpg' },
  { id: 'img3', imageUrl: 'https://msftstories.thesourcemediaassets.com/sites/133/2018/06/MTC-3-1024x683.jpg' },
];

export default function ScrollCurtainEngineering() {
  return <ScrollCurtain items={ENGINEERING_IMAGES} />;
}
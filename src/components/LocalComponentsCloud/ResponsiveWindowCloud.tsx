import React from 'react';
import ResponsiveWindow, { IndustryItem } from '@/components/ResponsiveWindow';

const TECHNO_BRAIN_CLOUD_INDUSTRIES: IndustryItem[] = [
  {
    id: 'devops',
    title: 'DevOps',
   description: 'Automate software delivery on AWS through CI/CD pipelines, infrastructure as code, containerization, monitoring, and DevOps practices.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1742710726634-18e31a278fc2?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'finops',
    title: 'FinOps',
    description: 'Manage and optimize AWS cloud spending through cost visibility, resource optimization, governance, tagging, and automated cost controls.',
    imageSrc: '/fintech.jpg',
  },
  {
    id: 'genarativeai',
    title: 'Generative AI',
    description: 'Develop and integrate generative AI solutions through strategy, model training, fine-tuning, deployment, governance, and workflow integration.',
    imageSrc: '/artificialintelligence.jpg',
  },
  {
    id: 'managedcloud',
    title: 'Managed Cloud Services',
    description:'Manage AWS environments across migration, infrastructure, security, backup, disaster recovery, cost optimization, monitoring, and support.',
    imageUrl: 'https://www.goldenavenue.ae/wp-content/uploads/2022/02/1328841.jpg',
  },
  {
    id: 'microsoft',
    title: 'Microsoft Workload',
    description: 'Deploy, migrate, and manage Microsoft workloads on AWS, including Windows Server, SQL Server, SharePoint, Exchange, and Dynamics.',
    //imageUrl: 'https://www.reuters.com/resizer/v2/NKRZSNOPANMWXLLGRM3CV52T2U.jpg?auth=e0077a8b5a073ae254a7d259783f9e468df01523499e09f7d3c6dd8bc8166638&width=640&quality=80',
    imageSrc:'/microsoft3.jpg',
  },
  {
    id: 'telecom-migration',
    title: 'Migration',
    description: 'Assess existing workloads, plan the migration, provision AWS infrastructure, move applications and data, and optimize the resulting cloud environment.',
    //imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageSrc:'/migration.jpg',
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

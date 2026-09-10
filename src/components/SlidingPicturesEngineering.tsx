import React from 'react';
import SlidingPictures, { SlideData } from './SlidingPictures';
import Link from "next/link";
import { motion } from "framer-motion";

const engineeringContent: SlideData[] = [
  {
  id: "ifmis-ethiopia",
    title: "IFMIS\nETHIOPIA",
    description:
    "The Government of Ethiopia lacked an integrated Public Financial  Management system, creating inefficiencies, limited transparency, and difficulties in budgeting and expenditure management. Techno Brain implemented IFMIS using Oracle ERP technology and Oracle Supercluster hardware, standardizing processes and creating a single source of financial information. Rolled out across 156 federal sites, the system improved budgetary control, forecasting, planning, reporting, procurement, payroll, and service delivery.",
    buttonText: "View Case Study",
    imageUrl: "https://i0.wp.com/picjumbo.com/wp-content/uploads/golden-finance-matrix-stock-charts-background-free-image.jpeg?w=2210&quality=70",
},
{
  id: "rpa-safaricom",
  title: "RPA FOR\nSAFARICOM",
  description:
  "Safaricom had employees manually logging into multiple systems to vet customer data, perform resets, installations, and run scripts. Techno Brain deployed attended and unattended bots that automated these processes. Customer vetting time was reduced by 60 seconds, while radio equipment resets and SIP creation were automated, freeing engineers and operations staff to focus on more meaningful work.",
  buttonText: "View Case Study",
  imageUrl: "https://i0.wp.com/picjumbo.com/wp-content/uploads/girl-using-tablet-on-the-garden-free-photo.jpg?w=2210&quality=70",
},
{
  id: "malawi-tax",
  title: "TAX SOLUTIONS\nFOR MALAWI",
  description:
  "The Malawi Revenue Authority faced manual data entry, cumbersome paperwork, limited transparency, and a high potential for errors and fraud. Techno Brain implemented the TRIPS+ Integrated Tax Administration System to modernize tax operations, improve taxpayer services and compliance, and enhance revenue collection. The solution reduced manual intervention and administrative burden while enabling data-driven decision-making.",
  buttonText: "View Case Study",
  imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop",
},

{
  id: "otas-tcra",
  title: "ONLINE TYPE\nAPPROVAL SYSTEM",
  description:
  "The Tanzania Communications Regulatory Authority needed a secure and user-friendly way for customers to apply for equipment type approval and certification while improving application tracking and contact management. Techno Brain implemented the Online Type Approval System with dedicated user, approver, and account modules. The result was improved collaboration, faster business processes, greater transparency, and higher customer satisfaction.",
  buttonText: "View Case Study",
  imageUrl: "https://images.unsplash.com/photo-1632277232577-09bcf876d6fb?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  id: "erp-sbc",
  title: "ERP FOR SBC\nTANZANIA",
  description:
  "SBC Tanzania was operating with disconnected business systems and fragmented information that hindered growth and made it difficult to meet customer expectations. Techno Brain implemented a Dynamics NAV-based Enterprise Resource Planning system that integrated information across departments and provided management with real-time information for better decisions. The implementation improved productivity, profitability, reporting, inventory management, and coordination across branches.",
  buttonText: "View Case Study",
  imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&auto=format&fit=crop",
},
{
  id: "zimra-ects",
  title: "ZIMRA\nELECTRONIC CARGO\nTRACKING",
  description:
  "The Zimbabwe Revenue Authority had no live cargo tracking system, creating opportunities for data tampering, transit delays, theft, smuggling, and revenue loss. Techno Brain implemented a real-time Electronic Cargo Tracking and Security System based on the Locate365 Platform. The system provided live tracking, alerts, geofencing, reporting, access controls, information sharing, and journey replay capabilities, helping intercept smuggled fuel and improve accountability.",
  buttonText: "View Case Study",
  imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop",
},
{
  id: "afis-cts-malawi",
  title: "AFIS-BASED\nCRIMINAL TRACKING",
  
  description:
  "The Malawi Police Service relied on manual fingerprint collection, physical records, and manual searches, causing delays, duplicate records, data loss, filing problems, and human errors. Techno Brain implemented a Criminal Tracking System built on an Automatic Fingerprint Identification System at Lilongwe headquarters. The centralized system automated fingerprint and demographic data management, enabled faster searches and verification, and improved nationwide and international sharing of criminal information.",
  buttonText: "View Case Study",
  imageUrl: "https://images.unsplash.com/photo-1690400524283-4e410dce7318?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  id: "tanapa-ims",
  title: "TANAPA\nINTEGRATED\nMANAGEMENT SYSTEM",
  description:
  "Tanzania National Parks needed to improve management of financial operations, revenue, ecology, conservation, fleet management, and other park functions across its national network. Techno Brain implemented an Integrated Management Information System covering accounting, budgeting, revenue, bookings, ecology, conservation, and fleet management. The solution was rolled out across 14 national parks and improved visibility, revenue management, procurement, reporting, and operational coordination.",
  buttonText: "View Case Study",
  imageUrl: " https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop",
},
{
  id: "crown-rpa",
  title: "CROWN PAINTS\nLOYALTY RPA",
  description:
  "Crown Paints needed to process painter loyalty rewards across three countries. Manual processing of the previous day's records could take more than four hours. Techno Brain deployed an unattended robot to process loyalty points in real time, with exceptions automatically identified and sent to the call centre. The solution achieved 100% accuracy in bulk loyalty processing and made rewards available to customers much faster.",
  buttonText: "View Case Study",
  imageUrl: "https://www.crownpaints.co.ke/storage/explore-images/xplore.jpg",
},
{
  id: "jambojet-rpa",
  title: "JAMBOJET\nREVENUE\nRECONCILIATION",
  description:
  "Jambojet needed to reconcile ticket revenue from more than 50 agents and multiple payment channels before posting transactions into its airline ERP. The manual process took more than 12 hours each day. Techno Brain introduced an AI chatbot and backend automation to validate and reconcile transactions against the airline's systems. Processing time was reduced from 12 hours to less than one hour, with improved transparency and anywhere access.",
  buttonText: "View Case Study",
  imageUrl: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&auto=format&fit=crop",
},
{
  id: "safaricom-operational-rpa",
  title: "SAFARICOM\nOPERATIONAL\nEFFICIENCY RPA",
  description:
  "Safaricom had repetitive operational processes requiring employees to log into multiple systems for customer verification, equipment resets, installations, and script execution. Techno Brain deployed attended and unattended bots to automate these activities. Customer vetting time was reduced by 60 seconds, equivalent to 161 hours saved daily, while automated equipment resets saved approximately three engineering hours per day and improved customer experience.",
  buttonText: "View Case Study",
  imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop",
},
{
  id: "malawi-revenue-authority",
  title: "MALAWI\nREVENUE AUTHORITY",
  description:
  "The Malawi Revenue Authority faced manual processes, limited transparency, extensive paperwork, and the risk of errors and fraud. Techno Brain implemented the TRIPS+ Integrated Tax Administration System to modernize tax administration, strengthen compliance, improve collection, and reduce administrative effort. Real-time access to tax information and reporting also supported more informed, data-driven decisions.",
  buttonText: "View Case Study",
  imageUrl: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
},
];


export default function SlidingPicturesEngineering() {
  return (
    <section className="w-full">
      <SlidingPictures slides={engineeringContent} />
    </section>
  );
}
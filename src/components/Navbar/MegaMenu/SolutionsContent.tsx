import Link from "next/link";
import { MegaMenuLink } from "./MegaMenuLink";

export function SolutionsContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-6 flex flex-col">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">
          PUBLIC SECTOR
        </span>
        <Link href="/solutions" className="group inline-block mb-2 w-max">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
            Government Solutions
          </h2>
        </Link>
        <p className="text-sm font-medium text-white/90 mb-8">
          Harnessing Africa&apos;s Ingenuity
        </p>
        <div className="border-t border-black/20 pt-6 space-y-3">
          <MegaMenuLink href="/solutions" label="Identity Management" />
          <MegaMenuLink href="/solutions" label="Public Finance Management" />
          <MegaMenuLink href="/solutions" label="Revenue Management System" />
          <MegaMenuLink href="/solutions" label="Tax and Customs" />
        </div>
      </div>

      <div className="lg:col-span-6 flex flex-col lg:border-l lg:border-black/20 lg:pl-8">
        <span className="text-xs font-extrabold tracking-wider uppercase text-white mb-2">
          PRIVATE SECTOR
        </span>
        <Link href="/solutions" className="group inline-block mb-2 w-max">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
            Enterprise Solutions
          </h2>
        </Link>
        <p className="text-sm font-medium text-white/90 mb-8">
          Empowering swift and agile operations
        </p>
        <div className="border-t border-black/20 pt-6 space-y-3">
          <MegaMenuLink href="/solutions" label="Grant Management" />
          <MegaMenuLink href="/solutions" label="Document Management" />
          <MegaMenuLink href="/solutions" label="Monitoring and Evaluation" />
          <MegaMenuLink href="/solutions" label="Robotic Process Automation" />
          <MegaMenuLink href="/solutions" label="Power BI" />
        </div>
      </div>
    </div>
  );
}
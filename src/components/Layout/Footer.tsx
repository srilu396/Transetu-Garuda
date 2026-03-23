import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  // Company documents array - you can update these paths later
  const companyDocs = [
    {
      name: "Year 1 Experience Letter",
      path: "/docs/experience-letter-year1.pdf" 
    },
    {
      name: "Year 2 Experience Letter",
      path: "/docs/experience-letter-year2.pdf" 
    },
    {
      name: "Year 3 Experience Letter",
      path: "/docs/experience-letter-year3.pdf" 
    },
    {
      name: "IEC Certificate",
      path: "/docs/iec-certificate.pdf" 
    },
    {
      name: "ODLC Document",
      path: "/docs/odlc-document.pdf" 
    },
    {
      name: "Udyam Registration Certificate",
      path: "/docs/udyam-registration.pdf" 
    }
  ];

  return (
    <footer
      className="border-t border-white/20"
      style={{ backgroundColor: "#6467f2" }}
    >
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-2">
              <Link href="/" className="flex items-center">
                {/* Reduced logo size and removed extra margin */}
                <div className="relative w-20 h-21 flex items-center justify-center flex-shrink-0 -mr-2">
                  <Image
  src="/assets/logos/image.png"
  alt="Garuda OM logo"
  width={80}
  height={84}
  className="object-contain brightness-0 invert"
  loading="lazy"
/>
                </div>
                <div className="flex flex-col">
  <div className="text-4xl font-black tracking-wider text-white leading-none">
    Garuda OM
  </div>
  <span className="text-sm font-bold text-white mt-1.5 italic max-w-[200px]">
    Integrated GPS & FASTag Solutions
  </span>
</div>
              </Link>
            </div>
            {/* Brand line - slightly increased font size */}
            <div className="mb-4">
              <p className="text-white/90 text-sm font-medium">
                A brand of Omimportandexport pvt limited
              </p>
            </div>
            {/* Description text - increased from text-xs to text-sm */}
            <p className="text-white mb-4 leading-relaxed text-sm max-w-md">
              Track, monitor, and manage your fleet with real-time GPS, fuel
              sensors, dash cams, and FASTag integration — everything you need
              on one powerful platform for complete operational control.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone w-3 h-3 text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a
                  href="tel:+917780274792"
                  className="text-sm text-white hover:text-white/80 transition-colors"
                >
                  +91 7780274792
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail w-3 h-3 text-white"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-sm text-white">
                  omimportandexport1994@gmail.com
                </span>
              </div>
              
              {/* Office Addresses Section */}
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin w-3 h-3 text-white flex-shrink-0 mt-0.5"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div className="flex flex-col text-sm text-white">
                  <span>12-1-8, Vijawada, Benz Circle,</span>
                  <span>Parameta, Andhra Pradesh, India, 520010</span>
                  <span className="mt-2">Vaswani Presidio, 83/2, 2nd Floor,</span>
                  <span>Panathur Main Road, Off Outer Ring Road,</span>
                  <span>Kadubeesanahalli, Bengaluru, Karnataka, India, 560103</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Industries Section */}
          <div className="mt-8 lg:mt-12">
            <h3 className="text-lg font-semibold mb-4 text-white font-black uppercase tracking-tight">
              Our Industries
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/logistics-transportation"
                >
                  Logistics & Transport
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/mining-operations"
                >
                  Mining Operations
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/school-fleet-safety"
                >
                  School Fleet Safety
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/ready-mix-concrete"
                >
                  Ready Mix Concrete
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/pharmaceutical-logistics"
                >
                  Healthcare Logistics
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Docs Section */}
          <div className="mt-8 lg:mt-12">
            <h3 className="text-lg font-semibold mb-4 text-white font-black uppercase tracking-tight">
              Company Docs
            </h3>
            <ul className="space-y-2">
              {companyDocs.map((doc, index) => (
                <li key={index}>
                  <a
                    href={doc.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 transition-colors text-sm font-medium block"
                  >
                    {doc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Important Solutions Section */}
          <div className="mt-8 lg:mt-12">
            <h3 className="text-lg font-semibold mb-4 text-white font-black uppercase tracking-tight">
              Important Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/solutions/gps-tracking-solutions"
                >
                  Fleet GPS Tracking
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/solutions/fuel-level-sensors"
                >
                  Fuel Monitoring
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/solutions/dash-cam-system"
                >
                  Dash Cam System
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/industries/fastag-fleet-management"
                >
                  FASTag Management
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/solutions/ais-140-tracker"
                >
                  AIS 140 Compliance
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                  href="/solutions/temperature-monitor"
                >
                  Temperature Monitoring
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/20">
          <div className="text-sm text-white">
            © 2026 Garuda OM. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
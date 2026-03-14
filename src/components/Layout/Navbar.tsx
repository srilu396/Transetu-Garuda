import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/30 bg-primary/10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Garuda OM logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gradient leading-none">
                Garuda OM
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a className="nav-link text-sm font-medium" href="/#about">
                About Us
              </a>
              <a className="nav-link text-sm font-medium" href="/#products">
                Products
              </a>
              <a className="nav-link text-sm font-medium" href="/#industries">
                Industries
              </a>
              <a className="nav-link text-sm font-medium" href="/#why-us">
                Why Us
              </a>
              <a className="nav-link text-sm font-medium" href="/events">
                Events
              </a>
              <a className="nav-link text-sm font-medium" href="/blog">
                Blog
              </a>
              <a className="nav-link text-sm font-medium" href="/#contact">
                Contact
              </a>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 btn-hero">
                Get Started
              </button>
            </div>
            <div className="lg:hidden">
              <button className="text-foreground hover:text-primary transition-colors">
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
                  className="lucide lucide-menu w-6 h-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav
        aria-label="Breadcrumb Navigation"
        className="bg-background/80 backdrop-blur-sm border-b border-border/50 py-2 sticky top-16 z-40"
      >
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li className="flex items-center">
              <button
                className="flex items-center gap-1 px-2 py-1 rounded transition-colors text-primary font-medium bg-primary/10"
                aria-current="page"
              >
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
                  className="lucide lucide-house w-3 h-3"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                Home
              </button>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
}

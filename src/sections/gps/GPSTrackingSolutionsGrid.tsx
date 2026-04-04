"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const SlidePanel = dynamic(() => import("@/components/UI/SlidePanel"), {
  ssr: false,
});
import {
  Camera, Truck, Fuel, Thermometer, Lock, MapPin, Shield,
  BarChart3, Package, LucideIcon, Satellite, Navigation,
  Navigation2, Route, Map, Signal, Wifi, Bus, Car, Battery,
  Zap, Cpu, Video, Monitor, Radio, ShieldCheck, Flag,
  BarChart2, PieChart, TrendingUp, Activity, Timer, Clock,
  Settings, Wrench, Bell, AlertCircle, CheckCircle2, Star,
  Award, Target, ThumbsUp, LifeBuoy, Phone, Smartphone,
  Building2, Users, Globe, CreditCard, Tag, Layers, Cloud,
  Database, FileText, Link, Search,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { urlFor } from "@/lib/sanity";
import { GPS_CARDS_QUERY } from "@/lib/queries";
import { fetchSanityQuery } from "@/actions/sanity";
import { solutions as localSolutionsData, SolutionData } from "@/sections/gps/data/gpsData";
import { assetTracking } from "@/sections/gps/data/asset-tracking";

// ── Complete Icon Map ──────────────────────────────────────────────────────
const IconMap: Record<string, LucideIcon> = {
  Camera, Truck, Fuel, Thermometer, Lock, MapPin, Shield,
  BarChart3, Package, Satellite, Navigation, Navigation2,
  Route, Map, Signal, Wifi, Bus, Car, Battery, Zap, Cpu,
  Video, Monitor, Radio, ShieldCheck, Flag, BarChart2,
  PieChart, TrendingUp, Activity, Timer, Clock, Settings,
  Wrench, Bell, AlertCircle, CheckCircle2, Star, Award,
  Target, ThumbsUp, LifeBuoy, Phone, Smartphone, Building2,
  Users, Globe, CreditCard, Tag, Layers, Cloud, Database,
  FileText, Link, Search,
};

// ── Types ──────────────────────────────────────────────────────────────────
type SanityGPSCard = {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  bulletPoints: string[];
  slug: string;
  detailedMedia?: {
    mediaType: 'image' | 'video' | 'youtube';
    image?: string;
    youtubeUrl?: string;
    videoUrl?: string;
  };
  detailedData?: {
    title?: string;
    tagline?: string;
    overview?: string;
    benefits?: Array<{ iconName?: string; title?: string; description?: string }>;
    keyFeatures?: Array<{ iconName?: string; title?: string; description?: string }>;
    useCases?: Array<{ title?: string; description?: string }>;
    whyChoose?: Array<{ iconName?: string; description?: string }>;
  };
};

type ProductItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  features: string[];
  link: string;
  slug: string;
  image?: string;
  videoUrl?: string;
  detailedMedia?: SanityGPSCard['detailedMedia'];
  detailedData?: SanityGPSCard['detailedData'];
};

// ── Local Products (fallback) ──────────────────────────────────────────────
const localProducts: ProductItem[] = [
  {
    title: "Fleet GPS Tracker",
    description:
      "Track and manage your fleet in real time with a powerful GPS tracking system that helps optimize routes and monitor driver performance.",
    icon: Truck,
    badge: "Fleet Management",
    features: [
      "Real-time vehicle tracking",
      "Route optimization",
      "Driver behavior insights",
    ],
    link: "/solutions/gps-tracking-solutions",
    slug: "gps-tracking-solutions",
    image: "/images/products/fleet-tracker.jpg",
  },
  {
    title: "Asset Tracking",
    description:
      "Track powered and unpowered assets—from construction equipment to shipping containers—with rugged GPS trackers and long-life battery devices.",
    icon: Package,
    badge: "Asset Management",
    features: [
      "Powered & unpowered asset tracking",
      "Long-life battery trackers",
      "Asset utilization reporting",
      "Theft prevention and recovery",
    ],
    link: "/solutions/asset-tracking",
    slug: "asset-tracking",
    image: assetTracking.imageUrl,
  },
  {
    title: "Fuel Monitoring System",
    description:
      "Monitor fuel levels accurately and detect fuel theft using advanced sensors integrated with your vehicle tracking system.",
    icon: Fuel,
    badge: "Fuel Management",
    features: [
      "Fuel level tracking",
      "Theft detection alerts",
      "Fuel usage reports",
    ],
    link: "/solutions/fuel-level-sensors",
    slug: "fuel-level-sensors",
    image: "/images/products/fuel-monitor.jpg",
  },
  {
    title: "AI Dash Cam",
    description:
      "Combine GPS tracking with video monitoring to improve security and gain better visibility into vehicle activity and driver behavior.",
    icon: Camera,
    badge: "Security Solutions",
    features: [
      "Live video streaming",
      "GPS location tracking",
      "Motion detection alerts",
    ],
    link: "/solutions/video-telematics",
    slug: "video-telematics",
    image: "/images/products/video-telematics.jpg",
  },
  {
    title: "Temperature Monitoring",
    description:
      "Track temperature conditions during transportation to protect sensitive goods such as food, medicine, and other perishable items.",
    icon: Thermometer,
    badge: "Cold Chain",
    features: [
      "Real-time temperature tracking",
      "Compliance reports",
      "Instant alerts",
    ],
    link: "/solutions/temperature-monitor",
    slug: "temperature-monitor",
    image: "/images/products/temperature.jpg",
  },
  {
    title: "GPS Smart Padlock",
    description:
      "Secure cargo, containers, and valuable assets with a smart padlock that provides location tracking and tamper alerts.",
    icon: Lock,
    badge: "Asset Security",
    features: ["Remote lock control", "GPS location tracking", "Tamper alerts"],
    link: "/solutions/padlock-gps",
    slug: "padlock-gps",
    image: "/images/products/padlock.jpg",
  },
  {
    title: "Photogrammetry Services",
    description:
      "High-precision mapping and surveying services using advanced GPS and photogrammetry technology for accurate geographic data.",
    icon: MapPin,
    badge: "Mapping Services",
    features: ["Survey data collection", "Precision mapping", "3D modeling"],
    link: "/solutions/photogrammetry-services",
    slug: "photogrammetry-services",
    image: "/images/products/photogrammetry.jpg",
  },
  {
    title: "AIS 140 GPS Tracker",
    description:
      "Government-approved GPS tracking device designed to meet AIS 140 compliance standards for commercial vehicles.",
    icon: Shield,
    badge: "Compliance",
    features: [
      "Emergency panic button",
      "AIS 140 certified",
      "Vehicle diagnostics",
    ],
    link: "/solutions/ais-140-tracker",
    slug: "ais-140-tracker",
    image: "/images/products/ais140-garuda-om.png",
  },
  {
    title: "Geofencing & Location Alerts",
    description:
      "Create virtual boundaries and receive instant alerts when vehicles or assets enter or exit defined zones.",
    icon: MapPin,
    badge: "Geofencing",
    features: ["Custom Geofences", "Instant Notifications", "Route Adherence"],
    link: "/solutions/geofencing-alerts",
    slug: "geofencing-alerts",
    image: "/images/products/geofencing-location-alerts.png",
  },
  {
    title: "GPS Tracking Software Platform",
    description:
      "A centralized platform to monitor, manage, and analyze GPS tracking data with real-time dashboards.",
    icon: BarChart3,
    badge: "Software",
    features: ["Real-Time Dashboards", "Custom Reporting", "Maintenance Scheduling"],
    link: "/solutions/software-platform",
    slug: "software-platform",
    image: "/images/products/gps-tracking-software-platform.png",
  },
];

// ── SLUG NORMALIZER ────────────────────────────────────────────────────────
// Handles slug mismatches between Sanity and localSolutionsData keys.
// Tries exact match first, then common variations.
function resolveSlug(slug: string): string | null {
  if (!slug) return null;

  // 1. Exact match — best case
  if (localSolutionsData[slug]) return slug;

  // 2. Normalize: lowercase + replace spaces/underscores with hyphens
  const normalized = slug.toLowerCase().replace(/[\s_]+/g, "-");
  if (localSolutionsData[normalized]) return normalized;

  // 3. Try stripping trailing slashes
  const stripped = normalized.replace(/^\/|\/$/g, "");
  if (localSolutionsData[stripped]) return stripped;

  // 4. Fuzzy: find a key that the slug starts with or contains
  const keys = Object.keys(localSolutionsData);
  const fuzzy = keys.find(
    (key) => key.includes(normalized) || normalized.includes(key)
  );
  if (fuzzy) return fuzzy;

  return null;
}

// ── FALLBACK SOLUTION DATA BUILDER ────────────────────────────────────────
// Guarantees every card — including new Sanity cards — gets a full
// SolutionData object so GPSDetailWrapper always renders correctly.
function buildFallbackSolutionData(product: ProductItem): SolutionData {
  return {
    title: product.title,
    tagline: product.description,
    bgColor: "from-violet-900 to-indigo-900",
    overview: product.description,
    detailedDescription: {
      what: `${product.title} is an advanced GPS tracking solution designed for modern fleet operations.`,
      how: `It works by integrating real-time GPS data with intelligent software to give you complete visibility and control.`,
      who: `Ideal for fleet managers, logistics companies, and businesses that rely on vehicles or assets for daily operations.`,
      why: `Because operational efficiency, security, and compliance are non-negotiable in today's competitive environment.`,
    },
    features: product.features.map((f) => ({
      title: f,
      description: `${f} — powered by Garuda OM's enterprise-grade GPS infrastructure for reliable, real-time results.`,
      icon: "CheckCircle2",
    })),
    useCases: [
      {
        title: "Fleet Operations",
        description: `Use ${product.title} to streamline fleet operations, reduce downtime, and improve overall efficiency.`,
      },
      {
        title: "Asset Security",
        description: `Protect your valuable assets with real-time monitoring and instant alerts from ${product.title}.`,
      },
      {
        title: "Compliance & Reporting",
        description: `Meet regulatory requirements and generate detailed reports with ease using ${product.title}.`,
      },
    ],
    benefits: [
      {
        title: "Real-Time Visibility",
        description: "Know exactly where your fleet and assets are at all times.",
        icon: "MapPin",
      },
      {
        title: "Reduced Costs",
        description: "Cut fuel waste, idle time, and maintenance costs significantly.",
        icon: "TrendingUp",
      },
      {
        title: "Enhanced Security",
        description: "Get instant alerts for unauthorized movement or geofence breaches.",
        icon: "Shield",
      },
    ],
    seoMeta: {
      title: `${product.title} | Garuda OM GPS Solutions`,
      description: product.description,
    },
    imageUrl: product.image,
  };
}

function resolveSolutionData(product: ProductItem): SolutionData {
  const resolvedSlug = product.slug ? resolveSlug(product.slug) : null;

  if (resolvedSlug && localSolutionsData[resolvedSlug]) {
    // ── THE SEPARATION FIX ───────────────────────────────────────────
    // Priority: detailedMedia (from Sanity) → local imageUrl → card's image fallback
    return {
      ...localSolutionsData[resolvedSlug],
      media: product.detailedMedia ? {
        mediaType: product.detailedMedia.mediaType,
        imageUrl:  product.detailedMedia.image,
        youtubeUrl: product.detailedMedia.youtubeUrl,
        videoUrl:  product.detailedMedia.videoUrl,
      } : undefined,
      imageUrl: product.detailedMedia?.image || localSolutionsData[resolvedSlug].imageUrl,
    };
  }

  // If no local data but we have detailed data from Sanity
  if (product.detailedData) {
    return {
      title: product.detailedData.title || product.title,
      tagline: product.detailedData.tagline || product.description,
      bgColor: "from-blue-500 to-purple-600",
      overview: product.detailedData.overview || product.description,
      benefits: (product.detailedData.benefits ?? []).map((b) => ({
        icon: b.iconName || "Shield",
        title: b.title || "",
        description: b.description || "",
      })),
      features: (product.detailedData.keyFeatures ?? []).map((f) => ({
        icon: f.iconName || "Zap",
        title: f.title || "",
        description: f.description || "",
      })),
      useCases: (product.detailedData.useCases ?? []).map((u) => ({
        title: u.title || "",
        description: u.description || "",
      })),
      steps: [],
      media: product.detailedMedia ? {
        mediaType: product.detailedMedia.mediaType,
        imageUrl:  product.detailedMedia.image,
        youtubeUrl: product.detailedMedia.youtubeUrl,
        videoUrl:  product.detailedMedia.videoUrl,
      } : undefined,
      imageUrl: product.detailedMedia?.image || product.image,
      seoMeta: {
        title: product.detailedData.title || product.title,
        description: product.detailedData.tagline || product.description,
      },
    };
  }

  // No local data found — auto-generate consistent fallback
  return buildFallbackSolutionData(product);
}

// ── Convert Sanity card → ProductItem ─────────────────────────────────────
function sanityCardToProduct(card: SanityGPSCard): ProductItem {
  return {
    title: card.title,
    description: card.description ?? "",
    icon: Truck,
    badge: "GPS Solution",
    features: card.bulletPoints ?? [],
    link: `/solutions/${card.slug}`,
    slug: card.slug,
    image: card.image ? urlFor(card.image).width(600).url() : undefined,
    detailedMedia: card.detailedMedia,
    detailedData: card.detailedData,
  };
}

// ── Component ──────────────────────────────────────────────────────────────
export default function ProductsSection() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedSolutionData, setSelectedSolutionData] = useState<SolutionData | null>(null);
  const [products, setProducts] = useState<ProductItem[]>(localProducts);
  const [, setLoadingFromSanity] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      try {
        const isIframe = window.self !== window.top;
        const sanityCards: SanityGPSCard[] = await fetchSanityQuery(GPS_CARDS_QUERY, {}, isIframe);
        if (sanityCards && sanityCards.length > 0) {
          setProducts(sanityCards.map(sanityCardToProduct));
        }
      } catch (error) {
        console.error("Sanity fetch failed, using local data:", error);
      } finally {
        setLoadingFromSanity(false);
      }
    }
    fetchCards();
  }, []);

  const handleContactNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/#contact");
  };

  // ── Animation Variants ─────────────────────────────────────────────────
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 },
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    },
    tap: {
      scale: 0.98,
      transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    },
  };

  const cardBorderVariants = {
    hover: {
      borderColor: "rgba(126, 96, 244, 0.7)",
      boxShadow:
        "0 0 0 3px rgba(126, 96, 244, 0.25), 0 30px 60px -15px rgba(236, 57, 176, 0.35)",
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      scale: 1.1,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const badgeVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(126, 96, 244, 0.15)",
      transition: { duration: 0.2 },
    },
  };

  const featureItemVariants = {
    hover: (index: number) => ({
      x: 5,
      transition: { delay: index * 0.05, duration: 0.2 },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(236, 57, 176, 0.4)",
      transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="products"
      className="py-24 text-slate-900 overflow-hidden relative"
      style={{ backgroundColor: "#f8f6ff" }}
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(236,57,176,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(126,96,244,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(236,57,176,0.08) 0%, rgba(126,96,244,0.08) 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Our GPS Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-900"
          >
            GPS{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tracking Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Built for Mining, Logistics, Transportation & More. Rugged GPS
            tracking devices, accurate fuel level sensors, and HD dash cams
            designed for harsh environments and 24/7 operations.
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32 auto-rows-fr"
        >
          {products.map((product, index) => {
            const Icon =
              IconMap[product.icon?.displayName ?? ""] ??
              product.icon ??
              Truck;

            return (
              <motion.div
                key={product.slug || index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                custom={index}
                className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: "2px solid rgba(126, 96, 244, 0.15)",
                  boxShadow: "0 4px 24px rgba(126, 96, 244, 0.07)",
                }}
              >
                <motion.div
                  variants={cardBorderVariants}
                  className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                  style={{ border: "2px solid transparent" }}
                />

                {/* Image Section */}
                <div
                  className="relative w-full h-48 overflow-hidden shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(236,57,176,0.08), rgba(126,96,244,0.12))",
                  }}
                >
                  {product.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon
                        className="w-16 h-16 opacity-20"
                        style={{ color: "#7E60F4" }}
                      />
                    </div>
                  )}

                  {/* Icon Overlay */}
                  <motion.div
                    variants={iconVariants}
                    className="absolute top-3 left-3 w-10 h-10 flex items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm shadow-lg"
                    style={{ color: "#7E60F4" }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Badge */}
                  <motion.div
                    variants={badgeVariants}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm font-bold text-[10px] uppercase tracking-wide shadow-lg"
                    style={{
                      color: "#ec39b0",
                      border: "1px solid rgba(236,57,176,0.2)",
                    }}
                  >
                    {product.badge}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        custom={fIndex}
                        variants={featureItemVariants}
                        className="flex items-center text-sm text-slate-600 font-medium"
                      >
                        <div
                          className="w-2 h-2 rounded-full mr-2 shrink-0"
                          style={{
                            background: "linear-gradient(to right, #ec39b0, #7E60F4)",
                          }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => {
                        // ── THE KEY FIX ──────────────────────────────────
                        // resolveSolutionData() always returns valid data.
                        // SlidePanel will NEVER receive null solutionData.
                        // This fixes existing broken pages AND future Sanity cards.
                        setSelectedProduct(product);
                        setSelectedSolutionData(resolveSolutionData(product));
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-white text-sm font-bold transition-all duration-300 shadow-md"
                      style={{
                        background: "linear-gradient(to right, #ec39b0, #7E60F4)",
                      }}
                    >
                      Learn More
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{
                          type: "spring" as const,
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </motion.svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* SlidePanel — always receives solutionData, never null */}
        <SlidePanel
          isOpen={!!selectedProduct}
          onClose={() => {
            setSelectedProduct(null);
            setSelectedSolutionData(null);
          }}
          title={selectedProduct?.title || ""}
          description={selectedProduct?.description || ""}
          features={selectedProduct?.features || []}
          icon={selectedProduct?.icon || Truck}
          category={selectedProduct?.badge || "Fleet Solution"}
          solutionData={selectedSolutionData ?? undefined}
        />

        {/* Custom Solution Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative text-center bg-white rounded-3xl p-10 lg:p-16 overflow-hidden"
          style={{
            border: "1.5px solid rgba(126, 96, 244, 0.2)",
            boxShadow: "0 10px 40px rgba(126, 96, 244, 0.08)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl -mr-40 -mt-40"
            style={{ background: "rgba(236,57,176,0.08)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl -ml-40 -mb-40"
            style={{ background: "rgba(126,96,244,0.08)" }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Need a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #ec39b0, #7E60F4)",
                }}
              >
                Custom Solution?
              </span>
            </h3>
            <p className="text-lg text-slate-500 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Our engineering team specializes in architecting bespoke GPS
              tracking ecosystems tailored to your specific industrial
              workflows. Let's discuss your unique operational needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px -5px rgba(236, 57, 176, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactNavigation}
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white font-bold h-12 px-8 transition-all shadow-lg w-full sm:w-auto text-sm cursor-pointer"
                style={{
                  background: "linear-gradient(to right, #ec39b0, #7E60F4)",
                }}
              >
                Consult Our Experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactNavigation}
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full font-bold h-12 px-8 transition-all w-full sm:w-auto bg-transparent text-sm cursor-pointer"
                style={{
                  border: "2px solid rgba(126,96,244,0.4)",
                  color: "#7E60F4",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#ec39b0";
                  (e.currentTarget as HTMLButtonElement).style.color = "#ec39b0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(126,96,244,0.4)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#7E60F4";
                }}
              >
                Request Customization
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
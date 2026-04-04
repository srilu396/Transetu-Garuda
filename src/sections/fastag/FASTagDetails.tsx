"use client";

import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import { FASTagDetailsData } from "./data/fastagDetailsData";
import { FileText, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FASTagDetailsProps {
  data: FASTagDetailsData;
  showNavbarFooter?: boolean;
}

function MediaRenderer({
  media,
  defaultVideo,
  title,
}: {
  media?: {
    mediaType: "image" | "video" | "youtube";
    image?: { asset: { url: string; metadata?: { dimensions: { width: number; height: number } } }; alt?: string };
    youtubeUrl?: string;
    videoUrl?: string;
  };
  defaultVideo?: string;
  title: string;
}) {
  if (!media && !defaultVideo) return null;

  // 1. YouTube Case
  if (media?.mediaType === "youtube" && media.youtubeUrl) {
    const getYouTubeId = (url: string) => {
      const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
      );
      return match ? match[1] : null;
    };
    const videoId = getYouTubeId(media.youtubeUrl);
    if (videoId) {
      return (
        <div className="mb-8 w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-md">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
  }

  // 2. Direct Video Case
  if (media?.mediaType === "video" && media.videoUrl) {
    return (
      <div className="mb-8 w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-md bg-black">
        <video
          controls
          src={media.videoUrl}
          className="w-full h-full object-contain"
        >
          Your browser does not support video.
        </video>
      </div>
    );
  }

  // 3. Image Case (with dereferenced metadata)
  if (media?.mediaType === "image" && media.image?.asset?.url) {
    const { url, metadata } = media.image.asset;
    return (
      <div className="mb-8 w-full max-w-3xl rounded-2xl overflow-hidden shadow-md border border-slate-200">
        <Image
          src={url}
          alt={media.image.alt || title}
          width={metadata?.dimensions?.width || 1200}
          height={metadata?.dimensions?.height || 675}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    );
  }

  // Fallback to default local video url if no Sanity media matches
  if (defaultVideo) {
    return (
      <div className="mb-8 w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-md">
        <iframe
          src={defaultVideo}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return null;
}

export default function FASTagDetails({
  data,
  showNavbarFooter = true,
}: FASTagDetailsProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {showNavbarFooter && <Navbar />}

      <main className={`flex-grow ${showNavbarFooter ? "pt-24" : "pt-8"} pb-20`}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Back Button */}
          <Link
            href="/#fastag-management"
            className="flex items-center gap-2 text-slate-500 hover:text-[#7E60F4] transition-colors mb-8 group font-medium w-fit"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to FASTag</span>
          </Link>

          {/* Header Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/60 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7E60F4]/10 to-[#ec39b0]/10 rounded-full blur-3xl -mr-20 -mt-20" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-lg text-white">
                  <data.icon size={48} className="text-white drop-shadow-md" />
                </div>
                <div>
                  <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    FASTag Portal
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                    {data.title}
                  </h1>
                </div>
              </div>
              
              <MediaRenderer 
                media={data.media} 
                defaultVideo={data.videoUrl} 
                title={data.title} 
              />

              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                {data.description}
              </p>

              <div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-primary text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  {data.id === "customer" ? "Get FASTag" : "Become a Partner"}
                </Link>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-accent"></span>
              <h2 className="text-2xl font-bold text-slate-900">Required Documents & Forms</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#7E60F4]/40 hover:shadow-xl hover:shadow-[#7E60F4]/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-[#7E60F4]/10 group-hover:text-[#7E60F4] transition-colors border border-slate-100 group-hover:border-[#7E60F4]/20">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-[#7E60F4] transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-slate-400 group-hover:text-[#7E60F4] transition-colors">
                    <span className="uppercase tracking-wider">PDF Document</span>
                    <div className="flex items-center gap-2">
                      <span>View</span>
                      <Download size={16} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {showNavbarFooter && <Footer />}
    </div>
  );
}

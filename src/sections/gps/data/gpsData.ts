import { gpsTrackingSolutions } from "./gps-tracking-solutions";
import { fuelLevelSensors } from "./fuel-level-sensors";
import { videoTelematics } from "./video-telematics";
import { temperatureMonitor } from "./temperature-monitor";
import { padlockGps } from "./padlock-gps";
import { photogrammetryServices } from "./photogrammetry-services";
import { ais140Tracker } from "./ais-140-tracker";
import { geofencingAlerts } from "./geofencing-alerts";
import { softwarePlatform } from "./software-platform";
import { assetTracking } from "./asset-tracking";

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type UseCase = {
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: string;
};

export interface SolutionData {
  title: string;
  tagline: string;
  icon?: string;
  bgColor: string;
  overview: string;
  detailedDescription?: {
    what: string;
    how: string;
    who: string;
    why: string;
  };
  features: Feature[];
  useCases: UseCase[];
  benefits: Benefit[];
  steps?: { title: string; description: string }[];
  seoMeta: {
    title: string;
    description: string;
  };
  imageUrl?: string;
  secondaryImageUrl?: string;
  media?: {
    mediaType: 'image' | 'video' | 'youtube';
    imageUrl?:  string;
    youtubeUrl?: string;
    videoUrl?:  string;
  };
}

export const solutions: Record<string, SolutionData> = {
  "gps-tracking-solutions": gpsTrackingSolutions,
  "fuel-level-sensors": fuelLevelSensors,
  "video-telematics": videoTelematics,
  "temperature-monitor": temperatureMonitor,
  "padlock-gps": padlockGps,
  "photogrammetry-services": photogrammetryServices,
  "ais-140-tracker": ais140Tracker,
  "geofencing-alerts": geofencingAlerts,
  "software-platform": softwarePlatform,
  "asset-tracking": assetTracking,
};

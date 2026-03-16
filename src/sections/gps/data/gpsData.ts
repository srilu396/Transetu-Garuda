import { fastag } from "./fastag";
import { dashCamSystem } from "./dash-cam-system";
import { gpsTrackingSolutions } from "./gps-tracking-solutions";
import { iotForMining } from "./iot-for-mining";
import { fuelLevelSensors } from "./fuel-level-sensors";
import { videoTelematics } from "./video-telematics";
import { temperatureMonitor } from "./temperature-monitor";
import { padlockGps } from "./padlock-gps";
import { photogrammetryServices } from "./photogrammetry-services";
import { ais140Tracker } from "./ais-140-tracker";
import { fastagRecharge } from "./fastag-recharge";
import { fastagHistory } from "./fastag-history";
import { fastagFleet } from "./fastag-fleet";
import { fastagBalance } from "./fastag-balance";
import { fastagReports } from "./fastag-reports";

export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type UseCase = {
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export interface SolutionData {
  title: string;
  tagline: string;
  bgColor: string;
  overview: string;
  features: Feature[];
  useCases: UseCase[];
  benefits: Benefit[];
  steps?: { title: string; description: string }[];
  seoMeta: {
    title: string;
    description: string;
  };
  imageUrl?: string;
}

export const solutions: Record<string, SolutionData> = {
  fastag,
  "dash-cam-system": dashCamSystem,
  "gps-tracking-solutions": gpsTrackingSolutions,
  "iot-for-mining": iotForMining,
  "fuel-level-sensors": fuelLevelSensors,
  "video-telematics": videoTelematics,
  "temperature-monitor": temperatureMonitor,
  "padlock-gps": padlockGps,
  "photogrammetry-services": photogrammetryServices,
  "ais-140-tracker": ais140Tracker,
  "fastag-recharge": fastagRecharge,
  "fastag-history": fastagHistory,
  "fastag-fleet": fastagFleet,
  "fastag-balance": fastagBalance,
  "fastag-reports": fastagReports,
};

import { fastag } from "./solutions/fastag";
import { dashCamSystem } from "./solutions/dash-cam-system";
import { gpsTrackingSolutions } from "./solutions/gps-tracking-solutions";
import { iotForMining } from "./solutions/iot-for-mining";
import { fuelLevelSensors } from "./solutions/fuel-level-sensors";
import { videoTelematics } from "./solutions/video-telematics";
import { temperatureMonitor } from "./solutions/temperature-monitor";
import { padlockGps } from "./solutions/padlock-gps";
import { photogrammetryServices } from "./solutions/photogrammetry-services";
import { ais140Tracker } from "./solutions/ais-140-tracker";
import { fastagRecharge } from "./solutions/fastag-recharge";
import { fastagHistory } from "./solutions/fastag-history";
import { fastagFleet } from "./solutions/fastag-fleet";
import { fastagBalance } from "./solutions/fastag-balance";
import { fastagReports } from "./solutions/fastag-reports";

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

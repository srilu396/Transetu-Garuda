import { LucideIcon } from "lucide-react";
import { logisticsTransportation } from "./logistics-transportation";
import { schoolFleetSafety } from "./school-fleet-safety";
import { miningOperations } from "./mining-operations";
import { readyMixConcrete } from "./ready-mix-concrete";
import { pharmaceuticalLogistics } from "./pharmaceutical-logistics";
import { assetTelematics } from "./asset-telematics";
import { personalVehicleSecurity } from "./personal-vehicle-security";
import { municipalFleetManagement } from "./municipal-fleet-management";
import { highValueCargoSecurity } from "./high-value-cargo-security";
import { foodBeverageDistribution } from "./food-beverage-distribution";
import { marinePortOperations } from "./marine-port-operations";
import { warehouseInventory } from "./warehouse-inventory";
import { coldChainLogistics } from "./cold-chain-logistics";
import { videoSafetyCompliance } from "./video-safety-compliance";
import { fuelManagementSolutions } from "./fuel-management-solutions";
import { surveyMappingServices } from "./survey-mapping-services";
import { fastagFleetManagement } from "./fastag-fleet-management";
import { containerIntermodalTransport } from "./container-intermodal-transport";
import { agricultureFarming } from "./agriculture-farming";
import { emergencyServices } from "./emergency-services";
import { ais140Compliance } from "./ais-140-compliance";
import { oilAndGasOperations } from "./oil-and-gas-operations";

export interface IndustryStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface IndustryData {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  category: string;
  detailedDescription: string;
  benefits: string[];
  solutions: string[];
  imageUrl: string;
  stats: IndustryStat[];
}

export const industries: IndustryData[] = [
  logisticsTransportation,
  schoolFleetSafety,
  miningOperations,
  readyMixConcrete,
  pharmaceuticalLogistics,
  assetTelematics,
  personalVehicleSecurity,
  municipalFleetManagement,
  highValueCargoSecurity,
  foodBeverageDistribution,
  marinePortOperations,
  warehouseInventory,
  coldChainLogistics,
  videoSafetyCompliance,
  fuelManagementSolutions,
  surveyMappingServices,
  fastagFleetManagement,
  containerIntermodalTransport,
  agricultureFarming,
  emergencyServices,
  ais140Compliance,
  oilAndGasOperations,
];

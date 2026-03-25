"use client";

import React from "react";
import FASTagDetails from "./FASTagDetails";
import { buyFASTagData } from "./data/buyFASTagData";
import { becomePartnerData } from "./data/becomePartnerData";

export default function FASTagDetailsClient({ type }: { type: "customer" | "partner" }) {
  const data = type === "customer" ? buyFASTagData : becomePartnerData;
  return <FASTagDetails data={data} showNavbarFooter={true} />;
}

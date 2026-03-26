import { Handshake } from "lucide-react";
import { FASTagDetailsData } from "./fastagDetailsData";

export const becomePartnerData: FASTagDetailsData = {
  id: "partner",
  title: "Become a FASTag Business Partner",
  videoUrl: "https://www.youtube.com/embed/d-ilXg7E0L0",
  description: "Join our network as a certified FASTag Business Partner. Expand your business offerings by providing FASTag issuing and recharge services to customers. Partnering with Garuda OM opens up consistent revenue streams and dedicated technical support. Review the partner documentation below.",
  icon: Handshake,
  documents: [
    {
      name: "Load Sub-Agent",
      path: "/Fastags_Doc/Load Sub-Agent.pdf",
      description: "Guidelines and forms for onboarding new sub-agents."
    },
    {
      name: "Create Corporate Wallet",
      path: "/Fastags_Doc/Create Corporate Wallet.pdf",
      description: "Instructions for setting up and managing a corporate FASTag wallet."
    },
    {
      name: "File Update",
      path: "/Fastags_Doc/File Update.pdf",
      description: "Important updates regarding partner file management capabilities."
    },
    {
      name: "Tracker Communication Protocol v1.8",
      path: "/Fastags_Doc/tracker-communication-protocol-v1.8.pdf",
      description: "Technical specifications for GPS and FASTag integration protocols."
    }
  ]
};

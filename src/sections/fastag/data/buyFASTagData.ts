import { CreditCard } from "lucide-react";
import { FASTagDetailsData } from "./fastagDetailsData";

export const buyFASTagData: FASTagDetailsData = {
  id: "customer",
  title: "Buy FASTag for Your Vehicle",
  description: "Purchase your FASTag online quickly and securely. Activate it instantly and enjoy seamless toll payments across India. Enjoy a hassle-free, uninterrupted driving experience on all major highways with our seamless integration. Download the necessary forms to update your details below.",
  icon: CreditCard,
  videoUrl: "https://www.youtube.com/embed/d-ilXg7E0L0",
  documents: [
    {
      name: "Update Vehicle Number",
      path: "/Fastags_Doc/Update Vehicle Number.pdf",
      description: "Form to update or correct your registered vehicle number."
    },
    {
      name: "Update Customer Details",
      path: "/Fastags_Doc/Update Customer Details.pdf",
      description: "Form to update your personal contact information or address."
    },
    {
      name: "DOC-20250212-WA0007",
      path: "/Fastags_Doc/DOC-20250212-WA0007.pdf",
      description: "Standard operating procedures and guidelines for FASTag usage."
    }
  ]
};

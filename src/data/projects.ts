import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  // Optional presentation fields
  image?: string;
  bgColor?: string;
  icon?: LucideIcon;
  // Optional detail fields
  features?: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Amanda Baliana",
    subtitle: "Psicóloga",
    category: "Site Institucional",
    description:
      "Criar um site acolhedor e profissional que transmitisse confiança para pacientes.",
    tags: ["Psicologia", "Site Institucional", "SEO"],
    image: `${import.meta.env.BASE_URL}lovable-uploads/amanda-baliana.png`,
    bgColor: "#334F40",
    url: "www.amandabaliana.com",
    features: ["Design acolhedor", "SEO básico", "CMS leve"],
  },
  {
    title: "Words AI",
    subtitle: "Jogo mobile",
    category: "Landing page",
    description: "Landing page para um jogo da forca desenvolvido com IA.",
    tags: ["Jogo", "Android", "Landing page"],
      image: `${import.meta.env.BASE_URL}lovable-uploads/words-ai.png`,
    features: ["Redirecionamento para Play Store", "QR Code scan"],
      url: "www.words-ai.app",
  },

];

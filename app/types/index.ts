export type Language = "en" | "km";

export interface ServiceCardProps {
  title: string;
  description: string;
}

export interface UseCaseCardProps {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
}

export interface NavLink {
  href: string;
  en: string;
  km: string;
}

export interface Bundle {
  id: string;
  number: number;
  title: string;
  shortDescription: string; // Kurzbeschreibung
  category: 'Managed' | 'Project'; // Managed oder Projekt
  kpi: string[]; // KPIs
  artifacts: string[]; // Artefakte
  outcome: string; // Outcome
  iconName: string;
}

export interface Bundle3PersonaContent {
  role: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  painPoints: {
    icon: string;
    title: string;
    desc: string;
  }[];
  solution: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  kpiFocus: string[];
  testimonial: {
    quote: string;
    author: string;
  };
}
import { Bundle } from '../types';

export const bundles: Bundle[] = [
  {
    id: 'managed-mobile-core',
    number: 1,
    title: 'Managed Mobile – CORE',
    shortDescription: 'Neuausstattung, Onboarding und Offboarding im Bereich Mobilfunk. Hardware-Tausch bei Defekt, Vertragsmanagement und Stammdatenpflege.',
    category: 'Managed',
    outcome: 'Sofort einsetzbares Mobilfunk Equipment. Transparente, effiziente und sichere Versorgung der Mitarbeitenden.',
    kpi: ['Termintreue Bereitstellung ≥95%', 'Durchlaufzeit ≤5 AT', 'MTTR Tausch ≤48 h', 'Fristversäumnisse = 0'],
    artifacts: ['Bestell-/Lieferprotokoll', 'Aktivierungsnachweis', 'Ticket-Timeline', 'Vertragsregister'],
    iconName: 'Smartphone'
  },
  {
    id: 'managed-workplace-core',
    number: 2,
    title: 'Managed Workplace – CORE',
    shortDescription: 'On-/Offboarding Arbeitsplatz (Laptop, Peripherie). Incidentmanagement und Stammdatenverwaltung für Workplace-Hardware.',
    category: 'Managed',
    outcome: 'Startklarer Arbeitsplatz am Day 1. Arbeitsfähigkeit schnell wiederhergestellt bei Störungen.',
    kpi: ['„Day-1-ready“ ≥95%', 'Fehlteilequote ≤1%', 'P1-MTTR ≤8 h', 'Datenqualität 100%'],
    artifacts: ['Übergabeprotokoll', 'Checkliste', 'Imaging-Report', 'Ticketsystem-Dashboard'],
    iconName: 'Monitor'
  },
  {
    id: 'lifecycle-compliance',
    number: 3,
    title: 'Lifecycle & Compliance Pack',
    shortDescription: 'Geräte-Rücklauf, Löschung und Zertifizierung. Koordiniertes Offboarding und sicheres Recycling/Wiedervermarktung.',
    category: 'Managed',
    outcome: 'Rechtssichere Löschung, vollständige Audit-Dokumentation und maximale Rücklaufquoten.',
    kpi: ['Rücklaufquote ≥98%', '100% Löschzertifikate', 'Compliance ≥98%', 'Restwertziele erreicht'],
    artifacts: ['Löschzertifikate', 'Rücknahmeschein', 'Lifecycle-Report', 'Verwertungsbelege'],
    iconName: 'RefreshCw' // Special Landing Page
  },
  {
    id: 'tem-governance',
    number: 4,
    title: 'TEM & Governance',
    shortDescription: 'Telecom Expense Management. Rechnungsprüfung, Kostenstellen-Zuordnung und Budgetüberwachung.',
    category: 'Managed',
    outcome: 'Volle Kostentransparenz, keine Rechnungsfehler und verursachergerechte Zuordnung.',
    kpi: ['Fehlerquote ≤0,5%', 'Forecast-Abweichung ≤5%', 'Abschluss zum 5. WT'],
    artifacts: ['TEM-Prüfprotokoll', 'Abweichungsreport', 'Budget-Workbook', 'Freigabemail'],
    iconName: 'PieChart'
  },
  {
    id: 'voice-services',
    number: 5,
    title: 'Voice Services Pack',
    shortDescription: 'Management von Sprachleitungen, Festnetz, SIP-Trunks. Bestellung, Entstörung und Notfallkonzepte.',
    category: 'Managed',
    outcome: 'Hohe Sprachqualität, Stabilität und Erreichbarkeit auch im Krisenfall.',
    kpi: ['Verfügbarkeit 100%', 'Wiederanlauf ≤X Min', 'Inkosityenzen <1%'],
    artifacts: ['Stammdaten-/EVN-Report', 'Notfall-Testprotokoll', 'Eskalationsmatrix'],
    iconName: 'PhoneCall'
  },
  {
    id: 'mdm-security',
    number: 7,
    title: 'MDM Security Pack',
    shortDescription: 'Mobile Device Management: Policies, Sicherheitsupdates, App-Verteilung und Compliance-Monitoring.',
    category: 'Managed',
    outcome: 'Compliance by Default. Schutz der Unternehmensdaten auf allen mobilen Endgeräten.',
    kpi: ['Compliance ≥98%', 'Policy-Drift <1%', 'P1-MTTR ≤8 h'],
    artifacts: ['MDM-Compliance-Report', 'Change-Logs', 'Incident-Tickets'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'optimization-advisory',
    number: 8,
    title: 'Optimization & Advisory',
    shortDescription: 'Laufende Tarifoptimierung und strategische Beratung zu Hardware, Verträgen und Rahmenbedingungen.',
    category: 'Managed',
    outcome: 'Kostenreduktion bei gleicher Leistung. Entscheidungen auf belastbarer Datenbasis.',
    kpi: ['Kosten/Anschluss -x% QoQ', 'Umsetzungsquote ≥80%', 'ROI-Nachweis nach 6 Mon.'],
    artifacts: ['Maßnahmenliste', 'Beratungsbericht', 'Roadmap', 'Messplan'],
    iconName: 'TrendingUp'
  },
  {
    id: 'rollout-factory',
    number: 9,
    title: 'Rollout Factory',
    shortDescription: 'Projektbasierte Rollouts für Mobilfunk und Workplace. Austauschwellen, Updates und Großprojekte.',
    category: 'Project',
    outcome: 'Pünktliche Serienbereitstellung, saubere Übergaben und dokumentierte Abnahmen.',
    kpi: ['Termineinhaltung ≥95%', 'DOA ≤1%', 'Budgettreue ≥98%'],
    artifacts: ['Rollout-Plan', 'Batch-Abnahmen', 'Versandlisten', 'Projektauftrag'],
    iconName: 'Truck'
  }
];
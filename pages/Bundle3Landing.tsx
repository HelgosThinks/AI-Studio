import React, { useState } from 'react';
import { Bundle3PersonaContent } from '../types';
import { CheckCircle, AlertTriangle, FileText, ArrowRight, RefreshCw, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Content configuration for different personas based on PDF
const personaContent: Record<string, Bundle3PersonaContent> = {
  'itleiter': {
    role: 'Für IT-Leiter',
    headline: 'Lifecycle & Compliance Pack – Rücklauf, Löschung und Zertifikate geregelt',
    subheadline: 'Off- und Onboarding ohne operative Überlastung. Wir übernehmen Geräterücknahme, datenschutzkonforme Löschung und Audit-Dokumentation – standardisiert, messbar, SLA-gesichert.',
    ctaPrimary: 'Demo-Call vereinbaren',
    ctaSecondary: 'Beispiel-Reports ansehen',
    painPoints: [
      { icon: 'Clock', title: 'Geräte-Rücklauf dauert Wochen', desc: 'Altgeräte bleiben bei ausgeschiedenen Mitarbeitern. Nachforderungen, Eskalationen, Medienbrüche.' },
      { icon: 'Shield', title: 'Löschzertifikate fehlen', desc: 'Audit-Findings wegen fehlender DSGVO-Nachweise. Manuelle Nacharbeit bindet dein Team.' },
      { icon: 'AlertTriangle', title: 'Unklare Zuständigkeiten', desc: 'Wer holt ab? Wer löscht? Wer dokumentiert? Prozesse sind nicht standardisiert.' },
    ],
    solution: {
      title: 'Lifecycle & Compliance Pack – So funktioniert\'s',
      steps: [
        { title: 'Offboarding koordiniert', desc: 'Wir übernehmen Rücknahme von Mobilfunk- und Workplace-Hardware. SIM/Device deaktiviert.' },
        { title: 'Datenschutzkonforme Löschung', desc: 'DSGVO-konforme Zurücksetzung aller Geräte. 100% Löschzertifikate, Audit-ready.' },
        { title: 'Lifecycle Management', desc: 'Von Tausch über Rücklauf bis Verwertung: Alle Prozesse standardisiert. Reports inklusive.' },
      ]
    },
    kpiFocus: ['≥98% Rücklaufquote', '100% Löschzertifikate', '≤8h P1-MTTR'],
    testimonial: {
      quote: "Lifecycle & Compliance war früher ein Flickenteppich. Jetzt haben wir standardisierte Prozesse, 100% Zertifikate und keine Audit-Findings mehr.",
      author: "Markus Weber, IT-Leiter, Industrie-Mittelstand (800 MA)"
    }
  },
  'einkauf': {
    role: 'Für Einkauf',
    headline: 'Lifecycle & Compliance Pack – Planbare Kosten, 100% Audit-Nachweise',
    subheadline: 'Transparenz bei Geräte-Lifecycles: Standardisierte Rücknahme, DSGVO-konforme Löschung, vollständige Verwertungsdokumentation. Mit klaren SLAs und monatlichem Reporting.',
    ctaPrimary: 'Vertragsgrundlage ansehen',
    ctaSecondary: 'Beispiel-Reports herunterladen',
    painPoints: [
      { icon: 'TrendingUp', title: 'Verspätete Rückläufe kosten Geld', desc: 'Nicht zurückgegebene Geräte führen zu Nachforderungen. Unklare Restwerte belasten das Budget.' },
      { icon: 'FileText', title: 'Fehlende Nachweise', desc: 'Audit-Findings wegen fehlender Löschzertifikate. Compliance-Risiken, die teuer werden.' },
      { icon: 'RefreshCw', title: 'Unflexible Prozesse', desc: 'Keine standardisierten Rücknahmewege. Hoher administrativer Aufwand, keine Skalierbarkeit.' },
    ],
    solution: {
      title: 'Lifecycle & Compliance Pack – Deine Vertragsgrundlage',
      steps: [
        { title: 'Standardisierte Bundles', desc: 'Rücknahme Mobilfunk + Workplace, datenschutzkonforme Löschung in einem Paket.' },
        { title: 'Transparente SLAs', desc: 'Rücklaufquote ≥98% in ≤8 Wochen. 100% Nachweise. Plan/Ist-Kostenabweichung ≤2%.' },
        { title: 'Monatliches Reporting', desc: 'Lifecycle-Reports mit Rücklauf, Zertifikaten und Verwertungsbelegen. Vertragsregister mit Fristen.' },
      ]
    },
    kpiFocus: ['≥98% Rücklaufquote', '≤2% Kostenabweichung', '0 Fristversäumnisse'],
    testimonial: {
      quote: "Lifecycle & Compliance war ein Kostentreiber. Jetzt haben wir planbare Budgets, 100% Nachweise und keine Überraschungen mehr.",
      author: "Thomas Krüger, Einkauf, Handelsgruppe (2.500 MA)"
    }
  },
  'gf': {
    role: 'Für Geschäftsführung',
    headline: 'Lifecycle & Compliance Pack – Risiken minimiert, Compliance gesichert',
    subheadline: 'Ausgeschiedene Mitarbeiter, nicht zurückgegebene Geräte, fehlende Löschzertifikate: Compliance-Risiken, die schnell teuer werden. Wir räumen das aus dem Weg – strukturiert, nachweisbar.',
    ctaPrimary: 'Kurzes Gespräch vereinbaren',
    ctaSecondary: 'Business Case ansehen',
    painPoints: [
      { icon: 'AlertTriangle', title: 'DSGVO-Verstöße', desc: 'Fehlende Löschzertifikate führen zu Audit-Findings. Bußgelder und Reputationsschäden drohen.' },
      { icon: 'TrendingUp', title: 'Verspätete Rückgaben', desc: 'Nicht zurückgegebene Geräte binden Kapital. Eskalationen belasten die Organisation.' },
      { icon: 'Shield', title: 'Unklare Verantwortlichkeiten', desc: 'IT-Peripherie bindet Management-Aufmerksamkeit. Kein Kerngeschäft, aber ein Risiko.' },
    ],
    solution: {
      title: 'Lifecycle & Compliance Pack – Was wir übernehmen',
      steps: [
        { title: 'Rücknahme-Management', desc: 'Geräte werden koordiniert zurückgeholt – Mobilfunk und Arbeitsplatz. Strukturiert, ohne Eskalationen.' },
        { title: 'Datenschutz-Compliance', desc: 'DSGVO-konforme Löschung, 100% Zertifikate, Audit-ready dokumentiert.' },
        { title: 'Verwertung & Restwerte', desc: 'Wiederverwendung oder Entsorgung werden nachvollziehbar gesteuert. Transparente Verwertungswege.' },
      ]
    },
    kpiFocus: ['Keine Compliance-Verstöße', 'Weniger Eskalationen', 'Planbare Kosten'],
    testimonial: {
      quote: "Lifecycle & Compliance war früher ein Risiko. Jetzt ist es geregelt – ohne Eskalationen, ohne Audit-Findings. Mein Team bleibt fokussiert.",
      author: "Stefan Brandt, Geschäftsführung, Maschinenbau (1.200 MA)"
    }
  }
};

const Bundle3Landing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itleiter' | 'einkauf' | 'gf'>('itleiter');
  const content = personaContent[activeTab];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock className="h-8 w-8 text-komma-highlight" />;
      case 'Shield': return <Shield className="h-8 w-8 text-komma-highlight" />;
      case 'AlertTriangle': return <AlertTriangle className="h-8 w-8 text-komma-highlight" />;
      case 'TrendingUp': return <CheckCircle className="h-8 w-8 text-komma-highlight" />; // Using check as generic positive for now
      case 'FileText': return <FileText className="h-8 w-8 text-komma-highlight" />;
      case 'RefreshCw': return <RefreshCw className="h-8 w-8 text-komma-highlight" />;
      default: return <CheckCircle className="h-8 w-8 text-komma-highlight" />;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Sticky Sub-nav for Personas */}
      <div className="bg-gray-100 border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 md:space-x-12 overflow-x-auto py-3">
            {(Object.keys(personaContent) as Array<keyof typeof personaContent>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === key
                    ? 'bg-komma-dark text-white shadow-md'
                    : 'text-gray-500 hover:bg-gray-200'
                }`}
              >
                {personaContent[key].role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-komma-dark mb-6 leading-tight">
              {content.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {content.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-komma-highlight text-white px-8 py-4 rounded-md font-bold hover:bg-orange-600 transition shadow-lg">
                {content.ctaPrimary}
              </Link>
              <button className="px-8 py-4 border border-gray-300 text-komma-dark rounded-md font-semibold hover:bg-gray-50 transition">
                {content.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold mb-16 text-komma-dark">
            {activeTab === 'itleiter' ? 'Kennst du das?' : activeTab === 'einkauf' ? 'Versteckte Kosten?' : 'Compliance-Risiken?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {content.painPoints.map((point, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">{renderIcon(point.icon)}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
                <p className="text-gray-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-komma-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-10">{content.solution.title}</h2>
              <div className="space-y-8">
                {content.solution.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-komma-highlight flex items-center justify-center font-bold text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-komma-highlight mb-6">Die Zahlen (KPIs)</h3>
              <ul className="space-y-4">
                {content.kpiFocus.map((kpi, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-white border-b border-gray-700 pb-3 last:border-0">
                    <CheckCircle className="h-5 w-5 text-komma-accent" />
                    {kpi}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-komma-highlight text-4xl font-serif italic mb-6">"</div>
          <blockquote className="text-2xl text-gray-900 font-medium leading-relaxed mb-8">
            {content.testimonial.quote}
          </blockquote>
          <cite className="block text-gray-500 not-italic font-semibold">
            — {content.testimonial.author}
          </cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-komma-light py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-komma-dark">Lass uns kurz sprechen</h2>
          <p className="text-xl text-gray-600 mb-8">
            Wir zeigen dir, wie wir Lifecycle & Compliance bei vergleichbaren Setups umsetzen.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-komma-highlight text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition">
            {content.ctaPrimary}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Bundle3Landing;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Monitor, Settings, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-komma-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Wir machen die <span className="text-komma-highlight">IT-Peripherie</span> einfach.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Mobilgeräte, Arbeitsplatz & Service. Seit über 20 Jahren sorgen wir dafür, dass Technik die Arbeit erleichtert. Klar, messbar, verlässlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-komma-highlight hover:bg-orange-600 md:text-lg transition shadow-lg">
                Zu den Lösungen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/about" className="inline-flex justify-center items-center px-8 py-4 border border-gray-500 text-base font-medium rounded-md text-white hover:bg-gray-800 md:text-lg transition">
                Über uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-komma-dark mb-4">Was wir konkret tun</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir fokussieren uns auf die Peripherie der IT. Keine Server, keine Backends – sondern das, was deine Mitarbeiter täglich in der Hand halten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-komma-accent" />
              </div>
              <h3 className="text-xl font-bold text-komma-dark mb-3">Managed Mobile</h3>
              <p className="text-gray-600 mb-4">
                Betreuung von Mobilfunkverträgen, SIM-Pools und Geräte-Lifecycles – von Bestellung bis Rücknahme.
              </p>
              <Link to="/bundle/managed-mobile-core" className="text-komma-accent font-medium hover:text-teal-700 inline-flex items-center">
                Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="h-6 w-6 text-komma-highlight" />
              </div>
              <h3 className="text-xl font-bold text-komma-dark mb-3">Managed Workplace</h3>
              <p className="text-gray-600 mb-4">
                Beschaffung, Vorkonfiguration und Rollouts von Arbeitsplatz-Hardware. „Day-1-ready“-Übergaben.
              </p>
              <Link to="/bundle/managed-workplace-core" className="text-komma-accent font-medium hover:text-teal-700 inline-flex items-center">
                Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-komma-dark mb-3">Service & Prozesse</h3>
              <p className="text-gray-600 mb-4">
                Incident-Handling, Stammdaten- und Vertragsmanagement. Strukturierte Abläufe für dein Team.
              </p>
              <Link to="/bundle/voice-services" className="text-komma-accent font-medium hover:text-teal-700 inline-flex items-center">
                Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature / Trust Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-komma-dark mb-6">Unser Versprechen an dich</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-komma-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Peripherie, nicht Core-Infrastructure</h4>
                    <p className="text-gray-600">Wir bauen keine Server. Wir managen die Geräte und Prozesse am Rand deiner IT-Landschaft.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-komma-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Messbar & verlässlich</h4>
                    <p className="text-gray-600">Keine Worthülsen: nachvollziehbare KPIs, Ticket-Artefakte und regelmäßige Reports.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-komma-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Entlastung statt Mehrarbeit</h4>
                    <p className="text-gray-600">Wir nehmen operative Last ab, damit dein Team Zeit für Kernaufgaben gewinnt.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/contact" className="btn-primary bg-komma-dark text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                  Jetzt Kontakt aufnehmen
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img src="https://picsum.photos/800/600" alt="Team working on devices" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
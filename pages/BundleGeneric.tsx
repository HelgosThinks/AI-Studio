import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { bundles } from '../data/bundles';
import { CheckCircle, FileText, ArrowLeft, Phone } from 'lucide-react';

const BundleGeneric: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const bundle = bundles.find(b => b.id === id);

  if (!bundle) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-komma-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Übersicht
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-komma-highlight text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              Bundle {bundle.number}
            </span>
            <span className="text-gray-400 font-medium">{bundle.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{bundle.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {bundle.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-komma-dark mb-4">Das Outcome</h2>
              <p className="text-lg text-gray-700 leading-relaxed bg-blue-50 p-6 rounded-lg border border-blue-100">
                {bundle.outcome}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-komma-dark mb-6">Messbare KPIs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bundle.kpi.map((k, i) => (
                  <div key={i} className="flex items-start p-4 bg-gray-50 rounded border border-gray-100">
                    <CheckCircle className="h-5 w-5 text-komma-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{k}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-komma-dark mb-6">Dokumentation & Artefakte</h2>
              <ul className="space-y-3">
                {bundle.artifacts.map((a, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <FileText className="h-5 w-5 text-gray-400 mr-3" />
                    {a}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 sticky top-24">
              <h3 className="text-xl font-bold text-komma-dark mb-4">Interesse geweckt?</h3>
              <p className="text-gray-600 mb-6">
                Lass uns darüber sprechen, wie das {bundle.title} deine IT-Prozesse optimieren kann.
              </p>
              <Link 
                to="/contact"
                className="w-full block text-center bg-komma-highlight text-white font-bold py-3 px-4 rounded hover:bg-orange-600 transition mb-4"
              >
                Gespräch vereinbaren
              </Link>
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+49 30 1234 5678</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BundleGeneric;
import React from 'react';
import { Link } from 'react-router-dom';
import { bundles } from '../data/bundles';
import { ArrowRight, Smartphone, Monitor, RefreshCw, PieChart, PhoneCall, ShieldCheck, TrendingUp, Truck } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Smartphone, Monitor, RefreshCw, PieChart, PhoneCall, ShieldCheck, TrendingUp, Truck
};

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-komma-dark mb-4">Unsere Bundles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Klare Pakete für messbare Ergebnisse. Von Managed Mobile bis zur strategischen Beratung.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => {
            const Icon = iconMap[bundle.iconName] || Monitor;
            return (
              <div key={bundle.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${bundle.number === 3 ? 'bg-orange-100 text-orange-600' : 'bg-teal-50 text-teal-600'}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Bundle {bundle.number}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-komma-dark mb-3 group-hover:text-komma-accent transition-colors">
                    {bundle.title}
                  </h2>
                  
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded mb-4 ${bundle.category === 'Managed' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}`}>
                    {bundle.category}
                  </span>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {bundle.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-gray-900">KPI Highlights:</p>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                      {bundle.kpi.slice(0, 2).map((k, i) => (
                        <li key={i}>{k}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                  <Link 
                    to={`/bundle/${bundle.id}`}
                    className="flex items-center justify-between text-komma-dark font-semibold hover:text-komma-highlight transition-colors"
                  >
                    Details ansehen
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
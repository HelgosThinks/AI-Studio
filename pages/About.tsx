import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-komma-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wir sind komma.</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Seit über 20 Jahren treten wir dafür an, dass Technik die Arbeit unserer Kunden erleichtert und möglich macht.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-2xl text-gray-800 leading-relaxed font-light mb-12">
          <span className="font-bold text-komma-highlight">komma</span> fokussiert sich auf die Peripherie der IT: gemanagte Mobilgeräte, verlässliche Arbeitsplatz-Ausstattung und die Prozesse drumherum — klar und messbar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-komma-accent">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Fokus</h3>
            <p className="text-gray-600">Peripherie, nicht Core-Infrastructure. Wir managen Geräte am Rand deiner IT.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-komma-accent">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Pragmatismus</h3>
            <p className="text-gray-600">Freundlich im Ton, streng in Prozessen. Wir mögen Technik, die funktioniert.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-komma-accent">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Entlastung</h3>
            <p className="text-gray-600">Wir nehmen operative Last ab, damit dein Team Zeit für Kernaufgaben gewinnt.</p>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-komma-dark mb-6">Warum das wirkt</h2>
              <p className="text-lg text-gray-600 mb-6">
                Viele Anbieter versprechen „IT-Lösungen“, bleiben aber vage. Wir liefern konkrete, wiederholbare Leistungen in klar definierten Bereichen — das schafft Planbarkeit, Transparenz und echte Entlastung im Alltag.
              </p>
              <h3 className="text-2xl font-bold text-komma-dark mb-4">Unser Team</h3>
              <p className="text-lg text-gray-600 mb-8">
                Klein, eingespielt, pragmatisch: wir mögen Technik, noch lieber aber, wenn sie einfach funktioniert.
              </p>
              <Link to="/contact" className="text-komma-accent font-bold text-lg hover:underline">
                Lerne uns kennen &rarr;
              </Link>
            </div>
            <div className="order-1 md:order-2">
               <img src="https://picsum.photos/600/600?grayscale" alt="komma office" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
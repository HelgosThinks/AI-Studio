import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-komma-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-gray-300">Lass uns über deine IT-Peripherie sprechen.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-komma-dark mb-6">Wir sind für dich da</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Interessiert? Lass uns kurz sprechen, dann zeigen wir dir konkrete Beispiele und KPIs aus der Praxis.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-komma-highlight" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                  <p className="mt-1 text-gray-500">Technologiepark 1<br />12345 Berlin</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-komma-highlight" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                  <p className="mt-1 text-gray-500">+49 30 1234 5678</p>
                  <p className="text-sm text-gray-400">Mo-Fr, 09:00 - 17:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-komma-highlight" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">E-Mail</h3>
                  <p className="mt-1 text-gray-500">hallo@komma.de</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-komma-dark mb-6">Nachricht senden</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-komma-accent focus:ring-komma-accent p-3 border" placeholder="Dein Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-komma-accent focus:ring-komma-accent p-3 border" placeholder="dein.name@firma.de" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-komma-accent focus:ring-komma-accent p-3 border" placeholder="Wie können wir helfen?"></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-komma-dark hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-komma-accent transition">
                Absenden
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-komma-dark text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Hexagon className="h-6 w-6 text-komma-highlight fill-komma-highlight" />
              <span className="font-bold text-xl">komma</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Wir machen die IT-Peripherie einfach. Mobilgeräte, Arbeitsplatz & Service. Messbar, verlässlich und transparent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-komma-highlight transition">Startseite</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-komma-highlight transition">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-komma-highlight transition">Über uns</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-komma-highlight transition">Kontakt</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Bundles</h3>
            <ul className="space-y-3">
              <li><Link to="/bundle/managed-mobile-core" className="text-gray-400 hover:text-komma-highlight transition">Managed Mobile</Link></li>
              <li><Link to="/bundle/lifecycle-compliance" className="text-gray-400 hover:text-komma-highlight transition">Lifecycle & Compliance</Link></li>
              <li><Link to="/bundle/tem-governance" className="text-gray-400 hover:text-komma-highlight transition">TEM & Governance</Link></li>
              <li><Link to="/portfolio" className="text-komma-accent hover:text-white transition text-sm mt-2 block">Alle ansehen &rarr;</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Kontakt</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-komma-accent flex-shrink-0" />
                <span>komma | IT-Peripherie Management<br />Technologiepark 1<br />12345 Berlin</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-komma-accent flex-shrink-0" />
                <a href="mailto:hallo@komma.de" className="hover:text-white">hallo@komma.de</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-komma-accent flex-shrink-0" />
                <a href="tel:+493012345678" className="hover:text-white">+49 30 1234 5678</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} komma GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
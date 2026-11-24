import React from 'react';
import { COMPANY_INFO, PRODUCTS } from '../data/innopackData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Printer, 
  ExternalLink, 
  Download, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight,
  Globe,
  Radio
} from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenRFQ }) => {
  const handleNav = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-obsidian text-silver-pale border-t border-silver-border relative overflow-hidden">
      {/* Decorative Peach to Silver Laser Streak Line */}
      <div className="h-1 bg-gradient-to-r from-peach via-softWhite to-peach-blush opacity-80 shadow-[0_0_20px_#F4B7A5]"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Company Profile & Ambattur Identity */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/innopack_mark_peach.png" 
                alt="Innopack Automation Logo" 
                className="h-9 w-auto object-contain drop-shadow-[0_0_8px_rgba(244,183,165,0.4)]"
              />
              <div>
                <span className="font-display font-bold text-xl text-softWhite tracking-wider block">
                  INNOPACK <span className="text-peach-gradient">AUTOMATION®</span>
                </span>
                <span className="text-xs font-mono text-silver-metallic uppercase tracking-widest">
                  Industrial Packaging & Weighing Systems
                </span>
              </div>
            </div>

            <p className="text-sm text-silver-pale leading-relaxed pr-4 font-sans">
              Innopack Automation designs, manufactures and exports state-of-the-art dynamic check weighers, packaging machinery, and customized automation systems from our primary manufacturing units in SIDCO Industrial Estate, Ambattur, Chennai.
            </p>

            {/* SPM Division Callout Card */}
            <div className="p-4 rounded-xl glass-panel border border-silver-border space-y-2 text-xs">
              <div className="flex items-center gap-2 text-peach-soft font-semibold font-mono">
                <Globe className="w-4 h-4 text-peach-soft" />
                <span>Special Purpose Machine Division</span>
              </div>
              <p className="text-silver-pale">
                Automobile & FMCG customized automation solutions engineered under our specialized sister division:
              </p>
              <a 
                href={COMPANY_INFO.spmPartnerUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-peach-soft hover:text-softWhite font-mono hover:underline transition-colors"
              >
                <span>Visit ACMAA Division (www.acmaa.net)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-peach-soft" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-display font-bold text-softWhite text-base tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-peach-soft shadow-[0_0_6px_#F4B7A5]"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-peach-soft transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-peach-soft transition-colors">
                  About Us & Heritage
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-peach-soft transition-colors">
                  Product Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-peach-soft transition-colors">
                  Industry Sectors
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-peach-soft transition-colors">
                  Engineering & Support
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-peach-soft transition-colors">
                  Engineering Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-peach-soft transition-colors">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Products & Catalogues */}
          <div>
            <h4 className="font-display font-bold text-softWhite text-base tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-silver-pale shadow-[0_0_6px_#D8DADD]"></span>
              Machinery & Catalogues
            </h4>
            <ul className="space-y-3.5 text-xs">
              {PRODUCTS.map((prod) => (
                <li key={prod.id} className="space-y-1">
                  <div className="font-medium text-softWhite hover:text-peach-soft cursor-pointer transition-colors" onClick={() => handleNav('products')}>
                    {prod.name}
                  </div>
                  <a
                    href={prod.catalogUrl}
                    download={prod.catalogFilename}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-peach-soft hover:underline"
                  >
                    <Download className="w-3 h-3 text-peach-soft" />
                    <span>Download PDF ({prod.model})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Registered Office & Direct Telecoms */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-softWhite text-base tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-softWhite"></span>
              Ambattur Facility
            </h4>
            
            <div className="space-y-3 text-xs text-silver-pale">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-peach-soft shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {COMPANY_INFO.address.line1}<br />
                  {COMPANY_INFO.address.area}<br />
                  {COMPANY_INFO.address.city} – {COMPANY_INFO.address.postalCode},<br />
                  {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-peach-soft shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-softWhite font-mono transition-colors">
                  {COMPANY_INFO.phones[0]}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-silver-metallic shrink-0" />
                <span className="font-mono">Fax: {COMPANY_INFO.fax}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-peach-soft shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emails.general}`} className="hover:text-softWhite font-mono transition-colors">
                  {COMPANY_INFO.emails.general}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-peach-soft shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emails.executive}`} className="hover:text-softWhite font-mono transition-colors">
                  {COMPANY_INFO.emails.executive}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenRFQ}
              className="w-full mt-2 py-2.5 px-3 rounded-lg bg-peach-soft/15 hover:bg-peach-soft hover:text-dark-obsidian border border-peach-soft/40 text-xs font-mono font-bold uppercase tracking-wider text-peach-soft transition-all duration-300 shadow-sm"
            >
              Direct Engineering RFQ
            </button>
          </div>

        </div>

        {/* Bottom Bar & Verified Notice */}
        <div className="mt-12 pt-8 border-t border-silver-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-silver-metallic">
          <div>
            &copy; {new Date().getFullYear()} Innopack Automation. Ambattur Industrial Estate, Chennai – 600098, India.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-peach-soft">
              <Radio className="w-3 h-3 animate-pulse text-peach-soft" />
              <span>Plant Telemetry Online</span>
            </span>
            <span className="hidden md:inline">•</span>
            <span className="text-softWhite">Precision Industrial Packaging & Checkweighing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

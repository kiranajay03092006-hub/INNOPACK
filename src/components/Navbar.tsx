import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/innopackData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenRFQ: (productId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onOpenRFQ }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', targetSection: 'home' },
    { id: 'solutions', label: 'Solutions', targetSection: 'solutions-section' },
    { id: 'products', label: 'Machinery', targetSection: 'products-showcase' },
    { id: 'supply', label: 'Industrial Supply', targetSection: 'industrial-supply' },
    { id: 'customers', label: 'Clients', targetSection: 'customers-section' },
    { id: 'contact', label: 'Contact', targetSection: 'contact-section' },
  ];

  const handleNavClick = (id: string, targetSection?: string) => {
    setMobileMenuOpen(false);
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        if (targetSection) {
          const el = document.getElementById(targetSection);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (targetSection && targetSection !== 'home') {
        const el = document.getElementById(targetSection);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 site-header ${
      isScrolled 
        ? 'is-scrolled bg-[#0E0B0A]/95 backdrop-blur-2xl border-b border-white/15 py-3.5 shadow-2xl shadow-black/90' 
        : 'bg-transparent border-b border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo (BusyBox Clean Wordmark & Icon) */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <img 
            src="/assets/innopack_mark_peach.png" 
            alt="Innopack Automation Logo" 
            className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(244,183,165,0.4)] group-hover:scale-105 transition-transform"
          />
          <div className="flex items-baseline gap-1">
            <span className="font-display font-bold text-base sm:text-lg text-softWhite tracking-tight">
              Innopack
            </span>
            <span className="text-peach-soft font-mono text-xs font-semibold">
              Automation®
            </span>
          </div>
        </button>

        {/* Center Nav Links (BusyBox Star Asterisk Pattern) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.targetSection)}
              className="bb-nav-item focus:outline-none"
            >
              <span>{item.label}</span>
              <span className="bb-nav-star" aria-hidden="true">*</span>
            </button>
          ))}
        </nav>

        {/* Right Action Button (BusyBox Underline Sweep) */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenRFQ()}
            className="bb-button group focus:outline-none text-softWhite hover:text-peach-soft"
          >
            <span>Request a Quote</span>
            <span className="text-peach-soft text-sm font-mono">*</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-peach-soft transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => onOpenRFQ()}
            className="px-3 py-1.5 rounded-full border border-peach-soft/50 text-[11px] font-mono text-peach-soft uppercase font-bold"
          >
            Quote*
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-silver-pale hover:text-softWhite focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark-obsidian/95 backdrop-blur-3xl px-6 py-6 space-y-4 animate-fadeIn">
          <div className="space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.targetSection)}
                className="w-full text-left py-2 font-display text-base text-silver-pale hover:text-peach-soft flex items-center justify-between border-b border-white/5"
              >
                <span>{item.label}</span>
                <span className="text-peach-soft font-mono text-sm">*</span>
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full py-3.5 rounded-xl bg-peach-soft hover:bg-peach-champagne text-dark-obsidian font-bold text-xs uppercase font-mono tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-peach-soft/20"
            >
              <span>REQUEST AN ENGINEERING QUOTE*</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

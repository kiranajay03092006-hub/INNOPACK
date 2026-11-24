import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { RFQModal } from './components/RFQModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { VideoModal } from './components/VideoModal';
import { AmbientSpotlight } from './components/effects/AmbientSpotlight';
import { CustomCursor } from './components/effects/CustomCursor';

// Aureum-Style Cinematic Intro Experience
import { IntroExperience } from './intro/IntroExperience';

// BusyBox Replicated Homepage Architecture
import { Hero } from './components/home/Hero';
import { IndustrialChallenge } from './components/home/IndustrialChallenge';
import { SolutionsSection } from './components/home/SolutionsSection';
import { ResultsAndProcess } from './components/home/ResultsAndProcess';
import { BuildAccordion } from './components/home/BuildAccordion';
import { InteractiveWeighingSimulator } from './components/effects/InteractiveWeighingSimulator';
import { IndustrialSupply } from './components/home/IndustrialSupply';
import { IndustryApplications } from './components/home/IndustryApplications';
import { CustomerShowcase } from './components/home/CustomerShowcase';
import { FinalCTA } from './components/home/FinalCTA';

// Inner Pages
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { SupportPage } from './pages/SupportPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

import { PRODUCTS, Product } from './data/innopackData';

export function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<string>('home');
  const [isRFQOpen, setIsRFQOpen] = useState<boolean>(false);
  const [rfqProduct, setRfqProduct] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>('/assets/Innopack_Checkweigher_Video_01.mp4');

  // Handle URL hash routing if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const validSections: Record<string, string> = {
      'home': 'home',
      'challenges': 'problem-section',
      'solutions': 'solutions-section',
      'process': 'process-section',
      'machinery': 'products-showcase',
      'work': 'work-section',
      'supply': 'industrial-supply',
      'industrial-supply': 'industrial-supply',
      'customers': 'customers-section',
      'customers-section': 'customers-section',
      'problem-section': 'problem-section',
      'solutions-section': 'solutions-section',
      'process-section': 'process-section',
      'products-showcase': 'products-showcase',
      'contact-section': 'contact-section',
      'about': 'about',
      'products': 'products',
      'industries': 'industries',
      'support': 'support',
      'careers': 'careers',
      'contact': 'contact'
    };

    const target = validSections[hash] || (hash ? hash : null);

    if (target) {
      setShowIntro(false);
      if (['about', 'products', 'industries', 'support', 'careers', 'contact'].includes(target)) {
        setActivePage(target);
      } else {
        setActivePage('home');
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
        }, 150);
      }
    }
  }, []);

  const handleEnterWebsite = (targetSection?: string) => {
    setShowIntro(false);
    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenRFQ = (productId?: string) => {
    setRfqProduct(productId);
    setIsRFQOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (prod) {
      setSelectedProduct(prod);
    }
  };

  const handleOpenVideo = (customUrl?: string) => {
    if (customUrl) {
      setVideoUrl(customUrl);
    }
    setIsVideoOpen(true);
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-obsidian text-silver-pale flex flex-col font-sans selection:bg-peach-soft selection:text-dark-obsidian relative">

      {/* 1. Aureum-Style Cinematic Intro Experience (Displayed Before Homepage) */}
      {showIntro && (
        <IntroExperience onEnterWebsite={handleEnterWebsite} />
      )}

      {/* 2. BusyBox Custom Cursor (Difference Blend Dot) */}
      {!showIntro && <CustomCursor />}

      {/* 3. Cinematic Ambient Radial Spotlight in Soft Peach */}
      <AmbientSpotlight />

      {/* 4. BusyBox Replicated Fixed Navigation Bar (Only on Homepage) */}
      {!showIntro && (
        <Navbar
          activePage={activePage}
          setActivePage={handlePageChange}
          onOpenRFQ={() => handleOpenRFQ()}
        />
      )}

      {/* 5. Main Content Area */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            {/* Section 01: Hero with Coordinate Axes & Authentic Machine Centerpiece */}
            <Hero
              onExplore={() => {
                const el = document.getElementById('products-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else handlePageChange('products');
              }}
              onContact={() => handlePageChange('contact')}
              onOpenVideo={() => handleOpenVideo()}
              onSelectProduct={handleSelectProduct}
            />

            {/* Section 02: BusyBox Problem Section with Framing Borders & Diagrams */}
            <IndustrialChallenge />

            {/* Section 03: BusyBox Solutions Section with 5 Pillars & Machine Showcase */}
            <SolutionsSection
              onSelectProduct={handleSelectProduct}
              onOpenRFQ={(pId) => handleOpenRFQ(pId)}
              onOpenVideo={() => handleOpenVideo()}
            />

            {/* Section 04: BusyBox Results (Benefits) & Process Journey */}
            <ResultsAndProcess
              onContact={() => handlePageChange('contact')}
              onOpenVideo={() => handleOpenVideo()}
            />

            {/* Section 05: BusyBox Build Portfolio Accordion & Synchronized Stage */}
            <BuildAccordion
              onSelectProduct={handleSelectProduct}
              onOpenRFQ={(pId) => handleOpenRFQ(pId)}
            />

            {/* Dynamic Loadcell Oscilloscope Waveform & Calibration Simulator */}
            <InteractiveWeighingSimulator />

            {/* Section 06: High-Grade Industrial Products & Tooling Division (From Reference) */}
            <IndustrialSupply
              onOpenRFQ={(p) => handleOpenRFQ(p)}
              onContact={() => handlePageChange('contact')}
            />

            {/* Section 07: Industry Applications Matrix */}
            <IndustryApplications
              onSelectProduct={handleSelectProduct}
            />

            {/* Section 08: Verified Customer & Supplier Network + 5-Step Lifecycle (From Reference) */}
            <CustomerShowcase />

            {/* Section 09: Final CTA Callout Banner & Global Footer */}
            <FinalCTA
              onContact={() => handlePageChange('contact')}
              onOpenRFQ={() => handleOpenRFQ()}
            />
          </>
        )}

        {activePage === 'about' && (
          <AboutPage
            onOpenRFQ={() => handleOpenRFQ()}
            onOpenVideo={() => handleOpenVideo()}
          />
        )}

        {activePage === 'products' && (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            onOpenRFQ={(pId) => handleOpenRFQ(pId)}
            onOpenVideo={() => handleOpenVideo()}
          />
        )}

        {activePage === 'industries' && (
          <IndustriesPage
            onSelectProduct={handleSelectProduct}
            onOpenRFQ={() => handleOpenRFQ()}
          />
        )}

        {activePage === 'support' && (
          <SupportPage
            onOpenRFQ={() => handleOpenRFQ()}
            onOpenVideo={() => handleOpenVideo()}
          />
        )}

        {activePage === 'careers' && (
          <CareersPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Floating Replay Intro Button in Bottom Left Corner */}
      {!showIntro && (
        <button
          onClick={() => {
            setShowIntro(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-6 left-6 z-40 px-3 py-1.5 rounded-full bg-dark-obsidian/80 border border-silver-border hover:border-peach-soft text-[10px] font-mono text-silver-metallic hover:text-peach-soft transition-all backdrop-blur-md shadow-lg"
          title="Replay Cinematic Opening"
        >
          <span>↻ REPLAY INTRO</span>
        </button>
      )}

      {/* Interactive Modals */}
      <RFQModal
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
        preselectedProduct={rfqProduct}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenRFQ={(pId) => {
          setSelectedProduct(null);
          handleOpenRFQ(pId);
        }}
        onOpenVideo={(url) => handleOpenVideo(url)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
}

export default App;

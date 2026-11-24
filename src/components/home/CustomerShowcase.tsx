import React, { useState } from 'react';
import { Building2, CheckCircle2, ShieldCheck, Wrench, Users, Headphones, Sparkles, ExternalLink } from 'lucide-react';

export const CustomerShowcase: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // 10 Verified Customers & Suppliers matching the exact 2-row layout from the user's reference
  const partners = [
    {
      id: 1,
      name: 'Salalah Mills Co. (S.A.O.G.)',
      logo: '/assets/1.png',
      alt: 'Salalah Mills Co. Logo',
      sector: 'Flour & Grain Milling',
      country: 'Sultanate of Oman',
      note: 'Dynamic Check Weighing Lines'
    },
    {
      id: 2,
      name: 'Lalitha Brand Grain Industries',
      logo: '/assets/2.jpg',
      alt: 'Lalitha Brand Logo',
      sector: 'Rice & Grain Processing',
      country: 'India',
      note: 'High-Speed Bagging & Inspection'
    },
    {
      id: 3,
      name: 'Omani Gulf Food Co. SPC',
      logo: '/assets/3.png',
      alt: 'FOOD Industries Logo',
      sector: 'Commercial Food Processing',
      country: 'Sultanate of Oman',
      note: 'End-of-Line Check Weighers'
    },
    {
      id: 4,
      name: 'Santhosh Instant Food (Vermicelli)',
      logo: '/assets/4.webp',
      alt: 'Pasta & Noodles FMCG Brand',
      sector: 'Vermicelli & Pasta Processing',
      country: 'India',
      note: 'CW-03 Compact Check Weigher'
    },
    {
      id: 5,
      name: 'Oman Agro Industries LLC',
      logo: '/assets/5.jpeg',
      alt: 'Stag Agro Brand Logo',
      sector: 'Agro Foods & Edible Oils',
      country: 'Sultanate of Oman',
      note: 'Continuous Conveyor Sorting'
    },
    {
      id: 6,
      name: 'Green Canopy Agri Products',
      logo: '/assets/6.jpeg',
      alt: 'Green Canopy Agro Logo',
      sector: 'Agro Commodities & Packaging',
      country: 'India / GCC',
      note: 'Bulk Bag Weight Inspection'
    },
    {
      id: 7,
      name: 'Al Bahja Group (مجموعة البهجة)',
      logo: '/assets/7.webp',
      alt: 'Al Bahja Group Logo',
      sector: 'Diversified Industrial FMCG',
      country: 'Sultanate of Oman',
      note: 'Full Line Packaging Automation'
    },
    {
      id: 8,
      name: 'Heritage Pot Culinary Brand',
      logo: '/assets/8.png',
      alt: 'Culinary Brand Emblem',
      sector: 'Packaged Food & Condiments',
      country: 'India',
      note: 'Static Verification Stations'
    },
    {
      id: 9,
      name: 'BioSeeds Agri Corporation',
      logo: '/assets/9.png',
      alt: 'Seed & Agro Brand Logo',
      sector: 'Seed & Grain Processing',
      country: 'India',
      note: 'Precision Bag Verification'
    },
    {
      id: 10,
      name: 'ACMAA SPM Automation Division',
      logo: '/assets/innopack_mark_peach.png',
      alt: 'ACMAA Automation Partner',
      sector: 'SPM & Tooling Partner',
      country: 'Ambattur, Chennai',
      note: 'Engineering & Manufacturing Partner'
    }
  ];

  // The 5-step assistance lifecycle extracted verbatim from the screenshot's corporate footer mission
  const lifecycleSteps = [
    {
      step: '01',
      title: 'Judging Requirements',
      desc: 'Thoroughly evaluating plant throughput, package dimensions, line speeds, and suggesting the exact appropriate machine versions.',
      icon: Users
    },
    {
      step: '02',
      title: 'Supplying Products',
      desc: 'Supplying internationally benchmarked, high-grade weighing systems, custom conveyor integrations, and genuine industrial tools.',
      icon: Sparkles
    },
    {
      step: '03',
      title: 'Precision Installation',
      desc: 'Expert on-site mechanical installation, electrical wiring, pneumatic interlocks, and seamless conveyor line leveling.',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Operation Demonstration',
      desc: 'Comprehensive live demonstrations for floor staff, recipe calibration training, and parameter threshold setup.',
      icon: CheckCircle2
    },
    {
      step: '05',
      title: 'After-Sales Support',
      desc: 'Guaranteed 24/7 technical assistance, remote PLC telemetry diagnostics, and direct Ambattur stockroom spare parts dispatch.',
      icon: Headphones
    }
  ];

  return (
    <section 
      id="customers-section" 
      className="relative bg-dark-obsidian py-24 sm:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Background Volumetric Lighting */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-volumetric-peach blur-[170px] pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* Section Header (BusyBox Title Reference) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="bb-tag inline-flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-peach-soft" />
            <span>VERIFIED CLIENTS & SUPPLIERS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-[1.15]">
            <span>SOME OF THE PROUD </span>
            <span className="text-peach-gradient">CUSTOMERS & SUPPLIERS</span>
            <span> OF INNOPACK AUTOMATION</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans max-w-2xl mx-auto">
            Trusted by premier industrial food processors, flour & grain milling conglomerates, and packaging corporations across the Sultanate of Oman, UAE, and India.
          </p>
        </div>

        {/* 10 Logo Tiles Grid (2 Rows of 5 on desktop, responsive on smaller screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {partners.map((partner, idx) => (
            <div
              key={partner.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative rounded-2xl bg-white/[0.97] p-5 sm:p-6 flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px] border border-white/30 hover:border-peach-soft shadow-lg hover:shadow-2xl hover:shadow-peach-soft/20 transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Corner specular accent */}
              <span className="absolute top-2 left-2 text-dark-obsidian/20 font-mono text-[9px] pointer-events-none">
                0{partner.id}
              </span>

              {/* Logo Presentation */}
              <div className="w-full h-20 sm:h-24 flex items-center justify-center p-2">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Hover Badge / Caption (Appears smoothly) */}
              <div className="w-full text-center pt-2 border-t border-dark-obsidian/10 mt-1">
                <span className="block text-[11px] font-sans font-bold text-dark-obsidian truncate">
                  {partner.name}
                </span>
                <span className="block text-[9px] font-mono text-dark-obsidian/60 uppercase tracking-wider truncate">
                  {partner.country}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Client Support & Mission Statement Banner (From Screenshot's bottom cyan section) */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white/[0.08] via-dark-charcoal/80 to-white/[0.03] border border-peach-soft/30 backdrop-blur-2xl shadow-2xl space-y-10">
          
          {/* Corner Framing Brackets */}
          <span className="absolute top-4 left-4 text-peach-soft/40 font-mono text-xs pointer-events-none">﹁</span>
          <span className="absolute bottom-4 right-4 text-peach-soft/40 font-mono text-xs pointer-events-none">﹂</span>

          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peach-soft/15 border border-peach-soft/30 text-peach-soft font-mono text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-peach-soft" />
              <span>INNOPACK CLIENT ASSISTANCE COMMITMENT</span>
            </div>

            {/* Verbatim text from original website footer in screenshot */}
            <blockquote className="text-base sm:text-xl lg:text-2xl font-display font-medium text-softWhite leading-relaxed sm:leading-loose">
              “Our well-trained employees and staff assist our clients with all their needs including, <span className="text-peach-soft">judging the requirements</span> and <span className="text-peach-soft">suggesting the appropriate versions</span>, <span className="text-peach-soft">supplying the needed products</span>, <span className="text-peach-soft">installing the product</span>, <span className="text-peach-soft">demonstrating the operation of the product</span> and <span className="text-peach-soft">providing after sales support</span>.”
            </blockquote>

            <div className="text-xs font-mono text-silver-metallic uppercase tracking-wider">
              — INNOPACK AUTOMATION OPERATIONS & ENGINEERING CHARTER
            </div>
          </div>

          {/* 5-Step End-to-End Assistance Lifecycle Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6 border-t border-white/10">
            {lifecycleSteps.map((step) => (
              <div 
                key={step.step}
                className="rounded-xl p-5 bg-white/[0.03] border border-white/5 hover:border-peach-soft/40 transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-peach-soft font-bold">
                    STEP {step.step}
                  </span>
                  <step.icon className="w-4 h-4 text-peach-soft group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-display font-bold text-sm text-softWhite group-hover:text-peach-soft transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-silver-pale leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomerShowcase;

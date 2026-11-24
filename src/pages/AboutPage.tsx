import React from 'react';
import { COMPANY_INFO, CORE_VALUES } from '../data/innopackData';
import { 
  Building2, 
  MapPin, 
  Target, 
  Compass, 
  ShieldCheck, 
  Cpu, 
  Wifi, 
  Video, 
  ExternalLink, 
  CheckCircle2, 
  Users, 
  Wrench, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles, 
  Radio, 
  Clock, 
  Layers 
} from 'lucide-react';
import { GlassTiltCard } from '../components/effects/GlassTiltCard';

interface AboutPageProps {
  onOpenRFQ: () => void;
  onOpenVideo?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenRFQ, onOpenVideo }) => {
  return (
    <div className="pt-28 pb-20 bg-dark-obsidian min-h-screen text-silver-pale">
      
      {/* Hero Header with Volumetric Peach Aura */}
      <div className="relative py-20 bg-dark-graphite border-b border-silver-border overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach pointer-events-none blur-[150px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
            <Building2 className="w-3.5 h-3.5 text-peach-soft" />
            <span>ABOUT INNOPACK AUTOMATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            ENGINEERING HERITAGE & <br />
            <span className="text-peach-gradient">GLOBAL PACKAGING REACH.</span>
          </h1>

          <p className="text-base sm:text-lg text-silver-pale max-w-3xl leading-relaxed font-sans">
            Headquartered in Ambattur Industrial Estate, Chennai — designing, fabricating, and exporting high-precision dynamic check weighers, packaging machines, and special-purpose industrial automation equipment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Company History & Manufacturing Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-peach-soft font-semibold block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-peach-soft animate-pulse shadow-[0_0_6px_#F4B7A5]"></span>
                MANUFACTURING HERITAGE IN AMBATTUR
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-softWhite uppercase leading-tight">
                Two Decades of Mechanical & <br />
                <span className="text-peach-gradient">Special-Purpose Machinery</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans">
              "Innopack Automation" production units are located in the Ambattur Industrial area in the cosmopolitan city of Chennai, India. Innopack designs, manufactures and supplies state-of-the-art packing machines, on-line check weighers, and automation solutions for a wide range of products to all FMCG industries as well as sectors such as flour, dal, rice, lube oil, detergents, sweets, bakery, vermicelli, and macaroni.
            </p>

            <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans">
              For over two decades we have been in the machinery manufacturing industry, particularly in the field of manufacturing SPMs (Special Purpose Machines) for automobile industries, and diversified into the manufacturing of packing machines, check weighers, and automation solutions for export under the headship of the Innopack Automation team.
            </p>

            {/* SPM Division Callout */}
            <div className="p-5 rounded-2xl glass-panel border border-peach-soft/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-peach-soft block font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-peach-soft" />
                  Special Purpose Machine (SPM) Division
                </span>
                <p className="text-xs text-silver-pale">
                  Automobile assembly and custom engineering machines engineered under our sister company ACMAA:
                </p>
              </div>
              <a 
                href={COMPANY_INFO.spmPartnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-peach-soft text-dark-obsidian font-bold text-xs uppercase font-mono tracking-wider flex items-center gap-2 shrink-0 transition-all hover:bg-peach-champagne"
              >
                <span>acmaa.net</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Technical Verification Note */}
            <div className="p-4 rounded-xl bg-dark-surface/60 border border-silver-border text-xs font-mono text-silver-pale flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-peach-soft shrink-0 mt-0.5" />
              <span>
                <strong>Operational Legacy:</strong> Built on more than two decades of custom machinery fabrication expertise, seamlessly integrating digital microprocessor architecture and high-speed loadcells.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <GlassTiltCard>
              <div className="rounded-2xl overflow-hidden glass-panel-heavy border border-silver-border p-2 group shadow-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/assets/aboutus.png" 
                    alt="Innopack Ambattur Plant" 
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-obsidian via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 text-xs font-mono text-peach-soft px-2.5 py-1 rounded bg-dark-obsidian/85 border border-peach-soft/30 backdrop-blur-md">
                    SIDCO Industrial Estate, Ambattur
                  </div>
                </div>
              </div>
            </GlassTiltCard>

            <GlassTiltCard>
              <div className="rounded-2xl overflow-hidden glass-panel border border-silver-border p-2 group shadow-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/assets/team.jpg" 
                    alt="Innopack Technical Engineering Team" 
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-obsidian via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 text-xs font-mono text-softWhite px-2.5 py-1 rounded bg-dark-obsidian/85 border border-silver-border backdrop-blur-md">
                    Innopack Engineering & Technical Staff
                  </div>
                </div>
              </div>
            </GlassTiltCard>
          </div>
        </div>

        {/* Milestone Evolution Timeline */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
              CHRONOLOGY & EXPANSION
            </span>
            <h2 className="text-3xl font-bold font-display text-softWhite uppercase">
              Milestones of Industrial Evolution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl glass-panel border border-silver-border space-y-3 specular-corner">
              <div className="text-xs font-mono text-peach-soft font-bold">PHASE 01 • SPM FOUNDATION</div>
              <h3 className="text-xl font-bold font-display text-softWhite">Automobile SPM Engineering</h3>
              <p className="text-xs text-silver-pale leading-relaxed">
                Fabrication of high-precision Special Purpose Machines (SPMs) for major automobile industries in South India, establishing core mechanical tooling precision.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel-heavy border border-peach-soft/30 space-y-3 specular-corner shadow-lg">
              <div className="text-xs font-mono text-peach-soft font-bold">PHASE 02 • WEIGHING INNOVATION</div>
              <h3 className="text-xl font-bold font-display text-softWhite">Dynamic Checkweighers</h3>
              <p className="text-xs text-silver-pale leading-relaxed">
                Development of online high-speed dynamic checkweighing units with 10.1" color touchscreens, digital loadcell filtering algorithms, and automated rejection pneumatics.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-silver-border space-y-3 specular-corner">
              <div className="text-xs font-mono text-peach-soft font-bold">PHASE 03 • GLOBAL EXPORT</div>
              <h3 className="text-xl font-bold font-display text-softWhite">Middle East & Global Deployments</h3>
              <p className="text-xs text-silver-pale leading-relaxed">
                Exporting checkweighers and packaging machines to major multinational food & milling giants including Salalah Mills, Oman Agro Industries, and regional FMCG packagers.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Frosted Glass Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <GlassTiltCard>
            <div className="p-8 sm:p-10 rounded-2xl glass-panel space-y-5 specular-corner border border-silver-border light-streak h-full">
              <div className="w-12 h-12 rounded-xl bg-peach-soft/10 border border-peach-soft/30 flex items-center justify-center text-peach-soft shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-peach-soft font-bold block">
                PUBLISHED CORPORATE VISION
              </span>
              <h3 className="text-2xl font-bold font-display text-softWhite">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-silver-pale leading-relaxed italic border-l-2 border-peach-soft pl-4">
                "To exceed customers' expectations at every dimension and set a new quality benchmark in the manufacturing of each and every machine."
              </p>
              <p className="text-xs text-silver-pale leading-relaxed pt-2">
                "To be a leader in providing the best business solutions to all our valued clients around the world thereby enabling our clients to achieve desired goals in their respective challenging businesses."
              </p>
            </div>
          </GlassTiltCard>

          {/* Mission Card */}
          <GlassTiltCard>
            <div className="p-8 sm:p-10 rounded-2xl glass-panel space-y-5 specular-corner border border-silver-border light-streak h-full">
              <div className="w-12 h-12 rounded-xl bg-peach-soft/10 border border-peach-soft/30 flex items-center justify-center text-peach-soft shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-peach-soft font-bold block">
                FIVE STRATEGIC COMMITMENTS
              </span>
              <h3 className="text-2xl font-bold font-display text-softWhite">
                Our Mission
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-silver-pale">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-peach-soft shrink-0 mt-0.5" />
                  <span>Perceiving specific customer needs and objectives through clear-cut communication.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-peach-soft shrink-0 mt-0.5" />
                  <span>Establishing the highest ethical standards in all business operations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-peach-soft shrink-0 mt-0.5" />
                  <span>Maintaining and expanding a well-knit international and domestic customer base.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-peach-soft shrink-0 mt-0.5" />
                  <span>Enriching the workforce with integrity and ensuring employee welfare by all means.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-peach-soft shrink-0 mt-0.5" />
                  <span>Keeping up long-standing relationships with verified suppliers and vendors.</span>
                </li>
              </ul>
            </div>
          </GlassTiltCard>
        </div>

        {/* Core Values Detailed */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
              OPERATIONAL PRINCIPLES
            </span>
            <h2 className="text-3xl font-bold font-display text-softWhite uppercase">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-silver-pale">
              All our engineering actions and client transactions operate around these five commitments:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CORE_VALUES.map((val) => (
              <GlassTiltCard key={val.title}>
                <div className="p-6 rounded-2xl glass-panel space-y-2.5 border border-silver-border hover:border-peach-soft/40 h-full transition-colors">
                  <div className="font-bold text-softWhite text-lg font-display text-peach-soft">
                    {val.title}
                  </div>
                  <div className="text-xs font-mono text-silver-pale">
                    {val.short}
                  </div>
                  <p className="text-xs text-silver-pale leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </GlassTiltCard>
            ))}
          </div>
        </div>

        {/* Engineering Staff & Stocked Spares Facility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 sm:p-10 rounded-3xl glass-panel-heavy border border-silver-border specular-corner">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase text-peach-soft font-bold flex items-center gap-2">
              <Wrench className="w-4 h-4 text-peach-soft" />
              FIELD ENGINEERING & SPARES AVAILABILITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-softWhite">
              Trained Engineers & Fully Stocked Ambattur Facility
            </h3>
            <p className="text-sm text-silver-pale leading-relaxed">
              "Our well-trained engineers and staff assist our clients with all their needs including judging requirements, suggesting appropriate products, supplying, installing, demonstrating operation, and providing prompt after-sales support."
            </p>
            <p className="text-sm text-silver-pale leading-relaxed">
              "Our well-equipped and well-stocked store holds all our stock products, enabling us to deliver without delay and provide any spares or accessories required."
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-peach-soft/30 space-y-4">
            <h4 className="font-display font-bold text-softWhite text-lg flex items-center gap-2">
              <Wifi className="w-5 h-5 text-peach-soft" />
              Direct Remote Telemetry Protocol
            </h4>
            <p className="text-xs text-silver-pale leading-relaxed">
              "Innopack's engineering staff offers their clients the opportunity by LAN, Wi-Fi or modem connection to access directly into the machine control system. This allows to check parameters, analyze operations in real time, so that any possible malfunction can be spotted immediately. Innopack's online video assistance can be used in any installation anywhere in the world."
            </p>
            <button
              onClick={onOpenRFQ}
              className="px-6 py-3 rounded-xl bg-peach-soft text-dark-obsidian font-bold text-xs uppercase font-mono tracking-wider transition-all hover:bg-peach-champagne"
            >
              Consult an Ambattur Engineer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

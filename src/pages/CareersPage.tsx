import React, { useState } from 'react';
import { CAREER_ROLES, COMPANY_INFO } from '../data/innopackData';
import { Briefcase, Send, CheckCircle2, AlertCircle, MapPin, Clock, ArrowRight, Sparkles, Building2, UserCheck, Shield } from 'lucide-react';
import { GlassTiltCard } from '../components/effects/GlassTiltCard';

export const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Mechatronics & Automation Engineer',
    experienceYears: '2-5 years',
    qualification: '',
    portfolioUrl: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name, email, and mobile contact number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-dark-obsidian min-h-screen text-silver-pale">
      
      {/* Header */}
      <div className="relative py-20 bg-dark-graphite border-b border-silver-border overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach pointer-events-none blur-[150px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-peach-soft" />
            <span>JOIN OUR AMBATTUR ENGINEERING CREW</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            BUILD THE FUTURE OF <br />
            <span className="text-peach-gradient">AUTOMATION ENGINEERING.</span>
          </h1>

          <p className="text-base sm:text-lg text-silver-pale max-w-3xl leading-relaxed font-sans">
            Innopack Automation offers an agile, cutting-edge workplace with opportunities to learn high-speed dynamic loadcell technologies, microcontroller firmware, and PLC automation across diverse global industries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Values / Work Culture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassTiltCard>
            <div className="p-7 rounded-2xl glass-panel border border-silver-border space-y-3 h-full">
              <div className="text-peach-soft font-bold font-display text-xl flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-peach-soft" />
                <span>Hands-On Learning</span>
              </div>
              <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                Direct exposure to high-speed strain gauge loadcells, microcontroller firmware, industrial PLCs, and pneumatic machinery design.
              </p>
            </div>
          </GlassTiltCard>

          <GlassTiltCard>
            <div className="p-7 rounded-2xl glass-panel-heavy border border-peach-soft/30 space-y-3 h-full shadow-lg">
              <div className="text-softWhite font-bold font-display text-xl flex items-center gap-2">
                <Building2 className="w-5 h-5 text-peach-soft" />
                <span>Global Exports Exposure</span>
              </div>
              <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                Deploy customized machines for international food, milling, and FMCG manufacturing conglomerates across India, Oman, and the Middle East.
              </p>
            </div>
          </GlassTiltCard>

          <GlassTiltCard>
            <div className="p-7 rounded-2xl glass-panel border border-silver-border space-y-3 h-full">
              <div className="text-peach-soft font-bold font-display text-xl flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-peach-soft" />
                <span>Integrity & Team Spirit</span>
              </div>
              <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                "Enriching the workforce with integrity and ensuring employee welfare by all means" is our published foundational core commitment.
              </p>
            </div>
          </GlassTiltCard>
        </div>

        {/* Current Openings */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
              ACTIVE VACANCIES
            </span>
            <h2 className="text-3xl font-bold font-display text-softWhite uppercase">
              Current Career Opportunities
            </h2>
          </div>

          <div className="space-y-6">
            {CAREER_ROLES.map((role, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl glass-panel border border-silver-border hover:border-peach-soft/50 transition-all space-y-6 specular-corner light-streak"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-3 py-1 rounded-full bg-peach-soft/15 text-xs font-mono text-peach-soft border border-peach-soft/30 font-semibold">
                        {role.department}
                      </span>
                      <span className="text-xs font-mono text-silver-metallic flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-peach-soft" />
                        {role.experience}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-softWhite">
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-silver-pale mt-1">
                      <MapPin className="w-3.5 h-3.5 text-peach-soft" />
                      <span>{role.location}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, role: role.title }));
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-xl bg-peach-soft text-dark-obsidian font-bold text-xs font-mono uppercase tracking-wider transition-all hover:bg-peach-champagne shadow-md shadow-peach/25 shrink-0"
                  >
                    APPLY FOR THIS ROLE
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-silver-border text-xs">
                  <div className="space-y-2">
                    <span className="font-mono text-peach-soft font-semibold uppercase tracking-wider block">
                      CORE RESPONSIBILITIES:
                    </span>
                    <ul className="space-y-1.5 text-silver-pale">
                      {role.responsibilities.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-peach-soft shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-softWhite font-semibold uppercase tracking-wider block">
                      QUALIFICATIONS & WORK TERMS:
                    </span>
                    <ul className="space-y-1.5 text-silver-pale">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-peach-soft mt-1.5 shrink-0 shadow-[0_0_6px_#F4B7A5]"></span>
                        <span>Experience Requirement: {role.experience} relevant background</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-peach-soft mt-1.5 shrink-0 shadow-[0_0_6px_#F4B7A5]"></span>
                        <span>Employment Type: {role.type} located at Ambattur Works</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-peach-soft mt-1.5 shrink-0 shadow-[0_0_6px_#F4B7A5]"></span>
                        <span>Department: {role.department} with active mentorship</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form with Frosted Glass Panel */}
        <div id="application-form" className="rounded-3xl glass-panel-heavy border border-silver-border p-8 sm:p-12 shadow-2xl relative overflow-hidden specular-corner">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
                APPLY DIRECTLY TO MANAGEMENT
              </span>
              <h2 className="text-3xl font-bold font-display text-softWhite uppercase">
                Submit Your Engineering Application
              </h2>
              <p className="text-xs sm:text-sm text-silver-pale">
                Send your credentials directly to Innopack management in Ambattur Industrial Estate, Chennai.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl glass-panel border border-peach-soft/50 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-peach-soft mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold font-display text-softWhite">Application Received!</h3>
                <p className="text-sm text-silver-pale max-w-md mx-auto">
                  Thank you for applying for <span className="text-peach-soft font-mono font-bold">{formData.role}</span>. Our technical recruitment desk will review your details and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-dark-surface border border-silver-border text-xs font-mono text-softWhite hover:border-peach-soft transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-silver-metallic uppercase block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-silver-metallic uppercase block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-silver-metallic uppercase block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-silver-metallic uppercase block">
                      Position of Interest *
                    </label>
                    <select
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all"
                    >
                      {CAREER_ROLES.map((r, idx) => (
                        <option key={idx} value={r.title} className="bg-dark-obsidian text-softWhite">
                          {r.title} ({r.department})
                        </option>
                      ))}
                      <option value="General Mechanical Engineer" className="bg-dark-obsidian text-softWhite">General / Speculative Application</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-silver-metallic uppercase block">
                      Experience
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={e => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all"
                    >
                      <option value="Entry Level / Graduate" className="bg-dark-obsidian text-softWhite">Entry Level / Graduate (0-1 yrs)</option>
                      <option value="1-3 years" className="bg-dark-obsidian text-softWhite">1-3 years</option>
                      <option value="3-5 years" className="bg-dark-obsidian text-softWhite">3-5 years</option>
                      <option value="5+ years" className="bg-dark-obsidian text-softWhite">5+ years senior</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-silver-metallic uppercase block">
                      Highest Qualification
                    </label>
                    <input
                      type="text"
                      value={formData.qualification}
                      onChange={e => setFormData({ ...formData, qualification: e.target.value })}
                      placeholder="e.g. B.E. Mechatronics / DME"
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-silver-metallic uppercase block">
                    Summary of Engineering Experience & Skills
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe your experience with packaging machinery, PLCs, CAD design, or checkweighers..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-peach to-peach-blush text-dark-obsidian font-bold text-sm font-mono uppercase tracking-wider hover:bg-peach-champagne transition-all shadow-lg shadow-peach/25 flex items-center justify-center gap-2"
                >
                  <span>SUBMIT APPLICATION TO INNOPACK</span>
                  <Send className="w-4 h-4 text-dark-obsidian" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

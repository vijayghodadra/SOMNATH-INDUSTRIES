import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Settings, Cpu, Target, Compass, Zap } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: '2011',
      title: 'Foundation Laid',
      desc: 'Somnath Industries established in Sondarda, Keshod with a basic screening and grading deck setup.'
    },
    {
      year: '2014',
      title: 'Facility Expansion',
      desc: 'Tripled processing floor space to accommodate bulk gravity separators and dust-extraction cyclonics.'
    },
    {
      year: '2017',
      title: 'CCD Camera Sorting Integration',
      desc: 'Brought in high-end optical color sorting technology to isolate color mutations in groundnuts.'
    },
    {
      year: '2021',
      title: 'Automatic Packing Lines',
      desc: 'Integrated micro-computer load cell bagging machines to speed up export container packing.'
    },
    {
      year: '2025',
      title: 'Smart Factory Transition',
      desc: 'Deployment of real-time moisture monitoring systems across all sorting feeds.'
    }
  ];

  const specs = [
    { label: 'Daily Processing Cap', value: '80 Tons / Day' },
    { label: 'Sieve Separation Accuracy', value: '± 0.2mm' },
    { label: 'Aspirator Pressure Lift', value: '450 Pa' },
    { label: 'Plant Total Power Load', value: '120 HP' },
    { label: 'Storage Silo Capacity', value: '400 MT' },
    { label: 'CCD Sorter Channels', value: '192 Channels' }
  ];

  const coreValues = [
    {
      icon: ShieldCheck,
      title: 'Absolute Quality',
      desc: 'Rigorous inspection standards at every stage, assuring export-ready purity.'
    },
    {
      icon: Target,
      title: 'Client Precision',
      desc: 'Customized sorting settings matching precise millimeter and color specs.'
    },
    {
      icon: Compass,
      title: 'Operational Trust',
      desc: 'Accurate scale reports and honest batch grading protocols.'
    },
    {
      icon: Zap,
      title: 'Modern Innovation',
      desc: 'Constantly upgrading plant logic to use top-tier industrial systems.'
    }
  ];

  return (
    <div className="relative bg-[#0F1115] text-white">
      <SEO 
        title="About Us" 
        description="Learn more about Somnath Industries, our state-of-the-art agricultural processing plant in Gujarat, and our history of delivering high-quality sorted grains."
      />

      {/* Page Header Banner */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1200&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115]/50 to-[#0F1115]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            The Somnath Heritage
          </motion.h1>
          <div className="h-[2px] w-24 bg-accent mx-auto" />
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-light">
            Sowing trust and harvesting quality since 2011. Get to know our history, machinery specs, and core mission.
          </p>
        </div>
      </section>

      {/* Split Screen Introduction */}
      <section className="py-24 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Editorial Layout */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-accent font-bold tracking-widest text-xs uppercase block font-sans">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.1]">
                  Pioneering Grain Grading Protocols
                </h2>
                <div className="h-[2px] w-16 bg-accent rounded" />
              </div>

              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Operating out of Gujarat, India, Somnath Industries provides specialized sorting, grading, and packaging solutions. We process peanuts, chana, and tuwar whole seeds using a multi-deck sieve, de-stoning cyclones, and color camera separation platforms.
              </p>
              
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Our plant serves as a vital bridge between regional agricultural farming fields and national crop export houses, guaranteeing that every bag processed meets standard moisture and purity tolerances.
              </p>

              {/* Minimal Stat Panel */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-[#181B22] rounded-lg border border-white/5">
                  <span className="text-2xl font-extrabold text-accent block font-display">99.9%</span>
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold block mt-1">Purity Checked</span>
                </div>
                <div className="p-4 bg-[#181B22] rounded-lg border border-white/5">
                  <span className="text-2xl font-extrabold text-white block font-display">14+</span>
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold block mt-1">Export Partners</span>
                </div>
                <div className="p-4 bg-[#181B22] rounded-lg border border-white/5">
                  <span className="text-2xl font-extrabold text-accent block font-display">24/7</span>
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold block mt-1">Plant Support</span>
                </div>
              </div>
            </div>

            {/* Right side: Machinery Info Graphic */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-3xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-premium-lg">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop" 
                  alt="Industrial Plant Overview" 
                  className="w-full h-[450px] object-cover scale-102 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#181B22]/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-accent font-bold tracking-widest text-xs uppercase block font-sans">
              Corporate Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Our Core Values
            </h2>
            <div className="h-[2px] w-20 bg-accent rounded mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {coreValues.map((v) => {
              const Icon = v.icon;
              return (
                <div 
                  key={v.title}
                  className="p-6 rounded-xl bg-[#181B22] border border-white/5 hover:border-accent/15 transition-all duration-300 shadow-premium flex flex-col space-y-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-accent flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">{v.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Machinery Specs Infographics */}
      <section className="py-24 bg-[#181B22]/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-accent font-bold tracking-widest text-xs uppercase block font-sans">
              Technical Details
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Infrastructure Specifications
            </h2>
            <div className="h-[2px] w-20 bg-accent rounded mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specs.map((s) => (
              <div 
                key={s.label}
                className="p-6 rounded-xl bg-[#181B22] border border-white/5 hover:border-accent/15 transition-all duration-300 shadow-premium"
              >
                <span className="text-xs text-gray-400 block mb-1.5 font-light">{s.label}</span>
                <span className="text-2xl font-extrabold text-accent font-display block">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones timeline section */}
      <section className="py-24 bg-[#0F1115] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-4 mb-20">
            <span className="text-accent font-bold tracking-widest text-xs uppercase block font-sans">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Plant Milestones
            </h2>
            <div className="h-[2px] w-20 bg-accent rounded mx-auto" />
          </div>

          <div className="relative border-l border-white/10 pl-8 space-y-12">
            {milestones.map((mil, idx) => (
              <motion.div 
                key={mil.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative"
              >
                {/* Milestone dot */}
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-accent border-4 border-[#0F1115] shadow-premium" />
                
                <span className="font-display font-black text-2xl text-accent block leading-none mb-1">
                  {mil.year}
                </span>
                <h4 className="font-display font-bold text-white text-base">
                  {mil.title}
                </h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed font-light">
                  {mil.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

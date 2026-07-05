import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight,
  Eye, Layers, Package, Sliders, Scale, Settings
} from 'lucide-react';
import SEO from '../components/SEO';
import sizeImg from '../assets/size.png';
import machineImg from '../assets/Machinemayor.jpeg';

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const serviceData = [
    {
      id: 'sorting',
      icon: Eye,
      title: 'Optical Color Sorting',
      tagline: 'Achieving up to 99.9% batch purity.',
      image: machineImg,
      description: 'Using high-speed industrial optical sorting systems, we inspect individual crop grains in mid-air. The camera detects slight color deviations, dark spots, blemishes, and shape abnormalities, triggering high-speed compressed air nozzles to blow away the defective pieces.',
      benefits: [
        'Elimination of toxic mold, black-spotted seeds, and color mutations.',
        'High-speed throughput allowing quick processing of large tonnage batches.',
        'Zero damage to healthy seeds during sorting operations.',
        'Isolation of foreign objects like small stones, glass shards, and weed seeds.'
      ],
      process: [
        { step: '01', title: 'Hopper Feeding', desc: 'Raw crops are uniformly distributed onto chutes.' },
        { step: '02', title: 'Camera Scan', desc: 'Full-color CCD sensors capture images of every grain.' },
        { step: '03', title: 'Air Rejection', desc: 'High-frequency valves blow away anomalies.' },
        { step: '04', title: 'Purity Check', desc: 'Processed batch undergoes optical validation.' }
      ]
    },
    {
      id: 'grading',
      icon: Layers,
      title: 'Size & Weight Grading',
      tagline: 'Consistent classifications for global markets.',
      image: sizeImg,
      description: 'Size grading is critical for food processing and export standard compliance. Our facility uses multiple vibratory mechanical screens, screen cleaners, and size classifiers to separate produce into uniform size categories, ensuring consistent roasting, boiling, or flour-milling.',
      benefits: [
        'Separates splits and broken kernels from premium whole crops.',
        'Guarantees uniform sizing as per export parameters (e.g. Peanut counts).',
        'Improves retail packaging appeal and crop commercial value.',
        'Adjustable screen meshes to grade peanuts, chana, and tuwar grains.'
      ],
      process: [
        { step: '01', title: 'Aspiration', desc: 'Lightweight husks and dust are drawn out by wind pressure.' },
        { step: '02', title: 'Sieve Grading', desc: 'Vibrating multi-tier meshes sort crops by millimeter width.' },
        { step: '03', title: 'Gravity Sort', desc: 'Density separation isolates shriveled and immature grains.' },
        { step: '04', title: 'Batch Grading', desc: 'Crops are gathered into distinct size-grade lots.' }
      ]
    },
    {
      id: 'packing',
      icon: Package,
      title: 'Industrial Packaging',
      tagline: 'Locking in freshness, weight accuracy, and durability.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
      description: 'The final step protects your agricultural investment. We offer automated weighing and bagging in customizable formats. Our systems ensure exact weight measurements and seal the bags securely to prevent moisture entry, extending product shelf life during warehousing and oceanic shipping.',
      benefits: [
        'High-accuracy load cells eliminate product loss and weight discrepancies.',
        'Supports standard packaging: PP Woven bags, Jute bags, and vacuum bags.',
        'Custom layout printing for distributor labels and company logos.',
        'Sturdy double-stitch seals and heat sealing for leakage prevention.'
      ],
      process: [
        { step: '01', title: 'Weight Calibration', desc: 'Digital scales are calibrated as per target parameters.' },
        { step: '02', title: 'Automatic Filling', desc: 'Product is funneled into bag holders automatically.' },
        { step: '03', title: 'Double Stitching', desc: 'Heavy-duty industrial sewers stitch the bag opening.' },
        { step: '04', title: 'Pallet Stacking', desc: 'Bags are stacked and shrink-wrapped for storage.' }
      ]
    }
  ];

  return (
    <div className="relative bg-[#0F1115] text-white">
      <SEO 
        title="Our Services" 
        description="Explore the technical agricultural services at Somnath Industries: optical color sorting, size grading, and industrial packaging for peanuts and pulses."
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
            Processing Services
          </motion.h1>
          <div className="h-[2px] w-24 bg-accent mx-auto" />
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-light">
            We deliver state-of-the-art agricultural processing from crop arrival to final shipment containment.
          </p>
        </div>
      </section>

      {/* Main Services Detail List */}
      <section className="py-24 bg-[#0F1115] space-y-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {serviceData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                id={service.id} 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start scroll-mt-28 ${
                  index > 0 ? 'mt-32 pt-20 border-t border-white/5' : ''
                }`}
              >
                
                {/* Text and Benefits Column */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:order-last' : ''}`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-accent">
                      <service.icon size={22} />
                    </div>
                    <span className="text-accent font-bold tracking-widest text-xs uppercase block font-sans">
                      Service Category 0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-3xl font-extrabold text-white tracking-tight font-display">
                    {service.title}
                  </h2>
                  <div className="text-accent text-sm font-semibold tracking-wide italic">
                    {service.tagline}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-sm font-light">
                    {service.description}
                  </p>

                  <div className="space-y-4 pt-4">
                    <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                      Key Quality Benefits:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start text-xs text-gray-400 leading-relaxed">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mr-2 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-[#181B22] border border-white/5 hover:border-accent text-white hover:text-accent font-bold text-sm tracking-wide rounded-lg shadow transition-all duration-300 inline-flex items-center space-x-2 font-display"
                    >
                      <span>Quote for {service.title.split(' ').pop()}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>

                {/* Image and Step Process Column */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 space-y-8"
                >
                  {/* Photo representation */}
                  <div className="h-64 sm:h-72 rounded-xl overflow-hidden shadow-premium border border-white/10 bg-[#181B22]/20 flex items-center justify-center">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className={`w-full h-full hover:scale-102 transition-transform duration-300 ${
                        service.id === 'grading' 
                          ? 'object-contain bg-white/[0.02] p-4' 
                          : service.id === 'sorting'
                            ? 'object-contain'
                            : 'object-cover'
                      }`}
                      loading="lazy"
                    />
                  </div>

                  {/* Internal Process steps */}
                  <div className="p-6 bg-[#181B22] border border-white/5 rounded-xl space-y-4 shadow-premium">
                    <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                      Operation Process:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.process.map((pStep) => (
                        <div key={pStep.step} className="flex items-start space-x-2.5">
                          <span className="font-display font-extrabold text-sm text-accent bg-white/5 rounded border border-white/10 px-2 py-0.5 shrink-0">
                            {pStep.step}
                          </span>
                          <div>
                            <h5 className="font-display font-bold text-xs text-white">{pStep.title}</h5>
                            <p className="text-[10px] text-gray-400 mt-0.5 leading-relaxed font-light">{pStep.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}

        </div>
      </section>

      {/* Process Flow Overview Horizontal */}
      <section className="py-24 bg-[#181B22]/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-accent font-bold tracking-widest text-xs uppercase block font-sans">
              Workflow Overview
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              End-to-End Plant Processing Flow
            </h2>
            <div className="h-[2px] w-20 bg-accent rounded mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {[
              { num: '01', title: 'Feed Intake', desc: 'Raw harvest arrivals weighed & unloaded.', icon: Sliders },
              { num: '02', title: 'Pre-Cleaning', desc: 'Rotary sieves extract mud and big branches.', icon: Sliders },
              { num: '03', title: 'De-stoning', desc: 'Fluidized gravity tables extract clay and stones.', icon: Scale },
              { num: '04', title: 'Color Sorter', desc: 'CCD cameras eject blemished grains.', icon: Eye },
              { num: '05', title: 'Grading Sieve', desc: 'Millimeter screens divide sizes.', icon: Layers },
              { num: '06', title: 'Bagging & QC', desc: 'Automated scales fill and sample check.', icon: Package }
            ].map((step) => (
              <div 
                key={step.num} 
                className="bg-[#181B22] border border-white/5 p-6 rounded-xl shadow-premium relative space-y-4 flex flex-col justify-between group hover:border-accent transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-2xl text-accent/20 group-hover:text-accent transition-colors">
                    {step.num}
                  </span>
                  <step.icon size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-white">{step.title}</h4>
                  <p className="text-[10px] text-gray-400 leading-normal font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Quote Banner CTA */}
      <section className="bg-[#181B22] text-white py-24 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="font-display text-3xl font-extrabold text-white">Need Custom Grading for Your Harvest Consignment?</h3>
          <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            We provide custom processing trials. Send us a 5kg raw sample and inspect our sorting efficiency report.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-bold text-sm tracking-wide rounded-lg shadow-lg hover:scale-102 transition-all duration-300 inline-flex items-center space-x-2 font-display cursor-pointer"
            >
              <span>Schedule Processing Batch</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

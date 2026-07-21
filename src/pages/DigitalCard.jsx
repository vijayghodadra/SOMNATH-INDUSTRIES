import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Download, Building2, 
  Sparkles, CheckCircle2, MessageSquare, ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DigitalCard() {
  const contactInfo = {
    name: 'Sagar Gondaliya',
    title: 'Proprietor',
    company: 'Somnath Industries',
    phone: '+91 99258 42943',
    email: 'sagar.gondaliya@somnathindustries.info',
    address: 'Plot No.1, Ramdev Udhyog Nagar 2, Veraval Road, Sondarda, Gujarat - 362227',
    website: 'https://somnathindustries.in',
    mapsUrl: 'https://maps.google.com/?q=Somnath+Industries+Sondarda+Gujarat',
    whatsappUrl: 'https://wa.me/919925842943?text=Hi%20Sagar,%20I%20visited%20your%20digital%20business%20card%20and%20wanted%20to%20connect.'
  };

  const products = ['Peanuts(સીંગદાણા)', 'Chickpeas(ચણા)', 'Pigeon Peas(તુવેર)', 'Wheat(ઘઉં)', 'Garbanzo beans(કાબુલી ચણા)'];
  const services = ['Optical Color Sorting', 'Size & Weight Grading', 'Industrial Packaging'];

  const downloadVcf = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Sagar Gondaliya',
      'N:Gondaliya;Sagar;;;',
      'ORG:Somnath Industries',
      'TITLE:Proprietor',
      'TEL;TYPE=CELL,VOICE;VALUE=uri:tel:+919925842943',
      'EMAIL;TYPE=PREF,INTERNET:sagar.gondaliya@somnathindustries.info',
      'ADR;TYPE=WORK,POSTAL,PARCEL:;;Plot No.1, Ramdev Udhyog Nagar 2, Veraval Road;Sondarda;Gujarat;362227;India',
      'URL:https://somnathindustries.in',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Sagar_Gondaliya_Somnath_Industries.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans select-none">
      <SEO 
        title="Digital Visiting Card - Sagar Gondaliya" 
        description="Save contact info, call, send WhatsApp messages, or check the business location of Somnath Industries, Sondarda."
      />

      {/* Decorative ambient background glows */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-[#181B22]/85 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-premium-lg relative z-10 space-y-6 overflow-hidden"
      >
        {/* Embossed Luxury Stripe accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center space-y-3.5 pb-2">
          {/* Branded Golden Gear Logo */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center text-accent relative group shadow-premium">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            >
              <Building2 size={32} className="stroke-[1.5]" />
            </motion.div>
            <div className="absolute -inset-0.5 bg-accent/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl font-extrabold tracking-widest text-white uppercase font-display">
              Somnath
              <span className="text-accent block text-[10px] tracking-[0.25em] font-semibold -mt-1 uppercase font-sans">
                Industries
              </span>
            </h1>
            <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
              Agricultural Grain Processing
            </p>
          </div>
        </div>

        {/* Owner Profile Banner */}
        <div className="bg-[#0F1115]/50 border border-white/5 rounded-2xl p-5 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-display font-extrabold text-accent text-lg shadow-inner">
            SG
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide font-display">{contactInfo.name}</h2>
            <div className="flex items-center space-x-1.5 mt-0.5 text-accent">
              <Sparkles size={10} className="fill-current" />
              <span className="text-[10px] uppercase font-bold tracking-wider font-sans">{contactInfo.title}</span>
            </div>
          </div>
        </div>

        {/* Save Contact primary button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={downloadVcf}
          className="w-full py-4 bg-accent hover:bg-accent-hover text-primary font-extrabold tracking-wider rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-display cursor-pointer"
        >
          <Download size={18} className="stroke-[2.5]" />
          <span>SAVE CONTACT (VCF)</span>
        </motion.button>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-2 gap-3.5">
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center space-x-2.5 p-3.5 rounded-xl border border-white/5 bg-[#0F1115]/30 hover:border-accent/30 hover:bg-[#181B22] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent shrink-0">
              <Phone size={14} />
            </div>
            <div className="text-left overflow-hidden">
              <span className="text-[9px] text-gray-500 uppercase font-semibold block">Call Mobile</span>
              <span className="text-[11px] text-white font-bold block truncate">{contactInfo.phone}</span>
            </div>
          </a>

          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2.5 p-3.5 rounded-xl border border-white/5 bg-[#0F1115]/30 hover:border-accent/30 hover:bg-[#181B22] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageSquare size={14} />
            </div>
            <div className="text-left overflow-hidden">
              <span className="text-[9px] text-gray-500 uppercase font-semibold block">WhatsApp</span>
              <span className="text-[11px] text-white font-bold block">Chat Online</span>
            </div>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center space-x-2.5 p-3.5 rounded-xl border border-white/5 bg-[#0F1115]/30 hover:border-accent/30 hover:bg-[#181B22] transition-all duration-300 col-span-2"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent shrink-0">
              <Mail size={14} />
            </div>
            <div className="text-left overflow-hidden">
              <span className="text-[9px] text-gray-500 uppercase font-semibold block">Send Email</span>
              <span className="text-[11px] text-white font-bold block truncate">{contactInfo.email}</span>
            </div>
          </a>
        </div>

        {/* Section Accordions / Cards */}
        <div className="space-y-4 pt-2">
          {/* Products Summary */}
          <div className="space-y-2">
            <h4 className="text-[10px] text-accent uppercase font-bold tracking-widest block font-sans">
              Our Products
            </h4>
            <div className="flex flex-wrap gap-2">
              {products.map((p) => (
                <span 
                  key={p} 
                  className="px-3 py-1.5 bg-[#0F1115]/60 border border-white/5 rounded-lg text-xs font-light text-gray-300 flex items-center"
                >
                  <CheckCircle2 size={12} className="text-accent mr-1.5 shrink-0" />
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Services Summary */}
          <div className="space-y-2">
            <h4 className="text-[10px] text-accent uppercase font-bold tracking-widest block font-sans">
              Our Services
            </h4>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span 
                  key={s} 
                  className="px-3 py-1.5 bg-[#0F1115]/60 border border-white/5 rounded-lg text-xs font-light text-gray-300 flex items-center"
                >
                  <CheckCircle2 size={12} className="text-accent mr-1.5 shrink-0" />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-2 border-t border-white/5 pt-4">
            <h4 className="text-[10px] text-accent uppercase font-bold tracking-widest block font-sans">
              Location Address
            </h4>
            <div className="flex items-start space-x-2 text-xs text-gray-400 font-light leading-relaxed">
              <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
              <p>{contactInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-white/5">
          <a
            href={contactInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1.5 py-3 rounded-lg border border-white/5 bg-[#0F1115]/40 hover:bg-white/5 hover:border-white/10 text-xs font-bold text-gray-300 hover:text-white transition-all duration-300"
          >
            <MapPin size={12} />
            <span>Google Maps</span>
            <ExternalLink size={10} />
          </a>

          <Link
            to="/"
            className="flex items-center justify-center space-x-1.5 py-3 rounded-lg border border-white/5 bg-[#0F1115]/40 hover:bg-white/5 hover:border-white/10 text-xs font-bold text-gray-300 hover:text-white transition-all duration-300"
          >
            <Globe size={12} />
            <span>Visit Website</span>
            <ExternalLink size={10} />
          </Link>
        </div>

      </motion.div>

      {/* Footer Branding */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.6 }}
        className="text-[9px] text-gray-400 mt-6 tracking-widest uppercase text-center"
      >
        © {new Date().getFullYear()} Somnath Industries. All Rights Reserved.
      </motion.p>
    </div>
  );
}

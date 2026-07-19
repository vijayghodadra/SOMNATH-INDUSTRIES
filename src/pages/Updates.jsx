import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Quote, Sparkles, TrendingUp, Calendar, Info } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase, isSupabaseConfigured } from '../utils/supabaseClient';

const DEFAULT_UPDATES = [
  {
    id: 'u-1',
    title: 'Saurashtra Peanut Sorting Capacity Calibrated',
    category: 'Plant Operations',
    content: 'We have successfully completed calibration of our high-resolution CCD optical cameras on Line 2. The plant is now operating at a peak 80 tons per day sorting throughput with less than 0.05% margin for organic admixture.',
    date: new Date().toISOString()
  },
  {
    id: 'u-2',
    title: 'New Crop Season: Lokwan Wheat Intake Begins',
    category: 'Market Rates',
    content: 'Lokwan and Tukda wheat cleaning feeds are now active. Standard wholesale grading queues are open. Contact our dispatch department directly to reserve transport logistics and warehouse silo capacities.',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  }
];

const DEFAULT_QUOTES = [
  {
    id: 'q-1',
    text: 'Quality is not an act, it is a habit. In agricultural sorting, precision is our signature.',
    author: 'Somnath Operations Desk'
  },
  {
    id: 'q-2',
    text: 'Trust is built seed by seed, batch by batch, year after year.',
    author: 'Founder Statement'
  },
  {
    id: 'q-3',
    text: 'Innovation is the difference between raw commodity and premium grade processing.',
    author: 'Technical Team'
  }
];

export default function Updates() {
  const [updates, setUpdates] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchUpdatesAndQuotes = async () => {
      if (isSupabaseConfigured) {
        // Fetch Updates
        try {
          const { data: updateData, error: updateError } = await supabase
            .from('somnath_updates')
            .select('*')
            .order('date', { ascending: false });

          if (updateError) throw updateError;

          if (updateData && updateData.length > 0) {
            setUpdates(updateData);
          } else {
            // Seed Updates
            const isSeeded = localStorage.getItem('somnath_updates_seeded') === 'true';
            if (!isSeeded) {
              const seedData = DEFAULT_UPDATES.map(u => ({
                title: u.title,
                category: u.category,
                content: u.content,
                date: u.date
              }));
              const { data: insertedData, error: seedError } = await supabase
                .from('somnath_updates')
                .insert(seedData)
                .select();
              
              if (!seedError) {
                localStorage.setItem('somnath_updates_seeded', 'true');
                setUpdates(insertedData || []);
              } else {
                console.error('Error seeding updates:', seedError);
                setUpdates([]);
              }
            } else {
              setUpdates([]);
            }
          }
        } catch (err) {
          console.error('Error fetching updates from Supabase:', err);
          loadUpdatesFromLocalStorage();
        }

        // Fetch Quotes
        try {
          const { data: quoteData, error: quoteError } = await supabase
            .from('somnath_quotes')
            .select('*');

          if (quoteError) throw quoteError;

          if (quoteData && quoteData.length > 0) {
            setQuotes(quoteData);
          } else {
            // Seed Quotes
            const isSeeded = localStorage.getItem('somnath_quotes_seeded') === 'true';
            if (!isSeeded) {
              const seedData = DEFAULT_QUOTES.map(q => ({
                text: q.text,
                author: q.author
              }));
              const { data: insertedData, error: seedError } = await supabase
                .from('somnath_quotes')
                .insert(seedData)
                .select();

              if (!seedError) {
                localStorage.setItem('somnath_quotes_seeded', 'true');
                setQuotes(insertedData || []);
              } else {
                console.error('Error seeding quotes:', seedError);
                setQuotes([]);
              }
            } else {
              setQuotes([]);
            }
          }
        } catch (err) {
          console.error('Error fetching quotes from Supabase:', err);
          loadQuotesFromLocalStorage();
        }
      } else {
        loadUpdatesFromLocalStorage();
        loadQuotesFromLocalStorage();
      }
    };

    const loadUpdatesFromLocalStorage = () => {
      const storedUpdates = localStorage.getItem('somnath_updates');
      if (storedUpdates) {
        setUpdates(JSON.parse(storedUpdates));
      } else {
        localStorage.setItem('somnath_updates', JSON.stringify(DEFAULT_UPDATES));
        setUpdates(DEFAULT_UPDATES);
      }
    };

    const loadQuotesFromLocalStorage = () => {
      const storedQuotes = localStorage.getItem('somnath_quotes');
      if (storedQuotes) {
        setQuotes(JSON.parse(storedQuotes));
      } else {
        localStorage.setItem('somnath_quotes', JSON.stringify(DEFAULT_QUOTES));
        setQuotes(DEFAULT_QUOTES);
      }
    };

    fetchUpdatesAndQuotes();
  }, []);

  const categories = ['All', 'Plant Operations', 'Market Rates', 'Quality updates', 'General'];

  const filteredUpdates = selectedCategory === 'All' 
    ? updates 
    : updates.filter(up => up.category === selectedCategory);

  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <div className="relative bg-[#0F1115] text-white min-h-screen">
      <SEO 
        title="Daily Updates & Quotes" 
        description="Stay updated with Somnath Industries' daily plant announcements, market rates, quality calibrations, and motivational industry quotes."
      />

      {/* Page Header Banner */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1200&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115]/50 to-[#0F1115]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent flex items-center">
              <Sparkles size={12} className="mr-2" />
              Live Corporate Hub
            </span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Daily Updates &amp; Motivation
          </h1>
          <div className="h-[2px] w-24 bg-accent mx-auto" />
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-light">
            Track our optical sorting throughput metrics, seed market insights, and daily industry inspiration.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Daily Updates Timeline (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Category Filters */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                      selectedCategory === cat
                        ? 'bg-accent text-primary border-accent shadow-premium'
                        : 'bg-[#181B22] text-gray-400 border-white/5 hover:border-accent/40 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Updates List */}
              <div className="space-y-6 relative border-l border-white/10 pl-6 ml-2 pt-2">
                <AnimatePresence mode="popLayout">
                  {filteredUpdates.map((update, idx) => (
                    <motion.div
                      key={update.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="relative p-6 bg-[#181B22] border border-white/5 hover:border-accent/15 rounded-xl shadow-premium transition-all duration-300 group"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-[32px] top-7 w-4 h-4 rounded-full bg-accent border-4 border-[#0F1115] shadow group-hover:scale-110 transition-transform" />
                      
                      {/* Card Header Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-1 rounded-md border border-accent/10">
                          {update.category || 'General'}
                        </span>
                        
                        <div className="flex items-center text-gray-400 text-xs font-light">
                          <Calendar size={12} className="mr-1.5 text-accent" />
                          <span>{formatDate(update.date)}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-accent transition-colors">
                        {update.title}
                      </h3>
                      
                      <p className="text-xs text-gray-300 leading-relaxed font-light whitespace-pre-line">
                        {update.content}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Empty State */}
                {filteredUpdates.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 text-center bg-[#181B22] border border-white/5 rounded-xl text-gray-400 flex flex-col items-center justify-center space-y-3"
                  >
                    <Info size={32} className="text-accent/50" />
                    <div>
                      <h4 className="font-display font-bold text-white text-sm">No Updates Posted</h4>
                      <p className="text-xs text-gray-400 font-light mt-1">There are no updates in the "{selectedCategory}" category right now.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right Column: Motivational Quotes Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              
              <div className="space-y-4">
                <span className="text-accent font-bold tracking-widest text-xs uppercase block font-sans">
                  Daily Motivation
                </span>
                <h2 className="text-2xl font-extrabold text-white font-display tracking-tight">
                  Inspirational Quotes
                </h2>
                <div className="h-[2px] w-12 bg-accent rounded" />
              </div>

              {/* Quotes List */}
              <div className="space-y-6">
                {quotes.map((quote, idx) => (
                  <motion.div
                    key={quote.id || idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 bg-[#181B22]/40 border border-white/5 rounded-xl shadow-premium relative group hover:bg-[#181B22] transition-colors"
                  >
                    <Quote size={28} className="text-accent/15 absolute top-4 right-4 pointer-events-none group-hover:text-accent/25 transition-colors" />
                    
                    <p className="text-xs text-gray-200 leading-relaxed italic font-light font-sans pr-4 relative z-10">
                      "{quote.text}"
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                      <div className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-[10px] text-accent font-bold tracking-wide uppercase">
                          {quote.author || 'Anonymous'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {quotes.length === 0 && (
                  <div className="p-8 text-center bg-[#181B22]/20 border border-white/5 rounded-xl text-gray-500 text-xs font-light">
                    No motivational quotes active.
                  </div>
                )}
              </div>

              {/* Quick Info Widget */}
              <div className="p-6 rounded-xl border border-white/5 bg-gradient-to-br from-[#181B22] to-[#0F1115] shadow-premium space-y-4">
                <TrendingUp size={24} className="text-accent" />
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Quality Operations Commitment</h4>
                <p className="text-[10px] text-gray-400 leading-normal font-light">
                  Our daily calibration runs check 100% of optical sensors to keep sorting purity at 99.9%. Trust Somnath Industries with your bulk agricultural shipments.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

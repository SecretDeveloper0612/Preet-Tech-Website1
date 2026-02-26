"use client";

import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ChevronDown,
    MessageCircle,
    ShoppingBag,
    ArrowUpRight,
    Box,
    Sparkles,
    Clock,
    Layers,
    ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Use the newly generated data
import { TOOLS, Tool } from './data';

export const CATEGORIES = [
    "🔥 New & Premium",
    "⭐ Top Selling",
    "🎓 Career / Education",
    "🎨 AI & Design Tools",
    "📈 Business & Marketing",
    "☁️ Cloud & Storage",
    "🧩 Dev & Team Tools",
    "🛠 3D / CAD Engineering",
    "🔐 Software Keys"
];

const FAQS = [
    {
        q: "How will I receive the tool?",
        a: "Once your payment is confirmed on WhatsApp, we will share the login credentials or access link directly. Most deliveries happen within 10-30 minutes."
    },
    {
        q: "Is this a lifetime deal?",
        a: "Many of our tools offer lifetime access, while others are annual or periodic subscriptions. The duration is clearly mentioned on each product card."
    },
    {
        q: "How fast is delivery?",
        a: "We pride ourselves on instant delivery. Our team is available 24/7 on WhatsApp to ensure you get started immediately after purchase."
    },
    {
        q: "What payment methods are accepted?",
        a: "We accept UPI, Bank Transfer, PayPal, and Crypto. Payment details will be shared on WhatsApp once you select your tool."
    },
    {
        q: "Do you provide support?",
        a: "Yes! We provide direct support for any login issues or setup help. You can message us anytime on WhatsApp for assistance."
    }
];

// --- Memoized Card Component for Performance ---
const ProductCard = memo(({ tool, handleBuy }: { tool: Tool; handleBuy: (t: Tool) => void }) => {
    const is3D = tool.category === "🛠 3D / CAD Engineering";
    const isLifetime = tool.duration.toLowerCase() === 'lifetime';

    // Remove emojis from category to look clean on the glass badge
    const cleanCategory = tool.category.replace(/[^\w\s&]/gi, '').trim().split(' ')[0] || "PREMIUM";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`group flex flex-col relative rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden ${is3D ? "bg-gradient-to-br from-slate-900 via-[#111] to-slate-900 border-slate-700/50 hover:border-brand-medium text-white shadow-brand-medium/10"
                : "bg-white dark:bg-[#0a0a0a] border-slate-200/80 dark:border-white/10 hover:border-brand-medium/30"
                }`}
        >
            {/* Top Image Banner Section */}
            <div className={`relative h-44 md:h-48 w-full flex items-center justify-center overflow-hidden bg-gradient-to-b ${is3D ? 'from-slate-800 to-slate-900' : 'from-slate-50 to-slate-100/50 dark:from-slate-800/80 dark:to-slate-900'}`}>

                {/* Custom Product Image properly fitted */}
                {tool.image ? (
                    <div className="w-full h-full p-8 flex items-center justify-center z-0">
                        <img
                            src={tool.image}
                            alt={`${tool.name} preview`}
                            className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-sm"
                        />
                    </div>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center border-b border-black/5 dark:border-white/5 opacity-60">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-xl font-black text-slate-300 dark:text-slate-600">{tool.name.charAt(0)}</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Image missing</span>
                    </div>
                )}

                {/* Top slight gradient to blend badges visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10" />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 z-20 flex gap-1.5 flex-wrap">
                    <span className="px-3 py-1.5 rounded-xl bg-black/40 dark:bg-black/60 backdrop-blur-md text-white border border-white/20 text-[9px] font-black uppercase tracking-widest shadow-sm">
                        {cleanCategory}
                    </span>
                    {tool.badge && (
                        <span className="px-2.5 py-1.5 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md text-white border border-white/20 text-[9px] font-bold uppercase tracking-widest items-center gap-1 hidden sm:flex">
                            <Sparkles className="w-2.5 h-2.5 text-brand-medium dark:text-brand-cyan" /> {tool.badge}
                        </span>
                    )}
                </div>

                {tool.discountBadge && (
                    <div className="absolute top-3 right-3 z-20">
                        <span className="px-3 py-1.5 rounded-xl bg-brand-medium text-white text-[9px] font-black uppercase tracking-widest shadow-md">
                            {tool.discountBadge}
                        </span>
                    </div>
                )}

                <div className="absolute bottom-3 left-3 z-20">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#064e3b]/90 backdrop-blur-md text-[#34d399] border border-emerald-500/30 text-[9px] font-bold uppercase tracking-widest shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        VERIFIED {tool.status}
                    </span>
                </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-5 md:p-6 flex flex-col flex-grow relative z-10 bg-white dark:bg-transparent">
                {/* Title & Info */}
                <div className="pt-1">
                    <h3 className={`text-[20px] md:text-2xl font-black tracking-tight leading-tight mb-3 group-hover:text-brand-medium transition-colors ${is3D ? "text-white" : "text-slate-900 dark:text-white"}`}>
                        {tool.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold ${is3D ? "bg-white/5 text-slate-300" : "bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400"
                            }`}>
                            <Layers className="w-3.5 h-3.5 text-slate-400" /> {tool.variant}
                        </span>
                        <span className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold ${isLifetime
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                            : is3D ? "bg-white/5 text-slate-300" : "bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400"
                            }`}>
                            <Clock className="w-3.5 h-3.5 text-slate-400" /> {tool.duration}
                        </span>
                    </div>
                    <p className={`text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3 font-medium mb-6 ${is3D ? "text-slate-400/90" : "text-slate-500 dark:text-slate-400"}`}>
                        {tool.description}
                    </p>
                </div>

                {/* Sub Action */}
                <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/5">
                    <button
                        onClick={() => handleBuy(tool)}
                        className="w-full group/btn relative overflow-hidden py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 bg-brand-medium hover:bg-brand-medium/90 text-white shadow-lg shadow-brand-medium/20"
                    >
                        <MessageCircle className="w-4 h-4 transition-transform group-hover/btn:-rotate-12" />
                        <span>Buy via WhatsApp</span>
                    </button>
                </div>
            </div>

            {/* Subtle Hover Glow */}
            <div className="absolute -inset-px rounded-3xl border border-transparent bg-gradient-to-b from-brand-medium/0 to-brand-medium/0 opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-500 z-20" />
        </motion.div>
    );
});
ProductCard.displayName = "ProductCard";

export default function ToolsMarketplace() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleCount, setVisibleCount] = useState(12);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const whatsappNumber = "917900310428"; // Keep valid whatsapp number

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        if (next) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    };

    const handleBuyViaWhatsApp = useCallback((tool: Tool) => {
        const message = `Hi Preet Tech, I want to purchase ${tool.name} (${tool.variant}) for ${tool.duration}. Please share payment details.`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    }, [whatsappNumber]);

    // --- Memoized Filtering Logic ---
    const filteredTools = useMemo(() => {
        return TOOLS.filter(tool => {
            const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.variant.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    const displayedTools = filteredTools.slice(0, visibleCount);

    // Reset visible count when filters change
    useEffect(() => {
        setVisibleCount(12);
    }, [searchTerm, selectedCategory]);

    const loadMore = () => {
        setVisibleCount(prev => prev + 12);
    };

    return (
        <main className="relative z-10 selection:bg-brand-medium/20 overflow-x-hidden bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-500 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-brand-medium/20 blur-[120px] rounded-full"
                    />
                </div>

                <div className="max-w-5xl mx-auto text-center space-y-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-medium/10 dark:bg-brand-medium/10 border border-brand-medium/20 dark:border-brand-medium/20 text-brand-medium dark:text-brand-cyan text-xs font-bold uppercase tracking-wider"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>LIMITED TIME MARKETPLACE</span>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.02em] leading-[1.05] text-slate-900 dark:text-white uppercase"
                        >
                            GET UP TO <span className="text-brand-medium italic font-black">95% OFF</span><br />
                            PREMIUM BUSINESS <span className="text-brand-medium">TOOLS.</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed relative"
                        >
                            Access high-value business software, templates, and<br className="hidden md:block" /> digital tools at unbeatable discounted prices. All tools are<br className="hidden md:block" /> verified, ready-to-use, and delivered quickly.
                            <div className="absolute left-[10%] md:left-[15%] bottom-2 md:bottom-4 w-1.5 h-1.5 rounded-full bg-brand-medium hidden md:block" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
                    >
                        <button
                            onClick={() => document.getElementById('marketplace-grid')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto bg-brand-medium hover:bg-brand-medium/90 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-medium/25 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            BROWSE TOOLS <ArrowRight className="w-4 h-4" />
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#050608] object-cover shadow-sm" />
                                <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#050608] object-cover shadow-sm" />
                                <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#050608] object-cover shadow-sm" />
                                <img src="https://i.pravatar.cc/100?img=4" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#050608] object-cover shadow-sm" />
                            </div>
                            <div className="text-left flex flex-col justify-center">
                                <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-slate-900 dark:text-white">
                                    Trusted by 500+
                                </div>
                                <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                    Scaling Businesses Globally
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Horizontal Category Tabs */}
            <section className="sticky top-20 z-40 px-4 md:px-6 mb-8" id="marketplace-grid">
                <div className="max-w-7xl mx-auto glass-morphism p-3 md:p-4 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-xl dark:bg-black/60 bg-white/80 overflow-hidden">

                    {/* Search Bar inside sticky header */}
                    <div className="relative mb-4 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                        <input
                            type="text"
                            placeholder="Search tools, variants, or keywords..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium"
                        />
                    </div>

                    {/* Scrollable Category Tabs */}
                    <div className="flex overflow-x-auto custom-scrollbar gap-2 pb-2">
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${selectedCategory === 'All'
                                ? "bg-[#1f2937] text-white shadow-lg relative overflow-hidden"
                                : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
                                }`}
                        >
                            {selectedCategory === 'All' && (
                                <div className="absolute inset-0 bg-[#3b82f6]/20 w-16 h-16 rounded-full blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            )}
                            <span className="relative z-10 flex items-center gap-2">🌍 All Tools</span>
                        </button>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${selectedCategory === cat
                                    ? "bg-[#1f2937] text-white shadow-lg relative overflow-hidden"
                                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
                                    }`}
                            >
                                {selectedCategory === cat && (
                                    <div className="absolute inset-0 bg-[#3b82f6]/20 w-16 h-16 rounded-full blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-8 px-4 md:px-6 min-h-[50vh]">
                <div className="max-w-7xl mx-auto">
                    {displayedTools.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                                <AnimatePresence mode="popLayout">
                                    {displayedTools.map((tool) => (
                                        <ProductCard key={tool.id} tool={tool} handleBuy={handleBuyViaWhatsApp} />
                                    ))}
                                </AnimatePresence>
                            </div>

                            {filteredTools.length > visibleCount && (
                                <div className="mt-16 text-center">
                                    <button
                                        onClick={loadMore}
                                        className="px-8 py-4 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-2xl text-sm font-black uppercase tracking-widest transition-all text-slate-900 dark:text-white inline-flex items-center gap-2"
                                    >
                                        Load More Tools <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 space-y-6 bg-slate-100 dark:bg-white/5 rounded-[3rem] border border-dashed border-slate-300 dark:border-white/10">
                            <Box className="w-16 h-16 mx-auto text-slate-400 opacity-50" />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold uppercase tracking-tight">No tools found</h3>
                                <p className="text-slate-500 font-medium">Try adjusting your filters or search term.</p>
                            </div>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                                className="text-brand-medium font-black text-xs uppercase tracking-widest hover:underline"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.3em] text-xs">Customer Knowledge Base</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-slate-900/50 hover:border-brand-medium/30 transition-all">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                    className="w-full p-8 flex items-center justify-between text-left group"
                                >
                                    <span className="font-bold text-lg uppercase tracking-tight group-hover:text-brand-medium transition-colors">{faq.q}</span>
                                    <motion.div animate={{ rotate: openFAQ === i ? 180 : 0 }}>
                                        <ChevronDown className="w-6 h-6 text-brand-medium" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFAQ === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-8 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer & Floating WhatsApp Button */}
            <Footer />

            <motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://wa.me/${whatsappNumber}?text=Hi Preet Tech, I have a question about the Business Tools Marketplace.`}
                target="_blank"
                className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center group"
            >
                <div className="absolute -top-12 right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                    Chat with an expert
                </div>
                <MessageCircle className="w-8 h-8" />
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            </motion.a>
        </main>
    );
}

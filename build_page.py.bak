import json

data = []
categories = {
    "🔥 New & Premium": [
        "CodeRabbit Pro — 1M", "CodeRabbit Pro — 2M", "Loom Business + AI — 1Y", "Wispr Flow Pro — 1Y", 
        "Willow Voice Pro — 1Y", "PromptDrive.ai Teams — 1Y", "PromptDrive.ai Business (50 Seats) — 1Y", 
        "PostHog Scale — 1Y", "Firecrawl AI — 50K Credits (1Y)", "Vapi — $200 Credits (12M)", 
        "Emergent Standard — 1Y", "Manus AI Pro (6000 Credits) — 1M", "Reforge AI Build — 1M", 
        "Sentry.io Teams — 1Y", "Sentry.io Business — 1Y"
    ],
    "⭐ Top Selling": [
        "Beautiful.ai Pro — 1Y", "Mobbin Pro — 1Y", "ChatPRD Pro — 1Y", "Perplexity Pro — 1Y", 
        "Raycast Pro — 1Y", "Superhuman Starter — 1Y", "Linear Business — 1Y", "Granola Business — 1Y", 
        "Magic Patterns Hobby — 1Y", "Wispr Flow Pro — 1Y", "Webflow CMS — 1Y", "Webflow Business — 1Y", 
        "Webflow Growth — 1Y", "n8n Starter — 1Y", "Replit Core — 1Y", "Lovable Pro (100 Credits / Month) — 1Y", 
        "ClickUp Enterprise — 1Y", "Cal.com Teams — 1Y", "Cal.com Organization — 1Y", "GitLab Ultimate — 12M", 
        "Postman Basic — 1Y", "Zeplin Advanced — 1Y", "Backblaze Cloud Unlimited — 1Y", 
        "Bitwarden Premium + Family — 1Y", "Termly.io Starter — 1Y", "Termly.io Pro+ — 1Y", 
        "Hostinger Cloud Startup — 1Y", "Pica Starter — 1Y", "Framer Basic — 1Y", "Framer Pro — 1Y", 
        "Figma Professional — 1Y", "Intercom Advanced — 1Y", "Loom Business + AI — 1Y"
    ],
    "🎓 Career / Education": [
        "Rezi AI — Lifetime", "PNGTree Premium — Lifetime", "Enginemailer Free Forever (10K / Month) — Lifetime", 
        "LinkedIn Career Premium — 3M", "LinkedIn Business Premium — 3M", "Scrimba Pro — 1Y", 
        "No Code MBA Unlimited — 1M", "Whizlabs Premium — 1M", "Whizlabs Premium — 1Y", 
        "AhaSlides Essentials — 12M", "AhaSlides Pro — 12M", "Kickresume Premium — 1M", 
        "Mangoosh GRE Premium — 1M", "UFC FightPass — 2M", "Gemini AI Pro + 2TB Storage — 18M"
    ],
    "🎨 AI & Design Tools": [
        "Adobe Creative Cloud Max — 1Y", "Midjourney Pro — 1M", "Canva Creator — Lifetime"
    ],
    "📈 Business & Marketing": [
        "HubSpot Growth — 1Y", "Mailchimp Advanced (100K Credits) — 1M", "SEMrush Guru Plan — 1Y"
    ],
    "☁️ Cloud & Storage": [
        "Google Drive 2TB Storage — 1Y", "Dropbox Professional 3TB Storage — 1Y", "iCloud+ 2TB — 1Y"
    ],
    "🧩 Dev & Team Tools": [
        "Jira Premium (Per Seat) — 1Y", "GitHub Enterprise (Per Seat) — 1Y", "Slack Enterprise Grid — 1Y"
    ],
    "🛠 3D / CAD Engineering": [
        "AutoCAD 2024 Professional — 1Y", "SolidWorks Premium — 1Y", "SketchUp Pro — 1Y"
    ],
    "🔐 Software Keys": [
        "Windows 10 Pro — Lifetime", "Windows 11 Pro — Lifetime"
    ]
}

seen = set()
idx = 1
for cat, items in categories.items():
    for item in items:
        # Prevent Duplicates
        if item in seen:
            continue
        seen.add(item)
        
        parts = item.split(' — ')
        name_variant = parts[0]
        duration = parts[1] if len(parts) > 1 else "1 Year"
        
        words = name_variant.split(' ')
        if len(words) > 1 and words[-1] in ["Pro", "AI", "+", "Scale", "Teams", "Business", "Starter", "Core", "Enterprise", "Organization", "Ultimate", "Basic", "Advanced", "Unlimited", "Family", "Pro+", "Startup", "Professional", "Max", "Creator", "Growth", "Grid"]:
            if '(' in name_variant and ')' in name_variant:
                name_part = name_variant[:name_variant.find('(')].strip()
                variant_part = name_variant[name_variant.find('('):].strip()
                name = name_part
                variant = variant_part
            else:
                name = ' '.join(words[:-1])
                variant = words[-1]
                if variant == "AI" and len(words) > 2 and words[-2] == "+":
                    name = ' '.join(words[:-2])
                    variant = "+ AI"
        else:
            name = name_variant
            variant = "Standard"
            
        badge = ""
        if cat == "🔥 New & Premium":
            badge = "Trending"
        elif cat == "🔐 Software Keys":
            badge = "Lifetime License"
            
        variant = variant if len(variant) > 2 else "Pro"
        if "Loom Business" in name_variant: 
            name = "Loom Business + AI"
            variant = "Business + AI"
            
        data.append({
            "id": str(idx),
            "name": name,
            "variant": name_variant if name_variant != name else variant,
            "duration": duration,
            "category": cat,
            "description": f"Get {name_variant} for {duration}. Perfect for scaling businesses and professionals.",
            "originalPrice": "199",
            "discountPrice": "29",
            "discountBadge": "85% OFF",
            "badge": badge,
            "status": "Active"
        })
        idx += 1

tools_code = "export const TOOLS: Tool[] = [\n"
for d in data:
    tools_code += "  {\n"
    for k, v in d.items():
        tools_code += f'    {k}: "{v}",\n'
    tools_code += "  },\n"
tools_code += "];\n"

react_code = f'''"use client";

import React, {{ useState, useEffect, useMemo, memo, useCallback }} from 'react';
import {{ motion, AnimatePresence }} from 'framer-motion';
import {{
    Search,
    Filter,
    ArrowUpDown,
    ArrowRight,
    CheckCircle2,
    Shield,
    Zap,
    ChevronDown,
    MessageCircle,
    ShoppingBag,
    ArrowUpRight,
    Box,
    Sparkles,
    Clock,
    Tag,
    Layers
}} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// --- Types ---
export interface Tool {{
    id: string;
    name: string;
    variant: string;
    duration: string;
    category: string;
    description: string;
    originalPrice: string;
    discountPrice: string;
    discountBadge: string;
    badge: string;
    status: string;
}}

// --- Data ---
{tools_code}

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
    {{
        q: "How will I receive the tool?",
        a: "Once your payment is confirmed on WhatsApp, we will share the login credentials or access link directly. Most deliveries happen within 10-30 minutes."
    }},
    {{
        q: "Is this a lifetime deal?",
        a: "Many of our tools offer lifetime access, while others are annual or periodic subscriptions. The duration is clearly mentioned on each product card."
    }},
    {{
        q: "How fast is delivery?",
        a: "We pride ourselves on instant delivery. Our team is available 24/7 on WhatsApp to ensure you get started immediately after purchase."
    }},
    {{
        q: "What payment methods are accepted?",
        a: "We accept UPI, Bank Transfer, PayPal, and Crypto. Payment details will be shared on WhatsApp once you select your tool."
    }},
    {{
        q: "Do you provide support?",
        a: "Yes! We provide direct support for any login issues or setup help. You can message us anytime on WhatsApp for assistance."
    }}
];

// --- Memoized Card Component for Performance ---
const ProductCard = memo(({{ tool, handleBuy }}: {{ tool: Tool; handleBuy: (t: Tool) => void }}) => {{
    const is3D = tool.category === "🛠 3D / CAD Engineering";
    const isLifetime = tool.duration.toLowerCase() === 'lifetime';
    
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={{`group relative flex flex-col justify-between p-6 rounded-[2rem] border transition-all duration-300 shadow-sm hover:shadow-2xl ${{
                is3D ? "bg-gradient-to-br from-slate-900 via-[#111] to-slate-900 border-slate-700/50 hover:border-brand-medium text-white" 
                     : "bg-white dark:bg-[#0a0a0a] border-slate-200 dark:border-white/10 hover:border-brand-medium/50"
            }}`}}
        >
            <div className="space-y-4">
                {{/* Header Badges */}}
                <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                        <span className={{`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${{
                            is3D ? "bg-white/10 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                        }}`}}>
                            {{tool.category.split(' ')[0]}} {{tool.category.substring(tool.category.indexOf(' ') + 1)}}
                        </span>
                        {{tool.badge && (
                            <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-brand-medium/10 text-brand-medium border border-brand-medium/20 flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> {{tool.badge}}
                            </span>
                        )}}
                    </div>
                </div>

                {{/* Title & Variant */}}
                <div>
                    <h3 className={{`text-xl md:text-2xl font-black tracking-tight leading-tight mb-2 group-hover:text-brand-medium transition-colors ${{is3D ? "text-white" : ""}}`}}>
                        {{tool.name}}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={{`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${{
                            is3D ? "bg-white/5 text-slate-300" : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400"
                        }}`}}>
                            <Layers className="w-3.5 h-3.5" /> {{tool.variant}}
                        </span>
                        <span className={{`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${{
                            isLifetime 
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20" 
                            : is3D ? "bg-white/5 text-slate-300" : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400"
                        }}`}}>
                            <Clock className="w-3.5 h-3.5" /> {{tool.duration}}
                        </span>
                    </div>
                    <p className={{`text-sm leading-relaxed line-clamp-2 md:line-clamp-3 font-medium ${{is3D ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}}`}}>
                        {{tool.description}}
                    </p>
                </div>
            </div>

            {{/* Pricing & Action */}}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-end justify-between mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-slate-400 line-through">${{tool.originalPrice}}</span>
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-emerald-500/10 text-emerald-500 uppercase">
                                {{tool.discountBadge}}
                            </span>
                        </div>
                        <div className="flex items-end gap-1">
                            <span className="text-sm font-black text-slate-400 mb-1">$</span>
                            <span className={{`text-3xl font-black tracking-tighter leading-none ${{is3D ? "text-white" : "text-slate-900 dark:text-white"}}`}}>
                                {{tool.discountPrice}}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                            {{tool.status}}
                        </span>
                    </div>
                </div>

                {{/* Custom WhatsApp Button to match product data */}}
                <button
                    onClick={() => handleBuy(tool)}
                    className={{`w-full group/btn relative overflow-hidden py-3.5 md:py-4 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] ${{
                        is3D ? "bg-brand-medium text-white shadow-lg shadow-brand-medium/20" : "bg-[#0a0a0a] dark:bg-white text-white dark:text-black shadow-xl"
                    }}`}}
                >
                    <MessageCircle className="w-4 h-4 transition-transform group-hover/btn:-rotate-12" />
                    <span>Buy via WhatsApp</span>
                </button>
            </div>
            
            {{/* Magic Hover Glow */}}
            <div className="absolute -inset-px rounded-[2rem] border border-transparent bg-gradient-to-b from-brand-medium/0 to-brand-medium/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500" />
        </motion.div>
    );
}});
ProductCard.displayName = "ProductCard";

export default function ToolsMarketplace() {{
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleCount, setVisibleCount] = useState(12);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const whatsappNumber = "917900310428"; // You can change this if needed

    useEffect(() => {{
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {{
            setIsDarkMode(true);
        }}
    }}, []);

    const toggleTheme = () => {{
        const next = !isDarkMode;
        setIsDarkMode(next);
        if (next) {{
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }} else {{
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }}
    }};

    const handleBuyViaWhatsApp = useCallback((tool: Tool) => {{
        const message = `Hi Preet Tech, I want to purchase ${{tool.name}} (${{tool.variant}}) for ${{tool.duration}}. Please share payment details.`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${{whatsappNumber}}?text=${{encodedMessage}}`;
        window.open(url, '_blank');
    }}, [whatsappNumber]);

    // --- Memoized Filtering Logic ---
    const filteredTools = useMemo(() => {{
        return TOOLS.filter(tool => {{
            const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  tool.variant.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
            return matchesSearch && matchesCategory;
        }});
    }}, [searchTerm, selectedCategory]);

    const displayedTools = filteredTools.slice(0, visibleCount);
    
    // Reset visible count when filters change
    useEffect(() => {{
        setVisibleCount(12);
    }}, [searchTerm, selectedCategory]);

    const loadMore = () => {{
        setVisibleCount(prev => prev + 12);
    }};

    return (
        <main className="relative z-10 selection:bg-brand-medium/20 overflow-x-hidden bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-500 font-sans">
            <Navbar isDark={{isDarkMode}} toggleTheme={{toggleTheme}} />

            {{/* Hero Section */}}
            <section className="relative pt-32 pb-12 md:pt-48 md:pb-20 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-brand-medium/20 blur-[120px] rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto text-center space-y-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-medium dark:text-brand-cyan text-xs font-black uppercase tracking-[0.3em]"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Huge Inventory Restock</span>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
                        >
                            The Ultimate <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan">Tools Marketplace.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
                        >
                            Explore hundreds of highly sought-after digital tools, premium memberships, and software keys for startups and professionals.
                        </motion.p>
                    </div>
                </div>
            </section>

            {{/* Horizontal Category Tabs */}}
            <section className="sticky top-20 z-40 px-4 md:px-6 mb-8" id="marketplace-grid">
                <div className="max-w-7xl mx-auto glass-morphism p-3 md:p-4 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-xl dark:bg-black/60 bg-white/80 overflow-hidden">
                    
                    {{/* Search Bar inside sticky header */}}
                    <div className="relative mb-4 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                        <input
                            type="text"
                            placeholder="Search tools, variants, or keywords..."
                            value={{searchTerm}}
                            onChange={{(e) => setSearchTerm(e.target.value)}}
                            className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium"
                        />
                    </div>

                    {{/* Scrollable Category Tabs */}}
                    <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
                        <button
                            onClick={{() => setSelectedCategory('All')}}
                            className={{`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${{
                                selectedCategory === 'All' 
                                ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-lg" 
                                : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
                            }}`}}
                        >
                            🌍 All Tools
                        </button>
                        {{CATEGORIES.map(cat => (
                            <button
                                key={{cat}}
                                onClick={{() => setSelectedCategory(cat)}}
                                className={{`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${{
                                    selectedCategory === cat 
                                    ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-lg" 
                                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
                                }}`}}
                            >
                                {{cat}}
                            </button>
                        )))}}
                    </div>
                </div>
            </section>

            {{/* Product Grid */}}
            <section className="py-8 px-4 md:px-6 min-h-[50vh]">
                <div className="max-w-7xl mx-auto">
                    {{displayedTools.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                <AnimatePresence mode="popLayout">
                                    {{displayedTools.map((tool) => (
                                        <ProductCard key={{tool.id}} tool={{tool}} handleBuy={{handleBuyViaWhatsApp}} />
                                    ))}}
                                </AnimatePresence>
                            </div>
                            
                            {{filteredTools.length > visibleCount && (
                                <div className="mt-16 text-center">
                                    <button 
                                        onClick={{loadMore}}
                                        className="px-8 py-4 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-2xl text-sm font-black uppercase tracking-widest transition-all text-slate-900 dark:text-white inline-flex items-center gap-2"
                                    >
                                        Load More Tools <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>
                            )}}
                        </>
                    ) : (
                        <div className="text-center py-20 space-y-6 bg-slate-100 dark:bg-white/5 rounded-[3rem] border border-dashed border-slate-300 dark:border-white/10">
                            <Box className="w-16 h-16 mx-auto text-slate-400 opacity-50" />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold uppercase tracking-tight">No tools found</h3>
                                <p className="text-slate-500 font-medium">Try adjusting your filters or search term.</p>
                            </div>
                            <button
                                onClick={{() => {{ setSearchTerm(''); setSelectedCategory('All'); }}}}
                                className="text-brand-medium font-black text-xs uppercase tracking-widest hover:underline"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}}
                </div>
            </section>

            {{/* FAQ Section */}}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.3em] text-xs">Customer Knowledge Base</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {{FAQS.map((faq, i) => (
                            <div key={{i}} className="rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-slate-900/50 hover:border-brand-medium/30 transition-all">
                                <button
                                    onClick={{() => setOpenFAQ(openFAQ === i ? null : i)}}
                                    className="w-full p-8 flex items-center justify-between text-left group"
                                >
                                    <span className="font-bold text-lg uppercase tracking-tight group-hover:text-brand-medium transition-colors">{{faq.q}}</span>
                                    <motion.div animate={{ rotate: openFAQ === i ? 180 : 0 }}>
                                        <ChevronDown className="w-6 h-6 text-brand-medium" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {{openFAQ === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-8 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                                {{faq.a}}
                                            </div>
                                        </motion.div>
                                    )}}
                                </AnimatePresence>
                            </div>
                        ))}}
                    </div>
                </div>
            </section>

            {{/* Footer & Floating WhatsApp Button */}}
            <Footer />

            <motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={{`https://wa.me/${{whatsappNumber}}?text=Hi Preet Tech, I have a question about the Business Tools Marketplace.`}}
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
}}
'''

with open('app/services/business-tools/page.tsx', 'w', encoding='utf-8') as f:
    f.write(react_code)

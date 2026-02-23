"use client";
import React from 'react';
import { Search } from 'lucide-react';
import { CATEGORIES } from '@/lib/blog-data';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BlogHeroProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    onSearch: (term: string) => void;
}

export default function BlogHero({ activeCategory, onCategoryChange, onSearch }: BlogHeroProps) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-medium/5 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-medium/10 border border-brand-medium/20 mb-8"
                        >
                            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                            <span className="text-[10px] font-black text-brand-sky uppercase tracking-[0.3em]">Knowledge Hub</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase"
                        >
                            Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-cyan to-brand-medium italic">
                                Logic.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-slate-500 dark:text-slate-400 max-w-lg text-lg md:text-xl font-medium leading-relaxed mb-12"
                        >
                            Navigating the intersection of high-performance code, data-driven marketing, and scalable digital architecture.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative max-w-md group mb-12"
                        >
                            <div className="absolute inset-0 bg-brand-cyan/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                            <div className="relative">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-cyan w-5 h-5 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search library..."
                                    onChange={(e) => onSearch(e.target.value)}
                                    className="w-full h-16 pl-16 pr-6 rounded-2xl bg-white/5 border border-white/10 dark:focus:border-brand-cyan/50 focus:border-brand-cyan/30 outline-none transition-all text-lg font-bold placeholder:text-slate-600 shadow-xl"
                                />
                            </div>
                        </motion.div>

                        {/* Categories */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex flex-wrap gap-2"
                        >
                            <button
                                onClick={() => onCategoryChange('All')}
                                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === 'All'
                                    ? 'bg-brand-medium border-brand-medium text-white shadow-lg shadow-brand-medium/20 scale-105'
                                    : 'bg-white/5 border-white/10 text-slate-500 hover:border-brand-sky/40 hover:text-brand-cyan'
                                    }`}
                            >
                                All_Posts
                            </button>
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => onCategoryChange(cat)}
                                    className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                        ? 'bg-brand-medium border-brand-medium text-white shadow-lg shadow-brand-medium/20 scale-105'
                                        : 'bg-white/5 border-white/10 text-slate-500 hover:border-brand-sky/40 hover:text-brand-cyan'
                                        }`}
                                >
                                    {cat.replace(/ /g, '_')}
                                </button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        {/* Decorative Frames */}
                        <div className="absolute -inset-4 border border-brand-cyan/20 rounded-[3rem] animate-pulse" />
                        <div className="absolute -inset-8 border border-brand-medium/10 rounded-[4rem] animate-pulse" style={{ animationDelay: '1s' }} />

                        <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/blog-hero.png"
                                alt="Preet Tech Insights"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Glass Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/40 via-transparent to-transparent opacity-60" />

                            {/* Floating Analytics Card */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-brand-cyan">Live Statistics</p>
                                        <p className="text-xs font-bold text-white uppercase">Growth Patterns Identified</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
                                        <div key={i} className="flex-1 h-8 bg-white/5 rounded-t-sm relative overflow-hidden">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h * 100}%` }}
                                                transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                                                className="absolute bottom-0 w-full bg-brand-cyan/50"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Technical Floating Tags */}
                        <div className="absolute -top-6 -right-6 px-5 py-2 bg-brand-cyan text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-full rotate-12 shadow-xl">
                            Verified Strategies
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

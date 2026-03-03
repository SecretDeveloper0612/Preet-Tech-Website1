"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, User, Phone, Mail, Lightbulb, DollarSign, Briefcase, ArrowRight, ChevronDown } from 'lucide-react';

const HeroLaunch = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => setFormStatus('success'), 2000);
    };

    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-20 flex items-center overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-500">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-medium/10 dark:bg-brand-cyan/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-medium/5 blur-[120px] rounded-full" />

                {/* Micro-mesh pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
                {/* Left Side: Massive Typography */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-12 backdrop-blur-md"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-medium dark:bg-brand-cyan animate-pulse shadow-[0_0_10px_rgba(95,211,230,0.8)]" />
                        Next-Gen Business Blueprint
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter mb-10"
                    >
                        FROM IDEA <br />
                        TO <span className="text-brand-medium dark:text-brand-cyan italic">INCOME —</span> <br />
                        <span className="text-4xl sm:text-5xl md:text-7xl lg:text-[85px] text-slate-900 dark:text-white opacity-90">LET'S BUILD IT <span className="text-brand-medium dark:text-brand-cyan italic">TOGETHER</span></span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-slate-500 dark:text-white/50 text-base md:text-xl font-medium leading-relaxed mb-12 max-w-2xl"
                    >
                        We architect, engineer, and launch your business from the ground up. Registration, branding, technology, and marketing — all synchronized for cinematic impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-white dark:border-[#030712] bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-2xl relative">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt="Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                            ))}
                        </div>
                        <div className="text-[10px] font-black text-slate-500 dark:text-white/40 uppercase leading-tight tracking-[0.4em]">
                            Empowering <br /> <span className="text-brand-medium dark:text-brand-cyan">100+ Startup Founders</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Clean High-Fidelity Form Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative bg-white rounded-[3.5rem] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(255,255,255,0.05)] border border-slate-200 dark:border-white/10 group overflow-hidden">
                        {/* Soft Inner Shadows */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white to-slate-50 opacity-100" />

                        <div className="relative z-10">
                            {formStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-20 text-center space-y-6"
                                >
                                    <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                        <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Venture Pipeline Initiated</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">Our execution team is reviewing your roadmap. Stand by for contact.</p>
                                    <button onClick={() => setFormStatus('idle')} className="text-brand-medium dark:text-brand-cyan font-black uppercase text-[10px] tracking-[0.4em] hover:opacity-70 transition-opacity">Submit New Roadmap</button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="text-center mb-10">
                                        <span className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.6em] block mb-4">Blueprint Your Success</span>
                                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
                                            FREE <span className="text-brand-medium dark:text-brand-cyan italic">CONSULTATION</span>
                                        </h2>
                                    </div>

                                    <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {/* Name Input */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                                                <div className="relative group/input">
                                                    <User strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within/input:text-brand-medium dark:group-focus-within/input:text-brand-cyan transition-colors" />
                                                    <input required type="text" placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-medium dark:focus:border-brand-cyan focus:ring-1 focus:ring-brand-medium/20 dark:focus:ring-brand-cyan/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                                </div>
                                            </div>

                                            {/* Email Input */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                                                <div className="relative group/input">
                                                    <Mail strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within/input:text-brand-medium dark:group-focus-within/input:text-brand-cyan transition-colors" />
                                                    <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-medium dark:focus:border-brand-cyan focus:ring-1 focus:ring-brand-medium/20 dark:focus:ring-brand-cyan/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {/* Phone Input */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Phone</label>
                                                <div className="relative group/input">
                                                    <Phone strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within/input:text-brand-medium dark:group-focus-within/input:text-brand-cyan transition-colors" />
                                                    <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-medium dark:focus:border-brand-cyan focus:ring-1 focus:ring-brand-medium/20 dark:focus:ring-brand-cyan/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                                </div>
                                            </div>

                                            {/* Timeline Select */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Timeline</label>
                                                <div className="relative group/input">
                                                    <Briefcase strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                                    <select defaultValue="Timeline" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-brand-medium dark:focus:border-brand-cyan focus:ring-1 focus:ring-brand-medium/20 dark:focus:ring-brand-cyan/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm cursor-pointer">
                                                        <option value="Timeline" disabled>Select Timeline (e.g. ASAP)</option>
                                                        <option>Immediately</option>
                                                        <option>In 1 Month</option>
                                                        <option>In 3 Months</option>
                                                        <option>Researching</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Business Idea Input */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Business Idea / Industry</label>
                                            <div className="relative group/input">
                                                <Lightbulb strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within/input:text-brand-medium dark:group-focus-within/input:text-brand-cyan transition-colors" />
                                                <input required type="text" placeholder="e.g. Fintech Startup" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-medium dark:focus:border-brand-cyan focus:ring-1 focus:ring-brand-medium/20 dark:focus:ring-brand-cyan/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                            </div>
                                        </div>

                                        {/* Budget Select */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Target Budget</label>
                                            <div className="relative group/input">
                                                <DollarSign strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                                <select defaultValue="Budget" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-brand-medium dark:focus:border-brand-cyan focus:ring-1 focus:ring-brand-medium/20 dark:focus:ring-brand-cyan/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm cursor-pointer">
                                                    <option value="Budget" disabled>Select Budget Range</option>
                                                    <option>$500 - $2,000</option>
                                                    <option>$2,000 - $10,000</option>
                                                    <option>$10,000 - $25,000</option>
                                                    <option>$25,000+</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                disabled={formStatus === 'submitting'}
                                                className="w-full py-4 bg-brand-medium dark:bg-brand-cyan hover:bg-slate-900 dark:hover:bg-[#030712] text-white dark:text-[#030712] hover:text-white dark:hover:text-white font-black rounded-2xl transition-all shadow-[0_0_20px_rgba(63,143,204,0.2)] dark:shadow-[0_0_20px_rgba(95,211,230,0.2)] hover:shadow-[0_0_30px_rgba(63,143,204,0.4)] dark:hover:shadow-[0_0_30px_rgba(95,211,230,0.4)] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                                            >
                                                {formStatus === 'submitting' ? 'PRODUCING ROADMAP...' : 'GET FREE CONSULTATION'}
                                                <ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroLaunch;

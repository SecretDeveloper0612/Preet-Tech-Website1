"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Monitor, Globe, Code2, Server, Database, Smartphone, Layout, Rocket,
    ShieldCheck, Zap, ArrowRight, CheckCircle2, ArrowUpRight, Check,
    Building2, BarChart3, Activity, Command, Hexagon, Component, Key, Lock, Network, Maximize,
    Users, ShoppingCart, Home, GraduationCap, HeartPulse, PieChart, Focus, Map, Layers, Fingerprint, Eye, Sliders, Shield, Cloud, CreditCard, Plug, Workflow, RefreshCw, Bot, FileCode2,
    Gauge, Target, Send, Phone, Mail, User, Briefcase, Calendar, Star, IndianRupee, Plus, Minus, HelpCircle, Palette, Clock, MessageSquare, Wrench, LifeBuoy, BadgePercent, TrendingUp, ExternalLink, ChevronRight, GitBranch, TestTube2, Figma, Container
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


// ----------------------------------------------------------------------
// Advanced Website Development Page Component
// ----------------------------------------------------------------------
export default function AdvancedWebsiteDevelopment() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            /* handled by next-themes */
            setIsDarkMode(true);
        } else if (storedTheme === 'light') {
            /* handled by next-themes */
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        if (next) {
            /* handled by next-themes */
            localStorage.setItem('theme', 'dark');
        } else {
            /* handled by next-themes */
            localStorage.setItem('theme', 'light');
        }
    };


    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/20 overflow-x-hidden bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-500 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* Global Ambient Tech Grid */}
            <div className="fixed inset-0 grid-parallax -z-10 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28 px-4 md:px-6 overflow-hidden">

                {/* ===== ANIMATED BACKGROUND LAYERS ===== */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">

                    {/* Pulsing Gradient Orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, 60, 0],
                            y: [0, -40, 0],
                            opacity: [0.15, 0.3, 0.15]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[10%] -right-[10%] w-[700px] h-[700px] bg-brand-cyan/20 dark:bg-brand-cyan/30 blur-[180px] rounded-full"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            x: [0, -50, 0],
                            y: [0, 60, 0],
                            opacity: [0.1, 0.25, 0.1]
                        }}
                        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute -bottom-[15%] -left-[15%] w-[600px] h-[600px] bg-indigo-500/15 dark:bg-indigo-500/25 blur-[160px] rounded-full"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.05, 0.15, 0.05]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-violet-500/10 blur-[140px] rounded-full"
                    />



                    {/* Ambient Glows around the grid */}
                    <motion.div
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(95,211,230,0.1)_0%,transparent_60%)] will-change-opacity"
                    />

                    {/* Floating Particle Stars */}
                    {mounted && [...Array(12)].map((_, i) => (
                        <motion.div
                            key={`particle-${i}`}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0.1, 0.4, 0.1],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 5
                            }}
                            className="absolute rounded-full bg-brand-cyan/50"
                            style={{
                                width: `${Math.random() * 3 + 1}px`,
                                height: `${Math.random() * 3 + 1}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                boxShadow: isDarkMode ? '0 0 8px rgba(95,211,230,0.4)' : 'none'
                            }}
                        />
                    ))}

                    {/* Floating Binary Data Streams */}
                    {mounted && [...Array(4)].map((_, i) => (
                        <motion.div
                            key={`stream-${i}`}
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: [0, 0.3, 0], y: "-100%" }}
                            transition={{
                                duration: 18 + i * 5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 4
                            }}
                            className="absolute text-[9px] font-mono text-brand-cyan/20 whitespace-nowrap tracking-[0.3em] hidden lg:block"
                            style={{ left: `${15 + i * 22}%` }}
                        >
                            {Array(25).fill(0).map(() => Math.round(Math.random())).join('')}
                        </motion.div>
                    ))}

                    {/* Rotating Orbital Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-cyan/5 rounded-full hidden lg:block will-change-transform"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-dashed border-brand-cyan/[0.03] rounded-full hidden lg:block will-change-transform"
                    />
                </div>


                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    <div className="lg:col-span-6 space-y-6 md:space-y-10 relative z-10">

                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan" />
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">Advanced Development Framework</span>
                        </motion.div>

                        {/* Title with Staggered Word Animation */}
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05]"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                                className="block"
                            >
                                High-Performance
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500 animate-gradient-x"
                            >
                                Custom Websites
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                                className="block"
                            >
                                Built to Scale.
                            </motion.span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
                        >
                            Advanced architecture, custom UI/UX, and powerful backend systems designed for serious business growth and enterprise scalability.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <a href="#contact" className="px-6 sm:px-10 py-4 sm:py-5 overflow-hidden gap-3 text-xs sm:text-sm group bg-brand-medium text-white hover:bg-brand-medium/90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-brand-medium/20 text-center uppercase tracking-[0.1em] flex items-center justify-center">
                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <span className="relative z-10 flex items-center gap-2">Book Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                            </a>
                            <a href="#portfolio" className="px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm bg-brand-medium text-white hover:bg-brand-medium/90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-brand-medium/20 text-center uppercase tracking-[0.1em] flex items-center justify-center">
                                View Our Work
                            </a>
                        </motion.div>

                        {/* Floating Tech Stack Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="flex flex-wrap gap-3 pt-4"
                        >
                            {['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'].map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 1.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                                    className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:border-brand-cyan/50 hover:text-brand-cyan transition-colors cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    <div className="lg:col-span-6 relative">

                        {/* Glowing Halo Behind Dashboard */}
                        <motion.div
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-8 bg-gradient-to-br from-brand-cyan/20 via-indigo-500/10 to-brand-cyan/20 blur-[60px] rounded-[3rem] -z-10 will-change-opacity"
                        />

                        {/* Custom Lead Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 w-full bg-white dark:bg-[#0a0f18] border border-slate-200  dark:border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(95,211,230,0.05)] overflow-hidden group"
                        >
                            {/* Decorative background gradients */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 dark:bg-brand-cyan/10 blur-[60px] rounded-full pointer-events-none transition-colors duration-1000 group-hover:bg-brand-cyan/10 dark:group-hover:bg-brand-cyan/20" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none transition-colors duration-1000 group-hover:bg-indigo-500/10 dark:group-hover:bg-indigo-500/20" />

                            <div className="relative z-10">
                                {isSubmitted ? (
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center my-10">
                                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                                            <div className="absolute inset-0 bg-emerald-500/30 rounded-full animate-ping" />
                                            <Check className="w-8 h-8 text-emerald-500 relative z-10" />
                                        </div>
                                        <h4 className="text-lg font-bold text-emerald-500 mb-2 uppercase tracking-wider">Consultation Requested</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Our team will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            setIsSubmitting(true);
                                            setTimeout(() => {
                                                setIsSubmitting(false);
                                                setIsSubmitted(true);
                                            }, 1500);
                                        }}
                                        className="space-y-6"
                                    >
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Full Name</label>
                                            <div className="relative group/field">
                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within/field:text-brand-cyan">
                                                    <User className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-brand-cyan transition-colors" strokeWidth={1.5} />
                                                </div>
                                                <input required type="text" className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 hover:border-slate-300 dark:hover:border-white/20" placeholder="John Doe" />
                                            </div>
                                        </div>

                                        {/* Business Name */}
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Business Name</label>
                                            <div className="relative group/field">
                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within/field:text-brand-cyan">
                                                    <Building2 className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-brand-cyan transition-colors" strokeWidth={1.5} />
                                                </div>
                                                <input type="text" className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 hover:border-slate-300 dark:hover:border-white/20" placeholder="Your Company Ltd." />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                                            {/* Email */}
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Email</label>
                                                <div className="relative group/field">
                                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within/field:text-brand-cyan">
                                                        <Mail className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-brand-cyan transition-colors" strokeWidth={1.5} />
                                                    </div>
                                                    <input required type="email" className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 hover:border-slate-300 dark:hover:border-white/20" placeholder="john@example.com" />
                                                </div>
                                            </div>
                                            {/* Phone */}
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Phone</label>
                                                <div className="relative group/field">
                                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within/field:text-brand-cyan">
                                                        <div className="relative">
                                                            <Phone className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-brand-cyan transition-colors" strokeWidth={1.5} />
                                                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full border-[1.5px] border-white dark:border-slate-900" />
                                                        </div>
                                                    </div>
                                                    <input required type="tel" className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600 hover:border-slate-300 dark:hover:border-white/20" placeholder="+91 98765 43210" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Budget Range */}
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Budget Range</label>
                                            <div className="relative group/field">
                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within/field:text-brand-cyan">
                                                    <CreditCard className="w-[18px] h-[18px] text-slate-400 group-focus-within/field:text-brand-cyan transition-colors" strokeWidth={1.5} />
                                                </div>
                                                <select className="w-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-10 py-3.5 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 transition-all font-medium appearance-none shadow-sm text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer">
                                                    <option value="5k-10k">₹5k - ₹10k</option>
                                                    <option value="10k-25k">₹10k - ₹25k</option>
                                                    <option value="25k-50k">₹25k - ₹50k</option>
                                                    <option value="50k+">₹50k+</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 transition-colors group-focus-within/field:text-brand-cyan">
                                                    <ChevronRight className="w-4 h-4 rotate-90" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full py-4 text-[13px] gap-2 disabled:opacity-70 group/btn duration-300 bg-brand-medium text-white hover:bg-brand-medium/90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-brand-medium/20 text-center uppercase tracking-[0.1em] flex items-center justify-center"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                                                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2 uppercase tracking-widest text-[13px]">
                                                        Get Free Consultation <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ Why Do Businesses Need This */}
            <section className="py-12 md:py-20 px-4 md:px-6 reveal-section border-t border-slate-200/50 dark:border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">The Problem Matrix</span>
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Why Template Websites Fail Scaling Businesses.</h2>
                            <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Basic setups crack under pressure. As your traffic grows, limitations quickly turn into lost revenue.</p>

                            <ul className="space-y-4">
                                {[
                                    { t: "Limited Scalability", d: "Inflexible architecture that cannot adapt to complex operational workflows or traffic spikes." },
                                    { t: "Slow Performance", d: "Bloated plugins and poor databases that kill SEO rankings and user retention." },
                                    { t: "Poor Conversion Structure", d: "Generic layouts that fail to guide users down strategic sales funnels." },
                                    { t: "No Advanced Integrations", d: "Inability to sync natively with external CRMs, ERPs, or payment gateways." },
                                    { t: "Weak Backend Systems", d: "Unstable foundation lacking enterprise-grade security and custom logic." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </div>
                                        <div>
                                            <strong className="text-slate-900 dark:text-white block text-base leading-tight">{item.t}</strong>
                                            <span className="text-slate-500 text-xs mt-0.5 block">{item.d}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Comparison Infographic */}
                        <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[1.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent pointer-events-none" />
                            <h3 className="text-xl font-bold mb-6 text-center">Architecture Comparison</h3>

                            <div className="grid grid-cols-2 gap-3 md:gap-6">
                                {/* Basic */}
                                <div className="space-y-3 md:space-y-4">
                                    <h4 className="text-center font-bold text-slate-400 uppercase tracking-widest text-[10px] md:text-xs mb-4">Basic CMS</h4>
                                    {[
                                        { l: "Speed", s: "Avg 3-5s", c: "text-red-500 bg-red-50 dark:bg-red-500/10" },
                                        { l: "Security", s: "Vulnerable", c: "text-red-500 bg-red-50 dark:bg-red-500/10" },
                                        { l: "Scale", s: "Capped", c: "text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10" },
                                        { l: "UI/UX", s: "Template", c: "text-slate-500 bg-slate-50 dark:bg-white/5" }
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-2.5 md:p-3 rounded-xl border border-slate-100 dark:border-white/5">
                                            <span className="block text-[9px] md:text-[10px] font-bold text-slate-400 mb-0.5">{stat.l}</span>
                                            <span className={`block font-bold text-xs md:text-sm rounded-md py-1 ${stat.c}`}>{stat.s}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Advanced */}
                                <div className="space-y-3 md:space-y-4">
                                    <h4 className="text-center font-bold text-brand-cyan uppercase tracking-widest text-[10px] md:text-xs mb-4 focus:text-white">Advanced System</h4>
                                    {[
                                        { l: "Speed", s: "Sub-Second", c: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10" },
                                        { l: "Security", s: "Bank-Grade", c: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10" },
                                        { l: "Scale", s: "Infinite", c: "text-brand-cyan bg-brand-cyan/10" },
                                        { l: "UI/UX", s: "Custom Built", c: "text-brand-cyan bg-brand-cyan/10" }
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-2.5 md:p-3 rounded-xl border border-brand-cyan/20 dark:border-brand-cyan/30 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-brand-cyan/5 group-hover:bg-brand-cyan/10 transition-colors" />
                                            <span className="block text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-slate-300 mb-0.5 relative z-10">{stat.l}</span>
                                            <span className={`block font-bold text-xs md:text-sm rounded-md py-1 ${stat.c} relative z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]`}>{stat.s}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">The Preet Tech Standard</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Engineered for Dominance.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { t: "Custom Architecture", i: Layers, d: "Zero templates. Built-from-scratch ecosystems utilizing React, Next.js, and Node.js for absolute control." },
                            { t: "Scalable Backend Systems", i: Server, d: "Serverless architectures and robust microservices designed to handle extreme data loads seamlessly." },
                            { t: "Conversion-Focused Design", i: Target, d: "Neurological UI principles that map to user intent, converting passing traffic into retained revenue." },
                            { t: "Enterprise-Level Security", i: ShieldCheck, d: "Multi-layered encryption, SSL hardening, and active firewall nodes shielding your core data." },
                            { t: "High-Speed Optimization", i: Zap, d: "Aggressive CDN caching and code splitting to guarantee near-instantaneous global load times." },
                            { t: "Long-Term Technical Support", i: HeartPulse, d: "Continuous engineering protocols. We monitor, maintain, and upgrade your system post-launch." }
                        ].map((feat, i) => (
                            <div key={i} className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                {/* Hover Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/0 group-hover:bg-brand-cyan/10 blur-[40px] rounded-full transition-colors duration-500" />

                                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8 border border-slate-100 dark:border-white/10 group-hover:border-brand-cyan/50 transition-colors">
                                    <feat.i className="w-6 h-6 text-brand-cyan" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feat.t}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feat.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who Is This For? */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl space-y-4">
                            <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Target Audiences</span>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Scaling Ventures.</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { t: "SaaS Startups", i: Cloud, d: "Software platforms needing robust logic." },
                            { t: "E-Commerce Brands", i: ShoppingCart, d: "High-volume retail relying on speed." },
                            { t: "Real Estate Firms", i: Home, d: "Property databases with advanced search." },
                            { t: "Education Platforms", i: GraduationCap, d: "LMS systems handling heavy video traffic." },
                            { t: "Healthcare Systems", i: Activity, d: "HIPAA compliant patient portal architectures." },
                            { t: "Corporate Enterprises", i: Building2, d: "Global conglomerates requiring extreme scale." }
                        ].map((ind, i) => (
                            <div key={i} className="flex gap-4 md:gap-6 items-start p-5 md:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-brand-cyan transition-colors group">
                                <ind.i className="w-6 h-6 md:w-8 md:h-8 text-slate-400 group-hover:text-brand-cyan shrink-0 transition-colors" />
                                <div>
                                    <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">{ind.t}</h4>
                                    <p className="text-xs text-slate-500 font-medium">{ind.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ What Makes Advance Development Different */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-[#080B10] text-white reveal-section border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-dark.png')] bg-repeat opacity-20" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">The Differentiator</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Beyond Standard Web Design.</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { title: "Fully Custom-Coded", desc: "No restrictive themes. Proprietary code designed exclusively for your workflows." },
                            { title: "Performance-First", desc: "Every asset is measured. If it doesn't serve the speed index, it's eliminated from core." },
                            { title: "Tailored User Experience", desc: "Bespoke user journeys driven by A/B testing and competitive cognitive mapping." },
                            { title: "Integration-Ready", desc: "Headless CMS architecture ready to couple with any API or third-party CRM seamlessly." },
                            { title: "Long-Term Scaling", desc: "Codebases built cleanly to allow dev teams to expand features years down the line effortlessly." }
                        ].map((block, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500" />
                                <div className="text-4xl font-black text-white/5 mb-6 absolute top-4 right-6 group-hover:text-brand-cyan/10 transition-colors">0{i + 1}</div>
                                <h3 className="text-lg font-bold mb-4 relative z-10 text-brand-cyan">{block.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-medium relative z-10">{block.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Custom UI/UX Strategy */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Animated UI Mockup */}
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 sm:p-8 rounded-2xl sm:rounded-[3rem] border border-slate-200 dark:border-white/10 relative shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-brand-cyan/5 group-hover:bg-brand-cyan/10 transition-colors duration-1000" />
                            <div className="relative z-10">
                                {/* Wireframe layer */}
                                <div className="border-4 border-dashed border-slate-300 dark:border-white/20 rounded-2xl absolute inset-0 -rotate-3 scale-95 opacity-50" />
                                {/* High Fidelity layer */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-white/5 p-6 space-y-6 relative rotate-2 group-hover:rotate-0 transition-transform duration-700">
                                    <div className="flex justify-between items-center mb-8 border-b pb-4 dark:border-white/10">
                                        <div className="h-6 w-24 bg-slate-800 dark:bg-white rounded-full" />
                                        <div className="flex gap-2"><div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-white/10" /><div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-white/10" /></div>
                                    </div>
                                    <div className="h-48 w-full bg-slate-50 dark:bg-slate-800 rounded-xl relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-brand-cyan/20 rounded-tr-full" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-cyan/40 backdrop-blur-xl rounded-full flex items-center justify-center">
                                            <div className="w-10 h-10 bg-white rounded-full animate-ping" />
                                        </div>
                                    </div>
                                    <div className="h-10 w-full bg-brand-cyan rounded-xl mt-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-10">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Design Engineering</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Neurological UI/UX Strategy.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Design isn't just aesthetics—it's directed geometry. We engineer interface pathways that subconsciously pull users toward conversion actions.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                { t: "User Journey Mapping", i: Map },
                                { t: "Wireframing & Prototypes", i: Component },
                                { t: "Conversion-Driven Layouts", i: CursorArrowRaysIcon },
                                { t: "Brand-Aligned UI Systems", i: Fingerprint },
                                { t: "Interactive Micro-Animations", i: Sliders }
                            ].map((strat, i) => (
                                <div key={i} className="flex gap-3 items-center">
                                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                                        <strat.i className="w-4 h-4" />
                                    </div>
                                    <span className="font-bold text-sm">{strat.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Web Applications & Custom Features */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-[#030405] text-white reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Functional Modules</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Powerful Web Applications.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { t: "Admin Dashboards", d: "Command centers to monitor KPIs, users, and financials.", i: Monitor },
                            { t: "User Portals", d: "Secure, personalized hubs for client interaction.", i: Users },
                            { t: "Booking Systems", d: "Complex scheduling algorithms avoiding double-booking.", i: Component },
                            { t: "Membership Platforms", d: "Gated content and tier-based feature access.", i: Key },
                            { t: "Role-Based Access", d: "Deep permission matrices for enterprise teams.", i: Lock },
                            { t: "Custom Modules", d: "Any proprietary logic your business requires.", i: Code2 }
                        ].map((feat, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-[#0a0f16] border border-white/5 hover:border-brand-cyan/30 transition-all flex flex-col justify-between h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                                <feat.i className="w-10 h-10 text-brand-cyan mb-8" />
                                <div>
                                    <h3 className="text-xl font-bold mb-3">{feat.t}</h3>
                                    <p className="text-slate-500 font-medium text-sm">{feat.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8️⃣ E-Commerce / SaaS / Dashboard Development */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section relative overflow-hidden">
                {/* Ambient background glows */}
                <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-brand-cyan/[0.04] rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <div className="max-w-3xl space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                                <span className="text-brand-cyan font-bold uppercase tracking-[0.25em] text-[11px]">Specialized Products</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Heavy-Duty<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-400 to-indigo-400">Web Platforms.</span>
                            </h2>
                        </div>
                        <p className="max-w-sm text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed md:text-right">
                            Enterprise-grade platforms engineered for volume, velocity, and vertical scale.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

                        {/* ── HERO CARD: Custom E-Commerce (spans 7 cols) ── */}
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="lg:col-span-7 relative rounded-3xl overflow-hidden group bg-[#060d18] border border-white/[0.07] shadow-[0_0_80px_-20px_rgba(95,211,230,0.15)]"
                        >
                            {/* Animated scan-line */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <motion.div
                                    animate={{ y: ["-100%", "200%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                                    className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent"
                                />
                            </div>

                            {/* Grid pattern overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(95,211,230,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(95,211,230,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                            {/* Glow blob */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 blur-[80px] rounded-full group-hover:bg-brand-cyan/20 transition-colors duration-700 pointer-events-none" />

                            {/* Floating icon */}
                            <div className="absolute top-6 right-6 lg:top-10 lg:right-10 pointer-events-none">
                                <motion.div
                                    animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-brand-cyan/20 blur-2xl rounded-full scale-150" />
                                    <ShoppingCart className="w-24 h-24 md:w-40 md:h-40 text-brand-cyan/20 group-hover:text-brand-cyan/35 transition-colors duration-500 relative z-10" strokeWidth={0.8} />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 md:p-12 flex flex-col h-full min-h-[340px]">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-bold text-[10px] uppercase tracking-widest">
                                        <span className="w-1 h-1 rounded-full bg-brand-cyan animate-pulse" />
                                        High-Volume Sales
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Custom E-Commerce</h3>
                                <p className="text-slate-400 font-medium mb-10 max-w-md leading-relaxed">
                                    Scaling beyond Shopify limits. We build headless Magento, Next.js Commerce, or fully custom transactional engines with zero-latency checkouts.
                                </p>

                                <div className="mt-auto">
                                    <a href="#contact" className="inline-flex px-8 py-3.5 gap-2 group/btn text-xs bg-brand-medium text-white hover:bg-brand-medium/90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-brand-medium/20 text-center uppercase tracking-[0.1em] flex items-center justify-center">
                                        <span className="">
                                            Start Selling
                                        </span>
                                        <motion.div
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ArrowRight className="w-4 h-4 text-white" />
                                        </motion.div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* ── RIGHT COLUMN (spans 5 cols): SaaS + CRM stacked ── */}
                        <div className="lg:col-span-5 flex flex-col gap-5">

                            {/* SaaS Web Apps */}
                            <motion.div
                                whileHover={{ y: -4, x: 2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="flex-1 relative rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/[0.08] p-8 group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan/5 blur-[60px] rounded-full group-hover:bg-brand-cyan/15 transition-colors duration-500 pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-cyan/50 transition-all">
                                        <Layers className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">SaaS Web Apps</h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Multi-tenant architecture and subscription logic engines built to scale.</p>
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {['Multi-Tenant', 'Subscriptions', 'SaaS Auth'].map(t => (
                                            <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-cyan/20 text-brand-cyan/70 bg-brand-cyan/5">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* CRM / ERP */}
                            <motion.div
                                whileHover={{ y: -4, x: 2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="flex-1 relative rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/[0.08] p-8 group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 blur-[60px] rounded-full group-hover:bg-indigo-500/15 transition-colors duration-500 pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all">
                                        <Database className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">CRM / ERP Systems</h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Internal tooling built specifically for your operational model and team.</p>
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {['Custom Workflows', 'Role Access', 'Reporting'].map(t => (
                                            <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-indigo-500/20 text-indigo-400/70 bg-indigo-500/5">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* ── BOTTOM ROW ── */}

                        {/* Multi-Vendor Marketplaces */}
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="lg:col-span-6 relative rounded-3xl bg-white dark:bg-[#080d14] border border-slate-200 dark:border-white/[0.07] p-8 flex items-center justify-between gap-6 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-violet-500/0 group-hover:from-violet-500/[0.04] group-hover:to-sky-500/[0.04] transition-all duration-700 pointer-events-none rounded-3xl" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1 h-4 rounded-full bg-violet-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-violet-500">Platform</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Multi-Vendor Marketplaces</h3>
                                <p className="text-sm text-slate-500 font-medium max-w-xs">Complex vendor splitting, logistics routing, and multi-channel management.</p>
                            </div>
                            <div className="shrink-0 relative">
                                <div className="absolute inset-0 bg-violet-500/10 blur-xl rounded-full group-hover:bg-violet-500/25 transition-colors duration-500" />
                                <Command className="w-14 h-14 text-slate-200 dark:text-white/10 group-hover:text-violet-400 transition-colors relative z-10" strokeWidth={1} />
                            </div>
                        </motion.div>

                        {/* Subscription Platforms */}
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="lg:col-span-6 relative rounded-3xl bg-white dark:bg-[#080d14] border border-slate-200 dark:border-white/[0.07] p-8 flex items-center justify-between gap-6 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/[0.04] group-hover:to-cyan-500/[0.04] transition-all duration-700 pointer-events-none rounded-3xl" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1 h-4 rounded-full bg-emerald-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Recurring Revenue</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Subscription Platforms</h3>
                                <p className="text-sm text-slate-500 font-medium max-w-xs">Recurring billing APIs, automated dunning, and gated access control systems.</p>
                            </div>
                            <div className="shrink-0 relative">
                                <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full group-hover:bg-emerald-500/25 transition-colors duration-500" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="group-hover:[animation-play-state:running] [animation-play-state:paused]"
                                >
                                    <RefreshCw className="w-14 h-14 text-slate-200 dark:text-white/10 group-hover:text-emerald-400 transition-colors relative z-10" strokeWidth={1} />
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 9️⃣ API & Backend Integration */}
            <section className="py-16 md:py-40 px-4 md:px-6 bg-slate-900 text-white reveal-section overflow-hidden relative">
                {/* Node architecture background wrapper */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-200px] right-[-200px] w-[800px] h-[800px] opacity-10 pointer-events-none"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-brand-cyan stroke-current stroke-[0.2]">
                        <circle cx="50" cy="50" r="40" fill="none" />
                        <motion.g
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: "50px 50px" }}
                        >
                            <circle cx="50" cy="50" r="20" fill="none" strokeDasharray="2,2" />
                        </motion.g>
                        <line x1="10" y1="50" x2="90" y2="50" />
                        <line x1="50" y1="10" x2="50" y2="90" />
                        <circle cx="50" cy="10" r="2" fill="currentColor" className="animate-pulse" />
                        <circle cx="90" cy="50" r="2" fill="currentColor" className="animate-pulse" />
                        <circle cx="50" cy="90" r="2" fill="currentColor" className="animate-pulse" />
                        <circle cx="10" cy="50" r="2" fill="currentColor" className="animate-pulse" />
                    </svg>
                </motion.div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
                    <div className="space-y-10">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Connectivity Core</span>
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tight">API & Backend Logic.</h2>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed">No application operates in isolation. We wire your platform into the global digital ecosystem via robust API orchestrations securely.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            {[
                                { t: "Payment Gateways", i: CreditCard, d: "Stripe, Razorpay, PayPal integrations" },
                                { t: "CRM & ERP Sync", i: Database, d: "Salesforce, HubSpot bidirectional sync" },
                                { t: "Third-Party APIs", i: Plug, d: "Twilio, Google, AWS services" },
                                { t: "Automation Systems", i: Workflow, d: "Zapier, Make, custom scripts" }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-3 mb-2 text-white">
                                        <item.i className="w-5 h-5 text-brand-cyan" />
                                        <h4 className="font-bold text-md">{item.t}</h4>
                                    </div>
                                    <p className="text-xs text-slate-500 font-semibold">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#050608] border border-white/10 p-4 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl relative">
                        <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-brand-cyan/20 px-3 sm:px-4 py-1 text-brand-cyan text-[8px] sm:text-[10px] uppercase font-bold tracking-widest rounded shadow-[0_0_20px_rgba(95,211,230,0.4)]">System Architecture Live</div>
                        <div className="font-mono text-[10px] sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                            <div className="min-w-max">
                                {[
                                    <><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">PaymentPipeline</span> = <span className="text-[#c678dd]">async</span> (req) =&gt; {'{'}</>,
                                    <><span className="text-[#c678dd]">  try</span> {'{'}</>,
                                    <><span className="text-[#c678dd]">    const</span> {'{'} user, intent {'}'} = req.<span className="text-[#e06c75]">body</span>;</>,
                                    <>&nbsp;</>,
                                    <><span className="text-[#5c6370] italic">    // 1. Authenticate Request</span></>,
                                    <><span className="text-[#c678dd]">    await</span> <span className="text-[#e5c07b]">SecurityGuard</span>.<span className="text-[#61afef]">validate</span>(user.<span className="text-[#e06c75]">token</span>);</>,
                                    <>&nbsp;</>,
                                    <><span className="text-[#5c6370] italic">    // 2. Cross-check ERP</span></>,
                                    <><span className="text-[#c678dd]">    const</span> inventory = <span className="text-[#c678dd]">await</span> <span className="text-[#e5c07b]">ERP</span>.<span className="text-[#61afef]">checkStock</span>();</>,
                                    <>&nbsp;</>,
                                    <><span className="text-[#5c6370] italic">    // 3. Fire Payment API</span></>,
                                    <><span className="text-[#c678dd]">    const</span> tx = <span className="text-[#c678dd]">await</span> <span className="text-[#e5c07b]">Stripe</span>.<span className="text-[#61afef]">charge</span>(intent);</>,
                                    <>&nbsp;</>,
                                    <><span className="text-[#5c6370] italic">    // 4. Update internal DB</span></>,
                                    <><span className="text-[#c678dd]">    await</span> <span className="text-[#e5c07b]">DB</span>.orders.<span className="text-[#61afef]">insert</span>(tx.<span className="text-[#e06c75]">receipt</span>);</>,
                                    <>&nbsp;</>,
                                    <><span className="text-[#c678dd]">    return</span> res.<span className="text-[#61afef]">status</span>(<span className="text-[#d19a66]">200</span>).<span className="text-[#61afef]">json</span>({'{'} success: <span className="text-[#d19a66]">true</span> {'}'});</>,
                                    <><span className="text-[#c678dd]">  {'}'} catch</span> (error) {'{'} ... {'}'}</>,
                                    <>{'}'}</>
                                ].map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                                        whileInView={{
                                            clipPath: [
                                                "inset(0% 100% 0% 0%)",
                                                "inset(0% 100% 0% 0%)",
                                                "inset(0% 0% 0% 0%)",
                                                "inset(0% 0% 0% 0%)",
                                                "inset(0% 100% 0% 0%)",
                                                "inset(0% 100% 0% 0%)"
                                            ]
                                        }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            times: [
                                                0,
                                                (i * 0.15) / 10,
                                                (i * 0.15 + 0.5) / 10,
                                                0.85,
                                                0.9,
                                                1
                                            ],
                                            ease: "linear"
                                        }}
                                        className="whitespace-pre"
                                    >
                                        {line}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔟 High-Speed & Core Web Vitals Optimization */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section bg-slate-50 dark:bg-[#030405]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 w-full order-2 lg:order-1 relative">
                        {/* Speed Indicators Graphic */}
                        <div className="relative aspect-square max-h-[500px] mx-auto">
                            {/* Main Circle Gauge */}
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" className="stroke-slate-200 dark:stroke-slate-800 stroke-[4]" />
                                <circle cx="50" cy="50" r="45" fill="none" className="stroke-brand-cyan stroke-[4] animate-[dash_3s_ease-out_forwards]" strokeDasharray="283" strokeDashoffset="283" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="text-7xl font-bold tracking-tighter">98<span className="text-2xl text-slate-400 font-normal">%</span></span>
                                <span className="text-xs uppercase font-bold tracking-[0.2em] text-slate-500 mt-2">Performance Score</span>
                            </div>

                            {/* Floating Web Vital metrics */}
                            <div className="absolute top-4 sm:top-10 -left-2 sm:-left-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-2 sm:gap-4 animate-bounce scale-75 sm:scale-100 origin-left" style={{ animationDuration: '4s' }}>
                                <div className="text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 p-2 rounded-lg font-bold">LCP</div>
                                <div><strong className="block font-bold">0.8s</strong><span className="text-[10px] text-slate-400 font-bold uppercase">Largest Content</span></div>
                            </div>
                            <div className="absolute bottom-4 sm:bottom-10 -right-2 sm:-right-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-xl flex items-center gap-2 sm:gap-4 animate-bounce scale-75 sm:scale-100 origin-right" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                                <div className="text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 p-2 rounded-lg font-bold">CLS</div>
                                <div><strong className="block font-bold">0.02</strong><span className="text-[10px] text-slate-400 font-bold uppercase">Layout Shift</span></div>
                            </div>
                        </div>
                        <style jsx>{` @keyframes dash { to { stroke-dashoffset: 28; } } `}</style>
                    </div>

                    <div className="lg:w-1/2 space-y-10 order-1 lg:order-2">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Velocity Engine</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Speed as a Feature.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Latency equals lost clients. We engineer systems that pass Google's Core Web Vitals natively, delivering lightning-fast rendering globally.</p>

                        <div className="space-y-6">
                            {[
                                { t: "Optimized Codebase", d: "Tree-shaken JS, minified CSS, and modern web architectures like Server-Side Rendering." },
                                { t: "Lazy Loading & Next-Gen Formats", d: "Images in WebP/AVIF loaded asynchronously to prioritize first paint." },
                                { t: "Global CDN & Server Optimization", d: "Deployments via Vercel Edge networks to put data physically closer to users." }
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-brand-cyan transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0"><Gauge className="w-5 h-5 text-brand-cyan" /></div>
                                    <div><h4 className="font-bold text-lg">{f.t}</h4><p className="text-sm text-slate-500 mt-1">{f.d}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣1️⃣ Security & Scalability */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-[#040914] text-white reveal-section border-y border-white/10 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50" />

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Fortress Protocol</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Impenetrable Security. Infinite Scale.</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { t: "Data Encryption", i: Fingerprint, d: "AES-256 bit encryption at rest and TLS 1.3 in transit." },
                            { t: "Secure Auth", i: UserCheckIcon, d: "OAuth 2.0, JWT tokens, and biometric integration." },
                            { t: "Cloud Infrastructure", i: Cloud, d: "Load-balanced clusters on AWS, GCP, or Vercel." },
                            { t: "Scalable Scaling", i: Maximize, d: "Auto-scaling server setups for unlimited traffic." }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-brand-cyan hover:text-slate-900 transition-all duration-300 group">
                                <stat.i className="w-10 h-10 text-brand-cyan group-hover:text-slate-900 mb-6 transition-colors" />
                                <h3 className="font-bold text-xl mb-3">{stat.t}</h3>
                                <p className="text-sm text-slate-400 group-hover:text-slate-800 font-medium">{stat.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣2️⃣ Tech Stack & Architecture */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Engineering Blueprint</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Tech Stack & Architecture.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">We leverage bleeding-edge technologies to build scalable, secure, and blazing-fast web ecosystems.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                        {[
                            { name: 'React / Next.js', desc: 'Frontend Framework', icon: Code2, color: 'from-cyan-500 to-blue-500' },
                            { name: 'Node.js', desc: 'Backend Runtime', icon: Server, color: 'from-emerald-500 to-green-600' },
                            { name: 'TypeScript', desc: 'Type Safety', icon: FileCode2, color: 'from-blue-500 to-indigo-500' },
                            { name: 'PostgreSQL', desc: 'Database Layer', icon: Database, color: 'from-indigo-500 to-violet-500' },
                            { name: 'AWS / GCP', desc: 'Cloud Infra', icon: Cloud, color: 'from-amber-500 to-orange-500' },
                            { name: 'Docker', desc: 'Containerization', icon: Container, color: 'from-sky-500 to-blue-600' },
                            { name: 'CI/CD Pipeline', desc: 'Auto Deployment', icon: GitBranch, color: 'from-rose-500 to-pink-600' },
                            { name: 'Testing Suite', desc: 'Quality Assurance', icon: TestTube2, color: 'from-violet-500 to-purple-600' }
                        ].map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 group-hover:text-brand-cyan transition-colors mb-3 sm:mb-4" />
                                <h4 className="font-bold text-sm mb-1">{tech.name}</h4>
                                <p className="text-[11px] text-slate-500 font-medium">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Architecture Diagram */}
                    <div className="mt-10 sm:mt-16 p-8 sm:p-12 md:p-16 rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                        <h3 className="text-lg md:text-xl font-bold mb-10 md:mb-14 text-center text-slate-800 dark:text-white">System Architecture Overview</h3>
                        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-4 sm:gap-6 relative z-10 w-full max-w-6xl mx-auto">
                            {[
                                { label: 'Client Layer', items: [{ name: 'React SPA', icon: Monitor }, { name: 'Next.js SSR', icon: Globe }, { name: 'PWA Support', icon: Smartphone }], color: 'border-brand-cyan/20' },
                                { label: 'API Gateway', items: [{ name: 'REST / GraphQL', icon: Network }, { name: 'Rate Limiting', icon: ShieldCheck }, { name: 'Auth Middleware', icon: Key }], color: 'border-indigo-400/20' },
                                { label: 'Business Logic', items: [{ name: 'Microservices', icon: Component }, { name: 'Event Queue', icon: GitBranch }, { name: 'Cache Layer', icon: Zap }], color: 'border-violet-300 dark:border-violet-500/40 bg-violet-50/30 dark:bg-violet-500/5 shadow-sm shadow-violet-500/5', dot: true },
                                { label: 'Data Layer', items: [{ name: 'PostgreSQL', icon: Database }, { name: 'Redis Cache', icon: RefreshCw }, { name: 'S3 Storage', icon: Cloud }], color: 'border-emerald-400/20' }
                            ].map((layer, i) => (
                                <React.Fragment key={i}>
                                    <div className={`flex-1 w-full sm:max-w-[240px] p-6 rounded-[1.25rem] bg-white dark:bg-slate-900 border ${layer.color} text-center relative transition-all duration-300 hover:shadow-md dark:hover:shadow-none`}>
                                        {layer.dot && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-500 ring-4 ring-white dark:ring-slate-900" />
                                        )}
                                        <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">{layer.label}</h4>
                                        <div className="space-y-3">
                                            {layer.items.map((item, j) => (
                                                <div
                                                    key={j}
                                                    className="flex items-center justify-center gap-2.5 text-[11px] md:text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 rounded-xl py-3 px-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-slate-200 dark:hover:border-white/10 transition-all cursor-pointer"
                                                >
                                                    <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-400" strokeWidth={1.5} />
                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {i < 3 && (
                                        <div className="shrink-0 hidden md:flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣3️⃣ Case Studies / Real Projects */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-[#030405] text-white reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Proven Results</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Case Studies & Real Projects.</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-medium">Real-world results from businesses that trusted us to build their digital infrastructure.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'E-Commerce Platform',
                                client: 'Fashion Retail Brand',
                                desc: 'Built a headless e-commerce platform handling 50K+ monthly transactions with sub-second page loads.',
                                metrics: [{ label: 'Revenue Increase', val: '+340%' }, { label: 'Page Speed', val: '0.8s' }, { label: 'Conversion Rate', val: '4.7%' }],
                                tags: ['Next.js', 'Stripe', 'Headless CMS'],
                                gradient: 'from-brand-cyan/20 to-blue-500/20'
                            },
                            {
                                title: 'SaaS Dashboard',
                                client: 'FinTech Startup',
                                desc: 'Engineered a real-time analytics dashboard processing 2M+ data points with live WebSocket feeds.',
                                metrics: [{ label: 'Data Processed', val: '2M+/day' }, { label: 'Uptime', val: '99.99%' }, { label: 'User Retention', val: '89%' }],
                                tags: ['React', 'Node.js', 'WebSocket'],
                                gradient: 'from-violet-500/20 to-purple-500/20'
                            },
                            {
                                title: 'Corporate Website',
                                client: 'Enterprise Conglomerate',
                                desc: 'Delivered a multi-language, fully accessible enterprise website with CMS integration and advanced SEO.',
                                metrics: [{ label: 'Organic Traffic', val: '+520%' }, { label: 'Lighthouse Score', val: '98/100' }, { label: 'Lead Gen', val: '+210%' }],
                                tags: ['Next.js', 'Sanity CMS', 'i18n'],
                                gradient: 'from-emerald-500/20 to-green-500/20'
                            }
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-brand-cyan/30 transition-all duration-300"
                            >
                                {/* Gradient Header Bar */}
                                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                                <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan">{project.client}</span>
                                        <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                                        <p className="text-sm text-slate-400 mt-3 leading-relaxed">{project.desc}</p>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                        {project.metrics.map((m, j) => (
                                            <div key={j} className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/5">
                                                <span className="block text-sm sm:text-lg font-black text-brand-cyan">{m.val}</span>
                                                <span className="text-[7px] sm:text-[9px] font-bold uppercase text-slate-500">{m.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, j) => (
                                            <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣4️⃣ Development Process (Discovery → Launch) */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Our Protocol</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From Discovery to Launch.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">A structured, transparent development process engineered for quality and speed.</p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent hidden lg:block" />

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                            {[
                                { step: '01', title: 'Discovery', desc: 'Deep-dive into your business model, goals, competitors, and target audience.', icon: Target, duration: '1-2 Days' },
                                { step: '02', title: 'Strategy', desc: 'Technical architecture planning, tech stack selection, and conversion mapping.', icon: Map, duration: '2-3 Days' },
                                { step: '03', title: 'UI/UX Design', desc: 'Wireframes, high-fidelity prototypes, and user journey optimization.', icon: Palette, duration: '5-7 Days' },
                                { step: '04', title: 'Development', desc: 'Full-stack coding with agile sprints, code reviews, and progress demos.', icon: Code2, duration: '2-4 Weeks' },
                                { step: '05', title: 'QA & Testing', desc: 'Cross-browser testing, performance audits, security scans, and UAT.', icon: TestTube2, duration: '3-5 Days' },
                                { step: '06', title: 'Launch', desc: 'Deployment to production, DNS setup, SSL certs, and monitoring activation.', icon: Rocket, duration: '1-2 Days' }
                            ].map((phase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative text-center group"
                                >
                                    {/* Step Circle */}
                                    <div className="relative z-10 w-14 h-14 mx-auto mb-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 group-hover:border-brand-cyan flex items-center justify-center transition-colors shadow-lg">
                                        <phase.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-cyan transition-colors" />
                                    </div>

                                    <span className="text-3xl font-black text-slate-100 dark:text-white/5 block mb-2">{phase.step}</span>
                                    <h4 className="font-bold text-lg mb-2">{phase.title}</h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed mb-3">{phase.desc}</p>
                                    <span className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-[10px] font-bold">{phase.duration}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣5️⃣ Maintenance & Support Plans */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/30 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Post-Launch Care</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Maintenance & Support.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">Your website is a living asset. We ensure it stays optimized, secure, and ahead of the curve.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Essential',
                                desc: 'Core upkeep for smooth operation.',
                                icon: Wrench,
                                features: ['Monthly Security Updates', 'Uptime Monitoring', 'Bug Fixes (5hrs/mo)', 'Monthly Performance Report', 'Email Support'],
                                highlight: false
                            },
                            {
                                title: 'Professional',
                                desc: 'Proactive maintenance for growing businesses.',
                                icon: Shield,
                                features: ['Everything in Essential', 'Priority Bug Fixes (15hrs/mo)', 'Feature Enhancements', 'SEO Monitoring & Tweaks', 'Dedicated Slack Channel', '24/7 Emergency Support'],
                                highlight: true
                            },
                            {
                                title: 'Enterprise',
                                desc: 'Full technical partnership for scaling brands.',
                                icon: LifeBuoy,
                                features: ['Everything in Professional', 'Unlimited Dev Hours', 'Quarterly Strategy Reviews', 'Infrastructure Scaling', 'Custom Integrations', 'Dedicated Account Manager'],
                                highlight: false
                            }
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`p-8 rounded-3xl border relative overflow-hidden ${plan.highlight
                                    ? 'bg-white dark:bg-slate-900 border-brand-cyan shadow-xl shadow-brand-cyan/10'
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-cyan to-blue-500" />
                                )}
                                <plan.icon className={`w-10 h-10 mb-6 ${plan.highlight ? 'text-brand-cyan' : 'text-slate-400'}`} />
                                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                                <p className="text-sm text-slate-500 mb-8">{plan.desc}</p>
                                <ul className="space-y-3">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-brand-cyan' : 'text-slate-400'}`} />
                                            <span className="font-medium">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`w-full mt-8 py-4 text-sm ${plan.highlight ? "ring-2 ring-brand-cyan ring-offset-2 ring-offset-slate-900" : ""} bg-brand-medium text-white hover:bg-brand-medium/90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-brand-medium/20 text-center uppercase tracking-[0.1em] flex items-center justify-center`}>
                                    Get Started
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣6️⃣ Premium Pricing Structure */}
            <section className="py-16 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Investment Tiers</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Transparent Pricing.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">Every project is unique. Choose a tier that matches your scale, and we'll tailor the scope to your exact requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                tier: 'Growth',
                                price: '₹1.5L - 3L',
                                desc: 'For startups and SMBs needing a custom, high-performance website.',
                                deliverables: ['5-10 Custom Pages', 'Responsive Design', 'Basic SEO Setup', 'CMS Integration', 'Contact Forms & CTAs', '30-Day Post-Launch Support'],
                                timeline: '3-4 Weeks',
                                highlight: false
                            },
                            {
                                tier: 'Enterprise',
                                price: '₹3L - 8L',
                                desc: 'For scaling businesses requiring complex web applications and integrations.',
                                deliverables: ['15-30+ Custom Pages', 'Custom UI/UX Design', 'Advanced SEO & Analytics', 'API Integrations', 'Admin Dashboard', 'E-Commerce / Booking System', '90-Day Support & Optimization'],
                                timeline: '6-10 Weeks',
                                highlight: true
                            },
                            {
                                tier: 'Custom',
                                price: 'Let\'s Talk',
                                desc: 'For enterprises requiring fully bespoke architectures and ongoing development.',
                                deliverables: ['Unlimited Pages & Modules', 'Full Custom Architecture', 'Microservices / Headless CMS', 'Multi-Language Support', 'Enterprise Security', 'Dedicated Dev Team', 'Ongoing Technical Partnership'],
                                timeline: 'Scoped per project',
                                highlight: false
                            }
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`rounded-3xl overflow-hidden relative ${plan.highlight
                                    ? 'bg-gradient-to-b from-brand-cyan/10 to-transparent border-2 border-brand-cyan shadow-2xl shadow-brand-cyan/10'
                                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="bg-brand-cyan text-slate-950 text-center py-2 text-[10px] font-black uppercase tracking-[0.3em]">
                                        Most Popular
                                    </div>
                                )}
                                <div className="p-8 md:p-10">
                                    <h3 className="text-xl font-bold mb-1">{plan.tier}</h3>
                                    <div className="text-3xl md:text-4xl font-black text-brand-cyan mb-3">{plan.price}</div>
                                    <p className="text-sm text-slate-500 mb-8 font-medium">{plan.desc}</p>

                                    <div className="flex items-center gap-2 mb-6 text-sm">
                                        <Clock className="w-4 h-4 text-brand-cyan" />
                                        <span className="font-bold text-slate-600 dark:text-slate-300">{plan.timeline}</span>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.deliverables.map((d, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm">
                                                <Check className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                                                <span className="font-medium">{d}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a href="#contact" className={`w-full py-4 text-sm ${plan.highlight ? "ring-2 ring-brand-cyan ring-offset-2 ring-offset-slate-900" : ""} bg-brand-medium text-white hover:bg-brand-medium/90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-brand-medium/20 text-center uppercase tracking-[0.1em] flex items-center justify-center`}>
                                        {plan.highlight ? 'Start Enterprise Project' : 'Get a Quote'}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣7️⃣ FAQs */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/30 reveal-section">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Knowledge Base</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions.</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'How long does it take to build an advanced website?', a: 'Timelines vary by scope. A standard advanced website takes 4-8 weeks, while enterprise-grade web applications can take 8-16 weeks. We provide a detailed timeline during our discovery phase.' },
                            { q: 'What technologies do you use?', a: 'We primarily build with React, Next.js, Node.js, TypeScript, and PostgreSQL. For hosting, we deploy on AWS, GCP, or Vercel depending on your needs. Every stack decision is tailored to your project requirements.' },
                            { q: 'Do you provide ongoing maintenance?', a: 'Yes. We offer three tiers of maintenance—Essential, Professional, and Enterprise. Each includes varying levels of support, from basic updates to full technical partnership with unlimited development hours.' },
                            { q: 'Can you integrate with our existing systems?', a: 'Absolutely. We specialize in API integrations, CRM connections (Salesforce, HubSpot), payment gateways (Stripe, Razorpay), and custom middleware. We\'ll map out all integrations during the strategy phase.' },
                            { q: 'What makes your approach different from other agencies?', a: 'We don\'t use templates or page builders. Every project is custom-coded from scratch with a focus on performance, conversion optimization, and long-term scalability. We think like engineers, not just designers.' },
                            { q: 'Do you handle UI/UX design as well?', a: 'Yes. Our process includes comprehensive UX research, wireframing, high-fidelity prototyping, and user testing. We design with conversion psychology and brand alignment at the core.' },
                            { q: 'What if I need changes after launch?', a: 'All our plans include a post-launch support period. Beyond that, you can subscribe to one of our maintenance plans for ongoing changes, feature additions, and optimization.' },
                            { q: 'How do I get started?', a: 'Simply book a free strategy call through our consultation form below. We\'ll discuss your vision, assess your requirements, and provide a custom proposal within 48 hours.' }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-sm md:text-base pr-4">{faq.q}</span>
                                    <motion.div
                                        animate={{ rotate: openFAQ === i ? 45 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="shrink-0"
                                    >
                                        <Plus className="w-5 h-5 text-brand-cyan" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFAQ === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣8️⃣ Strategy Call / Consultation Form */}
            <section id="contact" className="py-16 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <span className="text-brand-cyan font-bold uppercase tracking-[0.2em] text-xs">Let's Talk</span>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Book Your Free Strategy Call.</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Share your vision with us. We'll analyze your requirements and provide a custom strategy blueprint—completely free.</p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: CheckCircle2, text: '30-minute deep-dive into your business goals' },
                                    { icon: CheckCircle2, text: 'Custom technical architecture recommendation' },
                                    { icon: CheckCircle2, text: 'Transparent pricing and timeline estimate' },
                                    { icon: CheckCircle2, text: 'No commitment, no pressure—just clarity' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <item.icon className="w-5 h-5 text-brand-cyan" />
                                        <span className="font-medium text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Info */}
                            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-4">
                                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Or reach us directly</h4>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-brand-cyan" />
                                    <span className="font-medium text-sm">hello@preettech.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-brand-cyan" />
                                    <span className="font-medium text-sm">+91 98765 43210</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Calendar className="w-5 h-5 text-brand-cyan" />
                                    <span className="font-medium text-sm">Mon – Sat, 10AM – 7PM IST</span>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white dark:bg-slate-900 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-cyan to-blue-500" />
                            <h3 className="text-2xl font-bold mb-8">Request a Consultation</h3>
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name *</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="text" placeholder="John Doe" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="email" placeholder="john@company.com" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="tel" placeholder="+91 98765 43210" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Company</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="text" placeholder="Company Name" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Project Type</label>
                                    <select className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all appearance-none">
                                        <option>Select Project Type</option>
                                        <option>Corporate Website</option>
                                        <option>E-Commerce Platform</option>
                                        <option>SaaS Web Application</option>
                                        <option>CRM / Dashboard System</option>
                                        <option>Custom Web Application</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Budget Range</label>
                                    <select className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all appearance-none">
                                        <option>Select Budget Range</option>
                                        <option>₹1.5L - 3L</option>
                                        <option>₹3L - 5L</option>
                                        <option>₹5L - 8L</option>
                                        <option>₹8L+</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Tell us about your project *</label>
                                    <textarea rows={4} placeholder="Describe your business, goals, and what you're looking to build..." className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all resize-none" />
                                </div>
                                <button type="submit" className="w-full py-5 gap-3 text-sm bg-brand-medium text-white hover:bg-brand-medium/90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-brand-medium/20 text-center uppercase tracking-[0.1em] flex items-center justify-center">
                                    <Send className="w-5 h-5" />
                                    Submit Consultation Request
                                </button>
                                <p className="text-center text-[11px] text-slate-400 font-medium">We'll respond within 24 hours with a custom strategy proposal.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣9️⃣ Final High-Impact CTA */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-[#020617] text-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/20 blur-[200px] rounded-full"
                    />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #5FD3E6 1px, transparent 1px), linear-gradient(to bottom, #5FD3E6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-brand-cyan font-bold uppercase tracking-[0.3em] text-xs">Your Move</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                            Stop Settling for
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">
                                Average Websites.
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                            Every day you delay is revenue lost to competitors with better digital infrastructure. Let's build something extraordinary.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a href="#contact" className="px-8 sm:px-12 py-5 sm:py-6 gap-3 text-xs sm:text-sm group bg-brand-medium text-white hover:bg-brand-medium/90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-brand-medium/20 text-center uppercase tracking-[0.1em] flex items-center justify-center">
                            <Rocket className="w-5 h-5" />
                            Start Your Project Now
                        </a>
                        <a href="tel:+919876543210" className="px-8 sm:px-12 py-5 sm:py-6 gap-3 text-xs sm:text-sm bg-brand-medium text-white hover:bg-brand-medium/90 font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-brand-medium/20 text-center uppercase tracking-[0.1em] flex items-center justify-center">
                            <Phone className="w-5 h-5" />
                            Call Us Directly
                        </a>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-white/10"
                    >
                        {[
                            { val: '150+', label: 'Projects Delivered' },
                            { val: '98%', label: 'Client Satisfaction' },
                            { val: '4.9/5', label: 'Average Rating' },
                            { val: '24/7', label: 'Support Available' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <span className="block text-2xl font-black text-brand-cyan">{stat.val}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Quick Icon Components that were missing from imports
function UserCheckIcon(props: any) {
    return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
}
function CursorArrowRaysIcon(props: any) {
    return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
}


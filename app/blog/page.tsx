"use client";
import React, { useState, useMemo } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedSection from '@/components/blog/FeaturedSection';
import BlogGrid from '@/components/blog/BlogGrid';
import Pagination from '@/components/blog/Pagination';
import TrendingIntelligence from '@/components/blog/TrendingIntelligence';
import { BLOG_POSTS } from '@/lib/blog-data';
import { Mail, ArrowRight, Zap, Trophy, Rocket } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Get featured posts (max 2 for the featured section)
    const featuredPosts = useMemo(() => {
        return BLOG_POSTS.filter(post => post.isFeatured).slice(0, 2);
    }, []);

    // Filter posts based on category and search term
    const filteredPosts = useMemo(() => {
        setCurrentPage(1); // Reset to first page on filter change
        return BLOG_POSTS.filter(post => {
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    const displayPosts = useMemo(() => {
        // If we're on "All", we might want to hide featured posts from the grid
        let posts = filteredPosts;
        if (activeCategory === 'All' && !searchTerm) {
            posts = filteredPosts.filter(post => !post.isFeatured);
        }

        // Pagination logic
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        return posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
    }, [filteredPosts, activeCategory, searchTerm, currentPage]);

    const totalPages = Math.ceil(
        (activeCategory === 'All' && !searchTerm
            ? filteredPosts.filter(p => !p.isFeatured).length
            : filteredPosts.length) / POSTS_PER_PAGE
    );

    return (
        <main className="min-h-screen bg-background">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <BlogHero
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                onSearch={setSearchTerm}
            />

            {/* Featured Section - Only show on All category or when not searching */}
            {activeCategory === 'All' && !searchTerm && (
                <FeaturedSection posts={featuredPosts} />
            )}

            {/* Main Blog Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            {searchTerm ? `Results for "${searchTerm}"` : activeCategory === 'All' ? 'Latest Stories' : activeCategory}
                        </h2>
                        <div className="h-px bg-white/10 flex-grow" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{filteredPosts.length} Articles</span>
                    </div>

                    <BlogGrid posts={displayPosts} />

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </section>

            {/* Trending Intelligence Section */}
            {activeCategory === 'All' && !searchTerm && (
                <TrendingIntelligence />
            )}

            {/* Newsletter Section */}
            <section className="py-32 relative overflow-hidden bg-background">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                    <div className="bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-8"
                                >
                                    <Mail className="w-4 h-4 text-brand-cyan" />
                                    <span className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.3em]">Exclusive Intel</span>
                                </motion.div>
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                                    Master the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Growth Engine.</span>
                                </h2>
                                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-0">
                                    Actionable frameworks used by 5,000+ high-growth founders. Zero fluff. Pure signal.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-4 bg-brand-cyan/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity" />
                                <div className="relative space-y-4">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <input
                                            type="email"
                                            placeholder="Enter your terminal email..."
                                            className="flex-grow h-20 px-8 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan focus:bg-white/10 outline-none transition-all text-lg font-bold placeholder:text-slate-600"
                                        />
                                        <button className="h-20 px-10 bg-brand-cyan text-slate-950 rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-cyan/20">
                                            Sync_Now
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between px-2">
                                        <div className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-brand-cyan" /><span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">No Noise_</span></div>
                                        <div className="flex items-center gap-2"><Trophy className="w-3.5 h-3.5 text-brand-cyan" /><span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">VIP Access_</span></div>
                                        <div className="flex items-center gap-2"><Rocket className="w-3.5 h-3.5 text-brand-cyan" /><span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">1-Click Exit_</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 border-t border-white/5 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="relative rounded-[4rem] overflow-hidden bg-slate-950 border border-white/10 p-12 md:p-24 text-center">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(95,211,230,0.1),transparent)]" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative z-10"
                        >
                            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.8]">
                                Execute Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-cyan to-brand-medium italic">Vision.</span>
                            </h2>
                            <p className="text-slate-400 text-xl md:text-2xl font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
                                Ready to scale beyond limits? Our digital architects are ready to build the infrastructure of your success.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    href="/services"
                                    className="w-full sm:w-auto px-12 py-6 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-cyan transition-all hover:scale-105 active:scale-95 shadow-2xl"
                                >
                                    View Capabilities
                                </Link>
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto px-12 py-6 bg-transparent border-2 border-white/10 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-3"
                                >
                                    Book Strategy Session <ArrowRight className="w-5 h-5 text-brand-cyan" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

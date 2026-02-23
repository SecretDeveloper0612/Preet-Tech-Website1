"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ArrowRight, Activity } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function TrendingIntelligence() {
    // Curate a set of "Trending" posts
    const trendingPosts = BLOG_POSTS.slice(0, 4);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(95,211,230,0.05),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Activity className="w-5 h-5 text-brand-cyan" />
                            <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em]">Real-Time Feed</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                            Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-cyan">Intelligence.</span>
                        </h2>
                    </div>

                    <Link href="/blog" className="group flex items-center gap-3 text-white/40 hover:text-brand-cyan transition-colors text-[10px] font-black uppercase tracking-[0.3em]">
                        Browse All Intel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-6 hover:bg-white/[0.08] hover:border-brand-cyan/20 transition-all duration-500"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                                    <Image
                                        src={post.featuredImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full border border-white/10">
                                            <TrendingUp className="w-3 h-3 text-brand-cyan" />
                                            <span className="text-[8px] font-black text-white uppercase tracking-widest">Viral</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[9px] font-black text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-2 py-0.5 rounded-md">
                                            {post.category}
                                        </span>
                                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h4 className="text-lg font-black text-white uppercase tracking-tight leading-tight group-hover:text-brand-cyan transition-colors line-clamp-2">
                                        {post.title}
                                    </h4>

                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 relative">
                                            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                                        </div>
                                        <span className="text-[10px] font-bold text-white/50">{post.author.name}</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Corner Glow */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

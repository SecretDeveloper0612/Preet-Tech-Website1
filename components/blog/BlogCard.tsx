import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
    post: BlogPost;
}

import { motion } from 'framer-motion';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[3.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_50px_100px_-20px_rgba(95,211,230,0.12)] hover:border-brand-cyan/20"
        >
            {/* Image Container */}
            <Link href={`/blog/${post.slug}`} className="relative aspect-[16/11] overflow-hidden block">
                <Image
                    src={post.featuredImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-5 py-2.5 bg-brand-cyan/20 backdrop-blur-md border border-brand-cyan/30 rounded-full text-[9px] font-black text-brand-cyan uppercase tracking-[0.2em]">
                        {post.category}
                    </span>
                </div>

                {/* Metadata Overlay (Image-Integrated) */}
                <div className="absolute bottom-6 left-6 flex items-center gap-6 text-[10px] font-black text-white uppercase tracking-[0.25em]">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-cyan" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-cyan" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </Link>

            {/* Content Body */}
            <div className="p-8 md:p-10 flex flex-col flex-grow">
                <Link href={`/blog/${post.slug}`} className="block mb-6">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[1.1] transition-colors group-hover:text-brand-cyan group-hover:underline underline-offset-4 decoration-brand-cyan/30">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-slate-500 dark:text-slate-400 text-[15px] font-medium leading-[1.7] mb-10 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Footer Section */}
                <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative ring-1 ring-slate-200 dark:ring-white/10 shadow-sm">
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-0.5">Strategist</span>
                            <span className="text-sm font-black text-slate-900 dark:text-white tracking-tight leading-none">{post.author.name}</span>
                        </div>
                    </div>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="w-14 h-14 rounded-full border border-slate-100 dark:border-white/10 flex items-center justify-center bg-white dark:bg-transparent shadow-lg group/btn hover:border-brand-cyan hover:scale-105 transition-all duration-300"
                    >
                        <ArrowRight className="w-6 h-6 text-brand-cyan transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

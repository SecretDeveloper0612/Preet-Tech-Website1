import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog-data';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

interface FeaturedSectionProps {
    posts: BlogPost[];
}

export default function FeaturedSection({ posts }: FeaturedSectionProps) {
    const featuredPosts = posts.filter(p => p.isFeatured) || [posts[0]];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const secondaryPosts = posts.filter(p => !featuredPosts.includes(p)).slice(0, 3);

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, [featuredPosts.length]);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
    }, [featuredPosts.length]);

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(handleNext, 6000);
        }
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlaying, handleNext]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.05
        })
    };

    if (posts.length === 0) return null;

    const currentPost = featuredPosts[currentIndex];

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-1px bg-brand-cyan" />
                            <span className="text-brand-cyan text-[11px] font-bold uppercase tracking-[0.3em]">Editorial Showcase</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-cyan not-italic">Featured</span> List.
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handlePrev}
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                            className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan group transition-all"
                        >
                            <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-slate-950 transition-colors" />
                        </button>
                        <button
                            onClick={handleNext}
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                            className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan group transition-all"
                        >
                            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-slate-950 transition-colors" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Main Featured Carousel Area */}
                    <div className="lg:col-span-8 relative group h-[450px] md:h-[600px] lg:h-[650px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.6 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(_, info) => {
                                    if (info.offset.x > 100) handlePrev();
                                    else if (info.offset.x < -100) handleNext();
                                }}
                                className="absolute inset-0"
                            >
                                <Link href={`/blog/${currentPost.slug}`} className="block relative w-full h-full overflow-hidden rounded-[4rem] bg-slate-950 shadow-2xl">
                                    <Image
                                        src={currentPost.featuredImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}
                                        alt={currentPost.title}
                                        fill
                                        className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent z-10" />

                                    <div className="absolute inset-0 z-20 p-10 md:p-20 flex flex-col justify-center">
                                        <div className="max-w-4xl">
                                            <div className="flex items-center gap-6 mb-12">
                                                <span className="px-8 py-3 bg-brand-cyan text-slate-950 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(95,211,230,0.3)]">
                                                    {currentPost.category}
                                                </span>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                                                    <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Active Segment</span>
                                                </div>
                                            </div>

                                            <h3 className="text-5xl md:text-7xl lg:text-[100px] font-black text-brand-cyan uppercase tracking-tighter leading-[0.85] mb-12 group-hover:text-white transition-colors duration-700">
                                                {currentPost.title.split(' ').slice(0, 3).join(' ')} <br />
                                                <span className="text-white group-hover:text-brand-cyan transition-colors duration-700">{currentPost.title.split(' ').slice(3).join(' ')}</span>
                                            </h3>

                                            <p className="hidden md:block text-slate-300 text-xl font-medium mb-16 max-w-2xl leading-relaxed opacity-80">
                                                {currentPost.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden bg-brand-medium/20 text-brand-cyan border-2 border-brand-cyan/30 relative">
                                                        <Image src={currentPost.author.avatar} alt={currentPost.author.name} fill className="object-cover" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-white font-black text-lg tracking-tight leading-none mb-1">{currentPost.author.name}</span>
                                                        <span className="text-white/40 text-xs uppercase font-black tracking-[0.2em]">{currentPost.author.role}</span>
                                                    </div>
                                                </div>

                                                <div className="hidden lg:flex items-center gap-10">
                                                    <div className="flex items-center gap-3 text-white/60 text-xs font-black uppercase tracking-widest">
                                                        <Clock className="w-5 h-5 text-brand-cyan" />
                                                        {currentPost.readTime}
                                                    </div>

                                                    {/* Progress Line */}
                                                    <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden relative">
                                                        <motion.div
                                                            key={`progress-${currentIndex}`}
                                                            initial={{ width: 0 }}
                                                            animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                                                            transition={{ duration: 6, ease: "linear" }}
                                                            className="absolute inset-0 bg-brand-cyan h-full"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Bar Indicators */}
                        <div className="absolute bottom-10 right-10 z-30 flex gap-2">
                            {featuredPosts.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 bg-brand-cyan' : 'w-2 bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Side List - Stays static or shows different set */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Trending Insights</span>
                            <Link href="/blog" className="text-[10px] font-bold text-brand-cyan uppercase hover:underline">View All</Link>
                        </div>
                        {secondaryPosts.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <Link href={`/blog/${post.slug}`} className="flex gap-4">
                                    <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                                        <Image
                                            src={post.featuredImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2426&auto=format&fit=crop"}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-sm md:text-md font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight mb-2 group-hover:text-brand-cyan transition-colors line-clamp-2">
                                            {post.title}
                                        </h4>
                                        <div className="flex items-center gap-3 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                                            <span className="text-brand-cyan/80">{post.category}</span>
                                            <div className="w-1 h-1 rounded-full bg-slate-800" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

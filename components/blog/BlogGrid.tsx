import React from 'react';
import { BlogPost } from '@/lib/blog-data';
import BlogCard from './BlogCard';

interface BlogGridProps {
    posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    if (posts.length === 0) {
        return (
            <div className="py-20 text-center">
                <h3 className="text-2xl font-bold text-slate-400 mb-4">No articles found matching your criteria.</h3>
                <p className="text-slate-500">Try adjusting your filters or search terms.</p>
            </div>
        );
    }

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}

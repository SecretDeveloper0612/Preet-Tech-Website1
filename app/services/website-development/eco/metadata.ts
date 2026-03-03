import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Eco Website Development | Affordable Professional Websites from ₹3,999 | Preet Tech',
    description:
        'Get a professional, mobile-responsive, and SEO-ready website built in just 3–7 days starting at ₹3,999. Preet Tech\'s Eco Website Plan is perfect for small businesses, startups, freelancers, and local shops across India.',
    keywords: [
        'eco website development',
        'affordable website design India',
        'cheap website development',
        'professional website for small business',
        'responsive website design India',
        'website development starting at 3999',
        'small business website',
        'budget website design',
        'website for startup India',
        'SEO ready website India',
        'mobile friendly website design',
        'website development 7 days',
        'Preet Tech website',
        'low cost web design India',
        'WordPress website India',
    ],
    openGraph: {
        title: 'Eco Website Development — Professional Sites from ₹3,999 | Preet Tech',
        description:
            'Launch your business online in just 3–7 days with a fully mobile-responsive, SEO-optimized website. Preet Tech\'s Eco plan includes domain setup, contact form, WhatsApp chat, and more.',
        url: 'https://preettech.com/services/website-development/eco',
        siteName: 'Preet Tech',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/og/eco-website-development.png',
                width: 1200,
                height: 630,
                alt: 'Eco Website Development by Preet Tech — Affordable, Fast & SEO-Ready',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Eco Website Development from ₹3,999 | Preet Tech',
        description:
            'Professional, mobile-responsive websites launched in 3–7 days. Budget-friendly plans for small businesses, freelancers, and startups.',
        images: ['/og/eco-website-development.png'],
        creator: '@PreetTech',
    },
    alternates: {
        canonical: 'https://preettech.com/services/website-development/eco',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

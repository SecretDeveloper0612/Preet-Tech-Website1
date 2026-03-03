"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EcoWebsiteDevelopment;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var Navbar_1 = require("@/components/Navbar");
var Footer_1 = require("@/components/Footer");
var ThreeSphere_1 = require("@/components/ThreeSphere");
// GSAP removed for performance
// --- 🛰️ Lightweight Static Background (CSS-only, no JS animations) ---
var TechnicalBackground = function (_a) {
    var isDarkMode = _a.isDarkMode;
    return (<div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Static mesh grid — CSS background-image, zero JS cost */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(to right, #3F8FCC 1px, transparent 1px), linear-gradient(to bottom, #3F8FCC 1px, transparent 1px)",
            backgroundSize: '40px 40px',
        }}/>
        {/* Two static ambient glows — no animation, GPU-composited */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3f8fcc]/5 blur-[100px] rounded-full opacity-60"/>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3f8fcc]/5 blur-[100px] rounded-full opacity-40"/>
    </div>);
};
function EcoWebsiteDevelopment() {
    var _this = this;
    var _a = (0, react_1.useState)(false), isDarkMode = _a[0], setIsDarkMode = _a[1];
    var _b = (0, react_1.useState)(null), openFAQ = _b[0], setOpenFAQ = _b[1];
    var _c = (0, react_1.useState)(false), isVideoOpen = _c[0], setIsVideoOpen = _c[1];
    var _d = (0, react_1.useState)(false), isHovering = _d[0], setIsHovering = _d[1];
    var _e = (0, react_1.useState)(0), portfolioIndex = _e[0], setPortfolioIndex = _e[1];
    var containerRef = (0, react_1.useRef)(null);
    var targetAudienceRef = (0, react_1.useRef)(null);
    var portfolioSliderRef = (0, react_1.useRef)(null);
    // Form State
    var _f = (0, react_1.useState)({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        budget: '₹5k - ₹10k', // default from options
    }), formData = _f[0], setFormData = _f[1];
    var _g = (0, react_1.useState)('idle'), submitStatus = _g[0], setSubmitStatus = _g[1];
    var handleFormSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setSubmitStatus('loading');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch('/api/leads', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(formData)
                        })];
                case 2:
                    res = _a.sent();
                    if (res.ok) {
                        setSubmitStatus('success');
                        setFormData({ name: '', businessName: '', email: '', phone: '', budget: '₹5k - ₹10k' });
                        setTimeout(function () { return setSubmitStatus('idle'); }, 5000);
                    }
                    else {
                        setSubmitStatus('error');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Form submission error:", error_1);
                    setSubmitStatus('error');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // Form State
    var _h = (0, react_1.useState)({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        budget: '₹5k - ₹10k', // default from options
    }), formData = _h[0], setFormData = _h[1];
    var _j = (0, react_1.useState)('idle'), submitStatus = _j[0], setSubmitStatus = _j[1];
    var handleFormSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var res, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setSubmitStatus('loading');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch('/api/leads', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(formData)
                        })];
                case 2:
                    res = _a.sent();
                    if (res.ok) {
                        setSubmitStatus('success');
                        setFormData({ name: '', businessName: '', email: '', phone: '', budget: '₹5k - ₹10k' });
                        // Reset success message after 5 seconds
                        setTimeout(function () { return setSubmitStatus('idle'); }, 5000);
                    }
                    else {
                        setSubmitStatus('error');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Form submission error:", error_2);
                    setSubmitStatus('error');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // Form State
    var _k = (0, react_1.useState)({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        budget: '₹5k - ₹10k', // default from options
    }), formData = _k[0], setFormData = _k[1];
    var _l = (0, react_1.useState)('idle'), submitStatus = _l[0], setSubmitStatus = _l[1];
    var handleFormSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var res, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setSubmitStatus('loading');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch('/api/leads', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(formData)
                        })];
                case 2:
                    res = _a.sent();
                    if (res.ok) {
                        setSubmitStatus('success');
                        setFormData({ name: '', businessName: '', email: '', phone: '', budget: '₹5k - ₹10k' });
                        setTimeout(function () { return setSubmitStatus('idle'); }, 5000);
                    }
                    else {
                        setSubmitStatus('error');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("Form submission error:", error_3);
                    setSubmitStatus('error');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var portfolioItems = [
        { title: "Invest Nest Fintech", category: "Fintech", image: "/portfolio/investnest.png", link: "https://www.investnestfintech.com/" },
        { title: "Modern E-Commerce", category: "Retail", image: "/portfolio/ecommerce.png", link: "#" },
        { title: "Creative Agency", category: "Portfolio", image: "/portfolio/agency.png", link: "#" },
    ];
    var scrollPortfolio = function (dir) {
        var newIndex = dir === 'left'
            ? Math.max(0, portfolioIndex - 1)
            : Math.min(portfolioItems.length - 1, portfolioIndex + 1);
        setPortfolioIndex(newIndex);
        if (portfolioSliderRef.current) {
            var cardWidth = portfolioSliderRef.current.clientWidth;
            portfolioSliderRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
        }
    };
    var goToPortfolioSlide = function (index) {
        setPortfolioIndex(index);
        if (portfolioSliderRef.current) {
            var cardWidth = portfolioSliderRef.current.clientWidth;
            portfolioSliderRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
        }
    };
    var scrollAudience = function (dir) {
        if (targetAudienceRef.current) {
            var scrollAmount = window.innerWidth > 768 ? 400 : 250;
            targetAudienceRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };
    // Auto-scroll loop for the Audience Carousel — throttled with setInterval (16ms ≈ 60fps max, no layout thrashing)
    (0, react_1.useEffect)(function () {
        if (isHovering || !targetAudienceRef.current)
            return;
        var intervalId = setInterval(function () {
            var el = targetAudienceRef.current;
            if (!el)
                return;
            el.scrollLeft += 1;
            if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 5) {
                el.scrollLeft = 0;
            }
        }, 16);
        return function () { return clearInterval(intervalId); };
    }, [isHovering]);
    // Initial theme setup
    (0, react_1.useEffect)(function () {
        var isDark = false;
        setIsDarkMode(isDark);
    }, []);
    var toggleTheme = function () {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            /* handled by next-themes */
        }
        else {
            /* handled by next-themes */
        }
    };
    // GSAP ScrollTrigger animations removed for performance
    var toggleFAQ = function (index) {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    return (<main ref={containerRef} className="relative z-10 selection:bg-[#3f8fcc]/30 overflow-x-hidden bg-white text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-500 font-sans" style={{ willChange: 'scroll-position' }}>

            {/* JSON-LD Structured Data for Rich Snippets */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify([
                {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Eco Website Development",
                    "provider": {
                        "@type": "Organization",
                        "name": "Preet Tech",
                        "url": "https://preettech.com",
                        "logo": "https://preettech.com/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "Customer Service",
                            "availableLanguage": ["English", "Hindi"]
                        }
                    },
                    "description": "Professional, mobile-responsive, and SEO-ready websites built in 3–7 days starting at ₹3,999. Includes domain setup, contact form, WhatsApp chat integration, social media links, and basic SEO for small businesses, startups, and freelancers across India.",
                    "areaServed": "India",
                    "offers": {
                        "@type": "Offer",
                        "price": "3999",
                        "priceCurrency": "INR",
                        "priceValidUntil": "2026-12-31",
                        "availability": "https://schema.org/InStock",
                        "description": "Eco-Budget Website Plan: 3–5 page responsive website with SEO setup, contact form, WhatsApp chat, hosting guidance, and domain setup."
                    },
                    "serviceType": "Website Development",
                    "category": "Web Design & Development"
                },
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How long does it take to build an eco website?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Typically 3–7 working days depending on content and feedback availability. Our rapid launch process ensures your business is live quickly without compromising quality."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is domain registration included in the eco website plan?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We provide complete domain setup assistance and guide you through the purchase. The domain registration cost is separate from the plan, but we make the process seamless."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I upgrade from the eco plan to a premium plan later?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely! You can upgrade to our advanced or enterprise website plans at any time. Your eco website serves as a strong foundation to build upon."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide post-launch support?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer post-launch support and maintenance to ensure your website runs smoothly. Optional maintenance plans are also available for ongoing updates."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How many revision rounds are included?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We include one revision round during the design phase to incorporate your feedback and ensure the final website aligns perfectly with your brand vision."
                            }
                        }
                    ]
                }
            ])
        }}/>
            <Navbar_1.default isDark={isDarkMode} toggleTheme={toggleTheme}/>

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode}/>
                <ThreeSphere_1.default />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 hero-content text-center lg:text-left">
                        <span className="inline-block px-4 py-1 rounded-full bg-[#3f8fcc]/10 dark:bg-[#3f8fcc]/10 text-[#3f8fcc] dark:text-[#3f8fcc] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#3f8fcc]/20 dark:border-[#3f8fcc]/20">
                            Affordable Website Development in India
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
                            Professional Websites <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3f8fcc] to-brand-medium">Starting ₹3,999.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Get a fully responsive, SEO-ready, and mobile-optimized website for your small business or startup — delivered in just <strong>3–7 working days</strong>. No hidden charges, no technical headaches.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button onClick={function () { return setIsVideoOpen(true); }} className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#3f8fcc] hover:bg-[#3f8fcc]/90 text-white rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-[#3f8fcc]/25 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer">
                                Watch Demo <lucide_react_1.Play className="w-4 h-4 fill-white"/>
                            </button>
                            <a href="#pricing" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center text-sm sm:text-base">
                                View Pricing
                            </a>
                        </div>
                    </div>

                    <div className="relative hero-content mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-slate-200 dark:border-slate-800">
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                                    <div className="relative group">
                                        <lucide_react_1.User strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors"/>
                                        <input required type="text" value={formData.name} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { name: e.target.value })); }} placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all text-sm text-slate-700 dark:text-slate-200"/>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Business Name</label>
                                    <div className="relative group">
                                        <lucide_react_1.Building2 strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors"/>
                                        <input required type="text" value={formData.businessName} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { businessName: e.target.value })); }} placeholder="Your Company Ltd." className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all text-sm text-slate-700 dark:text-slate-200"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                                        <div className="relative group">
                                            <lucide_react_1.Mail strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors"/>
                                            <input required type="email" value={formData.email} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { email: e.target.value })); }} placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all text-sm text-slate-700 dark:text-slate-200"/>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Phone</label>
                                        <div className="relative group">
                                            <lucide_react_1.Phone strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors"/>
                                            <input required type="tel" value={formData.phone} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { phone: e.target.value })); }} placeholder="+91 98765 43210" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all text-sm text-slate-700 dark:text-slate-200"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Budget Range</label>
                                    <div className="relative group">
                                        <lucide_react_1.CreditCard strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors pointer-events-none"/>
                                        <select required value={formData.budget} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { budget: e.target.value })); }} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm">
                                            <option value="₹5k - ₹10k">₹5k - ₹10k</option>
                                            <option value="₹10k - ₹25k">₹10k - ₹25k</option>
                                            <option value="₹25k - ₹50k">₹25k - ₹50k</option>
                                            <option value="₹50k+">₹50k+</option>
                                        </select>
                                        <lucide_react_1.ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"/>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button disabled={submitStatus === "loading"} type="submit" className="w-full py-4 bg-[#3f8fcc] hover:bg-[#3f8fcc]/90 text-white font-black rounded-2xl transition-all shadow-[0_0_20px_rgba(63,143,204,0.2)] hover:shadow-[0_0_30px_rgba(63,143,204,0.4)] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2">
                                        {submitStatus === "loading" ? "Submitting..." : "Get Free Consultation"} <lucide_react_1.ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1"/>
                                    </button>
                                </div>
                                {submitStatus === 'success' && (<p className="text-emerald-500 text-xs font-bold text-center mt-2">Success! We will be in touch shortly.</p>)}
                                {submitStatus === 'error' && (<p className="text-red-500 text-xs font-bold text-center mt-2">Something went wrong. Please try again.</p>)}
                            </form>
                        </div>

                        {/* Blob Background Details */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#3f8fcc]/20 to-brand-medium/20 rounded-full blur-[100px] -z-10 animate-pulse"/>
                    </div>
                </div>
            </section>

            {/* 2️⃣ Why Do Businesses Need This? */}
            <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900/40 reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode}/>

                {/* Static ambient blobs — no JS animation cost */}
                <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
                    <div className="absolute w-64 h-64 bg-[#3f8fcc]/8 blur-[80px] rounded-full" style={{ left: '10%', top: '20%' }}/>
                    <div className="absolute w-64 h-64 bg-[#3f8fcc]/6 blur-[80px] rounded-full" style={{ left: '55%', top: '50%' }}/>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <framer_motion_1.motion.span className="text-[#3f8fcc] font-bold uppercase tracking-widest text-[10px] md:text-xs">
                                The Digital Necessity
                            </framer_motion_1.motion.span>
                            <framer_motion_1.motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-4 mb-6 text-slate-900 dark:text-white leading-[1.2]">
                                Why Every Small Business <br className="hidden sm:block"/>Needs a Website in 2025.
                            </framer_motion_1.motion.h2>
                        </div>
                        <ul className="space-y-6">
                            {[
            { title: "Online visibility 24/7, 365 days", desc: "97% of consumers search online before buying. Be discoverable round the clock, even while you sleep." },
            { title: "Builds instant trust & credibility", desc: "A professional website signals legitimacy. Customers trust businesses with an online presence 3x more." },
            { title: "Generates and captures leads automatically", desc: "Built-in contact forms and WhatsApp chat turn visitors into paying customers on autopilot." },
            { title: "Showcases your products & services professionally", desc: "Present your offerings in the best light with a clean, modern design that converts browsers into buyers." },
            { title: "Affordable entry into digital growth", desc: "Start your digital journey without breaking the bank. Scale up anytime as your business grows." }
        ].map(function (item, i) { return (<framer_motion_1.motion.li key={i} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-[#3f8fcc]/20 flex items-center justify-center shrink-0 group-hover:bg-[#3f8fcc] group-hover:scale-110 transition-all duration-300">
                                        <lucide_react_1.Check className="w-4 h-4 text-[#3f8fcc] group-hover:text-slate-950 transition-colors"/>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-slate-900 dark:text-white leading-none group-hover:text-[#3f8fcc] transition-colors">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                                    </div>
                                </framer_motion_1.motion.li>); })}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-[#3f8fcc]/10 blur-[100px] rounded-full opacity-30"/>
                        <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-8 shadow-2xl border border-white/20 dark:border-white/5">
                            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                                {[
            { icon: lucide_react_1.Globe, color: "text-[#3f8fcc]", bg: "bg-[#3f8fcc]/10", barBg: "bg-[#3f8fcc]", glow: "hover:shadow-[#3f8fcc]/20", progress: "85%", label: "99.9% Uptime", sub: "Global Availability" },
            { icon: lucide_react_1.BarChart3, color: "text-blue-500", bg: "bg-blue-500/10", barBg: "bg-blue-500", glow: "hover:shadow-blue-500/20", progress: "70%", label: "3.5x Growth", sub: "Performance KPI", shift: true },
            { icon: lucide_react_1.User, color: "text-orange-500", bg: "bg-orange-500/10", barBg: "bg-orange-500", glow: "hover:shadow-orange-500/20", progress: "78%", label: "10k+ Trust", sub: "User Credibility", dot: "bg-indigo-500" },
            { icon: lucide_react_1.ShieldCheck, color: "text-purple-500", bg: "bg-purple-500/10", barBg: "bg-purple-500", glow: "hover:shadow-purple-500/20", progress: "90%", label: "SSL Secure", sub: "Data Protection", shift: true }
        ].map(function (stat, i) { return (<framer_motion_1.motion.div key={i} transition={{ delay: i * 0.1 }} whileHover={{ y: -5, scale: 1.02 }} className={"bg-white dark:bg-slate-900/80 p-4 sm:p-6 rounded-[1.25rem] sm:rounded-2xl border border-slate-100 dark:border-white/5 relative overflow-hidden group/stat transition-all duration-300 shadow-sm hover:shadow-xl ".concat(stat.shift ? 'mt-6 sm:mt-8' : '', " ").concat(stat.glow)}>
                                        {/* Floating decorative dot (like in the design for specific cards) */}
                                        {stat.dot && (<framer_motion_1.motion.div animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className={"absolute top-8 left-20 sm:top-10 sm:left-[6.5rem] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ".concat(typeof stat.dot === 'string' ? stat.dot : stat.color.replace('text', 'bg'), " opacity-90")}/>)}

                                        <div className={"w-10 h-10 sm:w-12 sm:h-12 rounded-[0.85rem] sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 relative overflow-hidden"}>
                                            <div className={"absolute inset-0 ".concat(stat.bg, " group-hover/stat:scale-125 transition-transform duration-500")}/>
                                            <stat.icon className={"w-5 h-5 sm:w-6 sm:h-6 ".concat(stat.color, " relative z-10 group-hover/stat:scale-110 transition-transform duration-300")}/>
                                        </div>
                                        <div className="space-y-0.5 sm:space-y-1 relative z-10">
                                            <h4 className="text-[13px] sm:text-lg font-black text-slate-900 dark:text-white leading-tight truncate">
                                                {stat.label}
                                            </h4>
                                            <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest break-words leading-tight">{stat.sub}</p>
                                        </div>

                                        {/* Animated Progress Bar */}
                                        <div className="mt-4 sm:mt-5 h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                                            <framer_motion_1.motion.div initial={{ width: '0%' }} whileInView={{ width: stat.progress }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }} className={"h-full relative overflow-hidden ".concat(stat.barBg)}>
                                                <framer_motion_1.motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }} className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/30 to-transparent"/>
                                            </framer_motion_1.motion.div>
                                        </div>

                                        {/* Subtle Hover Glow Background */}
                                        <div className={"absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 ".concat(stat.bg, " rounded-full blur-2xl opacity-0 group-hover/stat:opacity-60 transition-opacity duration-500")}/>
                                    </framer_motion_1.motion.div>); })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech */}
            <section className="py-24 px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-[#3f8fcc] font-bold uppercase tracking-widest text-[10px] md:text-xs">Why Preet Tech</span>
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mt-4 text-slate-900 dark:text-white leading-tight">The Best Affordable Website Development Partner in India</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">Trusted by 150+ startups, freelancers, and SMEs across India for delivering polished websites fast and within budget.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
            { title: "Rapid 3–7 Day Delivery", subtitle: "Concept to Live Site, Fast", icon: lucide_react_1.Rocket },
            { title: "Budget-Friendly Pricing", subtitle: "Starting at Just ₹3,999", icon: lucide_react_1.CreditCard },
            { title: "Premium UI/UX Design", subtitle: "Modern, Clean & Conversion-Focused", icon: lucide_react_1.PenTool },
            { title: "SEO-Ready Website Structure", subtitle: "Built for Google Rankings", icon: lucide_react_1.Search },
            { title: "100% Mobile Optimized", subtitle: "Flawless on All Devices", icon: lucide_react_1.Smartphone },
            { title: "Dedicated Post-Launch Support", subtitle: "We Don't Disappear After Launch", icon: lucide_react_1.User }
        ].map(function (item, i) { return (<div key={i} className="group p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-[#3f8fcc]/50 hover:shadow-xl hover:shadow-[#3f8fcc]/10 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-[#3f8fcc] group-hover:text-white transition-colors">
                                    <item.icon className="w-7 h-7 text-slate-700 dark:text-slate-300 group-hover:text-white"/>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{item.subtitle}</p>
                            </div>); })}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who Is This For? */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode}/>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-[#3f8fcc] font-bold uppercase tracking-widest text-xs">Perfect For</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white">Who Needs an Eco Website?</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">Whether you&apos;re a local shop owner, a freelancer, or a growing startup — our eco plan is designed to get <em>your</em> business online affordably.</p>
                    </div>
                </div>

                {/* Interactive & Infinite Carousel Container */}
                <div className="relative group/carousel mt-8" onMouseEnter={function () { return setIsHovering(true); }} onMouseLeave={function () { return setIsHovering(false); }}>
                    {/* Fade Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"/>
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"/>

                    {/* Navigation Buttons */}
                    <button onClick={function () { return scrollAudience('left'); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white flex items-center justify-center hover:bg-[#3f8fcc] hover:border-[#3f8fcc] hover:text-slate-950 dark:hover:bg-[#3f8fcc] dark:hover:border-[#3f8fcc] dark:hover:text-slate-950 transition-all shadow-xl opacity-0 md:group-hover/carousel:opacity-100 focus:opacity-100 pointer-events-auto cursor-pointer translate-x-4 md:group-hover/carousel:translate-x-0">
                        <lucide_react_1.ChevronLeft className="w-5 h-5 md:w-6 md:h-6"/>
                    </button>
                    <button onClick={function () { return scrollAudience('right'); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white flex items-center justify-center hover:bg-[#3f8fcc] hover:border-[#3f8fcc] hover:text-slate-950 dark:hover:bg-[#3f8fcc] dark:hover:border-[#3f8fcc] dark:hover:text-slate-950 transition-all shadow-xl opacity-0 md:group-hover/carousel:opacity-100 focus:opacity-100 pointer-events-auto cursor-pointer -translate-x-4 md:group-hover/carousel:translate-x-0">
                        <lucide_react_1.ChevronRight className="w-5 h-5 md:w-6 md:h-6"/>
                    </button>

                    <style jsx>{"\n                        /* CSS native scrollbar hiding */\n                        .hide-scroll {\n                            -ms-overflow-style: none; /* IE and Edge */\n                            scrollbar-width: none;    /* Firefox */\n                        }\n                        .hide-scroll::-webkit-scrollbar {\n                            display: none; /* Chrome, Safari and Opera */\n                        }\n                    "}</style>

                    <div ref={targetAudienceRef} className="flex overflow-x-auto hide-scroll gap-4 md:gap-6 py-4 px-[5vw] md:px-[10vw]" style={{ cursor: 'grab' }}>
                        {[
            { label: "Local Shops", icon: lucide_react_1.Building2 },
            { label: "Freelancers", icon: lucide_react_1.User },
            { label: "Coaches", icon: lucide_react_1.MessageSquare },
            { label: "Consultants", icon: lucide_react_1.Briefcase },
            { label: "Startups", icon: lucide_react_1.Rocket },
            { label: "Small Agencies", icon: lucide_react_1.Globe },
            { label: "Personal Brands", icon: lucide_react_1.Sparkles },
            { label: "Health Clinics", icon: lucide_react_1.Heart },
            { label: "Restaurants", icon: lucide_react_1.Coffee },
            { label: "NGOs", icon: lucide_react_1.ShieldCheck },
            { label: "Real Estate", icon: lucide_react_1.Home },
            { label: "Content Creators", icon: lucide_react_1.Image },
            { label: "E-Commerce", icon: lucide_react_1.Zap },
            { label: "Photographers", icon: lucide_react_1.Camera },
            { label: "Event Planners", icon: lucide_react_1.Calendar },
            { label: "Education", icon: lucide_react_1.Code2 },
            // Doubled for smooth automatic infinite loop illusion
            { label: "Local Shops", icon: lucide_react_1.Building2 },
            { label: "Freelancers", icon: lucide_react_1.User },
            { label: "Coaches", icon: lucide_react_1.MessageSquare },
            { label: "Consultants", icon: lucide_react_1.Briefcase },
            { label: "Startups", icon: lucide_react_1.Rocket },
            { label: "Small Agencies", icon: lucide_react_1.Globe },
            { label: "Personal Brands", icon: lucide_react_1.Sparkles },
            { label: "Health Clinics", icon: lucide_react_1.Heart },
        ].map(function (item, i) { return (<div key={i} className="shrink-0 w-[140px] md:w-[200px] flex flex-col items-center justify-center p-6 md:p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm hover:shadow-md transition-all text-center group z-10">
                                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[#3f8fcc] mb-3 md:mb-4 group-hover:scale-110 transition-transform"/>
                                <span className="font-bold text-slate-900 dark:text-white text-[11px] md:text-sm whitespace-nowrap tracking-wide">{item.label}</span>
                            </div>); })}
                    </div>
                </div>
            </section>

            {/* 4.5️⃣ Technologies We Use */}
            <section className="py-24 px-6 reveal-section bg-slate-50 dark:bg-slate-950/30 border-y border-slate-100 dark:border-white/5 relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode}/>

                {/* Premium Glow Effects */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#3f8fcc]/5 dark:bg-[#3f8fcc]/5 blur-[120px] rounded-full pointer-events-none"/>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3f8fcc]/5 dark:bg-[#3f8fcc]/5 blur-[100px] rounded-full pointer-events-none"/>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16 md:mb-20">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-[#3f8fcc] mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#3f8fcc] animate-pulse"/>
                            Tech Stack
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                            Technologies We Use
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                            We leverage modern, scalable technologies to deliver secure, high-performing digital experiences.
                        </p>
                    </div>

                    <style jsx>{"\n                        @keyframes scroll-left {\n                            0% { transform: translate3d(0, 0, 0); }\n                            100% { transform: translate3d(-50%, 0, 0); }\n                        }\n                        .animate-scroll-left {\n                            animation: scroll-left 40s linear infinite;\n                            will-change: transform;\n                            backface-visibility: hidden;\n                            perspective: 1000px;\n                        }\n                        .animate-scroll-left:hover {\n                            animation-play-state: paused;\n                        }\n\n                        @keyframes scroll-right {\n                            0% { transform: translate3d(-50%, 0, 0); }\n                            100% { transform: translate3d(0, 0, 0); }\n                        }\n                        .animate-scroll-right {\n                            animation: scroll-right 40s linear infinite;\n                            will-change: transform;\n                            backface-visibility: hidden;\n                            perspective: 1000px;\n                        }\n                        .animate-scroll-right:hover {\n                            animation-play-state: paused;\n                        }\n\n                        /* Isolate carousel rows from page scroll compositing */\n                        .carousel-track-wrapper {\n                            contain: layout style;\n                            transform: translateZ(0);\n                        }\n                    "}</style>

                    <div className="carousel-track-wrapper relative flex flex-col gap-4 overflow-hidden py-2 max-w-[100vw] -mx-6 md:-mx-12 px-6 md:px-12">
                        {/* Fade Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-slate-50 dark:from-slate-950/30 z-10 pointer-events-none"/>
                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-slate-50 dark:from-slate-950/30 z-10 pointer-events-none"/>

                        {/* Row 1: Scroll Left */}
                        <div className="flex animate-scroll-left w-max gap-4">
                            {[
            { name: "React", category: "Frontend", icon: lucide_react_1.Code2 },
            { name: "Vercel", category: "Deployment", icon: lucide_react_1.Cloud },
            { name: "GoDaddy", category: "Hosting", icon: lucide_react_1.Globe },
            { name: "Appwrite", category: "Backend", icon: lucide_react_1.Settings },
            { name: "WordPress", category: "CMS", icon: lucide_react_1.FileCode },
            { name: "Magento", category: "E-commerce", icon: lucide_react_1.ShoppingCart },
            { name: "HubSpot", category: "CRM", icon: lucide_react_1.Users },
            // Duplicated for infinite loop
            { name: "React", category: "Frontend", icon: lucide_react_1.Code2 },
            { name: "Vercel", category: "Deployment", icon: lucide_react_1.Cloud },
            { name: "GoDaddy", category: "Hosting", icon: lucide_react_1.Globe },
            { name: "Appwrite", category: "Backend", icon: lucide_react_1.Settings },
            { name: "WordPress", category: "CMS", icon: lucide_react_1.FileCode },
            { name: "Magento", category: "E-commerce", icon: lucide_react_1.ShoppingCart },
            { name: "HubSpot", category: "CRM", icon: lucide_react_1.Users },
        ].map(function (tech, i) { return (<div key={i} className="group flex flex-col w-[160px] md:w-[180px] shrink-0 items-center justify-center p-4 md:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-[#3f8fcc]/40 dark:hover:border-[#3f8fcc]/40 shadow-sm hover:shadow-[0_10px_40px_rgba(63,143,204,0.15)] dark:hover:shadow-[0_0_30px_rgba(63,143,204,0.2)] transition-all duration-500 relative overflow-hidden cursor-default">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#3f8fcc]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>

                                    <tech.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-800 dark:text-white mb-3 group-hover:scale-110 group-hover:text-[#3f8fcc] transition-all duration-300" strokeWidth={1.5}/>

                                    <span className="font-black text-sm md:text-base text-slate-800 dark:text-white tracking-tight relative z-10 group-hover:text-[#3f8fcc] transition-colors duration-300">
                                        {tech.name}
                                    </span>
                                    <span className="text-[9px] md:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mt-1 relative z-10 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors duration-300">
                                        {tech.category}
                                    </span>

                                    {/* Subtle corner glow on hover */}
                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#3f8fcc]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                </div>); })}
                        </div>

                        {/* Row 2: Scroll Right */}
                        <div className="flex animate-scroll-right w-max gap-4">
                            {[
            { name: "Next.js", category: "Framework", icon: lucide_react_1.Layout },
            { name: "Hostinger", category: "Hosting", icon: lucide_react_1.Server },
            { name: "BigRock", category: "Hosting", icon: lucide_react_1.HardDrive },
            { name: "Hygraph", category: "Database", icon: lucide_react_1.Database },
            { name: "Shopify", category: "E-commerce", icon: lucide_react_1.Store },
            { name: "Mailchimp", category: "Marketing", icon: lucide_react_1.Mail },
            // Duplicated for infinite loop
            { name: "Next.js", category: "Framework", icon: lucide_react_1.Layout },
            { name: "Hostinger", category: "Hosting", icon: lucide_react_1.Server },
            { name: "BigRock", category: "Hosting", icon: lucide_react_1.HardDrive },
            { name: "Hygraph", category: "Database", icon: lucide_react_1.Database },
            { name: "Shopify", category: "E-commerce", icon: lucide_react_1.Store },
            { name: "Mailchimp", category: "Marketing", icon: lucide_react_1.Mail },
        ].map(function (tech, i) { return (<div key={"row2-".concat(i)} className="group flex flex-col w-[160px] md:w-[180px] shrink-0 items-center justify-center p-4 md:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl hover:border-[#3f8fcc]/40 dark:hover:border-[#3f8fcc]/40 shadow-sm hover:shadow-[0_10px_40px_rgba(63,143,204,0.15)] dark:hover:shadow-[0_0_30px_rgba(63,143,204,0.2)] transition-all duration-500 relative overflow-hidden cursor-default">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#3f8fcc]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>

                                    <tech.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-800 dark:text-white mb-3 group-hover:scale-110 group-hover:text-[#3f8fcc] transition-all duration-300" strokeWidth={1.5}/>

                                    <span className="font-black text-sm md:text-base text-slate-800 dark:text-white tracking-tight relative z-10 group-hover:text-[#3f8fcc] transition-colors duration-300">
                                        {tech.name}
                                    </span>
                                    <span className="text-[9px] md:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mt-1 relative z-10 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors duration-300">
                                        {tech.category}
                                    </span>

                                    <div className="absolute top-0 left-0 w-16 h-16 bg-[#3f8fcc]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                </div>); })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ What You Get in Eco-Budget Plan */}
            <section className="py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode}/>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="bg-slate-50 dark:bg-[#030712]/50 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden">

                        {/* High-end aesthetic backgrounds */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-medium/5 blur-[120px] rounded-full pointer-events-none"/>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3f8fcc]/5 blur-[120px] rounded-full pointer-events-none"/>
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-medium/50 to-transparent"/>

                        <div className="text-center mb-10 md:mb-16 relative z-10">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-[#3f8fcc] mb-4">
                                <span className="w-2 h-2 rounded-full bg-[#3f8fcc] animate-pulse"/>
                                Package Inclusions
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
                                Everything Included in Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3f8fcc] to-brand-medium italic">₹3,999 Eco-Website Package.</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">No surprise charges. No add-on traps. One transparent price — everything your business needs to launch online, built right the first time.</p>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {[
            { label: "3–5 Custom Pages", icon: lucide_react_1.FileCode },
            { label: "Lead Capture Contact Form", icon: lucide_react_1.Mail },
            { label: "Basic On-Page SEO Setup", icon: lucide_react_1.Search },
            { label: "100% Mobile Responsive", icon: lucide_react_1.Smartphone },
            { label: "Domain & Hosting Guidance", icon: lucide_react_1.Cloud },
            { label: "WhatsApp Live Chat Button", icon: lucide_react_1.MessageCircle },
            { label: "Social Media Integration", icon: lucide_react_1.Share2 },
            { label: "Domain Registration Setup", icon: lucide_react_1.Globe }
        ].map(function (feature, i) { return (<div key={i} className="group bg-white dark:bg-white/[0.02] p-5 md:p-6 rounded-2xl md:rounded-[1.5rem] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center gap-3 hover:border-[#3f8fcc]/30 hover:shadow-xl hover:shadow-[#3f8fcc]/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                                    {/* Hover gradient bleed */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#3f8fcc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

                                    <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#3f8fcc] transition-all duration-300">
                                        <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#3f8fcc] group-hover:text-white transition-colors duration-300"/>
                                    </div>
                                    <span className="relative z-10 font-bold text-xs md:text-sm text-slate-900 dark:text-white tracking-tight">{feature.label}</span>
                                </div>); })}
                        </div>
                    </div>
                </div>
            </section>



            {/* 7️⃣ Design Style Examples — Horizontal Slider */}
            <section className="py-24 px-6 reveal-section bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    {/* Header + Controls */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
                        <div>
                            <span className="text-[#3f8fcc] font-bold uppercase tracking-widest text-xs">Portfolio</span>
                            <h2 className="text-3xl md:text-5xl font-black mt-2 text-slate-900 dark:text-white">Design Examples</h2>
                        </div>
                        {/* Arrow Controls */}
                        <div className="flex items-center gap-3">
                            <button onClick={function () { return scrollPortfolio('left'); }} disabled={portfolioIndex === 0} className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#3f8fcc] hover:border-[#3f8fcc]/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm">
                                <lucide_react_1.ChevronLeft className="w-5 h-5"/>
                            </button>
                            <button onClick={function () { return scrollPortfolio('right'); }} disabled={portfolioIndex === portfolioItems.length - 1} className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#3f8fcc] hover:border-[#3f8fcc]/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm">
                                <lucide_react_1.ChevronRight className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>

                    {/* Slider Track */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <div ref={portfolioSliderRef} className="flex overflow-x-hidden snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
                            {portfolioItems.map(function (item, i) { return (<a key={i} href={item.link} target={item.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" className="group relative w-full shrink-0 aspect-video bg-slate-900 snap-start block border border-slate-200 dark:border-slate-800 overflow-hidden">
                                    {/* Image */}
                                    <div className="absolute inset-0 bg-slate-800">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" onError={function (e) {
                var _a;
                e.currentTarget.style.display = 'none';
                (_a = e.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('bg-gradient-to-br', 'from-brand-deep', 'to-slate-950');
            }}/>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none z-0">
                                            <lucide_react_1.Image className="w-10 h-10 text-slate-700 mb-2"/>
                                            <span className="text-slate-600 text-[9px] font-bold uppercase tracking-widest">Image Placeholder</span>
                                        </div>
                                    </div>
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 z-10"/>
                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full flex items-end justify-between">
                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="text-[#3f8fcc] text-[10px] font-black uppercase tracking-widest mb-1 block">{item.category}</span>
                                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">{item.title}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-bold text-[10px] uppercase tracking-wider group-hover:bg-[#3f8fcc] group-hover:border-[#3f8fcc] transition-all duration-300">
                                            View Live <lucide_react_1.ExternalLink className="w-3.5 h-3.5"/>
                                        </div>
                                    </div>
                                    {/* Slide counter badge */}
                                    <div className="absolute top-5 right-5 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-white text-[10px] font-black">
                                        {i + 1} / {portfolioItems.length}
                                    </div>
                                </a>); })}
                        </div>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {portfolioItems.map(function (_, i) { return (<button key={i} onClick={function () { return goToPortfolioSlide(i); }} className={"h-1.5 rounded-full transition-all duration-300 ".concat(portfolioIndex === i
                ? 'w-8 bg-[#3f8fcc]'
                : 'w-4 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400')}/>); })}
                    </div>
                </div>
            </section>

            {/* 8️⃣ Performance & Speed Optimization */}
            <section className="py-24 px-6 reveal-section relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/5">
                <TechnicalBackground isDarkMode={isDarkMode}/>

                {/* Premium Glow Effects */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#3f8fcc]/5 dark:bg-[#3f8fcc]/10 blur-[100px] rounded-full pointer-events-none"/>
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#3f8fcc]/5 dark:bg-[#3f8fcc]/5 blur-[100px] rounded-full pointer-events-none"/>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-[#3f8fcc] mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#3f8fcc] animate-pulse"/>
                            Lightning Fast
                        </span>

                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-black mt-2 mb-8 text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                            Performance & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3f8fcc] to-slate-500 dark:to-slate-400">Speed Optimization</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10">
                            {[
            { text: "Optimized Images for fast load", icon: lucide_react_1.Sparkles },
            { text: "Lightweight clean code", icon: lucide_react_1.Code2 },
            { text: "Fast loading pages", icon: lucide_react_1.Zap },
            { text: "Core Web Vitals Ready", icon: lucide_react_1.CheckCircle2 }
        ].map(function (item, i) { return (<div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all group hover:-translate-y-0.5 hover:border-[#3f8fcc]/30 dark:hover:border-[#3f8fcc]/30 cursor-default">
                                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-5 h-5 text-[#3f8fcc]"/>
                                    </div>
                                    <span className="font-bold text-[13px] md:text-sm text-slate-700 dark:text-slate-200 leading-tight">{item.text}</span>
                                </div>); })}
                        </div>

                        <div className="p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl relative overflow-hidden group shadow-lg shadow-slate-200/50 dark:shadow-none">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                                <lucide_react_1.Rocket className="w-24 h-24 text-[#3f8fcc]"/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#3f8fcc]/5 to-transparent dark:from-[#3f8fcc]/10"/>
                            <div className="relative z-10">
                                <p className="text-lg md:text-xl font-black text-[#3f8fcc] mb-3">Google Loves Speed.</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                                    Our websites are engineered to be hyper-lightweight, ensuring incredibly high conversion rates and climbing search rankings from day one.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Premium Speed Gauge Graphic */}
                    <div className="relative flex justify-center items-center py-12 md:py-0">
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                            {/* Detailed Outer Glow Rings */}
                            <div className="absolute inset-0 rounded-full border-[1px] border-[#3f8fcc]/20 dark:border-[#3f8fcc]/30 shadow-[0_0_50px_rgba(63,143,204,0.1)] dark:shadow-[0_0_50px_rgba(63,143,204,0.15)] animate-pulse"/>
                            <div className="absolute inset-4 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shadow-inner"/>
                            <div className="absolute inset-8 rounded-full border border-[#3f8fcc]/10"/>

                            {/* Main Gauge SVG */}
                            <div className="absolute inset-6">
                                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-slate-100 dark:text-slate-800" strokeDasharray="263" strokeDashoffset="60"/>
                                    <framer_motion_1.motion.circle cx="50" cy="50" r="42" fill="none" stroke="url(#speedGradientPremium)" strokeWidth="4" strokeDasharray="263" initial={{ strokeDashoffset: 263 }} whileInView={{ strokeDashoffset: 80 }} viewport={{ once: true }} transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }} strokeLinecap="round"/>
                                    <defs>
                                        <linearGradient id="speedGradientPremium" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3F8FCC"/>
                                            <stop offset="100%" stopColor="#2563eb"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Center Metrics (Elevated Glassmorphism) */}
                            <div className="absolute inset-[15%] rounded-full bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-white/5 shadow-xl flex flex-col items-center justify-center text-center">
                                <framer_motion_1.motion.span initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="text-7xl md:text-[100px] font-black text-slate-900 dark:text-white tracking-widest leading-none drop-shadow-sm">
                                    99
                                </framer_motion_1.motion.span>
                                <span className="text-[#3f8fcc] text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mt-2 md:mt-4">Mobile Score</span>
                            </div>

                            {/* Floating Premium Tech Chips */}
                            <framer_motion_1.motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 right-4 md:-top-6 md:right-8 bg-white/95 dark:bg-slate-800/95 border border-slate-200 dark:border-white/10 px-5 py-3 rounded-xl shadow-xl z-20">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </div>
                                    <span className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tighter">0.5s Load</span>
                                </div>
                            </framer_motion_1.motion.div>

                            <framer_motion_1.motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/4 -left-6 md:-left-12 bg-white/95 dark:bg-slate-800/95 border border-slate-200 dark:border-white/10 px-5 py-3 rounded-xl shadow-xl z-20">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-6 h-6 rounded-full bg-[#3f8fcc]/10 flex items-center justify-center">
                                        <lucide_react_1.Check className="w-3.5 h-3.5 text-[#3f8fcc]"/>
                                    </div>
                                    <span className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tighter">Next.js 14</span>
                                </div>
                            </framer_motion_1.motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9️⃣ Basic SEO Setup */}
            <section className="py-24 px-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode}/>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        {/* Google Search Mockup */}
                        <framer_motion_1.motion.div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-xl mx-auto lg:ml-0 overflow-hidden border border-slate-200 dark:border-white/10">
                            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"/>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                                <div className="w-3 h-3 rounded-full bg-green-400"/>
                                <div className="ml-4 flex-1 h-6 bg-slate-100 dark:bg-slate-700 rounded-full px-4 flex items-center">
                                    <div className="w-24 h-2 bg-slate-400 dark:bg-slate-600 rounded-full"/>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {/* Search Result 1 */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-600"/>
                                        </div>
                                        <span className="text-[10px] text-slate-500">https://www.yourbusiness.com</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:underline cursor-pointer">Premium Website Development | Preet Tech</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Looking for a fast, responsive, and affordable website? Our eco-budget plans offer premium designs to get you online in just 7 days.
                                    </p>
                                </div>

                                {/* Placeholder Results */}
                                <div className="space-y-2 opacity-30">
                                    <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"/>
                                    <div className="w-40 h-3 bg-slate-200 dark:bg-slate-700 rounded-full"/>
                                    <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded-xl"/>
                                </div>
                            </div>

                            {/* Floating "Indexed" Badge */}
                            <framer_motion_1.motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-12 -right-4 bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                <lucide_react_1.CheckCircle2 className="w-3 h-3"/> INDEXED
                            </framer_motion_1.motion.div>
                        </framer_motion_1.motion.div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-[#3f8fcc] font-bold uppercase tracking-widest text-[10px] md:text-xs">Built for Google Rankings</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 text-slate-900 dark:text-white">SEO-Ready Website<br />Structure Included.</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-10 leading-relaxed max-w-md">Every eco website we build is engineered to rank on Google from day one — no costly SEO agency needed to get started.</p>

                        <div className="space-y-6">
                            {[
            { title: "SEO Meta Tags & Title Optimization", desc: "Carefully crafted title tags, meta descriptions, and heading structures for every page to target the right keywords." },
            { title: "Google Search Console & Sitemap Submission", desc: "We submit your sitemap directly to Google Search Console for rapid crawling and faster indexing." },
            { title: "Mobile-First Design (Google's Priority)", desc: "Google uses mobile-first indexing. Every eco website is pixel-perfect on smartphones, tablets, and desktops." },
            { title: "SSL Certificate & HTTPS Security", desc: "SSL-secured HTTPS connection included — a confirmed Google ranking signal that also builds visitor trust." }
        ].map(function (item, i) { return (<div key={i} className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#3f8fcc]/50 transition-colors">
                                        <div className="text-[#3f8fcc] font-black text-xs md:text-sm">0{i + 1}</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>); })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔟 Mobile Responsive Guarantee */}
            <section className="py-16 md:py-24 px-4 sm:px-6 reveal-section">
                <div className="max-w-7xl mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-12 md:p-24 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
                    {/* Abstract Shapes & Gradients for Premium Feel */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-[#3f8fcc]/20 to-transparent dark:from-[#3f8fcc]/20 blur-[120px] rounded-full"/>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-[#3f8fcc]/10 to-transparent dark:from-[#3f8fcc]/20 blur-[120px] rounded-full"/>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
                        <div className="text-center lg:text-left">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-[#3f8fcc] mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-[#3f8fcc] animate-pulse"/>
                                Perfect on Every Screen
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
                                The Multi-Device <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3f8fcc] to-brand-medium pr-2">Guarantee.</span>
                            </h2>
                            <p className="text-sm md:text-lg font-medium text-slate-500 dark:text-slate-400 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                                We don't just "scale" your site. We architect every element to ensure your business looks stunning on smartphones, tablets, and desktops alike with pixel-perfect precision.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                                {["Fluid Layouts", "Retina Ready", "Adaptive UI", "Touch Optimized"].map(function (tag, i) { return (<div key={i} className="px-4 md:px-5 py-2.5 bg-slate-50 hover:bg-[#3f8fcc]/5 dark:bg-white/5 dark:hover:bg-[#3f8fcc]/10 border border-slate-200 hover:border-[#3f8fcc]/30 dark:border-[#3f8fcc]/30 rounded-full text-slate-700 dark:text-white text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all cursor-default shadow-sm dark:shadow-none">
                                        <lucide_react_1.Check className="w-3.5 h-3.5 text-[#3f8fcc]"/> {tag}
                                    </div>); })}
                            </div>
                        </div>

                        {/* Device Stack Visual (Image Driven) */}
                        <div className="relative flex justify-center items-center w-full max-w-lg mx-auto lg:mx-0">
                            <framer_motion_1.motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square drop-shadow-2xl">
                                <image_1.default src="/images/responsive-devices.png" alt="Multi-Device Responsive Web Design" fill className="object-contain" priority/>
                                {/* Overlay Glow for Depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 to-transparent dark:from-slate-900/50 mix-blend-overlay pointer-events-none"/>
                            </framer_motion_1.motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣1️⃣ Delivery Timeline */}
            <section className="py-24 px-6 reveal-section bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-[#3f8fcc] font-bold uppercase tracking-widest text-[10px] md:text-xs">Fastest Website Launch in India</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white leading-tight">From Brief to Live Website <br className="md:hidden"/>in Just 3–7 Days</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">Our streamlined 4-phase process eliminates delays. You fill in the brief — we handle everything else until your website is live on the internet.</p>
                    </div>

                    <div className="relative">
                        {/* Horizontal Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3f8fcc]/30 to-transparent -z-10 hidden lg:block transform -translate-y-1/2"/>

                        {/* Vertical Connecting Line (Mobile) */}
                        <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-[#3f8fcc]/30 via-[#3f8fcc] to-[#3f8fcc]/30 lg:hidden -z-10"/>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 pl-16 lg:pl-0">
                            {[
            {
                step: "Briefing",
                desc: "Form submission & brief discussion",
                days: "Day 1",
                icon: lucide_react_1.MessageSquare
            },
            {
                step: "Development",
                desc: "Core build & initial optimization",
                days: "Day 2-4",
                icon: lucide_react_1.Code2
            },
            {
                step: "Refinements",
                desc: "Perfecting content & final polish",
                days: "Day 5-6",
                icon: lucide_react_1.Sparkles
            },
            {
                step: "Go-Live",
                desc: "Domain setup & Global Launch",
                days: "Day 7",
                icon: lucide_react_1.Rocket
            }
        ].map(function (item, i) { return (<framer_motion_1.motion.div key={i} whileHover={{ y: -5 }} className="relative flex flex-col items-start lg:items-center text-left lg:text-center">
                                    {/* Pulse Marker */}
                                    <div className="absolute -left-[54px] lg:left-1/2 top-4 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-4 h-4 bg-[#3f8fcc] rounded-full shadow-[0_0_20px_rgba(63,143,204,0.6)] animate-pulse lg:hidden"/>

                                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-[2rem] w-full shadow-xl shadow-slate-200/50 dark:shadow-none group transition-all hover:border-[#3f8fcc]/50">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#3f8fcc] text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-[#3f8fcc]/20 transform group-hover:scale-110 transition-transform mx-auto lg:mx-auto">
                                            <item.icon className="w-6 h-6"/>
                                        </div>
                                        <span className="px-3 py-1 bg-[#3f8fcc]/10 text-[#3f8fcc] text-[10px] font-black rounded-full uppercase tracking-tighter mb-3 inline-block">
                                            {item.days}
                                        </span>
                                        <h4 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{item.step}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Desktop Marker */}
                                    <div className="hidden lg:block w-4 h-4 bg-[#3f8fcc] rounded-full border-4 border-white dark:border-slate-900 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-[140px]"/>
                                </framer_motion_1.motion.div>); })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣2️⃣ Pricing Packages */}
            <section id="pricing" className="py-24 px-6 reveal-section relative overflow-hidden bg-slate-50 dark:bg-slate-900/40">
                {/* 🛰️ Enhanced Background Structure */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Perspective Grid */}
                    <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]" style={{
            backgroundImage: "linear-gradient(to right, ".concat(isDarkMode ? '#5FD3E6' : '#3F8FCC', " 1px, transparent 1px), linear-gradient(to bottom, ").concat(isDarkMode ? '#5FD3E6' : '#3F8FCC', " 1px, transparent 1px)"),
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}/>

                    {/* Drifting Data Beams (Hidden on mobile for performance/clarity) */}
                    <div className="hidden md:block">
                        {__spreadArray([], Array(5), true).map(function (_, i) { return (<framer_motion_1.motion.div key={"beam-".concat(i)} initial={{ top: '-100%', left: "".concat(20 * i, "%") }} animate={{ top: '200%' }} transition={{
                duration: 8 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
            }} className="absolute w-[1px] h-64 bg-gradient-to-b from-transparent via-[#3f8fcc]/40 to-transparent"/>); })}
                    </div>

                    {/* Atmospheric Glow Modules */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                        <framer_motion_1.motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[5%] w-[40%] h-[30%] bg-[#3f8fcc]/10 blur-[130px] rounded-full rotate-12"/>
                        <framer_motion_1.motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-[10%] right-[5%] w-[40%] h-[30%] bg-[#3f8fcc]/10 blur-[130px] rounded-full -rotate-12"/>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Floating Value Fragments (Desktop Only) */}
                    <div className="hidden xl:block">
                        {/* Piece 1: Performance */}
                        <framer_motion_1.motion.div animate={{ y: [-10, 10, -10], rotate: [-5, -3, -5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[-15%] top-[10%] w-56 p-6 bg-white/60 dark:bg-slate-900/60 rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[-5deg]">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                                    <lucide_react_1.Zap className="w-5 h-5 text-green-500"/>
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Speed Score</span>
                            </div>
                            <div className="text-3xl font-black text-slate-900 dark:text-white">100/100</div>
                            <div className="mt-4 w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <framer_motion_1.motion.div className="h-full bg-green-500"/>
                            </div>
                        </framer_motion_1.motion.div>

                        {/* Piece 2: Rapid Delivery */}
                        <framer_motion_1.motion.div animate={{ y: [10, -10, 10], rotate: [5, 8, 5] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute left-[-12%] bottom-[10%] w-60 p-6 bg-white/60 dark:bg-slate-900/60 rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[5deg]">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-[#3f8fcc]/10 flex items-center justify-center">
                                    <lucide_react_1.Rocket className="w-5 h-5 text-[#3f8fcc]"/>
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Rapid Launch</span>
                            </div>
                            <div className="text-2xl font-black text-slate-900 dark:text-white">3–7 Days</div>
                            <p className="text-[11px] text-slate-500 mt-2 font-medium italic">From concept to live site</p>
                        </framer_motion_1.motion.div>

                        {/* Piece 3: Global Infra */}
                        <framer_motion_1.motion.div animate={{ y: [-15, 5, -15], rotate: [8, 10, 8] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute right-[-15%] top-[15%] w-56 p-6 bg-white/60 dark:bg-slate-900/60 rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[8deg]">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <lucide_react_1.Globe className="w-5 h-5 text-blue-500"/>
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Infrastructure</span>
                            </div>
                            <div className="text-2xl font-black text-slate-900 dark:text-white uppercase leading-tight">Global CDN <br />Included</div>
                        </framer_motion_1.motion.div>

                        {/* Piece 4: Satisfaction */}
                        <framer_motion_1.motion.div animate={{ y: [15, -5, 15], rotate: [-8, -5, -8] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute right-[-12%] bottom-[15%] w-64 p-6 bg-white/60 dark:bg-slate-900/60 rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[-8deg]">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                    <lucide_react_1.Star className="w-5 h-5 text-orange-500"/>
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Client Rating</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                {__spreadArray([], Array(5), true).map(function (_, i) { return <lucide_react_1.Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500"/>; })}
                            </div>
                            <div className="text-xl font-black text-slate-900 dark:text-white">Professional & Fast</div>
                        </framer_motion_1.motion.div>
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        {/* Animated Border Background */}
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-[#3f8fcc] via-brand-medium to-[#3f8fcc] bg-[length:200%_auto] rounded-[3rem] opacity-70 blur-sm animate-border-flow"/>

                        {/* Main Card - Landscape Transition (Compact) */}
                        <framer_motion_1.motion.div whileHover={{ y: -5, scale: 1.01 }} className="relative bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Left Column: Pricing & Offer */}
                                <div className="p-8 md:p-12 lg:p-14 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/50 relative">
                                    {/* Decorative background elements */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3f8fcc]/5 to-transparent pointer-events-none"/>

                                    {/* Status Badge */}
                                    <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 bg-red-500/10 text-red-500 px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-red-500/20 relative z-10">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                        </span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Limited Launch Offer</span>
                                    </div>

                                    <h3 className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-4 relative z-10">Starting At Just</h3>

                                    <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 mb-2 relative z-10">
                                        <span className="text-xl md:text-2xl text-slate-300 dark:text-slate-600 line-through font-bold">₹4,999</span>
                                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 tracking-tighter">
                                            ₹3,999
                                        </span>
                                    </div>
                                    <p className="text-[10px] font-bold text-[#3f8fcc] uppercase tracking-widest bg-[#3f8fcc]/10 px-3 py-1 rounded-lg">No Hidden Charges.</p>
                                    <p className="text-[10px] text-slate-400 font-medium relative z-10 italic">Trusted by 150+ startups</p>
                                </div>

                                {/* Right Column: Features & CTA */}
                                <div className="p-8 md:p-12 lg:p-14 bg-slate-50/50 dark:bg-slate-950/20 flex flex-col justify-center">
                                    <div className="space-y-4 mb-8 sm:mb-10">
                                        {[
            { text: "Premium Custom Design", bold: true },
            { text: "Domain & Hosting Setup", bold: false },
            { text: "Google SEO Framework", bold: false },
            { text: "WhatsApp Chat Integration", bold: false },
            { text: "Launch in 3–7 Days", bold: true }
        ].map(function (item, i) { return (<framer_motion_1.motion.div key={i} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 sm:gap-4 group/item">
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#3f8fcc]/20 flex items-center justify-center shrink-0 group-hover/item:bg-[#3f8fcc] group-hover/item:text-slate-900 transition-all">
                                                    <lucide_react_1.Check className="w-3 sm:w-3.5 h-3 sm:h-3.5"/>
                                                </div>
                                                <span className={"text-sm sm:text-base ".concat(item.bold ? 'font-bold text-slate-800 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400')}>
                                                    {item.text}
                                                </span>
                                            </framer_motion_1.motion.div>); })}
                                    </div>

                                    <a href="#contact" className="group relative w-full inline-flex items-center justify-center py-4 sm:py-5 bg-[#3f8fcc] hover:bg-[#3f8fcc]/90 text-white rounded-[1.2rem] sm:rounded-[1.5rem] font-black uppercase tracking-[0.1em] text-[12px] sm:text-sm transition-all duration-300 shadow-xl shadow-[#3f8fcc]/20 overflow-hidden">
                                        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                                            Start Your Project Now <lucide_react_1.ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"/>
                                        </span>
                                        {/* Button Shine Effect */}
                                        <div className="absolute inset-0 w-1/2 h-full bg-white opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-1000 skew-x-[45deg]"/>
                                    </a>
                                </div>
                            </div>
                        </framer_motion_1.motion.div>
                    </div>
                </div>
            </section>

            {/* 1️⃣3️⃣ Add-Ons Available */}
            <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode}/>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#3f8fcc] font-bold uppercase tracking-widest text-xs">Grow Further</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white">Power-Up Your Website with Add-Ons</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">Start with the essentials and scale as you grow. Add advanced features to your eco website at any time, without rebuilding from scratch.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
            { label: "Extra Pages", icon: lucide_react_1.FileCode },
            { label: "Advanced SEO", icon: lucide_react_1.Search },
            { label: "Blog Setup", icon: lucide_react_1.PenTool },
            { label: "E-Commerce Add-On", icon: lucide_react_1.CreditCard },
            { label: "Custom Design Upgrade", icon: lucide_react_1.Sparkles },
            { label: "Maintenance Plan", icon: lucide_react_1.Settings }
        ].map(function (item, i) { return (<div key={i} className="group bg-white dark:bg-slate-900 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-3 text-center font-bold text-sm md:text-base text-slate-700 dark:text-slate-200 hover:border-[#3f8fcc] hover:text-[#3f8fcc] transition-colors cursor-pointer">
                                <item.icon className="w-5 h-5 text-slate-400 group-hover:text-[#3f8fcc] transition-colors"/>
                                <span>{item.label}</span>
                            </div>); })}
                    </div>
                </div>
            </section>

            {/* 1️⃣4️⃣ Our Simple 4-Step Process */}
            <section className="py-24 px-6 reveal-section relative overflow-hidden bg-transparent">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3f8fcc]/5 blur-[120px] rounded-full pointer-events-none"/>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20 md:mb-28">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest text-[#3f8fcc] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#3f8fcc] animate-pulse"/>
                            How It Works
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
                            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3f8fcc] to-brand-medium italic pr-2">4-Step Process</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[40%] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent -z-10"/>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
                            {[
            { title: "Consultation", icon: lucide_react_1.MessageSquare, desc: "We discuss your brand identity and set precise goals." },
            { title: "Design", icon: lucide_react_1.PenTool, desc: "Crafting a beautiful and high-converting modern layout." },
            { title: "Development", icon: lucide_react_1.Code2, desc: "Building your website fast, responsive, and secure." },
            { title: "Launch", icon: lucide_react_1.Rocket, desc: "Review the final product, easily deploy, and go live!" }
        ].map(function (item, i) { return (<div key={i} className="group relative">
                                    {/* Hover glow */}
                                    <div className="absolute -inset-2 bg-gradient-to-br from-[#3f8fcc]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"/>

                                    <div className="relative h-full bg-white dark:bg-[#030712]/50 backdrop-blur-2xl border border-slate-200 dark:border-white/5 p-8 md:p-10 rounded-[2rem] flex flex-col items-center text-center group-hover:-translate-y-3 transition-transform duration-500 hover:shadow-2xl hover:shadow-[#3f8fcc]/5">
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center border-4 border-white dark:border-[#020617] text-xs font-black text-[#3f8fcc] shadow-sm tracking-widest">
                                            0{i + 1}
                                        </div>

                                        <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-white/5 group-hover:scale-110 group-hover:bg-[#3f8fcc] transition-all duration-500">
                                            <item.icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-500"/>
                                        </div>

                                        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-[#3f8fcc] transition-colors">{item.title}</h4>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>); })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣5️⃣ FAQs */}
            <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#3f8fcc] font-bold uppercase tracking-widest text-xs">Got Questions?</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white">Frequently Asked Questions About Our Eco Website Plan</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">Everything you need to know before launching your business website with Preet Tech.</p>
                    </div>
                    <div className="space-y-4 px-2 sm:px-0">
                        {[
            { q: "How long does it take to build my eco website?", a: "Typically 3–7 working days from the date we receive your content and brief. Our streamlined process means most clients are live within a week — often faster. The exact timeline depends on how quickly feedback and content are shared." },
            { q: "Is domain registration included in the ₹3,999 plan?", a: "Domain registration cost is separate (typically ₹800–₹1,500/year for a .com domain), but we handle the entire setup process for you. We guide you through domain purchase and connect it to your website completely free of charge." },
            { q: "Can I upgrade from the eco plan to a premium website later?", a: "Absolutely! Your eco website is built on a scalable foundation. You can upgrade to our advanced website plans — including e-commerce, custom animations, or CMS integration — at any time without starting from scratch." },
            { q: "Do you provide support after my website goes live?", a: "Yes! We offer post-launch support to fix any issues that arise after going live. We also offer optional monthly maintenance plans for ongoing updates, security patches, and performance monitoring." },
            { q: "How many revision rounds are included?", a: "We include one comprehensive revision round during the design phase where you can request changes to layout, colors, content, and structure. Additional revision rounds can be added as a paid upgrade if needed." },
            { q: "Will my website rank on Google?", a: "Your eco website is built with on-page SEO best practices — optimized meta tags, heading structure, mobile-first design, fast load times, and sitemap submission to Google Search Console. While rankings depend on your niche and competition, you'll have a solid SEO foundation from day one." }
        ].map(function (item, i) { return (<div key={i} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                                <button onClick={function () { return toggleFAQ(i); }} className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-sm md:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    {item.q}
                                    <lucide_react_1.ChevronDown className={"w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ".concat(openFAQ === i ? "rotate-180 text-[#3f8fcc]" : "text-slate-400")}/>
                                </button>
                                <div className={"overflow-hidden transition-all duration-300 ".concat(openFAQ === i ? "max-h-48" : "max-h-0")}>
                                    <p className="p-5 md:p-6 pt-0 text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </div>); })}
                    </div>
                </div>
            </section>


            {/* 1️⃣7️⃣ Final CTA Section */}
            <section className="py-16 sm:py-24 px-6 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-center relative overflow-hidden reveal-section">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3f8fcc]/5 to-brand-medium/10 dark:from-brand-deep/20 dark:to-brand-medium/20"/>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black mb-4 leading-[1.2] sm:leading-tight text-slate-900 dark:text-white">
                        Launch Your Business Website <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-[#3f8fcc]">in 3–7 Days for ₹3,999</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                        Join 150+ businesses, freelancers, and startups across India who trusted Preet Tech to get them online — professionally, affordably, and fast.
                    </p>
                    <a href="#contact" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#3f8fcc] hover:bg-[#3f8fcc]/90 text-white rounded-full font-black text-sm sm:text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(63,143,204,0.3)] inline-block">
                        Get My Free Consultation Now →
                    </a>
                </div>
            </section>

            {/* Video Modal */}
            <framer_motion_1.AnimatePresence>
                {isVideoOpen && (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95" onClick={function () { return setIsVideoOpen(false); }}>
                        <framer_motion_1.motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="relative w-full aspect-video max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center will-change-transform" onClick={function (e) { return e.stopPropagation(); }}>
                            <button onClick={function () { return setIsVideoOpen(false); }} className="absolute top-4 right-4 z-[110] w-10 h-10 bg-black/60 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors">
                                <lucide_react_1.X className="w-5 h-5"/>
                            </button>

                            {/* YouTube Embed */}
                            <div className="absolute inset-0 w-full h-full bg-black">
                                <iframe src="https://www.youtube.com/embed/CBYfXlP7ppQ?autoplay=1" className="w-full h-full border-0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Preet Tech Video"/>
                            </div>
                        </framer_motion_1.motion.div>
                    </framer_motion_1.motion.div>)}
            </framer_motion_1.AnimatePresence>

            <Footer_1.default />
        </main>);
}

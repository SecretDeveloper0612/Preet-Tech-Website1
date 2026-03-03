import re

file_path = "app/services/website-development/eco/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add states inside EcoWebsiteDevelopment module
if "const [formData, setFormData] = useState" not in content:
    state_block = """    const targetAudienceRef = useRef<HTMLDivElement>(null);
    const portfolioSliderRef = useRef<HTMLDivElement>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        budget: '₹5k - ₹10k', // default from options
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', businessName: '', email: '', phone: '', budget: '₹5k - ₹10k' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        }
    };
"""

    content = re.sub(
        r'\s+const targetAudienceRef = useRef<HTMLDivElement>\(null\);\s*const portfolioSliderRef = useRef<HTMLDivElement>\(null\);',
        '\n' + state_block,
        content,
        count=1
    )

form_block = """<form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                                    <div className="relative group">
                                        <User strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors" />
                                        <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Business Name</label>
                                    <div className="relative group">
                                        <Building2 strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors" />
                                        <input required type="text" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} placeholder="Your Company Ltd." className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                                        <div className="relative group">
                                            <Mail strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors" />
                                            <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Phone</label>
                                        <div className="relative group">
                                            <Phone strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors" />
                                            <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 43210" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Budget Range</label>
                                    <div className="relative group">
                                        <CreditCard strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#3f8fcc] transition-colors pointer-events-none" />
                                        <select required value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-[#3f8fcc] focus:ring-1 focus:ring-[#3f8fcc]/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm">
                                            <option value="₹5k - ₹10k">₹5k - ₹10k</option>
                                            <option value="₹10k - ₹25k">₹10k - ₹25k</option>
                                            <option value="₹25k - ₹50k">₹25k - ₹50k</option>
                                            <option value="₹50k+">₹50k+</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button disabled={submitStatus === "loading"} type="submit" className="w-full py-4 bg-[#3f8fcc] hover:bg-[#3f8fcc]/90 text-white font-black rounded-2xl transition-all shadow-[0_0_20px_rgba(63,143,204,0.2)] hover:shadow-[0_0_30px_rgba(63,143,204,0.4)] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2">
                                        {submitStatus === "loading" ? "Submitting..." : "Get Free Consultation"} <ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                                {submitStatus === 'success' && (
                                    <p className="text-emerald-500 text-xs font-bold text-center mt-2">Success! We will be in touch shortly.</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-500 text-xs font-bold text-center mt-2">Something went wrong. Please try again.</p>
                                )}
                            </form>"""

content = re.sub(
    r'<form className="space-y-6">.*?</form>',
    form_block,
    content,
    flags=re.DOTALL
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

const fs = require('fs');

const categories = {
    "🔥 New & Premium": [
        "CodeRabbit Pro — 1M", "CodeRabbit Pro — 2M", "Loom Business + AI — 1Y", "Wispr Flow Pro — 1Y",
        "Willow Voice Pro — 1Y", "PromptDrive.ai Teams — 1Y", "PromptDrive.ai Business (50 Seats) — 1Y",
        "PostHog Scale — 1Y", "Firecrawl AI — 50K Credits (1Y)", "Vapi — $200 Credits (12M)",
        "Emergent Standard — 1Y", "Manus AI Pro (6000 Credits) — 1M", "Reforge AI Build — 1M",
        "Sentry.io Teams — 1Y", "Sentry.io Business — 1Y"
    ],
    "⭐ Top Selling": [
        "Beautiful.ai Pro — 1Y", "Mobbin Pro — 1Y", "ChatPRD Pro — 1Y", "Perplexity Pro — 1Y",
        "Raycast Pro — 1Y", "Superhuman Starter — 1Y", "Linear Business — 1Y", "Granola Business — 1Y",
        "Magic Patterns Hobby — 1Y", "Wispr Flow Pro — 1Y", "Webflow CMS — 1Y", "Webflow Business — 1Y",
        "Webflow Growth — 1Y", "n8n Starter — 1Y", "Replit Core — 1Y", "Lovable Pro (100 Credits / Month) — 1Y",
        "ClickUp Enterprise — 1Y", "Cal.com Teams — 1Y", "Cal.com Organization — 1Y", "GitLab Ultimate — 12M",
        "Postman Basic — 1Y", "Zeplin Advanced — 1Y", "Backblaze Cloud Unlimited — 1Y",
        "Bitwarden Premium + Family — 1Y", "Termly.io Starter — 1Y", "Termly.io Pro+ — 1Y",
        "Hostinger Cloud Startup — 1Y", "Pica Starter — 1Y", "Framer Basic — 1Y", "Framer Pro — 1Y",
        "Figma Professional — 1Y", "Intercom Advanced — 1Y", "Loom Business + AI — 1Y"
    ],
    "🎓 Career / Education": [
        "Rezi AI — Lifetime", "PNGTree Premium — Lifetime", "Enginemailer Free Forever (10K / Month) — Lifetime",
        "LinkedIn Career Premium — 3M", "LinkedIn Business Premium — 3M", "Scrimba Pro — 1Y",
        "No Code MBA Unlimited — 1M", "Whizlabs Premium — 1M", "Whizlabs Premium — 1Y",
        "AhaSlides Essentials — 12M", "AhaSlides Pro — 12M", "Kickresume Premium — 1M",
        "Mangoosh GRE Premium — 1M", "UFC FightPass — 2M", "Gemini AI Pro + 2TB Storage — 18M"
    ],
    "🎨 AI & Design Tools": [
        "Adobe Creative Cloud Max — 1Y", "Midjourney Pro — 1M", "Canva Creator — Lifetime"
    ],
    "📈 Business & Marketing": [
        "HubSpot Growth — 1Y", "Mailchimp Advanced (100K Credits) — 1M", "SEMrush Guru Plan — 1Y"
    ],
    "☁️ Cloud & Storage": [
        "Google Drive 2TB Storage — 1Y", "Dropbox Professional 3TB Storage — 1Y", "iCloud+ 2TB — 1Y"
    ],
    "🧩 Dev & Team Tools": [
        "Jira Premium (Per Seat) — 1Y", "GitHub Enterprise (Per Seat) — 1Y", "Slack Enterprise Grid — 1Y"
    ],
    "🛠 3D / CAD Engineering": [
        "AutoCAD 2024 Professional — 1Y", "SolidWorks Premium — 1Y", "SketchUp Pro — 1Y"
    ],
    "🔐 Software Keys": [
        "Windows 10 Pro — Lifetime", "Windows 11 Pro — Lifetime"
    ]
};

const data = [];
const seen = new Set();
let idx = 1;

for (const [cat, items] of Object.entries(categories)) {
    for (const item of items) {
        if (seen.has(item)) continue;
        seen.add(item);

        const parts = item.split(' — ');
        const nameVariant = parts[0];
        const duration = parts.length > 1 ? parts[1] : "1 Year";

        let name = nameVariant;
        let variant = "Standard";
        const words = nameVariant.split(' ');

        const variantsTokens = ["Pro", "AI", "+", "Scale", "Teams", "Business", "Starter", "Core", "Enterprise", "Organization", "Ultimate", "Basic", "Advanced", "Unlimited", "Family", "Pro+", "Startup", "Professional", "Max", "Creator", "Growth", "Grid"];

        if (words.length > 1 && variantsTokens.includes(words[words.length - 1])) {
            if (nameVariant.includes('(') && nameVariant.includes(')')) {
                name = nameVariant.substring(0, nameVariant.indexOf('(')).trim();
                variant = nameVariant.substring(nameVariant.indexOf('(')).trim();
            } else {
                name = words.slice(0, -1).join(' ');
                variant = words[words.length - 1];
                if (variant === "AI" && words.length > 2 && words[words.length - 2] === "+") {
                    name = words.slice(0, -2).join(' ');
                    variant = "+ AI";
                }
            }
        }

        if (nameVariant.includes("Loom Business")) {
            name = "Loom Business + AI";
            variant = "Business + AI";
        }

        let badge = "";
        if (cat === "🔥 New & Premium") badge = "Trending";
        if (cat === "🔐 Software Keys") badge = "Lifetime License";
        if (nameVariant.includes("Pro")) variant = variant === "Standard" ? "Pro" : variant;

        data.push({
            id: idx.toString(),
            name,
            variant: nameVariant !== name ? variant : (variant.length > 2 ? variant : "Pro"),
            duration,
            category: cat,
            description: `Get absolute premium access to ${nameVariant} for ${duration}. Perfect for scaling businesses, agencies, and top professionals.`,
            originalPrice: "199",
            discountPrice: "29",
            discountBadge: "85% OFF",
            badge,
            status: "Active"
        });
        idx++;
    }
}

fs.writeFileSync('app/services/business-tools/data.ts', `export interface Tool {
    id: string;
    name: string;
    variant: string;
    duration: string;
    category: string;
    description: string;
    originalPrice: string | number;
    discountPrice: string | number;
    discountBadge: string;
    badge: string;
    status: string;
}

export const TOOLS: Tool[] = ${JSON.stringify(data, null, 4)};`);

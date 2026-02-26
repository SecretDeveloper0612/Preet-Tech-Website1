import json

data = []
categories = {
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
}

idx = 1
for cat, items in categories.items():
    for item in items:
        # split by ' — ' to get duration
        parts = item.split(' — ')
        name_variant = parts[0]
        duration = parts[1] if len(parts) > 1 else "1 Year"
        
        # split name and variant crudely. e.g. "CodeRabbit Pro" -> Name: "CodeRabbit", Variant: "Pro"
        words = name_variant.split(' ')
        if len(words) > 1 and words[-1] in ["Pro", "AI", "+", "Scale", "Teams", "Business", "Starter", "Core", "Enterprise", "Organization", "Ultimate", "Basic", "Advanced", "Unlimited", "Family", "Pro+", "Startup", "Professional", "Max", "Creator", "Growth", "Grid"]:
            # let's try to extract parenthesis if present
            if '(' in name_variant and ')' in name_variant:
                name_part = name_variant[:name_variant.find('(')].strip()
                variant_part = name_variant[name_variant.find('('):].strip()
                name = name_part
                variant = variant_part
            else:
                name = ' '.join(words[:-1])
                variant = words[-1]
                if variant == "AI" and len(words) > 2 and words[-2] == "+":
                    name = ' '.join(words[:-2])
                    variant = "+ AI"
        else:
            name = name_variant
            variant = "Standard"
            
        badge = ""
        if cat == "🔥 New & Premium":
            badge = "Trending"
        elif cat == "🔐 Software Keys":
            badge = "Lifetime License"
            
        data.append({
            "id": str(idx),
            "name": name,
            "variant": name_variant if name_variant != name else variant, # just use the full string as variant if we want, but the prompt says: "Tool Name: Loom Business + AI, Variant: Business + AI".
            "duration": duration,
            "category": cat,
            "description": f"Premium access to {name_variant} for {duration}.",
            "originalPrice": "199",
            "discountPrice": "29",
            "discountBadge": "85% OFF",
            "badge": badge,
            "status": "Active"
        })
        idx += 1

# write the output TS to a file
with open('tools_data.ts', 'w', encoding='utf-8') as f:
    f.write("export const TOOLS = [\n")
    for d in data:
        # refine variant name based on prompt schema
        d["variant"] = d["variant"] if len(d["variant"]) > 2 else "Pro"
        if "Loom Business" in d["name"]: 
            d["name"] = "Loom Business + AI"
            d["variant"] = "Business + AI"
        
        f.write("  {\n")
        f.write(f'    id: "{d["id"]}",\n')
        f.write(f'    name: "{d["name"]}",\n')
        f.write(f'    variant: "{d["variant"]}",\n')
        f.write(f'    duration: "{d["duration"]}",\n')
        f.write(f'    category: "{d["category"]}",\n')
        f.write(f'    description: "{d["description"]}",\n')
        f.write(f'    originalPrice: "{d["originalPrice"]}",\n')
        f.write(f'    discountPrice: "{d["discountPrice"]}",\n')
        f.write(f'    discountBadge: "{d["discountBadge"]}",\n')
        f.write(f'    badge: "{d["badge"]}",\n')
        f.write(f'    status: "{d["status"]}"\n')
        f.write("  },\n")
    f.write("];\n")


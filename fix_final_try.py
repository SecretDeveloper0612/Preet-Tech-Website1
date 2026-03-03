import re

file_path = "build_page.py"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()


# Simply replace `{...}` pattern explicitly safely directly where found inside formatting block!
replacements = {
    "isDark={{isDarkMode}} toggleTheme={{toggleTheme}}": "isDark={{{isDarkMode}}} toggleTheme={{{toggleTheme}}}",
    "isDark={isDarkMode} toggleTheme={toggleTheme}": "isDark={{isDarkMode}} toggleTheme={{toggleTheme}}",
    
    "onChange={{(e) => setSearchTerm(e.target.value)}}": "onChange={{{(e) => setSearchTerm(e.target.value)}}}",
    "onChange={(e) => setSearchTerm(e.target.value)}": "onChange={{(e) => setSearchTerm(e.target.value)}}",
    
    "onClick={{() => setSelectedCategory('All')}}": "onClick={{{() => setSelectedCategory('All')}}}",
    "onClick={(e) => setSelectedCategory('All')}": "onClick={{(e) => setSelectedCategory('All')}}",
    "onClick={() => setSelectedCategory('All')}": "onClick={{() => setSelectedCategory('All')}}",
    
    "onClick={{() => handleBuy(tool)}}": "onClick={{{() => handleBuy(tool)}}}",
    "onClick={() => handleBuy(tool)}": "onClick={{() => handleBuy(tool)}}",
    
}

for k, v in replacements.items():
    text = text.replace(k, v)


def replace_props(match):
    prop = match.group(0)
    if prop.startswith("={") and not prop.startswith("={{"):
        return prop.replace("={", "={{").replace("}", "}}")
        
    return prop

# Run regex only for properties that wasn't statically targeted above
text = re.sub(r'value=\{[^{].*?\}', replace_props, text)
text = re.sub(r'key=\{[^{].*?\}', replace_props, text)
text = re.sub(r'tool=\{[^{].*?\}', replace_props, text)
text = re.sub(r'handleBuy=\{[^{].*?\}', replace_props, text)
text = re.sub(r'className=\{`.*?`\}', replace_props, text, flags=re.MULTILINE|re.DOTALL)


# special
text = text.replace('href={`https://wa.me/', 'href={{`https://wa.me/')
text = text.replace('target="_blank"', 'target="_blank"')


with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)


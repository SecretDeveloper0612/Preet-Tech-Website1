import re

file_path = "build_page.py"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Replace React brackets in the generator file explicitly with {{ ... }}
# so that the Python f-string evaluates them as { ... }

text = text.replace("isDark={{isDarkMode}} toggleTheme={{toggleTheme}}", "isDark={isDarkMode} toggleTheme={toggleTheme}")
text = text.replace("onChange={{(e) => setSearchTerm(e.target.value)}}", "onChange={(e) => setSearchTerm(e.target.value)}")
text = text.replace("onClick={{() => setSelectedCategory('All')}}", "onClick={(e) => setSelectedCategory('All')}")

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

def escape_react_props(match):
    prop = match.group(0)
    # Target React props with JS {{...}}, avoid already matched literals `{...}` if not python vars
    if "isDarkMode" in prop or "toggleTheme" in prop or "setSearchTerm" in prop or "setSelectedCategory" in prop or "tool.id" in prop or "cat" in prop:
        if prop.startswith("={") and not prop.startswith("={{"):
            return prop.replace("={", "={{").replace("}", "}}")
        if prop.startswith("> {") and not prop.startswith("> {{"):
            return prop.replace("> {", "> {{").replace("}", "}}")
    return prop

text = re.sub(r'onChange=\{[^{].*?\}', escape_react_props, text)
text = re.sub(r'onClick=\{[^{].*?\}', escape_react_props, text)
text = re.sub(r'value=\{[^{].*?\}', escape_react_props, text)
text = re.sub(r'key=\{[^{].*?\}', escape_react_props, text)
text = re.sub(r'tool=\{[^{].*?\}', escape_react_props, text)
text = re.sub(r'handleBuy=\{[^{].*?\}', escape_react_props, text)
text = re.sub(r'> \{.*?\}', escape_react_props, text)
text = re.sub(r'className=\{`.*?`\}', escape_react_props, text, flags=re.MULTILINE|re.DOTALL)


# Any {{ ... }} should be { ... } if it was a react prop with no objects passed.
text = re.sub(r'onChange=\{\{(.*?)\}\}', r'onChange={\1}', text)
text = re.sub(r'onClick=\{\{(.*?)\}\}', r'onClick={\1}', text)
text = re.sub(r'value=\{\{(.*?)\}\}', r'value={\1}', text)
text = re.sub(r'key=\{\{(.*?)\}\}', r'key={\1}', text)
text = re.sub(r'tool=\{\{(.*?)\}\}', r'tool={\1}', text)
text = re.sub(r'handleBuy=\{\{(.*?)\}\}', r'handleBuy={\1}', text)
# Ensure variables enclosed like {{var}} become {var} within JS props
text = re.sub(r'>\s*\{\{(.*?)\}\}\s*<', r'>{\1}<', text)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)


import re

file_path = "build_page.py"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

def replace_props(match):
    prop = match.group(0)
    # Target React props with JS {{...}}, avoiding logic already written functionally with {{ or \`...\`
    if "isDarkMode" in prop or "toggleTheme" in prop or "setSearchTerm" in prop or "setSelectedCategory" in prop or "tool.id" in className or "tool.category" in prop or "tool.name" in prop:
        pass # avoid matching these if we want to change them but regex is broad
    
    # We want to format string properly: {{ ... }} in python f-string formats to { ... } output.
    # We should search and replace `{...}` to `{{...}}` unless already escaped.
    
    if prop.startswith("={") and not prop.startswith("={{"):
        return prop.replace("={", "={{").replace("}", "}}")
        
    return prop

text = re.sub(r'onChange=\{[^{].*?\}', replace_props, text)
text = re.sub(r'onClick=\{[^{].*?\}', replace_props, text)
text = re.sub(r'value=\{[^{].*?\}', replace_props, text)
text = re.sub(r'key=\{[^{].*?\}', replace_props, text)
text = re.sub(r'tool=\{[^{].*?\}', replace_props, text)
text = re.sub(r'handleBuy=\{[^{].*?\}', replace_props, text)
text = re.sub(r'className=\{`.*?`\}', replace_props, text, flags=re.MULTILINE|re.DOTALL)


with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)


import re

file_path = "build_page.py"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# React props handling for build_page.py generator section which outputs page.tsx strings
# We need {{...}} in Python so { ... } is safely written internally within formatted strings.

def replace_props(match):
    prop = match.group(0)
    # Target React props with JS {{...}} avoiding logic written functionally normally with {{ or {`...`} if already properly matched
    if prop.startswith("={") and not prop.startswith("={{"):
        return prop.replace("={", "={{").replace("}", "}}")
        
    return prop

text = re.sub(r'onChange=\{[^{].*?\}', replace_props, text)
text = re.sub(r'onClick=\{[^{].*?\}', replace_props, text)
text = re.sub(r'value=\{[^{].*?\}', replace_props, text)
text = re.sub(r'key=\{[^{].*?\}', replace_props, text)
text = re.sub(r'tool=\{[^{].*?\}', replace_props, text)
text = re.sub(r'handleBuy=\{[^{].*?\}', replace_props, text)

# For nested classes formatted through javascript template string literals inside className
text = re.sub(r'className=\{`.*?`\}', replace_props, text, flags=re.MULTILINE|re.DOTALL)


# specific target single brace elements back to correct {{ format
text = text.replace('href={`https://wa.me/', 'href={{`https://wa.me/')
text = text.replace('target="_blank"', 'target="_blank"')


# Finally rewrite
with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)


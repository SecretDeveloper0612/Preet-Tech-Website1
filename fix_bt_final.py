import re

file_path = "build_page.py"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Make the python file write expected output without { ... } issues in React props string generator formatting
# Since text is formatted as `f''' ... '''`, any evaluation requires escape with {{}}

# Look for specific lines replacing literal string interpolations incorrectly written single-braced

text = text.replace("isDark={isDarkMode}", "isDark={{isDarkMode}}")
text = text.replace("toggleTheme={toggleTheme}", "toggleTheme={{toggleTheme}}")
text = text.replace("onChange={(e) => setSearchTerm(e.target.value)}", "onChange={{(e) => setSearchTerm(e.target.value)}}")
text = text.replace("onClick={(e) => handleBuy(tool)}", "onClick={{(e) => handleBuy(tool)}}")
text = text.replace("onClick={() => setSelectedCategory('All')}", "onClick={{() => setSelectedCategory('All')}}")


# Use regex substituting known un-escaped react props from `{var}` back to `{{var}}` if it matches single brace only 
def fix_cbrackets(match):
    prop = match.group(0)
    # if it's `{...}` we make it `{{...}}`. We ignore already doubled `{{...}}`
    if prop.startswith("={") and not prop.startswith("={{"):
        return prop.replace("={", "={{").replace("}", "}}")
    return prop

text = re.sub(r'onChange=\{[^{].*?\}', fix_cbrackets, text)
text = re.sub(r'onClick=\{[^{].*?\}', fix_cbrackets, text)
text = re.sub(r'value=\{[^{].*?\}', fix_cbrackets, text)
text = re.sub(r'key=\{[^{].*?\}', fix_cbrackets, text)
text = re.sub(r'tool=\{[^{].*?\}', fix_cbrackets, text)
text = re.sub(r'handleBuy=\{[^{].*?\}', fix_cbrackets, text)
text = re.sub(r'className=\{[^{].*?(?:\n.*?)*?\}', fix_cbrackets, text, flags=re.MULTILINE|re.DOTALL)


# Also `export default function ToolsMarketplace() {` needs to be `{` escaping `{`, thus `{{`
if "export default function ToolsMarketplace() {" in text:
    text = text.replace("export default function ToolsMarketplace() {", "export default function ToolsMarketplace() {{")

# Revert specific single { back to {{ in f-string to prevent KeyError
# This script specifically targets the final React code section
if "return (" in text:
    parts = text.split("return (")
    # second part contains jsx
    jsx_part = parts[1]
    
    # ensure motion objects double curly {{
    jsx_part = jsx_part.replace("initial={{ opacity:", "initial={{{{ opacity:")
    jsx_part = jsx_part.replace("animate={{ opacity:", "animate={{{{ opacity:")
    jsx_part = jsx_part.replace("animate={{ scale:", "animate={{{{ scale:")
    jsx_part = jsx_part.replace("transition={{ delay:", "transition={{{{ delay:")
    jsx_part = jsx_part.replace("transition={{ duration:", "transition={{{{ duration:")

    text = parts[0] + "return (" + jsx_part

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)


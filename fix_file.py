import re

file_path = "build_page.py"
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace React brackets in the generator file explicitly with {{ ... }}
# so that the Python f-string evaluates them as { ... }

text = text.replace("isDark={{isDarkMode}} toggleTheme={{toggleTheme}}", "isDark={isDarkMode} toggleTheme={toggleTheme}")
text = text.replace("onChange={{(e) => setSearchTerm(e.target.value)}}", "onChange={(e) => setSearchTerm(e.target.value)}")
text = text.replace("onClick={{() => setSelectedCategory('All')}}", "onClick={() => setSelectedCategory('All')}")

# Any {{ ... }} should be { ... } if it was a react prop with no objects passed.
text = re.sub(r'onChange=\{\{(.*?)\}\}', r'onChange={\1}', text)
text = re.sub(r'onClick=\{\{(.*?)\}\}', r'onClick={\1}', text)
text = re.sub(r'value=\{\{(.*?)\}\}', r'value={\1}', text)
text = re.sub(r'key=\{\{(.*?)\}\}', r'key={\1}', text)
text = re.sub(r'tool=\{\{(.*?)\}\}', r'tool={\1}', text)
text = re.sub(r'handleBuy=\{\{(.*?)\}\}', r'handleBuy={\1}', text)
text = re.sub(r'>\s*\{\{(.*?)\}\}\s*<', r'>{\1}<', text)
text = re.sub(r'className=\{\{(.*?)\}\}', r'className={\1}', text)


# Now write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)

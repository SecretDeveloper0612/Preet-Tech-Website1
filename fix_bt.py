import re

file_path = "app/services/business-tools/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix the JSON braces that the f-string replaced:
content = content.replace("isDark={{isDarkMode}} toggleTheme={{toggleTheme}}", "isDark={isDarkMode} toggleTheme={toggleTheme}")
content = content.replace("onChange={(e) => setSearchTerm(e.target.value)}", "onChange={(e) => setSearchTerm(e.target.value)}")
content = content.replace("onClick={() => setSelectedCategory('All')}", "onClick={() => setSelectedCategory('All')}")

# Any {{ ... }} should be { ... } if it was a react prop with no objects passed.
content = re.sub(r'onChange=\{\{(.*?)\}\}', r'onChange={\1}', content)
content = re.sub(r'onClick=\{\{(.*?)\}\}', r'onClick={\1}', content)
content = re.sub(r'value=\{\{(.*?)\}\}', r'value={\1}', content)
content = re.sub(r'key=\{\{(.*?)\}\}', r'key={\1}', content)
content = re.sub(r'tool=\{\{(.*?)\}\}', r'tool={\1}', content)
content = re.sub(r'handleBuy=\{\{(.*?)\}\}', r'handleBuy={\1}', content)
# Ensure variables enclosed like {{var}} become {var} within JS props
content = re.sub(r'>\s*\{\{(.*?)\}\}\s*<', r'>{\1}<', content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)


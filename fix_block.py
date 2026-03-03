import re

file_path = "build_page.py"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Make the python file write real React brackets for curly props.
text = text.replace("export default function ToolsMarketplace() {{", "export default function ToolsMarketplace() {")
text = text.replace("}}", "}")
text = text.replace("{{", "{")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)

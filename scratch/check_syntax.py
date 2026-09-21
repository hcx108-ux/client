import sys

file_path = r"c:\react project\figma-akashvani\client\src\components\home\WavyBackground.jsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

print(f"Total length: {len(content)}")
snippet = content[max(0, 9600):min(len(content), 9750)]
print("Snippet around char 9679:")
print(repr(snippet))

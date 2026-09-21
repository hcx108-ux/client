import re

jsx_path = r"client/src/components/home/OffersSection.jsx"
with open(jsx_path, "r", encoding="utf-8") as f:
    text = f.read()

d = re.search(r'd="([^"]+)"', text).group(1)

# Extract SVG path commands or points
print("Path d length:", len(d))

# Let's inspect where the curve reaches its extrema or points around x=420 and x=1020
tokens = re.findall(r'([a-zA-Z])|([-+]?\d*\.?\d+)', d)
parsed = []
for cmd, num in tokens:
    if cmd:
        parsed.append(cmd)
    elif num:
        parsed.append(float(num))

# Print first 40 tokens
print(parsed[:40])

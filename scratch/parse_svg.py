import re, json

with open('c:/react project/figma-akashvani/scratch/latest_user_input.txt', 'r', encoding='utf-8') as f:
    data = f.read()

paths = re.findall(r'<path[^>]+>', data)
print(f"Total paths: {len(paths)}")
for i, p in enumerate(paths):
    print(f"Path {i}: {p[:120]}")

filters = re.findall(r'<filter[^>]+>', data)
print(f"Filters: {filters}")

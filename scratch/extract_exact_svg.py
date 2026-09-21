import json

log_path = r'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'

svg_content = ""
with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        if 'abhe bhai ye nhi hai stupidd' in line:
            obj = json.loads(line)
            content = obj.get('content', '')
            if isinstance(content, dict):
                content = json.dumps(content)
            svg_content = content
            break

with open('scratch/user_raw_svgs.txt', 'w', encoding='utf-8') as out:
    out.write(svg_content)

print(f"Extracted content length: {len(svg_content)}")

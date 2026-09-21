import json

log_path = r'C:\Users\Vikas\.gemini\antigravity-ide\brain\6ec93dcb-4c99-4b7b-9d0d-ec77af087e00\.system_generated\logs\transcript_full.jsonl'
with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            content = data.get('content', '')
            if content and '<svg width="1440" height="2315"' in content:
                start = content.find('<svg width="1440"')
                end = content.find('</svg>', start)
                if start >= 0 and end > start:
                    svg_content = content[start:end+6]
                    with open(r'C:\react project\figmversion3\client\src\assets\journey_steps.svg', 'w', encoding='utf-8') as out:
                        out.write(svg_content)
                    print(f'Success! Extracted {len(svg_content)} characters.')
                    break
        except Exception as e:
            pass

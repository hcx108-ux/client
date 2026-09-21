$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$fullText = [System.IO.File]::ReadAllText($logPath)

# Search for width="1440" height="578" or width=\"1440\" height=\"578\"
$idx1 = $fullText.LastIndexOf('height="578"')
if ($idx1 -lt 0) { $idx1 = $fullText.LastIndexOf('height=\"578\"') }

Write-Host "Index of height 578: $idx1"

if ($idx1 -ge 0) {
    # Find start of <svg
    $svg1Start = $fullText.LastIndexOf('<svg', $idx1)
    
    # Also find next <svg with 277 height
    $idx2 = $fullText.IndexOf('277', $idx1)
    $svg2End = $fullText.IndexOf('</svg>', $idx2) + 6
    
    $len = $svg2End - $svg1Start
    $block = $fullText.Substring($svg1Start, $len)
    
    # Clean JSON escaping if present
    $block = $block.Replace('\"', '"').Replace('\n', "`n").Replace('\r', '')
    
    [System.IO.File]::WriteAllText('c:\react project\figma-akashvani\scratch\clean_user_hero_svgs.txt', $block)
    Write-Host "Extracted clean SVGs block. Length: $($block.Length)"
}

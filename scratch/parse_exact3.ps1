$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$fullText = [System.IO.File]::ReadAllText($logPath)

$idx = 797054
$svgStart = $fullText.LastIndexOf('<svg', $idx)
$len = [Math]::Min($fullText.Length - $svgStart, 35000)
$svgBlock = $fullText.Substring($svgStart, $len)

[System.IO.File]::WriteAllText('c:\react project\figma-akashvani\scratch\hero_wave_svgs.txt', $svgBlock)
Write-Host "SUCCESS! Extracted SVGs length: $($svgBlock.Length)"

$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'M-30\.3149 289\.01') {
        Write-Host "Found match at line $i!"
        $json = $lines[$i] | ConvertFrom-Json
        $txt = $json.content
        
        # Extract <svg ... </svg>
        $idx = $txt.IndexOf('<svg')
        $endIdx = $txt.LastIndexOf('</svg>')
        if ($idx -ge 0 -and $endIdx -gt $idx) {
            $svg = $txt.Substring($idx, ($endIdx - $idx) + 6)
            Write-Host "Successfully extracted SVG! Length: $($svg.Length)"
            [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\figma_offers_full.svg", $svg)
            break
        }
    }
}

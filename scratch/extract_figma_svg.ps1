$logFile = "C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logFile

for ($i = $lines.Count - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match 'height="1018"') {
        Write-Host "Found line at $i"
        $json = $lines[$i] | ConvertFrom-Json
        $txt = $json.content
        $idx = $txt.IndexOf('<svg')
        if ($idx -ge 0) {
            $endIdx = $txt.LastIndexOf('</svg>')
            if ($endIdx -gt $idx) {
                $svg = $txt.Substring($idx, ($endIdx - $idx) + 6)
                Write-Host "Extracted SVG! Length: $($svg.Length)"
                [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\figma_offers_full.svg", $svg)
                break
            }
        }
    }
}

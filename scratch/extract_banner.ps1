$text = Get-Content -Raw -Path 'C:\Users\Vikas\.gemini\antigravity-ide\brain\14ae6906-560f-4f89-bfe7-f5e552fdf06c\.system_generated\logs\transcript_full.jsonl'
$lines = $text.Split("`n")
$userLine = ""

for ($i = $lines.Count - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match '"type":"USER_INPUT"' -and $lines[$i] -match 'hero section ke niche') {
        $userLine = $lines[$i]
        break
    }
}

if ($userLine.Length -gt 0) {
    Write-Host "Found target user input line, length:" $userLine.Length
    $startPos = $userLine.IndexOf('<svg')
    $endPos = $userLine.LastIndexOf('</svg>')
    if ($endPos -lt 0) {
        $endPos = $userLine.LastIndexOf('<\/svg>') + 7
    } else {
        $endPos = $endPos + 6
    }
    
    $svg = $userLine.Substring($startPos, $endPos - $startPos)
    # JSON unescape
    $svg = $svg -replace '\\"', '"' -replace '\\/', '/' -replace '\\n', "`n" -replace '\\r', ""
    $svg | Out-File -FilePath 'scratch/feature_banner.svg' -Encoding utf8
    Write-Host "Successfully extracted clean SVG! Length:" $svg.Length
} else {
    Write-Host "User line not found"
}

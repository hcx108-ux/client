$text = Get-Content -Raw -Path 'C:\Users\Vikas\.gemini\antigravity-ide\brain\14ae6906-560f-4f89-bfe7-f5e552fdf06c\.system_generated\logs\transcript_full.jsonl'
$lines = $text.Split("`n")
$userLine = ""

for ($i = $lines.Count - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match '"type":"USER_INPUT"' -and $lines[$i] -match 'next section') {
        $userLine = $lines[$i]
        break
    }
}

if ($userLine.Length -gt 0) {
    Write-Host "Found target user input line, length:" $userLine.Length
    
    # Try regex match
    if ($userLine -match '(<svg.+?<\/svg>)') {
        $svg = $matches[1]
    } elseif ($userLine -match '(<svg.+?</svg>)') {
        $svg = $matches[1]
    } else {
        # Find start and end manually
        $startPos = $userLine.IndexOf('<svg')
        $endPos = $userLine.LastIndexOf('<\/svg>')
        if ($endPos -gt 0) {
            $endPos = $endPos + 7
            $svg = $userLine.Substring($startPos, $endPos - $startPos)
        } else {
            $endPos = $userLine.LastIndexOf('</svg>')
            if ($endPos -gt 0) {
                $endPos = $endPos + 6
                $svg = $userLine.Substring($startPos, $endPos - $startPos)
            } else {
                Write-Host "Could not find end of svg"
                $svg = ""
            }
        }
    }
    
    if ($svg.Length -gt 0) {
        $svg = $svg -replace '\\"', '"' -replace '\\/', '/' -replace '\\n', "`n" -replace '\\r', ""
        $svg | Out-File -FilePath 'scratch/trust_banner.svg' -Encoding utf8
        Write-Host "Successfully extracted clean SVG! Length:" $svg.Length
    }
} else {
    Write-Host "User line not found"
}

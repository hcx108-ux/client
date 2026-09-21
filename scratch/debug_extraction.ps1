$file = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$content = [System.IO.File]::ReadAllText($file)
$idx = $content.LastIndexOf('1018')
Write-Host "Index of 1018: $idx"

# Let's search backwards from $idx for '<svg' or 'svg'
$start = $content.LastIndexOf('svg', $idx)
Write-Host "Index of svg before 1018: $start"

$snippetBefore = $content.Substring([Math]::Max(0, $idx - 200), 250)
Write-Host "Snippet around 1018: $snippetBefore"

# Let's find '<svg' or 'viewBox'
$svgStart = $content.LastIndexOf('<svg', $idx)
if ($svgStart -eq -1) {
    # Try finding '<svg' anywhere in the user line
    $userLineIdx = $content.LastIndexOf('"type":"USER_INPUT"', $idx)
    Write-Host "User input line index: $userLineIdx"
    $svgStart = $content.IndexOf('<svg', $userLineIdx)
}

Write-Host "Final svgStart: $svgStart"

if ($svgStart -ne -1) {
    $svgEnd = $content.IndexOf('</svg>', $svgStart)
    Write-Host "svgEnd: $svgEnd"
    if ($svgEnd -ne -1) {
        $rawSvg = $content.Substring($svgStart, ($svgEnd + 6) - $svgStart)
        $rawSvg = $rawSvg -replace '\\"', '"' -replace '\\n', "`n" -replace '\\r', "`r" -replace '\\t', "`t"
        [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\next_section.svg", $rawSvg)
        Write-Host "WROTE SVG SUCCESSFULLY! Length: $($rawSvg.Length)"
    }
}

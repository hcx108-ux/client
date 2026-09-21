$svg = Get-Content "scratch/raw_figma_1018.svg" -Raw
Write-Host "Total length: $($svg.Length)"

# Clean any leading text before <svg and trailing text after </svg>
$startIdx = $svg.IndexOf('<svg')
$endIdx = $svg.LastIndexOf('</svg>')

if ($startIdx -ge 0 -and $endIdx -gt $startIdx) {
    $cleanSvg = $svg.Substring($startIdx, ($endIdx - $startIdx) + 6)
    Write-Host "Clean SVG length: $($cleanSvg.Length)"
    [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\clean_figma_1018.svg", $cleanSvg)
}

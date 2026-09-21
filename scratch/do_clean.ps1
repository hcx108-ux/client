$raw = Get-Content "scratch/raw_figma_1018.svg" -Raw
$idx = $raw.IndexOf('<svg')
$endIdx = $raw.LastIndexOf('</svg>')

if ($idx -ge 0 -and $endIdx -gt $idx) {
    $clean = $raw.Substring($idx, ($endIdx - $idx) + 6)
    [System.IO.File]::WriteAllText("scratch/clean_figma_1018.svg", $clean)
    Write-Host "Saved clean_figma_1018.svg! Length: $($clean.Length)"
} else {
    Write-Host "Failed to extract clean SVG"
}

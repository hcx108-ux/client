$svg = Get-Content "scratch/figma_offers_full.svg" -Raw

Write-Host "SVG Total Length: $($svg.Length)"
$viewBox = [regex]::Match($svg, 'viewBox="([^"]+)"').Groups[1].Value
Write-Host "viewBox: $viewBox"

# Find paths or group count
$paths = [regex]::Matches($svg, '<path')
Write-Host "Total path tags: $($paths.Count)"

$defs = [regex]::Matches($svg, '<filter')
Write-Host "Total filter defs: $($defs.Count)"

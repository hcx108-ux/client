$c = Get-Content 'client/src/assets/footer.svg' -Raw

# Check viewBox and dimensions
$svg = [regex]::Match($c, '<svg[^>]+>')
Write-Output "SVG Root: $($svg.Value)"

# Check clip paths / groups
$rects = [regex]::Matches($c, '<rect[^>]+>')
foreach ($r in $rects) { Write-Output "Rect: $($r.Value)" }

# Check all paths and their bounding boxes/fills
$paths = [regex]::Matches($c, '<path[^>]+>')
Write-Output "Paths count: $($paths.Count)"

# Let's inspect the groups and fills
$fills = [regex]::Matches($c, 'fill="([^"]+)"') | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
Write-Output "Fills used: $($fills -join ', ')"

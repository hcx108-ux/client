$content = Get-Content 'client/src/assets/about_akashvani.svg' -Raw
Write-Output "SVG length: $($content.Length)"
$header = $content.Substring(0, [Math]::Min(1000, $content.Length))
Write-Output "Header: $header"

# Extract rects
$rects = [regex]::Matches($content, '<rect[^>]+>')
Write-Output "Rects count: $($rects.Count)"
foreach ($r in $rects) {
    Write-Output "Rect: $($r.Value)"
}

# Check if there are image references or patterns
$patterns = [regex]::Matches($content, '<pattern[^>]+>')
Write-Output "Patterns count: $($patterns.Count)"
foreach ($p in $patterns) {
    Write-Output "Pattern: $($p.Value)"
}

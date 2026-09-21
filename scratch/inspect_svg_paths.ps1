$content = Get-Content 'client/src/assets/choose_the_level.svg' -Raw

# Find all path elements and their approximate coordinates
$paths = [regex]::Matches($content, '<path[^>]+>')
Write-Output "Total paths: $($paths.Count)"

$i = 0
foreach ($p in $paths) {
    $tag = $p.Value
    $fill = ""
    if ($tag -match 'fill="([^"]+)"') { $fill = $matches[1] }
    $stroke = ""
    if ($tag -match 'stroke="([^"]+)"') { $stroke = $matches[1] }
    
    # Let's extract first few coordinates from d attribute
    $d = ""
    if ($tag -match 'd="([^"]+)"') { $d = $matches[1] }
    
    $coords = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    $firstX = if ($coords.Count -gt 0) { $coords[0].Groups[1].Value } else { "" }
    $firstY = if ($coords.Count -gt 0) { $coords[0].Groups[2].Value } else { "" }
    
    Write-Output "Path $i | Fill: $fill | Stroke: $stroke | (X: $firstX, Y: $firstY) | d-len: $($d.Length)"
    $i++
}

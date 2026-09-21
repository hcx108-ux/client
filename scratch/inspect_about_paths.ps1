$content = Get-Content 'scratch/about_akashvani_clean.svg' -Raw
$paths = [regex]::Matches($content, '<path[^>]+>')
Write-Output "Total paths: $($paths.Count)"

$i = 0
foreach ($p in $paths) {
    $tag = $p.Value
    $fill = if ($tag -match 'fill="([^"]+)"') { $matches[1] } else { "" }
    $stroke = if ($tag -match 'stroke="([^"]+)"') { $matches[1] } else { "" }
    $d = if ($tag -match 'd="([^"]+)"') { $matches[1] } else { "" }
    
    $coords = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    $firstX = if ($coords.Count -gt 0) { $coords[0].Groups[1].Value } else { "" }
    $firstY = if ($coords.Count -gt 0) { $coords[0].Groups[2].Value } else { "" }
    
    Write-Output "Path $i | Fill: $fill | Stroke: $stroke | (X: $firstX, Y: $firstY) | d-len: $($d.Length)"
    $i++
}

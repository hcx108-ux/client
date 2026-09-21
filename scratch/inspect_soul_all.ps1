$content = Get-Content 'scratch/about_akashvani_clean.svg' -Raw

# Find the exact <g> or paths in the soul section
$soulSection = [regex]::Match($content, '(?s)<g[^>]*>[\s\S]*?136[0-9][\s\S]*?<\/g>')
Write-Output "Soul section found: $($soulSection.Success)"
if ($soulSection.Success) {
    Write-Output $soulSection.Value.Substring(0, [Math]::Min(1000, $soulSection.Value.Length))
}

# Find all paths between y=1330 and 1430
$pathsInSoul = [regex]::Matches($content, '<path[^>]+>') | Where-Object {
    $_.Value -match '13[3-9][0-9]|14[0-3][0-9]'
}
Write-Output "All paths in y=1330..1430 count: $($pathsInSoul.Count)"
$idx = 0
foreach ($p in $pathsInSoul) {
    $fill = if ($p.Value -match 'fill="([^"]+)"') { $matches[1] } else { "" }
    Write-Output "Path $idx (fill=$fill): $($p.Value.Substring(0, [Math]::Min(100, $p.Value.Length)))"
    $idx++
}

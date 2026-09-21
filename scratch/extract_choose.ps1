$content = Get-Content 'client/src/assets/choose_the_level.svg' -Raw
$pathMatches = [regex]::Matches($content, '<path[^>]+>')
Write-Output "Found $($pathMatches.Count) paths"
$idx = 0
foreach ($p in $pathMatches) {
    Write-Output "Path ${idx}: $($p.Value.Substring(0, [Math]::Min(120, $p.Value.Length)))"
    $idx++
}

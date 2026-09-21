$content = Get-Content 'scratch/about_akashvani_clean.svg' -Raw
$bodyMatches = [regex]::Matches($content, '<path[^>]+fill="#BD5B3B"[^>]*>')
$idx = 0
foreach ($b in $bodyMatches) {
    Write-Output "Icon ${idx}: $($b.Value.Substring(0, [Math]::Min(150, $b.Value.Length)))"
    $idx++
}

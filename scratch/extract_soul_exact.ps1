$c = Get-Content 'scratch/about_akashvani_clean.svg' -Raw
$matches = [regex]::Matches($c, '<path [^>]*d="([^"]+)"[^>]*fill="#BD5B3B"[^>]*/>')
$soulPaths = @()
foreach ($m in $matches) {
    $d = $m.Groups[1].Value
    $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    $ys = @()
    foreach ($n in $nums) { $ys += [double]$n.Groups[2].Value }
    $minY = ($ys | Measure-Object -Minimum).Minimum
    if ($minY -gt 1300 -and $minY -lt 1500) {
        $soulPaths += $m.Value
        Write-Output "Found soul path: $($m.Value)"
    }
}
Write-Output "Total soul paths: $($soulPaths.Count)"
"<svg viewBox='904 1362 44 48' width='38' height='40' fill='none' xmlns='http://www.w3.org/2000/svg'>`n$($soulPaths -join "`n")`n</svg>" | Set-Content 'scratch/soul_exact_icon.svg'

$clean = Get-Content 'scratch/start_where_clean.svg' -Raw

# In scratch/start_where_clean.svg, lines with y coords around 540..585 are the logo paths!
$matches = [regex]::Matches($clean, '(?s)<path d="([^"]+)" fill="#F5F0EA"/>')
Write-Output "Total path elements with #F5F0EA: $($matches.Count)"

$logoPaths = @()
foreach ($m in $matches) {
    $d = $m.Groups[1].Value
    $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    $ys = @()
    foreach ($n in $nums) { $ys += [double]$n.Groups[2].Value }
    $minY = ($ys | Measure-Object -Minimum).Minimum
    if ($minY -gt 500) {
        $logoPaths += $m.Value
    }
}

Write-Output "Logo paths count: $($logoPaths.Count)"
"<svg viewBox='630 540 180 50' width='180' height='50' fill='none' xmlns='http://www.w3.org/2000/svg'>`n$($logoPaths -join "`n")`n</svg>" | Set-Content 'scratch/akashvani_logo_banner.svg'
Write-Output "Saved scratch/akashvani_logo_banner.svg"

$content = Get-Content 'scratch/about_akashvani_clean.svg' -Raw

# Find all paths near y=1360 to 1410 with fill="#BD5B3B"
$soulPaths = [regex]::Matches($content, '(?s)<path d="([^"]+)" fill="#BD5B3B"/>') | Where-Object {
    $_.Value -match '13[6-9][0-9]|140[0-9]'
}

Write-Output "Total Soul paths: $($soulPaths.Count)"
$i = 0
foreach ($sp in $soulPaths) {
    $d = $sp.Groups[1].Value
    $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    $xs = @(); $ys = @()
    foreach ($m in $nums) {
        $xs += [double]$m.Groups[1].Value
        $ys += [double]$m.Groups[2].Value
    }
    $minX = ($xs | Measure-Object -Minimum).Minimum
    $maxX = ($xs | Measure-Object -Maximum).Maximum
    $minY = ($ys | Measure-Object -Minimum).Minimum
    $maxY = ($ys | Measure-Object -Maximum).Maximum
    $centerX = ($minX + $maxX) / 2
    $centerY = ($minY + $maxY) / 2
    Write-Output "Path $i | Center: ($centerX, $centerY) | Box: [$minX..$maxX, $minY..$maxY] | Size: ($($maxX-$minX) x $($maxY-$minY))"
    $i++
}

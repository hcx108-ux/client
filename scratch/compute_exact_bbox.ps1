$content = Get-Content 'scratch/about_akashvani_clean.svg' -Raw

# 1. Mind path (around x=920..965, y=384..430)
$mindMatch = [regex]::Match($content, '(?s)<path d="(M939\.21 385\.217[^"]+)" fill="#BD5B3B"/>')
if ($mindMatch.Success) {
    $d = $mindMatch.Groups[1].Value
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
    Write-Output "Mind: minX=$minX, maxX=$maxX (width=$($maxX-$minX)), minY=$minY, maxY=$maxY (height=$($maxY-$minY))"
}

# 2. Body path (around x=175..225, y=865..915)
$bodyMatch = [regex]::Match($content, '(?s)<path d="(M197\.624 869\.794[^"]+)" fill="#BD5B3B"/>')
if ($bodyMatch.Success) {
    $d = $bodyMatch.Groups[1].Value
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
    Write-Output "Body: minX=$minX, maxX=$maxX (width=$($maxX-$minX)), minY=$minY, maxY=$maxY (height=$($maxY-$minY))"
}

# 3. Soul paths (around x=900..950, y=1360..1410)
$soulMatches = [regex]::Matches($content, '(?s)<path d="(M9(?:25|28|40|23|11|39|15|33|11)\.[^"]+)" fill="#BD5B3B"/>')
Write-Output "Soul paths count: $($soulMatches.Count)"
$xs = @(); $ys = @()
foreach ($sm in $soulMatches) {
    $d = $sm.Groups[1].Value
    $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    foreach ($m in $nums) {
        $xs += [double]$m.Groups[1].Value
        $ys += [double]$m.Groups[2].Value
    }
}
$minX = ($xs | Measure-Object -Minimum).Minimum
$maxX = ($xs | Measure-Object -Maximum).Maximum
$minY = ($ys | Measure-Object -Minimum).Minimum
$maxY = ($ys | Measure-Object -Maximum).Maximum
Write-Output "Soul: minX=$minX, maxX=$maxX (width=$($maxX-$minX)), minY=$minY, maxY=$maxY (height=$($maxY-$minY))"

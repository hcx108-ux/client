$c = Get-Content 'scratch/about_akashvani_clean.svg' -Raw
$matches = [regex]::Matches($c, '<path d="([^"]+)" fill="#BD5B3B"/>')
$allXs = @()
$allYs = @()
$count = 0
foreach ($m in $matches) {
    $d = $m.Groups[1].Value
    $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    $xs = @()
    $ys = @()
    foreach ($n in $nums) {
        $xs += [double]$n.Groups[1].Value
        $ys += [double]$n.Groups[2].Value
    }
    $minY = ($ys | Measure-Object -Minimum).Minimum
    if ($minY -gt 1300) {
        $count++
        $minX = ($xs | Measure-Object -Minimum).Minimum
        $maxX = ($xs | Measure-Object -Maximum).Maximum
        $maxY = ($ys | Measure-Object -Maximum).Maximum
        $allXs += $xs
        $allYs += $ys
        Write-Output "[$count] minX=$minX maxX=$maxX minY=$minY maxY=$maxY :: $($d.Substring(0, [Math]::Min(35, $d.Length)))"
    }
}
$totMinX = ($allXs | Measure-Object -Minimum).Minimum
$totMaxX = ($allXs | Measure-Object -Maximum).Maximum
$totMinY = ($allYs | Measure-Object -Minimum).Minimum
$totMaxY = ($allYs | Measure-Object -Maximum).Maximum
Write-Output "TOTAL SOUL ICON BOUNDING BOX:"
Write-Output "X: $totMinX to $totMaxX (width = $($totMaxX - $totMinX))"
Write-Output "Y: $totMinY to $totMaxY (height = $($totMaxY - $totMinY))"
Write-Output "Center: X = $(($totMinX + $totMaxX)/2), Y = $(($totMinY + $totMaxY)/2)"

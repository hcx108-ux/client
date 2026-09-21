$c = Get-Content 'scratch/akashvani_logo_banner.svg' -Raw
$matches = [regex]::Matches($c, '<path d="([^"]+)"')
$allXs = @()
$allYs = @()
foreach ($m in $matches) {
    $d = $m.Groups[1].Value
    $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    foreach ($n in $nums) {
        $allXs += [double]$n.Groups[1].Value
        $allYs += [double]$n.Groups[2].Value
    }
}
$minX = ($allXs | Measure-Object -Minimum).Minimum
$maxX = ($allXs | Measure-Object -Maximum).Maximum
$minY = ($allYs | Measure-Object -Minimum).Minimum
$maxY = ($allYs | Measure-Object -Maximum).Maximum
Write-Output "Logo BBox: minX=$minX, maxX=$maxX (w=$($maxX-$minX)), minY=$minY, maxY=$maxY (h=$($maxY-$minY))"

$content = Get-Content 'scratch/about_akashvani_clean.svg' -Raw
$soulPaths = [regex]::Matches($content, '(?s)<path d="([^"]+)" fill="#BD5B3B"/>') | Where-Object {
    $_.Value -match '13[6-9][0-9]|140[0-9]'
}
Write-Output "Soul paths in y=1360..1410 count: $($soulPaths.Count)"
$xs = @(); $ys = @()
$idx = 0
foreach ($sp in $soulPaths) {
    $d = $sp.Groups[1].Value
    $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    foreach ($m in $nums) {
        $xs += [double]$m.Groups[1].Value
        $ys += [double]$m.Groups[2].Value
    }
    Write-Output "Soul path ${idx}: $($sp.Value.Substring(0, [Math]::Min(100, $sp.Value.Length)))"
    $idx++
}

$minX = ($xs | Measure-Object -Minimum).Minimum
$maxX = ($xs | Measure-Object -Maximum).Maximum
$minY = ($ys | Measure-Object -Minimum).Minimum
$maxY = ($ys | Measure-Object -Maximum).Maximum
Write-Output "Exact Soul Bbox: minX=$minX, maxX=$maxX (width=$($maxX-$minX)), minY=$minY, maxY=$maxY (height=$($maxY-$minY))"

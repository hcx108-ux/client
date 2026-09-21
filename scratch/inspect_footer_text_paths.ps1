$c = Get-Content 'client/src/assets/footer.svg' -Raw
$matches = [regex]::Matches($c, '(?s)<path [^>]*d="([^"]+)"[^>]*fill="([^"]+)"[^>]*/>')
Write-Output "Total path elements: $($matches.Count)"
for ($i = 36; $i -lt $matches.Count; $i++) {
    $m = $matches[$i]
    $d = $m.Groups[1].Value
    $fill = $m.Groups[2].Value
    $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
    $xs = @(); $ys = @()
    foreach ($n in $nums) {
        $xs += [double]$n.Groups[1].Value
        $ys += [double]$n.Groups[2].Value
    }
    $minX = ($xs | Measure-Object -Minimum).Minimum
    $maxX = ($xs | Measure-Object -Maximum).Maximum
    $minY = ($ys | Measure-Object -Minimum).Minimum
    $maxY = ($ys | Measure-Object -Maximum).Maximum
    Write-Output "Path [$($i+1)] fill=$fill : minX=$minX maxX=$maxX minY=$minY maxY=$maxY"
}

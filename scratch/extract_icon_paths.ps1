$c1 = [System.IO.File]::ReadAllText('scratch/card_1.txt')
$c2 = [System.IO.File]::ReadAllText('scratch/card_2.txt')
$c3 = [System.IO.File]::ReadAllText('scratch/card_3.txt')
$c4 = [System.IO.File]::ReadAllText('scratch/card_4.txt')

# Let's extract all <path d="..." from each card
function Get-IconPaths($text, $minY, $maxY) {
    $paths = [regex]::Matches($text, '<path d="([^"]+)"')
    $iconPaths = @()
    foreach ($p in $paths) {
        $d = $p.Groups[1].Value
        # check if this path is part of the icon (Y coords in upper part of card)
        # We can extract all numbers
        $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)')
        if ($nums.Count -gt 10) {
            $yVals = @()
            for ($i = 1; $i -lt $nums.Count; $i += 2) {
                $yVals += [double]$nums[$i].Value
            }
            $avgY = ($yVals | Measure-Object -Average).Average
            if ($avgY -ge $minY -and $avgY -le $maxY) {
                $minX = ($yVals | Measure-Object -Minimum).Minimum
                $maxX = ($yVals | Measure-Object -Maximum).Maximum
                Write-Host "Found icon path: avgY=$avgY (range $minY - $maxY), len=$(($d.Length))"
                $iconPaths += $d
            }
        }
    }
    return $iconPaths
}

Write-Host "--- Card 1 (Human: Y ~ 430 - 530) ---"
$p1 = Get-IconPaths $c1 420 530
for ($k=0; $k -lt $p1.Count; $k++) {
    [System.IO.File]::WriteAllText("scratch/icon1_path_$k.txt", $p1[$k])
}

Write-Host "--- Card 2 (Vedic: Y ~ 430 - 530) ---"
$p2 = Get-IconPaths $c2 420 530
for ($k=0; $k -lt $p2.Count; $k++) {
    [System.IO.File]::WriteAllText("scratch/icon2_path_$k.txt", $p2[$k])
}

Write-Host "--- Card 3 (Spiritual: Y ~ 730 - 830) ---"
$p3 = Get-IconPaths $c3 720 830
for ($k=0; $k -lt $p3.Count; $k++) {
    [System.IO.File]::WriteAllText("scratch/icon3_path_$k.txt", $p3[$k])
}

Write-Host "--- Card 4 (Holistic: Y ~ 730 - 830) ---"
$p4 = Get-IconPaths $c4 720 830
for ($k=0; $k -lt $p4.Count; $k++) {
    [System.IO.File]::WriteAllText("scratch/icon4_path_$k.txt", $p4[$k])
}

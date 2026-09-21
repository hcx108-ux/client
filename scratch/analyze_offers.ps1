$curveD = Get-Content 'scratch/curve_path.txt' -Raw
$matches = [regex]::Matches($curveD, '[-+]?\d*\.?\d+')

# Print first 20 numbers from curveD
for ($i = 0; $i -lt 30; $i += 2) {
    $x = $matches[$i].Value
    $y = $matches[$i+1].Value
    Write-Host "x: $x, y: $y"
}

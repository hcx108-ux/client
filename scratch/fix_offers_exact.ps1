$curveD = (Get-Content "scratch/curve_path.txt" -Raw).Trim()

# Read icon paths
$icon1D = (Get-Content "scratch/path_1.txt" -Raw).Trim()
$icon2D = (Get-Content "scratch/path_8.txt" -Raw).Trim()
$icon3D = (Get-Content "scratch/path_14.txt" -Raw).Trim()
$icon4D = (Get-Content "scratch/path_16.txt" -Raw).Trim()

Write-Host "curveD length: $($curveD.Length)"
Write-Host "icon1D length: $($icon1D.Length)"
Write-Host "icon2D length: $($icon2D.Length)"
Write-Host "icon3D length: $($icon3D.Length)"
Write-Host "icon4D length: $($icon4D.Length)"

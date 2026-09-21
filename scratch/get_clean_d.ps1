$p8 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_8.txt" -Raw) -replace '<path d="([^"]+)".*', '$1'
$p16 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_16.txt" -Raw) -replace '<path d="([^"]+)".*', '$1'
$p24 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_24.txt" -Raw) -replace '<path d="([^"]+)".*', '$1'
$p25 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_25.txt" -Raw) -replace '<path d="([^"]+)".*', '$1'
$p26 = (Get-Content "c:\react project\figma-akashvani\scratch\p3_path_26.txt" -Raw) -replace '<path d="([^"]+)".*', '$1'

Write-Host "P8 len: $($p8.Length)"
Write-Host "P16 len: $($p16.Length)"
Write-Host "P24 len: $($p24.Length)"
Write-Host "P25 len: $($p25.Length)"
Write-Host "P26 len: $($p26.Length)"

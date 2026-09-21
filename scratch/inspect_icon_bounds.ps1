$icon1 = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\path_5.txt")
$icon2 = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\path_10.txt")
$icon3 = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\path_16.txt")
$icon4 = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\path_15.txt")

Write-Host "Icon 1 start: $($icon1.Substring(0, 60))"
Write-Host "Icon 2 start: $($icon2.Substring(0, 60))"
Write-Host "Icon 3 start: $($icon3.Substring(0, 60))"
Write-Host "Icon 4 start: $($icon4.Substring(0, 60))"

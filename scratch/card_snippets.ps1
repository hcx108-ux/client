$svg = [System.IO.File]::ReadAllText("$PSScriptRoot/../client/src/assets/look_at_your_life.svg")

$c0 = 160918; $c0End = 213617
$c1 = 213619; $c1End = 297979
$c2 = 297981; $c2End = 358297
$c3 = 358299; $c3End = 407181

Write-Host "Card 0 End snippet:"
Write-Host $svg.Substring($c0End - 100, 100)

Write-Host "Card 1 End snippet:"
Write-Host $svg.Substring($c1End - 100, 100)

Write-Host "Card 2 End snippet:"
Write-Host $svg.Substring($c2End - 100, 100)

Write-Host "Card 3 End snippet:"
Write-Host $svg.Substring($c3End - 100, 100)

$svg = [System.IO.File]::ReadAllText("$PSScriptRoot/../client/src/assets/look_at_your_life.svg")
Write-Host "SVG Length: $($svg.Length)"
[regex]::Matches($svg, '<rect[^>]+>') | ForEach-Object { Write-Host $_.Value }
[regex]::Matches($svg, '<foreignObject[^>]+>') | ForEach-Object { Write-Host $_.Value }

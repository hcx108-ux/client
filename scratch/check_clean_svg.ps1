$svg = Get-Content "scratch/clean_figma_1018.svg" -Raw
Write-Host "Length: $($svg.Length)"
Write-Host "First 300 chars: $($svg.Substring(0, 300))"
Write-Host "Last 300 chars: $($svg.Substring($svg.Length - 300))"

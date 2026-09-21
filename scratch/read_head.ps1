$t = Get-Content "scratch/raw_figma_1018.svg" -Raw
Write-Host "Length: $($t.Length)"
Write-Host "First 300 chars:"
Write-Host ($t.Substring(0, [Math]::Min(300, $t.Length)))

Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -in 3000, 5173, 5174, 8080, 8000 } | ForEach-Object { Write-Output "Port: $($_.LocalPort)" }

Get-ChildItem "C:\Program Files\nodejs" | ForEach-Object { Write-Output $_.FullName }

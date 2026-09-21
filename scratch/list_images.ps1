Get-ChildItem 'client/src/assets' -Filter "*about*" | ForEach-Object { Write-Output "$($_.Name) - $($_.Length) bytes" }
Get-ChildItem 'client/src/assets' -Filter "*mind*" | ForEach-Object { Write-Output "$($_.Name) - $($_.Length) bytes" }
Get-ChildItem 'client/src/assets' -Filter "*body*" | ForEach-Object { Write-Output "$($_.Name) - $($_.Length) bytes" }
Get-ChildItem 'client/src/assets' -Filter "*soul*" | ForEach-Object { Write-Output "$($_.Name) - $($_.Length) bytes" }

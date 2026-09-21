$lines = Get-Content client/src/assets/mind_body_soul.svg
for ($i = 3; $i -le 8; $i++) {
    Write-Host "Line $($i+1) starts with:"
    Write-Host $lines[$i].Substring(0, [Math]::Min(150, $lines[$i].Length))
    Write-Host "Line $($i+1) ends with:"
    Write-Host $lines[$i].Substring([Math]::Max(0, $lines[$i].Length - 100))
}

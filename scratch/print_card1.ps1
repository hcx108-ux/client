$lines = Get-Content client/src/assets/mind_body_soul.svg
for ($i = 0; $i -lt 35; $i++) {
    Write-Host "$($i+1): $($lines[$i].Substring(0, [Math]::Min(120, $lines[$i].Length)))"
}

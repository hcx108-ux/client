$lines = Get-Content 'client/src/components/home/YourBirthChart.jsx'
for ($i = 225; $i -lt [Math]::Min(245, $lines.Length); $i++) {
    Write-Host "$($i + 1): $($lines[$i])"
}

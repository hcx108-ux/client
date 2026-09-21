$lines = Get-Content 'client/src/components/home/YourBirthChart.jsx'
for ($i = 144; $i -lt [Math]::Min(205, $lines.Length); $i++) {
    Write-Host "$($i + 1): $($lines[$i])"
}

$lines = Get-Content 'client/src/components/home/YourBirthChart.jsx'
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "<input") {
        Write-Host "$($i + 1): $($lines[$i].Trim())"
    }
}

$lines = Get-Content 'client/src/components/home/PersonalJourneyBeginning.jsx'
for ($i = 85; $i -lt [Math]::Min(115, $lines.Length); $i++) {
    Write-Host "$($i + 1): $($lines[$i])"
}

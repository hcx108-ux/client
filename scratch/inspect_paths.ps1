$lines = Get-Content 'client/src/components/home/LookAtYourLife.jsx'
for ($i = 64; $i -lt 78; $i++) {
    Write-Host "Line $($i + 1):"
    Write-Host $lines[$i]
}

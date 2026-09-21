$lines = Get-Content 'client/src/components/home/LookAtYourLife.jsx'
for ($i = 50; $i -lt 90; $i++) {
    $l = $lines[$i]
    if ($l.Length -gt 140) {
        $l = $l.Substring(0, 140) + "..."
    }
    Write-Host "$($i + 1): $l"
}

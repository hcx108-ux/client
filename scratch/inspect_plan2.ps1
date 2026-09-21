$cl = [System.IO.File]::ReadAllText("client/src/assets/choose_the_level.svg")
$lines = $cl.Split("`n")
for ($i = 49; $i -lt 80; $i++) {
    Write-Host "Line $($i+1): $($lines[$i])"
}

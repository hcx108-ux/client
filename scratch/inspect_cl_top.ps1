$cl = [System.IO.File]::ReadAllText("client/src/assets/choose_the_level.svg")
$lines = $cl.Split("`n")
for ($i = 0; $i -lt 55; $i++) {
    $l = $lines[$i]
    if ($l.Length -gt 150) { $l = $l.Substring(0, 150) + "..." }
    Write-Host "$($i + 1): $l"
}

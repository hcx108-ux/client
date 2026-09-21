$cl = [System.IO.File]::ReadAllText("client/src/assets/choose_the_level.svg")
$lines = $cl.Split("`n")
Write-Host "Total lines in choose_the_level.svg: $($lines.Count)"
for ($i = 25; $i -lt [Math]::Min(120, $lines.Count); $i++) {
    $l = $lines[$i]
    if ($l.Length -gt 140) { $l = $l.Substring(0, 140) + "..." }
    Write-Host "$($i + 1): $l"
}

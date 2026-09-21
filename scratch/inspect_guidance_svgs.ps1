$dg = [System.IO.File]::ReadAllText("client/src/assets/distinct_guidance.svg")
$cl = [System.IO.File]::ReadAllText("client/src/assets/choose_the_level.svg")

Write-Host "distinct_guidance.svg length: $($dg.Length)"
Write-Host "choose_the_level.svg length: $($cl.Length)"

Write-Host "`n--- distinct_guidance lines (first 30) ---"
$dglines = $dg.Split("`n")
for ($i = 0; $i -lt [Math]::Min(30, $dglines.Count); $i++) {
    $l = $dglines[$i]
    if ($l.Length -gt 140) { $l = $l.Substring(0, 140) + "..." }
    Write-Host "$($i + 1): $l"
}

Write-Host "`n--- choose_the_level lines (first 30) ---"
$cllines = $cl.Split("`n")
for ($i = 0; $i -lt [Math]::Min(30, $cllines.Count); $i++) {
    $l = $cllines[$i]
    if ($l.Length -gt 140) { $l = $l.Substring(0, 140) + "..." }
    Write-Host "$($i + 1): $l"
}

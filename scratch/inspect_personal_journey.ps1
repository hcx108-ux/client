$content = [System.IO.File]::ReadAllText("client/src/assets/personal_journey_beginning.svg", [System.Text.Encoding]::UTF8)
Write-Host "SVG Length: $($content.Length)"

$lines = $content.Split("`n")
Write-Host "Total lines: $($lines.Count)"
for ($i = 0; $i -lt [Math]::Min(100, $lines.Count); $i++) {
    $l = $lines[$i]
    if ($l.Length -gt 140) { $l = $l.Substring(0, 140) + "..." }
    Write-Host "$($i + 1): $l"
}

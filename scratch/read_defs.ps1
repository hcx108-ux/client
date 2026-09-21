$content = [System.IO.File]::ReadAllText("client/src/assets/mind_body_soul.svg")
$lines = $content.Split("`n")
Write-Host "Lines 100-130:"
for ($i = 99; $i -lt [Math]::Min(130, $lines.Count); $i++) {
    Write-Host $lines[$i]
}

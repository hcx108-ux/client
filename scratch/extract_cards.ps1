$lines = Get-Content client/src/assets/mind_body_soul.svg
Write-Host "Card 1 (Mind) text/elements:"
for ($i = 8; $i -le 35; $i++) {
    Write-Host "Line $($i+1): $($lines[$i].Substring(0, [Math]::Min(100, $lines[$i].Length)))"
}

Write-Host "`nCard 3 (Soul) text/elements:"
for ($i = 36; $i -le 71; $i++) {
    if ($lines[$i] -match 'path|text|foreignObject|rect') {
        Write-Host "Line $($i+1): $($lines[$i].Substring(0, [Math]::Min(100, $lines[$i].Length)))"
    }
}

Write-Host "`nCard 2 (Body) text/elements:"
for ($i = 72; $i -le 100; $i++) {
    if ($lines[$i] -match 'path|text|foreignObject|rect') {
        Write-Host "Line $($i+1): $($lines[$i].Substring(0, [Math]::Min(100, $lines[$i].Length)))"
    }
}

$lines = Get-Content client/src/assets/mind_body_soul.svg
Write-Host "Total lines: $($lines.Count)"
for ($i = 0; $i -lt [Math]::Min(130, $lines.Count); $i++) {
    $line = $lines[$i]
    if ($line.StartsWith("<") -or $line.Contains("id=") -or $line.Contains("<text") -or $line.Contains("<image") -or $line.Contains("<pattern")) {
        Write-Host "$($i + 1): $($line.Substring(0, [Math]::Min(120, $line.Length)))"
    }
}

$file = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript.jsonl"
if (-not (Test-Path $file)) {
    $file = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
}

Write-Host "File path: $file"
$lines = [System.IO.File]::ReadAllLines($file)
Write-Host "Total lines: $($lines.Count)"

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i].Contains('1018')) {
        Write-Host "Line $i contains '1018'. Line length: $($lines[$i].Length)"
        $snippet = $lines[$i].Substring(0, [Math]::Min(300, $lines[$i].Length))
        Write-Host "Line $i snippet: $snippet"
    }
}

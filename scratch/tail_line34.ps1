$file = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = [System.IO.File]::ReadAllLines($file)

foreach ($line in $lines) {
    if ($line.Contains('"step_index":34') -or $line.Contains('"step_index": 34')) {
        Write-Host "Tail of line 34:"
        $tail = $line.Substring($line.Length - 500)
        Write-Host $tail
    }
}

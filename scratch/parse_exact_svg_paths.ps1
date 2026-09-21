$file = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = [System.IO.File]::ReadAllLines($file)

$maxChunk = ""

foreach ($line in $lines) {
    if ($line.Contains('stupid its not correct yet') -or $line.Contains('viewBox="0 0 1440 1018"')) {
        $start = $line.IndexOf('<svg')
        if ($start -ne -1) {
            $chunk = $line.Substring($start)
            $trunc = $chunk.IndexOf('\n<truncated')
            if ($trunc -ne -1) { $chunk = $chunk.Substring(0, $trunc) }
            $chunk = $chunk -replace '\\"', '"' -replace '\\n', "`n" -replace '\\r', "`r" -replace '\\t', "`t" -replace '\\/', '/'
            if ($chunk.Length -gt $maxChunk.Length) {
                $maxChunk = $chunk
            }
        }
    }
}

Write-Host "Max chunk length: $($maxChunk.Length)"
[System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\latest_svg_chunk.svg", $maxChunk)

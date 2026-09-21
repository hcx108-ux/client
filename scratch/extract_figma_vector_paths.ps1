$file = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = [System.IO.File]::ReadAllLines($file)

$latestLine = ""
for ($i = $lines.Count - 1; $i -ge 0; $i--) {
    if ($lines[$i].Contains('What Akashvani Offers') -or $lines[$i].Contains('stupid its not correct yet') -or $lines[$i].Contains('viewBox="0 0 1440 1018"')) {
        $latestLine = $lines[$i]
        Write-Host "Found target prompt line at index $i! Line length: $($latestLine.Length)"
        break
    }
}

if ($latestLine -ne "") {
    $start = $latestLine.IndexOf('<svg')
    if ($start -ne -1) {
        $chunk = $latestLine.Substring($start)
        $truncIdx = $chunk.IndexOf('\n<truncated')
        if ($truncIdx -ne -1) {
            $chunk = $chunk.Substring(0, $truncIdx)
        }
        $chunk = $chunk -replace '\\"', '"' -replace '\\n', "`n" -replace '\\r', "`r" -replace '\\t', "`t" -replace '\\/', '/'
        [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\latest_svg_chunk.svg", $chunk)
        Write-Host "Saved latest_svg_chunk.svg! Length: $($chunk.Length)"
    }
}

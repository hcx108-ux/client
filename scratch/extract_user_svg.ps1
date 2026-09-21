$file = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = [System.IO.File]::ReadAllLines($file)

foreach ($line in $lines) {
    if ($line.Contains('"type":"USER_INPUT"') -and $line.Contains('viewBox="0 0 1440 1018"')) {
        Write-Host "FOUND USER INPUT LINE! Length: $($line.Length)"
        
        $start = $line.IndexOf('<svg')
        $end = $line.LastIndexOf('</svg>')
        
        Write-Host "Start: $start, End: $end"
        if ($start -ne -1 -and $end -ne -1) {
            $svg = $line.Substring($start, ($end + 6) - $start)
            # Unescape JSON escaped quotes and newlines
            $svg = $svg -replace '\\"', '"' -replace '\\n', "`n" -replace '\\r', "`r" -replace '\\t', "`t" -replace '\\/', '/'
            [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\next_section.svg", $svg)
            Write-Host "Successfully saved SVG! Length: $($svg.Length)"
        }
    }
}

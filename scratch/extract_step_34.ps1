$file = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = [System.IO.File]::ReadAllLines($file)

foreach ($line in $lines) {
    if ($line.Contains('"step_index":34') -or $line.Contains('"step_index": 34')) {
        Write-Host "Found step 34 line! Length: $($line.Length)"
        $start = $line.IndexOf('<svg')
        
        # Search for closing svg in line
        $end = $line.LastIndexOf('<\/svg>')
        if ($end -eq -1) { $end = $line.LastIndexOf('</svg>') }
        if ($end -eq -1) { $end = $line.LastIndexOf('svg>') }

        Write-Host "Start: $start, End: $end"
        if ($start -ne -1 -and $end -ne -1) {
            $rawSvg = $line.Substring($start, ($end + 7) - $start)
            # Unescape JSON
            $rawSvg = $rawSvg -replace '\\"', '"' -replace '\\n', "`n" -replace '\\r', "`r" -replace '\\t', "`t" -replace '\\/', '/'
            
            # Trim trailing json quotes/brackets if any
            $closingTagIdx = $rawSvg.LastIndexOf('</svg>')
            if ($closingTagIdx -ne -1) {
                $rawSvg = $rawSvg.Substring(0, $closingTagIdx + 6)
            }
            
            [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\next_section.svg", $rawSvg)
            Write-Host "SUCCESSFULLY EXTRACTED SVG TO scratch/next_section.svg! Size: $($rawSvg.Length)"
        }
    }
}

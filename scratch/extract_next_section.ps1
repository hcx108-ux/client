$logFiles = Get-ChildItem "C:\Users\Vikas\.gemini\antigravity-ide\brain" -Recurse -Filter "transcript_full.jsonl" -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending

foreach ($file in $logFiles) {
    Write-Host "Checking: $($file.FullName)"
    $content = [System.IO.File]::ReadAllText($file.FullName)
    if ($content.Contains('1018')) {
        Write-Host "Found '1018' in file $($file.FullName)! Content size: $($content.Length)"
        $idx = $content.LastIndexOf('1018')
        $svgStart = $content.LastIndexOf('<svg', $idx)
        if ($svgStart -ne -1) {
            $svgEnd = $content.IndexOf('</svg>', $idx)
            if ($svgEnd -ne -1) {
                $rawSvg = $content.Substring($svgStart, ($svgEnd + 6) - $svgStart)
                # Unescape json quotes if needed
                $rawSvg = $rawSvg -replace '\\"', '"' -replace '\\n', "`n" -replace '\\r', "`r" -replace '\\t', "`t"
                [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\next_section.svg", $rawSvg)
                Write-Host "Successfully extracted SVG to scratch/next_section.svg! Saved length: $($rawSvg.Length)"
                break
            }
        }
    }
}

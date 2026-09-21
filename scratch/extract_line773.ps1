$path = "C:\Users\Vikas\.gemini\antigravity-ide\brain\14ae6906-560f-4f89-bfe7-f5e552fdf06c\.system_generated\logs\transcript_full.jsonl"
$outPath = "c:\react project\figma-akashvani\scratch\trust_banner.svg"

$reader = [System.IO.File]::OpenText($path)
$lineNum = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $lineNum++
    if ($lineNum -eq 773) {
        Write-Output "Processing line 773, length: $($line.Length)"
        $svgStart = $line.IndexOf('<svg width=\"1440\" height=\"1022\"')
        if ($svgStart -lt 0) {
            Write-Output "svg not found with escaped quotes, trying unescaped..."
            $svgStart = $line.IndexOf('<svg width="1440" height="1022"')
        }
        Write-Output "SVG starts at index: $svgStart"
        if ($svgStart -ge 0) {
            $svgEnd = $line.LastIndexOf('</svg>')
            Write-Output "SVG ends at index: $svgEnd"
            if ($svgEnd -ge 0) {
                $svgEnd = $svgEnd + 6
                $raw = $line.Substring($svgStart, $svgEnd - $svgStart)
                # Unescape JSON escapes
                $svg = $raw -replace '\\n', "`n" -replace '\\"', '"' -replace '\\/', '/'
                [System.IO.File]::WriteAllText($outPath, $svg, [System.Text.Encoding]::UTF8)
                Write-Output "Extracted! Length: $($svg.Length)"
            } else {
                Write-Output "No closing svg tag"
            }
        }
        break
    }
}
$reader.Close()
Write-Output "Done"

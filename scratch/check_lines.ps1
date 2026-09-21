$path = "C:\Users\Vikas\.gemini\antigravity-ide\brain\14ae6906-560f-4f89-bfe7-f5e552fdf06c\.system_generated\logs\transcript_full.jsonl"
$outPath = "c:\react project\figma-akashvani\scratch\trust_banner.svg"

# Check lines 425, 427, 452, 454, 456, 462, 479, 741
$targetLines = @(425, 427, 452, 454, 456, 462, 479, 741)

$reader = [System.IO.File]::OpenText($path)
$lineNum = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $lineNum++
    if ($targetLines -contains $lineNum) {
        Write-Output "=== Line $lineNum, length: $($line.Length) ==="
        
        $svgStart = $line.IndexOf('<svg width=\"1440\" height=\"1022\"')
        if ($svgStart -ge 0) {
            $endIdx = $line.LastIndexOf('<\/svg>')
            $endIdxU = $line.LastIndexOf('</svg>')
            Write-Output "  SVG start: $svgStart, end (escaped): $endIdx, end (unescaped): $endIdxU"
            # Show last 200 chars 
            $lastChars = $line.Substring([Math]::Max(0, $line.Length - 200))
            Write-Output "  Last 200 chars: $lastChars"
        } else {
            Write-Output "  No SVG found on this line"
            # Show line content type
            $first200 = $line.Substring(0, [Math]::Min(200, $line.Length))
            Write-Output "  First 200 chars: $first200"
        }
    }
}
$reader.Close()
Write-Output "Done"

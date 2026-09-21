$path = "C:\Users\Vikas\.gemini\antigravity-ide\brain\14ae6906-560f-4f89-bfe7-f5e552fdf06c\.system_generated\logs\transcript_full.jsonl"
$reader = [System.IO.File]::OpenText($path)
$lineNum = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $lineNum++
    if ($line.Contains('<svg width="1440" height="1022"')) {
        Write-Output "Found on line $lineNum, length: $($line.Length)"
        if ($line.Contains('</svg>')) {
            Write-Output "Contains closing </svg>!"
            $start = $line.IndexOf('<svg width="1440" height="1022"')
            $end = $line.LastIndexOf('</svg>') + 6
            $svg = $line.Substring($start, $end - $start)
            [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\trust_banner.svg", $svg)
            Write-Output "Extracted successfully to trust_banner.svg! Length: $($svg.Length)"
        } else {
            Write-Output "Does NOT contain </svg>"
        }
    }
}
$reader.Close()

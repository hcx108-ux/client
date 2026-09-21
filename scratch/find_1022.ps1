$path = "C:\Users\Vikas\.gemini\antigravity-ide\brain\14ae6906-560f-4f89-bfe7-f5e552fdf06c\.system_generated\logs\transcript_full.jsonl"
$reader = [System.IO.File]::OpenText($path)
$lineNum = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $lineNum++
    if ($line.Contains('1022')) {
        Write-Output "Found 1022 on line $lineNum, line length: $($line.Length)"
        $idx = $line.IndexOf('1022')
        $start = [Math]::Max(0, $idx - 50)
        $len = [Math]::Min(150, $line.Length - $start)
        Write-Output "Snippet: " + $line.Substring($start, $len)
    }
}
$reader.Close()

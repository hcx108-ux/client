$path = "C:\Users\Vikas\.gemini\antigravity-ide\brain\14ae6906-560f-4f89-bfe7-f5e552fdf06c\.system_generated\logs\transcript_full.jsonl"
$reader = [System.IO.File]::OpenText($path)
$lineNum = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $lineNum++
    if ($lineNum -eq 954) {
        Write-Host "Line 954 length: $($line.Length)"
        Write-Host "Ends with: " $line.Substring([Math]::Max(0, $line.Length - 300))
        break
    }
}
$reader.Close()

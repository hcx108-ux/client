$text = Get-Content -Raw -Path 'C:\Users\Vikas\.gemini\antigravity-ide\brain\14ae6906-560f-4f89-bfe7-f5e552fdf06c\.system_generated\logs\transcript_full.jsonl'
$lines = $text.Split("`n")
$userLine = ""

for ($i = $lines.Count - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match '"type":"USER_INPUT"' -and $lines[$i] -match 'next section') {
        $userLine = $lines[$i]
        break
    }
}

if ($userLine.Length -gt 0) {
    Write-Host "Found target user input line, length:" $userLine.Length
    $endpart = $userLine.Substring($userLine.Length - 1000)
    Write-Host "End part of string: $endpart"
}

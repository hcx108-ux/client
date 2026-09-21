$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '"step_index":142' -or $lines[$i] -match '"step_index":141') {
        # Prompt 3
        $json = $lines[$i] | ConvertFrom-Json
        $txt = $json.content
        $matches = [regex]::Matches($txt, '<path[\s\S]*?>')
        Write-Host "Prompt 3 total paths: $($matches.Count)"
        for ($j = 0; $j -lt $matches.Count; $j++) {
            $m = $matches[$j].Value
            Write-Host "P3 Path ${j} (len $($m.Length)): $($m.Substring(0, [Math]::Min(100, $m.Length)))"
        }
    }
}

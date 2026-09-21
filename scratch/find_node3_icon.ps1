$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '"type":"USER_INPUT"') {
        $json = $lines[$i] | ConvertFrom-Json
        $txt = $json.content
        $matches = [regex]::Matches($txt, '<path[\s\S]*?>')
        Write-Host "Step $i (index $($json.step_index)) has $($matches.Count) paths"
        for ($j = 0; $j -lt $matches.Count; $j++) {
            $m = $matches[$j].Value
            if ($m -match '980' -or $m -match '1000' -or $m -match '1020' -or $m -match 'Connect' -or $m -match '655') {
                Write-Host "   Path ${j} (len $($m.Length)): $($m.Substring(0, [Math]::Min(100, $m.Length)))"
            }
        }
    }
}

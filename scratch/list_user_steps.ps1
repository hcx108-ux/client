$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '"type":"USER_INPUT"') {
        $json = $lines[$i] | ConvertFrom-Json
        Write-Host "Step $i (index $($json.step_index)): length $($json.content.Length)"
    }
}

$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath
for ($i = $lines.Count - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match '"type":"USER_INPUT"') {
        $json = $lines[$i] | ConvertFrom-Json
        $json.content | Out-File -FilePath "c:\react project\figma-akashvani\scratch\latest_user_input.txt" -Encoding utf8
        Write-Host "Saved step $($json.step_index) content length: $($json.content.Length)"
        break
    }
}

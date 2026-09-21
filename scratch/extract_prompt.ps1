$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$lines = Get-Content $logPath
$lastUserLine = ''
foreach ($l in $lines) {
    if ($l -like '*abhe bhai ye nhi hai stupidd*') {
        $lastUserLine = $l
    }
}
Set-Content -Path 'scratch/latest_user_prompt.txt' -Value $lastUserLine
Write-Host "Extracted prompt length: $($lastUserLine.Length)"

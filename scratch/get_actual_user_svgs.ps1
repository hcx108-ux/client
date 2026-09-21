$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$lines = Get-Content $logPath
$realUserLine = ''
foreach ($l in $lines) {
    if ($l -like '*abhe bhai ye nhi hai stupidd*' -and $l -notlike '*PLANNER_RESPONSE*' -and $l -notlike '*CODE_ACTION*') {
        $realUserLine = $l
    }
}

if ($realUserLine) {
    Set-Content -Path "scratch/real_user_svgs_line.txt" -Value $realUserLine
    Write-Host "FOUND REAL USER LINE! Length: $($realUserLine.Length)"
} else {
    Write-Host "Real user line not found"
}

$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$lines = Get-Content $logPath
$targetLine = ''
foreach ($l in $lines) {
    if ($l -like '*USER_EXPLICIT*' -and $l -like '*viewBox*') {
        $targetLine = $l
    }
}

if ($targetLine) {
    Set-Content -Path "scratch/real_user_explicit.txt" -Value $targetLine
    Write-Host "FOUND REAL USER EXPLICIT! Length: $($targetLine.Length)"
} else {
    Write-Host "Real user explicit line not found"
}

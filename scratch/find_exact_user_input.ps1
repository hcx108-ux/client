$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$lines = Get-Content $logPath
$userLine = ''
foreach ($l in $lines) {
    if ($l -like '*"type":"USER_INPUT"*' -and $l -like '*abhe bhai*') {
        $userLine = $l
    }
}

if ($userLine) {
    Set-Content -Path "scratch/true_user_input.txt" -Value $userLine
    Write-Host "FOUND TRUE USER INPUT! Length: $($userLine.Length)"
} else {
    Write-Host "True user input line not found"
}

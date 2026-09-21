$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$lines = Get-Content $logPath
$userSvgLine = ''
foreach ($l in $lines) {
    if ($l -like '*USER_INPUT*' -and $l -like '*578*') {
        $userSvgLine = $l
    }
}

if ($userSvgLine) {
    Set-Content -Path "scratch/user_input_578_raw.txt" -Value $userSvgLine
    Write-Host "FOUND USER_INPUT WITH 578! Line length: $($userSvgLine.Length)"
} else {
    Write-Host "USER_INPUT with 578 not found"
}

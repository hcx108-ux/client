$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$lines = Get-Content $logPath
$userSvgLine = ''
foreach ($l in $lines) {
    if ($l -like '*USER_INPUT*' -and $l -like '*height="578"*') {
        $userSvgLine = $l
    }
}

if ($userSvgLine) {
    # Extract from <svg width="1440" height="578" to final </svg>
    $sIdx = $userSvgLine.IndexOf('<svg width="1440" height="578"')
    $eIdx = $userSvgLine.LastIndexOf('</svg>') + 6
    if ($sIdx -ge 0 -and $eIdx -gt $sIdx) {
        $svgs = $userSvgLine.Substring($sIdx, $eIdx - $sIdx)
        # Unescape any JSON escapes
        $svgs = $svgs.Replace('\"', '"').Replace('\n', "`n").Replace('\r', '')
        Set-Content -Path "scratch/exact_user_svgs.svg" -Value $svgs
        Write-Host "FOUND EXACT USER SVGs! Length: $($svgs.Length)"
    } else {
        Write-Host "Could not find svg bounds in line"
    }
} else {
    Write-Host "USER_INPUT line with height 578 not found"
}

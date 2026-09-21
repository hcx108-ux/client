$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$fullText = [System.IO.File]::ReadAllText($logPath)

$idx = $fullText.LastIndexOf('abhe bhai ye nhi hai stupidd')
if ($idx -ge 0) {
    $sub = $fullText.Substring($idx)
    $endIdx = $sub.IndexOf('</USER_REQUEST>')
    if ($endIdx -ge 0) {
        $sub = $sub.Substring(0, $endIdx)
    }
    [System.IO.File]::WriteAllText('c:\react project\figma-akashvani\scratch\raw_hero_svgs.txt', $sub)
    Write-Host "Extracted raw SVGs block length: $($sub.Length)"
} else {
    Write-Host "Target text not found"
}

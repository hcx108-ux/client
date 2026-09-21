$logPath = 'C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl'
$fullText = [System.IO.File]::ReadAllText($logPath)

$token = 'viewBox="0 0 1440 578"'
$idx = $fullText.LastIndexOf($token)
if ($idx -ge 0) {
    # Find start of <svg
    $svgStart = $fullText.LastIndexOf('<svg', $idx)
    # Find end of user request or </USER_REQUEST>
    $reqEnd = $fullText.IndexOf('</USER_REQUEST>', $idx)
    if ($reqEnd -gt $svgStart) {
        $svgBlock = $fullText.Substring($svgStart, $reqEnd - $svgStart)
        [System.IO.File]::WriteAllText('c:\react project\figma-akashvani\scratch\hero_wave_svgs.txt', $svgBlock)
        Write-Host "SUCCESS! Extracted SVGs length: $($svgBlock.Length)"
    }
} else {
    Write-Host "Token not found"
}

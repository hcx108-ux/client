$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath
$json = $lines[143] | ConvertFrom-Json
$txt = $json.content
$matches = [regex]::Matches($txt, '<path[\s\S]*?>')

Write-Host "Total paths in Step 143: $($matches.Count)"
for ($i = 0; $i -lt $matches.Count; $i++) {
    $m = $matches[$i].Value
    $m | Out-File "c:\react project\figma-akashvani\scratch\p3_path_${i}.txt" -Encoding utf8
    Write-Host "Path ${i} saved (len $($m.Length)): $($m.Substring(0, [Math]::Min(120, $m.Length)))"
}

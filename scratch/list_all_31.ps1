$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath
$json = $lines[143] | ConvertFrom-Json
$txt = $json.content
$matches = [regex]::Matches($txt, '<path[\s\S]*?>')

for ($i = 0; $i -lt $matches.Count; $i++) {
    $m = $matches[$i].Value
    $len = $m.Length
    $fill = [regex]::Match($m, 'fill="([^"]+)"').Groups[1].Value
    $snippet = $m.Substring(0, [Math]::Min(70, $len))
    Write-Host "Index ${i} | Len: ${len} | Fill: '${fill}' | ${snippet}"
}

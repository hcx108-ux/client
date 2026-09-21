$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath
$json = $lines[143] | ConvertFrom-Json
$txt = $json.content
$matches = [regex]::Matches($txt, '<path[\s\S]*?>')

for ($i = 0; $i -lt $matches.Count; $i++) {
    $m = $matches[$i].Value
    $d = [regex]::Match($m, 'd="([^"]+)"').Groups[1].Value
    $fill = [regex]::Match($m, 'fill="([^"]+)"').Groups[1].Value
    
    # Extract numbers from d to guess center
    $nums = [regex]::Matches($d, '[\d\.]+') | ForEach-Object { [double]$_.Value }
    $minX = ($nums | Measure-Object -Minimum).Minimum
    $maxX = ($nums | Measure-Object -Maximum).Maximum
    $minY = ($nums | Measure-Object -Minimum).Minimum
    $maxY = ($nums | Measure-Object -Maximum).Maximum
    
    Write-Host "Path ${i} (len $($m.Length), fill '$fill'): d bounds X[$minX, $maxX] Y[$minY, $maxY]"
}

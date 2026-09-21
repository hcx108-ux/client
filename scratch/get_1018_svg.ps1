$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '1018') {
        Write-Host "Line $i has 1018! Length of line: $($lines[$i].Length)"
        $json = $lines[$i] | ConvertFrom-Json
        Write-Host "Type: $($json.type), Step: $($json.step_index)"
        $txt = $json.content
        $idx = $txt.IndexOf('<svg')
        if ($idx -ge 0) {
            $svg = $txt.Substring($idx)
            [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\raw_figma_1018.svg", $svg)
            Write-Host "Saved raw_figma_1018.svg! Length: $($svg.Length)"
        }
    }
}

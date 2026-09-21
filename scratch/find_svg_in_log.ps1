$log = "C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $log

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'height="1018"') {
        Write-Host "Found match at line $i!"
        $json = $lines[$i] | ConvertFrom-Json
        $txt = $json.content
        [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\figma_offers_full.svg", $txt)
        Write-Host "Successfully saved to scratch/figma_offers_full.svg! Length: $($txt.Length)"
        break
    }
}

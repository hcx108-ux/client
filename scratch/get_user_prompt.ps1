$log = "C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $log
$last = $lines[-1]
$json = $last | ConvertFrom-Json
$txt = $json.content

# Print first 200 chars and length of user prompt text
Write-Host "Length: $($txt.Length)"
Write-Host "First 200 chars: $($txt.Substring(0, [Math]::Min(200, $txt.Length)))"
Write-Host "Last 200 chars: $($txt.Substring([Math]::Max(0, $txt.Length - 200)))"

[System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\latest_user_prompt.txt", $txt)

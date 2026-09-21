$path5 = Get-Content 'c:\react project\figma-akashvani\scratch\latest_user_input.txt' -Raw
$matches = [regex]::Matches($path5, '<path[\s\S]*?>')

Write-Host "--- Node 01 Icon Path (Index 5 in new SVG) ---"
Write-Host $matches[5].Value.Substring(0, 100)

Write-Host "--- Node 02 Icon Path (Index 13 in new SVG) ---"
Write-Host $matches[13].Value.Substring(0, 100)

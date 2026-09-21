$txt = Get-Content "scratch/latest_user_prompt.txt" -Raw
$matches = [regex]::Matches($txt, '(?s)<svg[^>]*>.*?</svg>')
Write-Host "Found SVG matches: $($matches.Count)"

for ($i = 0; $i -lt $matches.Count; $i++) {
    Write-Host "SVG $i length: $($matches[$i].Value.Length)"
}

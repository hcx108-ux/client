$svg = [System.IO.File]::ReadAllText("$PSScriptRoot/../client/src/assets/look_at_your_life.svg")

# Find occurrences of foreignObject or data-figma-bg-blur-radius
$matches = [regex]::Matches($svg, '<foreignObject[\s\S]*?<\/g>')
Write-Host "Card group count: $($matches.Count)"
for ($i = 0; $i -lt $matches.Count; $i++) {
    Write-Host "--- CARD $i (Length: $($matches[$i].Length)) ---"
    Write-Host $matches[$i].Value.Substring(0, [Math]::Min(300, $matches[$i].Value.Length))
}

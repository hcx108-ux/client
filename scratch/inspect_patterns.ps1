$svg = [System.IO.File]::ReadAllText("$PSScriptRoot/../client/src/assets/look_at_your_life.svg")

# Check images or patterns in the SVG
$patterns = [regex]::Matches($svg, '<pattern[^>]+>')
foreach ($p in $patterns) {
    Write-Host "Pattern: $($p.Value)"
}
$images = [regex]::Matches($svg, '<image[^>]+>')
foreach ($img in $images) {
    Write-Host "Image tag found: $($img.Value.Substring(0, [Math]::Min(120, $img.Value.Length)))..."
}

$content = Get-Content 'client/src/assets/start_where.svg' -Raw
Write-Output "Size of start_where.svg: $($content.Length) bytes"

# Check root svg attributes
$svgTag = [regex]::Match($content, '<svg[^>]+>')
Write-Output "Root SVG tag: $($svgTag.Value)"

# Check images inside
$images = [regex]::Matches($content, '<image[^>]+>')
Write-Output "Images found: $($images.Count)"
foreach ($img in $images) {
    Write-Output "Image tag: $($img.Value.Substring(0, [Math]::Min(200, $img.Value.Length)))"
}

# Check text inside
$texts = [regex]::Matches($content, '(?s)<text[^>]*>([\s\S]*?)<\/text>')
Write-Output "Texts found: $($texts.Count)"
foreach ($t in $texts) {
    Write-Output "Text: $($t.Value)"
}

# Check defs, paths, fonts
$paths = [regex]::Matches($content, '<path[^>]+>')
Write-Output "Paths found: $($paths.Count)"

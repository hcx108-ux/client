$content = Get-Content 'client/src/assets/about_akashvani.svg' -Raw
# Find all text tags if any or extract path coordinates
$paths = [regex]::Matches($content, '<path[^>]+>')
Write-Output "Total paths: $($paths.Count)"

# Let's inspect the SVG without large base64 image data
$cleanSvg = [regex]::Replace($content, 'data:image\/[^;]+;base64,[A-Za-z0-9+/=]+', '[BASE64_IMAGE]')
$cleanSvg | Set-Content 'scratch/about_akashvani_clean.svg'
Write-Output "Saved clean svg to scratch/about_akashvani_clean.svg with size $($cleanSvg.Length)"

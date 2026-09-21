$content = [System.IO.File]::ReadAllText("client/src/assets/your_birth_chart.svg", [System.Text.Encoding]::UTF8)

# Check all attributes that need JSX conversion:
# clip-path -> clipPath
# style="mix-blend-mode:overlay" -> style={{ mixBlendMode: 'overlay' }}
# shape-rendering -> shapeRendering
# color-interpolation-filters -> colorInterpolationFilters
# xlink:href -> xlinkHref
# xmlns:xlink -> xmlnsXlink
# fill-opacity -> fillOpacity

Write-Host "SVG Length: $($content.Length)"

$svg = [System.IO.File]::ReadAllText("$PSScriptRoot/../client/src/assets/look_at_your_life.svg")

# Replace SVG attributes to JSX compatible names
function Convert-ToJsx($str) {
    $str = $str -replace 'clip-path=', 'clipPath='
    $str = $str -replace 'shape-rendering=', 'shapeRendering='
    $str = $str -replace 'fill-opacity=', 'fillOpacity='
    $str = $str -replace 'stroke-width=', 'strokeWidth='
    $str = $str -replace 'stroke-linecap=', 'strokeLinecap='
    $str = $str -replace 'stroke-linejoin=', 'strokeLinejoin='
    $str = $str -replace 'stroke-opacity=', 'strokeOpacity='
    $str = $str -replace 'stop-color=', 'stopColor='
    $str = $str -replace 'stop-opacity=', 'stopOpacity='
    $str = $str -replace 'patternContentUnits=', 'patternContentUnits='
    $str = $str -replace 'preserveAspectRatio=', 'preserveAspectRatio='
    $str = $str -replace 'color-interpolation-filters=', 'colorInterpolationFilters='
    $str = $str -replace 'xlink:href=', 'xlinkHref='
    $str = $str -replace 'xmlns:xlink=', 'xmlnsXlink='
    $str = $str -replace 'class="', 'className="'
    $str = $str -replace 'style="([^"]+)"', 'style={{$1}}'
    return $str
}

# Find card indices
$c0 = $svg.IndexOf('<foreignObject x="172" y="366"')
$c1 = $svg.IndexOf('<foreignObject x="690" y="366"')
$c2 = $svg.IndexOf('<foreignObject x="172" y="667"')
$c3 = $svg.IndexOf('<foreignObject x="690" y="667"')

# Find end of each card (which is </g> closing the data-figma-bg-blur-radius)
$c0End = $svg.IndexOf('</g>', $c0) + 4
$c1End = $svg.IndexOf('</g>', $c1) + 4
$c2End = $svg.IndexOf('</g>', $c2) + 4
$c3End = $svg.IndexOf('</g>', $c3) + 4

Write-Host "Card 0 range: $c0 to $c0End"
Write-Host "Card 1 range: $c1 to $c1End"
Write-Host "Card 2 range: $c2 to $c2End"
Write-Host "Card 3 range: $c3 to $c3End"

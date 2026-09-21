$svgContent = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\latest_svg_chunk.svg")

$regex = [regex]'<path\s+d="([^"]+)"\s+fill="([^"]+)"'
$matches = $regex.Matches($svgContent)

Write-Host "Total path matches found: $($matches.Count)"
$idxNum = 0
foreach ($m in $matches) {
    $d = $m.Groups[1].Value
    $fill = $m.Groups[2].Value
    if ($d.Length -lt 8000 -and $d.Length -gt 50) {
        Write-Host "Match $idxNum - length: $($d.Length), fill: $fill"
        [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\path_$idxNum.txt", $d)
        $idxNum++
    }
}

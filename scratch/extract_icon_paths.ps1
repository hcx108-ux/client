$svgContent = [System.IO.File]::ReadAllText("c:\react project\figma-akashvani\scratch\latest_svg_chunk.svg")

# Find filter0 path (Node 01 icon)
$f0Idx = $svgContent.IndexOf('filter0_d_134_4035')
if ($f0Idx -ne -1) {
    $sub0 = $svgContent.Substring($f0Idx)
    $path0Start = $sub0.IndexOf('<path d="M')
    $path0End = $sub0.IndexOf('"', $path0Start + 9)
    $icon0Path = $sub0.Substring($path0Start + 9, $path0End - ($path0Start + 9))
    Write-Host "Icon 01 path length: $($icon0Path.Length)"
    [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\icon01_path.txt", $icon0Path)
}

# Find filter1 path (Node 02 icon)
$f1Idx = $svgContent.IndexOf('filter1_d_134_4035')
if ($f1Idx -ne -1) {
    $sub1 = $svgContent.Substring($f1Idx)
    $path1Start = $sub1.IndexOf('<path d="M')
    $path1End = $sub1.IndexOf('"', $path1Start + 9)
    $icon1Path = $sub1.Substring($path1Start + 9, $path1End - ($path1Start + 9))
    Write-Host "Icon 02 path length: $($icon1Path.Length)"
    [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\icon02_path.txt", $icon1Path)
}

# Find filter2 path (Node 04 icon - wait, let's check node 03 and node 04 icons)
$f2Idx = $svgContent.IndexOf('filter2_d_134_4035')
if ($f2Idx -ne -1) {
    $sub2 = $svgContent.Substring($f2Idx)
    $path2Start = $sub2.IndexOf('<path d="M')
    $path2End = $sub2.IndexOf('"', $path2Start + 9)
    $icon2Path = $sub2.Substring($path2Start + 9, $path2End - ($path2Start + 9))
    Write-Host "Icon 04 path length: $($icon2Path.Length)"
    [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\icon04_path.txt", $icon2Path)
}

# Extract the background curve path (the very first path)
$curveStart = $svgContent.IndexOf('<path d="M-30.3149')
if ($curveStart -ne -1) {
    $curveEnd = $svgContent.IndexOf('"', $curveStart + 9)
    $curvePath = $svgContent.Substring($curveStart + 9, $curveEnd - ($curveStart + 9))
    Write-Host "Background curve path length: $($curvePath.Length)"
    [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\curve_path.txt", $curvePath)
}

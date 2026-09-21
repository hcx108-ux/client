$c = Get-Content 'client/src/assets/footer.svg' -Raw

# In footer.svg, paths 1 to 36 are inside the logo group (<g clip-path="url(#clip0_165_487)">)
$logoMatch = [regex]::Match($c, '(?s)<g clip-path="url\(#clip0_165_487\)">([\s\S]*?)<\/g>')
if ($logoMatch.Success) {
    $logoPaths = $logoMatch.Groups[1].Value.Trim()
    
    # Calculate bounding box of all paths in logo
    $matches = [regex]::Matches($logoPaths, '<path d="([^"]+)"')
    $allXs = @()
    $allYs = @()
    foreach ($m in $matches) {
        $d = $m.Groups[1].Value
        $nums = [regex]::Matches($d, '([0-9]+\.?[0-9]*)\s+([0-9]+\.?[0-9]*)')
        foreach ($n in $nums) {
            $allXs += [double]$n.Groups[1].Value
            $allYs += [double]$n.Groups[2].Value
        }
    }
    $minX = ($allXs | Measure-Object -Minimum).Minimum
    $maxX = ($allXs | Measure-Object -Maximum).Maximum
    $minY = ($allYs | Measure-Object -Minimum).Minimum
    $maxY = ($allYs | Measure-Object -Maximum).Maximum
    Write-Output "Footer Logo BBox: minX=$minX, maxX=$maxX (w=$($maxX-$minX)), minY=$minY, maxY=$maxY (h=$($maxY-$minY))"
    
    "<svg viewBox='$([Math]::Floor($minX - 4)) $([Math]::Floor($minY - 4)) $([Math]::Ceiling($maxX - $minX + 8)) $([Math]::Ceiling($maxY - $minY + 8))' width='280' height='70' fill='none' xmlns='http://www.w3.org/2000/svg'>`n$logoPaths`n</svg>" | Set-Content 'scratch/footer_logo_exact.svg'
    Write-Output "Saved scratch/footer_logo_exact.svg"
}

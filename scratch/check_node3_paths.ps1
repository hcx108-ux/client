Get-ChildItem "c:\react project\figma-akashvani\scratch\p3_path_*.txt" | ForEach-Object {
    $txt = Get-Content $_.FullName -Raw
    $d = [regex]::Match($txt, 'd="([^"]+)"').Groups[1].Value
    $nums = [regex]::Matches($d, '[\d\.]+') | ForEach-Object { [double]$_.Value }
    
    $minX = ($nums | Measure-Object -Minimum).Minimum
    $maxX = ($nums | Measure-Object -Maximum).Maximum
    $minY = ($nums | Measure-Object -Minimum).Minimum
    $maxY = ($nums | Measure-Object -Maximum).Maximum
    
    if ($maxX -gt 900 -and $maxY -gt 500) {
        Write-Host "$($_.Name): X[$minX, $maxX] Y[$minY, $maxY]"
    }
}

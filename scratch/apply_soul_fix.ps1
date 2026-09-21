$jsxPath = "client/src/components/home/AboutAkashvani.jsx"
$jsx = [System.IO.File]::ReadAllText($jsxPath)
$soulSvg = [System.IO.File]::ReadAllText("scratch/soul_exact_icon.svg")

$match = [regex]::Match($soulSvg, '(?s)<svg[^>]*>([\s\S]*?)<\/svg>')
if (-not $match.Success) {
    Write-Error "Could not find svg paths in scratch/soul_exact_icon.svg"
    exit 1
}
$innerPaths = $match.Groups[1].Value.Trim()

$soulPattern = '(?s)<div className="dimension-icon-wrapper" aria-hidden="true">\s*<svg viewBox="904[^"]*" width="[^"]*" height="[^"]*" fill="none" xmlns="http:\/\/www.w3.org\/2000\/svg">[\s\S]*?<\/svg>\s*<\/div>\s*<h3 className="dimension-title">Soul<\/h3>'

$replacement = @"
<div className="dimension-icon-wrapper" aria-hidden="true">
                <svg viewBox="904 1362 44 48" width="38" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  $innerPaths
                </svg>
              </div>

              <h3 className="dimension-title">Soul</h3>
"@

if (-not [regex]::IsMatch($jsx, $soulPattern)) {
    Write-Error "Could not find soul pattern in AboutAkashvani.jsx"
    exit 1
}

$newJsx = [regex]::Replace($jsx, $soulPattern, $replacement)
[System.IO.File]::WriteAllText($jsxPath, $newJsx)
Write-Output "Successfully updated Soul icon in AboutAkashvani.jsx!"

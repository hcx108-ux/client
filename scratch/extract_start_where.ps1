$content = Get-Content 'client/src/assets/start_where.svg' -Raw

# 1. Extract base64 image and save to file
$imgMatch = [regex]::Match($content, 'xlink:href="data:image\/([^;]+);base64,([^"]+)"')
if ($imgMatch.Success) {
    $ext = $imgMatch.Groups[1].Value
    $b64 = $imgMatch.Groups[2].Value
    $bytes = [System.Convert]::FromBase64String($b64)
    [System.IO.File]::WriteAllBytes("client/src/assets/start_where_bg.$ext", $bytes)
    Write-Output "Saved background image to client/src/assets/start_where_bg.$ext ($($bytes.Length) bytes)"
}

# 2. Strip the large image data to see the clean SVG structure
$cleanSvg = [regex]::Replace($content, 'xlink:href="data:[^"]+"', 'xlink:href="[IMAGE_DATA]"')
[System.IO.File]::WriteAllText("scratch/start_where_clean.svg", $cleanSvg)
Write-Output "Saved scratch/start_where_clean.svg"

# Print the clean SVG structure
Write-Output $cleanSvg

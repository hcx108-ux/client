# Let's extract pattern images from about_akashvani.svg
$content = Get-Content 'client/src/assets/about_akashvani.svg' -Raw

$images = [regex]::Matches($content, '<image id="([^"]+)"[^>]+xlink:href="([^"]+)"')
Write-Output "Found $($images.Count) embedded images in about_akashvani.svg"

$idx = 0
foreach ($img in $images) {
    $id = $img.Groups[1].Value
    $href = $img.Groups[2].Value
    if ($href -match 'data:image\/([^;]+);base64,(.+)') {
        $ext = $matches[1]
        $base64 = $matches[2]
        $bytes = [System.Convert]::FromBase64String($base64)
        $outPath = "client/src/assets/about_akashvani_img_${idx}.${ext}"
        [System.IO.File]::WriteAllBytes($outPath, $bytes)
        Write-Output "Saved $outPath ($($bytes.Length) bytes)"
    }
    $idx++
}

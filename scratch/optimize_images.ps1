Add-Type -AssemblyName System.Drawing

function Optimize-ImageFile {
    param(
        [string]$Path,
        [int]$MaxWidth = 1200,
        [int]$Quality = 80
    )

    if (-not (Test-Path $Path)) { return }
    $fileInfo = Get-Item $Path
    $origSize = $fileInfo.Length

    try {
        $img = [System.Drawing.Image]::FromFile($Path)
        $w = $img.Width
        $h = $img.Height

        $newW = $w
        $newH = $h

        if ($w -gt $MaxWidth) {
            $newW = $MaxWidth
            $newH = [int](($h * $MaxWidth) / $w)
        }

        $destRect = New-Object System.Drawing.Rectangle(0, 0, $newW, $newH)
        $destImage = New-Object System.Drawing.Bitmap($newW, $newH)

        $graphics = [System.Drawing.Graphics]::FromImage($destImage)
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

        $graphics.DrawImage($img, $destRect, 0, 0, $w, $h, [System.Drawing.GraphicsUnit]::Pixel)
        $graphics.Dispose()
        $img.Dispose()

        $tempPath = "$Path.tmp"
        
        # Encoder for JPG/PNG
        $ext = $fileInfo.Extension.ToLower()
        if ($ext -eq ".jpg" -or $ext -eq ".jpeg") {
            $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
            $destImage.Save($tempPath, $encoder, $encoderParams)
        } else {
            $destImage.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        }

        $destImage.Dispose()

        $newSize = (Get-Item $tempPath).Length
        Move-Item -Path $tempPath -Destination $Path -Force
        
        $savedPercent = [math]::Round((($origSize - $newSize) / $origSize) * 100, 1)
        Write-Output "Optimized: $($fileInfo.Name) | $([math]::Round($origSize/1MB, 2)) MB -> $([math]::Round($newSize/1KB, 0)) KB (Saved $savedPercent%)"
    } catch {
        Write-Error "Error optimizing $Path : $_"
    }
}

$images = Get-ChildItem -Path "client/src/assets" -Include "*.jpg","*.jpeg","*.png" -Recurse
foreach ($img in $images) {
    if ($img.Length -gt 200KB) {
        Optimize-ImageFile -Path $img.FullName -MaxWidth 1200 -Quality 82
    }
}

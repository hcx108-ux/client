Add-Type -AssemblyName System.Drawing

function Compress-ToJpeg {
    param(
        [string]$SrcPath,
        [string]$DstPath,
        [int]$MaxWidth = 800,
        [int]$Quality = 80
    )

    try {
        $img = [System.Drawing.Image]::FromFile($SrcPath)
        $w = $img.Width
        $h = $img.Height

        $newW = $w
        $newH = $h
        if ($w -gt $MaxWidth) {
            $newW = $MaxWidth
            $newH = [int](($h * $MaxWidth) / $w)
        }

        $destBmp = New-Object System.Drawing.Bitmap($newW, $newH, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
        $graphics = [System.Drawing.Graphics]::FromImage($destBmp)
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.Clear([System.Drawing.Color]::White)

        $graphics.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $newW, $newH)), 0, 0, $w, $h, [System.Drawing.GraphicsUnit]::Pixel)
        $graphics.Dispose()
        $img.Dispose()

        $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
        $destBmp.Save($DstPath, $encoder, $encoderParams)
        $destBmp.Dispose()

        $size = (Get-Item $DstPath).Length
        Write-Output "Compressed $SrcPath -> $DstPath : $([math]::Round($size/1KB, 0)) KB"
    } catch {
        Write-Error "Error on $SrcPath : $_"
    }
}

# Compress heavy PNG photos to lightweight JPEGs
$photos = @(
    "client/src/assets/journal_card_1.png",
    "client/src/assets/journal_card_2.png",
    "client/src/assets/journal_card_3.png",
    "client/src/assets/journal_card_4.png",
    "client/src/assets/ananya_rao.png",
    "client/src/assets/start_where_bg.png",
    "client/src/assets/about_akashvani_img_0.jpeg",
    "client/src/assets/about_akashvani_img_1.jpeg",
    "client/src/assets/about_akashvani_img_2.jpeg",
    "client/src/assets/your_birth_chart_img_0.png",
    "client/src/assets/look_at_your_life_img_0.png",
    "client/src/assets/personal_journey_beginning_img_0.png",
    "client/src/assets/there_is_always_img_0.png"
)

foreach ($p in $photos) {
    if (Test-Path $p) {
        $tempOut = "$p.opt.jpg"
        Compress-ToJpeg -SrcPath $p -DstPath $tempOut -MaxWidth 900 -Quality 82
        Move-Item -Path $tempOut -Destination $p -Force
    }
}

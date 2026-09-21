$svg = [System.IO.File]::ReadAllText("client/src/assets/your_birth_chart.svg", [System.Text.Encoding]::UTF8)

# Check the exact phone image and left side paths
Write-Host "Checking image0_134_4286 in your_birth_chart.svg..."
if ($svg -match 'image id="image0_134_4286"') {
    Write-Host "Found image0_134_4286!"
}

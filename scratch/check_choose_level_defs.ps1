$cl = [System.IO.File]::ReadAllText("client/src/assets/choose_the_level.svg")

# Check if there are images or defs in choose_the_level.svg
$defsMatch = [regex]::Match($cl, '(?s)<defs>.*?</defs>')
Write-Host "Defs length: $($defsMatch.Value.Length)"
if ($defsMatch.Value -match "image") {
    Write-Host "Contains image!"
} else {
    Write-Host "No base64 image in choose_the_level.svg!"
}

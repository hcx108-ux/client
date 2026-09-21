$cl = [System.IO.File]::ReadAllText("client/src/assets/choose_the_level.svg")

# Let's inspect what headings or text exist across choose_the_level.svg
# Search for words in paths or patterns
Write-Host "Checking all paths and text in choose_the_level.svg..."
$lines = $cl.Split("`n")
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match "INR|USD|Book|Session|Plan|Explore|filter") {
        if ($lines[$i].Length -gt 120) { $l = $lines[$i].Substring(0, 120) + "..." } else { $l = $lines[$i] }
        Write-Host "Line $($i+1): $l"
    }
}

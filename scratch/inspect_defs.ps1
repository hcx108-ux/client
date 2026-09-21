$svg = [System.IO.File]::ReadAllText("$PSScriptRoot/../client/src/assets/look_at_your_life.svg")

# Print top-level groups or defs
$defsIndex = $svg.IndexOf("<defs>")
Write-Host "Defs found at: $defsIndex"

# Find the 4 cards and their coordinates
# Card 1: x=208 y=402
# Card 2: x=726 y=402
# Card 3: x=208 y=703
# Card 4: x=726 y=703

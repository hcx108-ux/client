$content = Get-Content 'scratch/about_akashvani_clean.svg' -Raw

# Mind Icon (translate from 939.21, 385.217)
# Let's extract full path for Icon 1
$icon1Match = [regex]::Match($content, '(?s)<path d="M939\.21 385\.217[^"]+" fill="#BD5B3B"/>')
Write-Output "Icon 1: $($icon1Match.Success)"

# Body Icon (translate from 197.624, 869.794)
$icon2Match = [regex]::Match($content, '(?s)<path d="M197\.624 869\.794[^"]+" fill="#BD5B3B"/>')
Write-Output "Icon 2: $($icon2Match.Success)"

# Soul Icon (translate from ~911..940, 1364..1403)
$icon3Matches = [regex]::Matches($content, '(?s)<path d="M9(?:25|28|40|23|11|39|15|33|11)\.[^"]+" fill="#BD5B3B"/>')
Write-Output "Icon 3 count: $($icon3Matches.Count)"

# Let's save icon snippets
"<svg viewBox='938 384 32 32' width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>$($icon1Match.Value)</svg>" | Set-Content 'scratch/mind_icon.svg'
"<svg viewBox='196 868 32 32' width='32' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>$($icon2Match.Value)</svg>" | Set-Content 'scratch/body_icon.svg'

$soulPaths = ($icon3Matches | ForEach-Object { $_.Value }) -join "`n"
"<svg viewBox='908 1362 36 46' width='32' height='36' fill='none' xmlns='http://www.w3.org/2000/svg'>$soulPaths</svg>" | Set-Content 'scratch/soul_icon.svg'

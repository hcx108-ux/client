$content1 = Get-Content 'client/src/assets/mind_body_soul.svg' -Raw
$content2 = Get-Content 'client/src/assets/three_cards_section.svg' -Raw

Write-Output "mind_body_soul texts:"
[regex]::Matches($content1, '<text[\s\S]*?<\/text>') | ForEach-Object {
    $t = $_.Value -replace '<[^>]+>', ' ' -replace '\s+', ' '
    Write-Output $t.Trim()
}

Write-Output "three_cards_section texts:"
[regex]::Matches($content2, '<text[\s\S]*?<\/text>') | ForEach-Object {
    $t = $_.Value -replace '<[^>]+>', ' ' -replace '\s+', ' '
    Write-Output $t.Trim()
}

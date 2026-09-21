$file = 'client/src/components/home/PersonalJourneyBeginning.jsx'
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

# Replace broken className
$pattern = 'className=\{journey-option-card.*?\}'
$replacement = 'className={"journey-option-card " + (selectedFocus === opt.id ? "active" : "")}'

$content = [regex]::Replace($content, $pattern, $replacement)

[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Fixed className in PersonalJourneyBeginning.jsx"

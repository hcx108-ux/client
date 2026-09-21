$file = 'client/src/components/home/PersonalJourneyBeginning.jsx'
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
$content = $content.Replace('<span className="radio-dot" />', '<span className="radio-dot"></span>')
[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Fixed self-closing span"

$content = [System.IO.File]::ReadAllText("client/src/components/home/PersonalJourneyBeginning.jsx")
$tags = @('svg', 'g', 'defs', 'clipPath', 'div', 'section', 'filter', 'pattern', 'button', 'h2', 'h3', 'h4', 'p', 'span')
foreach ($t in $tags) {
    $openCount = ([regex]::Matches($content, "<$t(\s|>)")).Count
    $closeCount = ([regex]::Matches($content, "</$t>")).Count
    Write-Host "$t -> Open: $openCount, Close: $closeCount"
}

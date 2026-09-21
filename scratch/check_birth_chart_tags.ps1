$content = [System.IO.File]::ReadAllText("client/src/components/home/YourBirthChart.jsx")
$tags = @('svg', 'g', 'defs', 'clipPath', 'div', 'section', 'filter', 'pattern', 'form', 'button', 'input', 'select', 'option')
foreach ($t in $tags) {
    $openCount = ([regex]::Matches($content, "<$t(\s|>)")).Count
    $closeCount = ([regex]::Matches($content, "</$t>")).Count
    Write-Host "$t -> Open: $openCount, Close: $closeCount"
}

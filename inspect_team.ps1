$svg = [System.IO.File]::ReadAllText('c:\react project\figmversion3\client\src\assets\meet_the_team.svg')
$foMatches = [regex]::Matches($svg, '<foreignObject[^>]*>([\s\S]*?)<\/foreignObject>')
foreach ($fo in $foMatches) {
    Write-Output "--- FOREIGN OBJECT ---"
    Write-Output $fo.Groups[1].Value.Substring(0, [Math]::Min(300, $fo.Groups[1].Value.Length))
}

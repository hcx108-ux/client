$svg = [System.IO.File]::ReadAllText('c:\react project\figmversion3\client\src\assets\meet_the_team.svg')
$idx = $svg.IndexOf('<image')
while ($idx -ge 0) {
    $end = $svg.IndexOf('>', $idx)
    Write-Output $svg.Substring($idx, [Math]::Min(150, $end - $idx + 1))
    $idx = $svg.IndexOf('<image', $end)
}

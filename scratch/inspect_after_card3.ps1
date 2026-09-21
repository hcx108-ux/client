$svg = [System.IO.File]::ReadAllText("$PSScriptRoot/../client/src/assets/look_at_your_life.svg")

$card3End = $svg.IndexOf("</g>", $svg.IndexOf('x="726" y="703"')) + 4
$defsStart = $svg.IndexOf("<defs>")

Write-Host "Between Card 3 and defs:"
Write-Host $svg.Substring($card3End, $defsStart - $card3End)

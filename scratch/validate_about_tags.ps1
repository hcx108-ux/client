$content = Get-Content 'client/src/components/home/AboutAkashvani.jsx' -Raw
$openDivs = [regex]::Matches($content, '<div[\s>]').Count
$closeDivs = [regex]::Matches($content, '<\/div>').Count
$openButtons = [regex]::Matches($content, '<button[\s>]').Count
$closeButtons = [regex]::Matches($content, '<\/button>').Count
$openSections = [regex]::Matches($content, '<section[\s>]').Count
$closeSections = [regex]::Matches($content, '<\/section>').Count

Write-Output "Divs: $openDivs / $closeDivs"
Write-Output "Buttons: $openButtons / $closeButtons"
Write-Output "Sections: $openSections / $closeSections"

$content = Get-Content 'c:\react project\figma-akashvani\scratch\latest_user_input.txt' -Raw
$matches = [regex]::Matches($content, '<path[\s\S]*?>')
Write-Host "Total path tags found: $($matches.Count)"

for ($i = 0; $i -lt $matches.Count; $i++) {
    $m = $matches[$i].Value
    if ($m.Length -gt 150) {
        Write-Host "Path $i (len $($m.Length)): $($m.Substring(0, 150))..."
    } else {
        Write-Host "Path ${i}: $m"
    }
}

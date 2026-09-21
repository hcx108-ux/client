$content = [System.IO.File]::ReadAllText('scratch/beb_life.jsx')
$idx = $content.IndexOf('CARD 1: HUMAN')
if ($idx -gt 0) {
    # Extract from $idx - 500 to $idx + 10000
    $sub = $content.Substring($idx - 200, [Math]::Min(30000, $content.Length - ($idx - 200)))
    [System.IO.File]::WriteAllText('scratch/extracted_cards.jsx', $sub)
    Write-Host "Extracted $(($sub.Length)) chars to scratch/extracted_cards.jsx"
}

$files = Get-ChildItem -Path "C:\Users\Vikas\.gemini\antigravity-ide\brain\7ad31f8e-92c9-4f37-b73b-fb950fb2514f" -Recurse -Filter "transcript_full.jsonl" -ErrorAction SilentlyContinue
foreach ($f in $files) {
    Write-Host "Found log: $($f.FullName)"
    $content = Get-Content $f.FullName -Raw
    $idx = $content.LastIndexOf('<svg width="1440" height="1018"')
    if ($idx -ge 0) {
        Write-Host "Found SVG at index $idx in $($f.FullName)"
        $endIdx = $content.IndexOf('</svg>', $idx)
        if ($endIdx -gt $idx) {
            $svg = $content.Substring($idx, ($endIdx - $idx) + 6)
            Write-Host "Extracted SVG length: $($svg.Length)"
            [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\figma_offers_full.svg", $svg)
            break
        }
    }
}

$files = Get-ChildItem -Path 'scratch' -Filter '*.ps1'
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    if ($content -match 'node-01' -or $content -match 'cy=') {
        Write-Host "File: $($f.Name)"
    }
}

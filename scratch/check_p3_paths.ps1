$files = Get-ChildItem -Path "scratch" -Filter "p3_path_*.txt"
foreach ($f in $files) {
    $c = Get-Content $f.FullName -Raw
    Write-Host "$($f.Name) len: $($c.Length)"
}

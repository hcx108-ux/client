$file = 'client/src/components/home/YourBirthChart.jsx'
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

$oldStr = "{formData.name ? `${formData.name}'s Chart : 'Your Personal Chart'}"
$newStr = '{formData.name ? (formData.name + "''s Chart") : "Your Personal Chart"}'

# Or use regex matching
$pattern = '(?s)\{formData\.name \? [^:]+: ''Your Personal Chart''\}'
$replacement = '{formData.name ? (formData.name + "''s Chart") : "Your Personal Chart"}'

$content = [regex]::Replace($content, $pattern, $replacement)

[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Updated file!"

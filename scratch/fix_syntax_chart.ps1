$content = [System.IO.File]::ReadAllText("client/src/components/home/YourBirthChart.jsx", [System.Text.Encoding]::UTF8)

# Replace the broken template string with safe concatenation
$content = $content.Replace("{formData.name ? `${formData.name}'s Chart : 'Your Personal Chart'}", "{formData.name ? (formData.name + \"'s Chart\") : 'Your Personal Chart'}")
# In case it's literally ${formData.name}'s Chart
$content = [regex]::Replace($content, '\{formData\.name \? [^:]+: ''Your Personal Chart''\}', '{formData.name ? (formData.name + "''s Chart") : ''Your Personal Chart''}')

[System.IO.File]::WriteAllText("client/src/components/home/YourBirthChart.jsx", $content, [System.Text.Encoding]::UTF8)
Write-Host "Fixed line 235 syntax error!"

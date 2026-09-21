try {
    $content = [System.IO.File]::ReadAllText("client/src/assets/mind_body_soul.svg")
    $doc = New-Object System.Xml.XmlDocument
    $doc.LoadXml($content)
    Write-Host "XML is VALID!"
} catch {
    Write-Host "XML ERROR: " $_.Exception.Message
}

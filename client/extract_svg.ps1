$logPath = "C:\Users\Vikas\.gemini\antigravity-ide\brain\6ec93dcb-4c99-4b7b-9d0d-ec77af087e00\.system_generated\logs\transcript_full.jsonl"
$lines = Get-Content $logPath
foreach ($line in $lines) {
    if ($line -match "now psl create belwo this section prpperly") {
        $json = $line | ConvertFrom-Json
        $content = $json.content
        if ($content -match '(?s)<svg width="1440".*?</svg>') {
            [System.IO.File]::WriteAllText("C:\react project\figmversion3\client\src\assets\journey_steps.svg", $matches[0], (New-Object System.Text.UTF8Encoding $False))
            Write-Host "Success!"
            exit
        }
    }
}

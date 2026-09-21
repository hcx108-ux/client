$file = "C:\Users\Vikas\.gemini\antigravity-ide\brain\e0eef690-4c2c-46f4-90c8-ef066c707d3a\.system_generated\logs\transcript_full.jsonl"
$lines = [System.IO.File]::ReadAllLines($file)

$svgContent = ""

foreach ($line in $lines) {
    if ($line.Contains('"step_index":34') -or $line.Contains('"step_index": 34')) {
        $start = $line.IndexOf('<svg')
        if ($start -ne -1) {
            $chunk = $line.Substring($start)
            $truncIdx = $chunk.IndexOf('\n<truncated')
            if ($truncIdx -ne -1) {
                $chunk = $chunk.Substring(0, $truncIdx)
            }
            # unescape JSON
            $chunk = $chunk -replace '\\"', '"' -replace '\\n', "`n" -replace '\\r', "`r" -replace '\\t', "`t" -replace '\\/', '/'
            $svgContent = $chunk
            break
        }
    }
}

Write-Host "Raw extracted SVG length: $($svgContent.Length)"
[System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\raw_extracted.svg", $svgContent)

# Check if </svg> is present
if (-not $svgContent.Contains('</svg>')) {
    Write-Host "Closing tag </svg> was missing due to prompt length truncation. Adding filter defs & closing tags."
    
    # Check if <defs> exists or needs closing
    $fixedSvg = $svgContent
    
    # If a path was cut off at the end, find the last completed <g> or <path>
    $lastPathEnd = $fixedSvg.LastIndexOf('/>')
    $lastGEnd = $fixedSvg.LastIndexOf('</g>')
    $cutPoint = [Math]::Max($lastPathEnd + 2, $lastGEnd + 4)
    
    if ($cutPoint -gt 0) {
        $fixedSvg = $fixedSvg.Substring(0, $cutPoint)
    }
    
    # Add definitions for filter0, filter1, filter2 if referenced in SVG but missing in defs
    $defs = @"

<defs>
  <filter id="filter0_d_134_4035" x="373" y="258" width="94" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_4035"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_4035" result="shape"/>
  </filter>
  <filter id="filter1_d_134_4035" x="973" y="258" width="94" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_4035"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_4035" result="shape"/>
  </filter>
  <filter id="filter2_d_134_4035" x="373" y="612" width="94" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_4035"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_4035" result="shape"/>
  </filter>
</defs>
</svg>
"@
    $fixedSvg += "`n" + $defs
    [System.IO.File]::WriteAllText("c:\react project\figma-akashvani\scratch\fixed_next_section.svg", $fixedSvg)
    Write-Host "Fixed SVG saved to scratch/fixed_next_section.svg! Total size: $($fixedSvg.Length)"
}

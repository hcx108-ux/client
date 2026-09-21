$lines = Get-Content client/src/assets/mind_body_soul.svg
$cleanLines = @()
for ($i = 0; $i -lt 101; $i++) {
    $cleanLines += $lines[$i]
}

# Add clean closing defs
$defs = @"
<defs>
<filter id="filter0_d_134_3969" x="74.332" y="236.171" width="537.4" height="676.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.02 0 0 0 0 0.06 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_3969"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_3969" result="shape"/>
</filter>
<filter id="filter4_d_134_3969" x="827.332" y="236.171" width="537.4" height="676.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.02 0 0 0 0 0.06 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_3969"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_3969" result="shape"/>
</filter>
<filter id="filter8_d_134_3969" x="451.118" y="298.726" width="537.287" height="676.337" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="25"/>
<feGaussianBlur stdDeviation="30"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.02 0 0 0 0 0.06 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_3969"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_3969" result="shape"/>
</filter>

<clipPath id="clip0_134_3969"><rect width="1440" height="1022" fill="white"/></clipPath>
<clipPath id="clip1_134_3969"><rect x="144.032" y="276" width="398" height="537" rx="21.9058" fill="white"/></clipPath>
<clipPath id="clip2_134_3969"><rect x="144.032" y="276" width="398" height="537" rx="21.9058" fill="white"/></clipPath>
<clipPath id="clip3_134_3969"><rect x="144.032" y="276" width="398" height="537" rx="21.9058" fill="white"/></clipPath>

<clipPath id="clip7_134_3969"><rect x="897.032" y="276" width="398" height="537" rx="21.9058" fill="white"/></clipPath>
<clipPath id="clip8_134_3969"><rect x="897.032" y="276" width="398" height="537" rx="21.9058" fill="white"/></clipPath>
<clipPath id="clip9_134_3969"><rect x="897.032" y="276" width="398" height="537" rx="21.9058" fill="white"/></clipPath>

<clipPath id="clip13_134_3969"><rect x="521.118" y="338.726" width="397.287" height="536.337" rx="21.9058" fill="white"/></clipPath>
<clipPath id="clip14_134_3969"><rect x="521.118" y="338.726" width="397.287" height="536.337" rx="21.9058" fill="white"/></clipPath>
<clipPath id="clip15_134_3969"><rect x="521.118" y="338.726" width="397.287" height="536.337" rx="21.9058" fill="white"/></clipPath>

<linearGradient id="paint0_linear_134_3969" x1="343.032" y1="276" x2="343.032" y2="812.687" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E284F" stop-opacity="0.2"/>
<stop offset="0.6" stop-color="#061B3B" stop-opacity="0.8"/>
<stop offset="1" stop-color="#02132E" stop-opacity="0.95"/>
</linearGradient>

<linearGradient id="paint1_linear_134_3969" x1="1096.03" y1="276" x2="1096.03" y2="812.687" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E284F" stop-opacity="0.2"/>
<stop offset="0.6" stop-color="#061B3B" stop-opacity="0.8"/>
<stop offset="1" stop-color="#02132E" stop-opacity="0.95"/>
</linearGradient>

<linearGradient id="paint2_linear_134_3969" x1="719.761" y1="338.726" x2="719.761" y2="874.413" gradientUnits="userSpaceOnUse">
<stop stop-color="#143464" stop-opacity="0.3"/>
<stop offset="0.6" stop-color="#072044" stop-opacity="0.85"/>
<stop offset="1" stop-color="#02132E" stop-opacity="0.98"/>
</linearGradient>

<pattern id="pattern0_134_3969" patternContentUnits="objectBoundingBox" width="1" height="1">
<rect width="1" height="1" fill="#0C254C"/>
</pattern>
<pattern id="pattern1_134_3969" patternContentUnits="objectBoundingBox" width="1" height="1">
<rect width="1" height="1" fill="#0C254C"/>
</pattern>
<pattern id="pattern2_134_3969" patternContentUnits="objectBoundingBox" width="1" height="1">
<rect width="1" height="1" fill="#102E5C"/>
</pattern>
</defs>
</svg>
"@

$cleanSvg = ($cleanLines -join "`n") + "`n" + $defs
[System.IO.File]::WriteAllText("scratch/test_clean.svg", $cleanSvg)
Write-Host "Created scratch/test_clean.svg. Validating XML..."

try {
    $doc = New-Object System.Xml.XmlDocument
    $doc.LoadXml($cleanSvg)
    Write-Host "SUCCESS: XML is 100% VALID!"
} catch {
    Write-Host "XML Error: " $_.Exception.Message
}

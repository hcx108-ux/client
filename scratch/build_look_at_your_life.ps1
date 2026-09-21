$svg = [System.IO.File]::ReadAllText("$PSScriptRoot/../client/src/assets/look_at_your_life.svg")

function Clean-Jsx($str) {
    $str = $str -replace 'clip-path=', 'clipPath='
    $str = $str -replace 'shape-rendering=', 'shapeRendering='
    $str = $str -replace 'fill-opacity=', 'fillOpacity='
    $str = $str -replace 'stroke-width=', 'strokeWidth='
    $str = $str -replace 'stroke-linecap=', 'strokeLinecap='
    $str = $str -replace 'stroke-linejoin=', 'strokeLinejoin='
    $str = $str -replace 'stroke-opacity=', 'strokeOpacity='
    $str = $str -replace 'stop-color=', 'stopColor='
    $str = $str -replace 'stop-opacity=', 'stopOpacity='
    $str = $str -replace 'patternContentUnits=', 'patternContentUnits='
    $str = $str -replace 'preserveAspectRatio=', 'preserveAspectRatio='
    $str = $str -replace 'color-interpolation-filters=', 'colorInterpolationFilters='
    $str = $str -replace 'xlink:href=', 'xlinkHref='
    $str = $str -replace 'xmlns:xlink=', 'xmlnsXlink='
    $str = $str -replace 'data-figma-bg-blur-radius=', 'data-figma-bg-blur-radius='
    
    # Fix style="backdrop-filter:blur(18px);clip-path:url(#bgblur_1_134_4233_clip_path);height:100%;width:100%"
    $str = [regex]::Replace($str, 'style="backdrop-filter:blur\(18px\);clip-path:url\(#([^)]+)\);height:100%;width:100%"', 'style={{ backdropFilter: ''blur(18px)'', clipPath: ''url(#$1)'', height: ''100%'', width: ''100%'' }}')
    
    return $str
}

$c0 = 160918; $c0End = 213617
$c1 = 213619; $c1End = 297979
$c2 = 297981; $c2End = 358297
$c3 = 358299; $c3End = 407181

# Before card 0
$svgTagEnd = $svg.IndexOf('>') + 1
$svgHeader = '<svg width="100%" height="auto" viewBox="0 0 1440 1297" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="look-at-life-master-svg">'

$beforeCards = Clean-Jsx($svg.Substring($svgTagEnd, $c0 - $svgTagEnd))

$card0 = Clean-Jsx($svg.Substring($c0, $c0End - $c0))
$card1 = Clean-Jsx($svg.Substring($c1, $c1End - $c1))
$card2 = Clean-Jsx($svg.Substring($c2, $c2End - $c2))
$card3 = Clean-Jsx($svg.Substring($c3, $c3End - $c3))

$afterCards = Clean-Jsx($svg.Substring($c3End, $svg.Length - $c3End - 6))

$jsxCode = @"
import React, { useState } from 'react';
import './LookAtYourLife.css';

const perspectivesDetail = {
  human: {
    id: 'human',
    title: 'Human',
    fullDesc: 'The Human lens honors your subjective lived reality—how you feel, communicate, make choices, and navigate relationships in everyday life with empathy and emotional intelligence.',
    keyPoints: [
      'Emotional awareness and authentic self-expression',
      'Interpersonal relationship dynamics and healthy boundaries',
      'Practical decision-making grounded in personal values',
      'Navigating life transitions with resilience and clarity'
    ]
  },
  vedic: {
    id: 'vedic',
    title: 'Vedic',
    fullDesc: 'The Vedic lens draws upon millennia of cosmic wisdom—synthesizing Jyotish astrology, planetary archetype maps, karmic timing (Dashas), and natural rhythms to reveal hidden life patterns.',
    keyPoints: [
      'Birth chart synthesis as a map of tendencies, not fixed verdicts',
      'Planetary cycles, Dashas, and cosmic timing patterns',
      'Understanding karmic connections and synastry in relationships',
      'Remedial measures, mantras, and gemstones tailored to your chart'
    ]
  },
  spiritual: {
    id: 'spiritual',
    title: 'Spiritual',
    fullDesc: 'The Spiritual lens invites deeper self-inquiry, mindfulness, and alignment with your higher Dharma—fostering stillness, inner connection, and transcendent clarity beyond surface reactions.',
    keyPoints: [
      'Self-inquiry and discovering life purpose (Dharma)',
      'Mindful contemplation and deepening conscious awareness',
      'Cultivating inner peace amidst external uncertainties',
      'Reconnecting with transcendent meaning and spiritual liberation'
    ]
  },
  holistic: {
    id: 'holistic',
    title: 'Holistic',
    fullDesc: 'The Holistic lens integrates mind, body, and subtle energy systems—restoring equilibrium through breathwork, elemental balance, restorative rituals, and nervous system harmony.',
    keyPoints: [
      'Balancing somatic mind-body wellness',
      'Restorative breathwork and nervous system regulation',
      'Chakra balancing and elemental alignment',
      'Integrative daily rituals for vitality and calm'
    ]
  }
};

export default function LookAtYourLife() {
  const [selectedPerspective, setSelectedPerspective] = useState(null);
  const [activeCardId, setActiveCardId] = useState('human');

  const handleCardClick = (id) => {
    setActiveCardId(id);
    setSelectedPerspective(perspectivesDetail[id]);
  };

  return (
    <section className="look-at-life-section" id="look-at-your-life">
      <div className="look-at-life-container">
        $svgHeader
          $beforeCards

          {/* CARD 1: HUMAN */}
          <g
            className={"perspective-svg-card " + (activeCardId === 'human' ? 'active' : '')}
            onClick={() => handleCardClick('human')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick('human');
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Human Perspective - Click for in-depth insights"
          >
            $card0
          </g>

          {/* CARD 2: VEDIC */}
          <g
            className={"perspective-svg-card " + (activeCardId === 'vedic' ? 'active' : '')}
            onClick={() => handleCardClick('vedic')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick('vedic');
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Vedic Perspective - Click for in-depth insights"
          >
            $card1
          </g>

          {/* CARD 3: SPIRITUAL */}
          <g
            className={"perspective-svg-card " + (activeCardId === 'spiritual' ? 'active' : '')}
            onClick={() => handleCardClick('spiritual')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick('spiritual');
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Spiritual Perspective - Click for in-depth insights"
          >
            $card2
          </g>

          {/* CARD 4: HOLISTIC */}
          <g
            className={"perspective-svg-card " + (activeCardId === 'holistic' ? 'active' : '')}
            onClick={() => handleCardClick('holistic')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick('holistic');
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Holistic Perspective - Click for in-depth insights"
          >
            $card3
          </g>

          $afterCards
        </svg>
      </div>

      {/* Perspective In-Depth Modal */}
      {selectedPerspective && (
        <div className="perspective-modal-backdrop" onClick={() => setSelectedPerspective(null)}>
          <div
            className="perspective-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="perspective-modal-close"
              onClick={() => setSelectedPerspective(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="perspective-modal-header">
              <div>
                <span className="perspective-modal-badge">Akashvani Lens</span>
                <h2 className="perspective-modal-title">{selectedPerspective.title} Perspective</h2>
              </div>
            </div>

            <hr className="perspective-modal-divider" />

            <p className="perspective-modal-full-desc">{selectedPerspective.fullDesc}</p>

            <div className="perspective-modal-points">
              <h4 className="perspective-modal-points-title">Core Focus Areas:</h4>
              <ul>
                {selectedPerspective.keyPoints.map((point, idx) => (
                  <li key={idx}>
                    <span className="bullet-dot">✦</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="perspective-modal-actions">
              <button
                type="button"
                className="perspective-modal-cta"
                onClick={() => {
                  const meetSection = document.getElementById('meet-the-team');
                  if (meetSection) {
                    meetSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  setSelectedPerspective(null);
                }}
              >
                Meet Practitioners Specializing in {selectedPerspective.title} →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
"@

$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("$PSScriptRoot/../client/src/components/home/LookAtYourLife.jsx", $jsxCode, $utf8NoBom)
Write-Host "Generated LookAtYourLife.jsx successfully!"

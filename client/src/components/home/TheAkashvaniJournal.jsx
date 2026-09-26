import React, { useState } from 'react';
import './TheAkashvaniJournal.css';
import card1Img from '../../assets/journal_card_1.png';
import card2Img from '../../assets/journal_card_2.png';
import card3Img from '../../assets/journal_card_3.png';
import card4Img from '../../assets/journal_card_4.png';
import card5Img from '../../assets/about_akashvani_img_0.jpeg';

const journalArticles = [
  {
    id: 1,
    image: card1Img,
    category: 'VEDIC ASTROLOGY',
    title: 'When Your Kundali Says One Thing And Your Heart Says Another',
    description: 'A perspective on compatibility, belief and choice.',
    readTime: '4 min read',
    author: 'Pt. Radheshyam Shastri',
    date: 'Sep 18, 2026',
    content: [
      'In Vedic astrology, your Kundli (birth chart) is more than a static cosmic map—it is an evolving guide to the energies influencing your daily life.',
      'When planetary alignments suggest one path while our emotional intuition calls for another, astrology offers a framework for synthesis rather than blind fatalism.',
      'By understanding the transit of the Moon (Chandra Gochar) and the planetary hours (Hora), you can align your key life choices—from relationships to personal reflections—with clarity, conscious intent, and inner harmony.'
    ]
  },
  {
    id: 2,
    image: card2Img,
    category: 'KUNDLI & CHART ANALYSIS',
    title: 'What Does Your Birth Chart Actually Tell You?',
    description: 'A grounded introduction to reading your chart.',
    readTime: '6 min read',
    author: 'Dr. Ananya Sharma',
    date: 'Sep 15, 2026',
    content: [
      'A birth chart captures the exact astronomical layout at the moment of your first breath. It reflects your innate strengths (Sadhana), karmic debts (Rina), and soul\'s destiny (Dharma).',
      'While popular astrology focuses solely on the Sun sign, Vedic wisdom emphasizes the Ascendant (Lagna) and the Moon sign (Rashi), giving precise insights into your psychological constitution and emotional foundation.',
      'Discover how the 12 houses map every aspect of human experience—from vitality and relationships to purposeful vocations and spiritual awakening.'
    ]
  },
  {
    id: 3,
    image: card3Img,
    category: 'RELATIONSHIPS & PATTERNS',
    title: 'Why We Keep Repeating The Same Relationship',
    description: 'Understanding patterns without reducing yourself to a label.',
    readTime: '5 min read',
    author: 'Acharya Devrat',
    date: 'Sep 12, 2026',
    content: [
      'Astrological patterns in the 7th house and Venus placements frequently reflect our unconscious emotional projections in romantic partnerships.',
      'When we repeatedly encounter similar conflicts across different relationships, it often signals unintegrated planetary lessons (Samskaras) seeking resolution.',
      'Through mindful awareness and tailored astrological guidance, you can break self-limiting cycles and cultivate relationships rooted in mutual respect and emotional depth.'
    ]
  },
  {
    id: 4,
    image: card4Img,
    category: 'SELF & MINDFULNESS',
    title: 'The Difference Between Being Alone And Being Disconnected',
    description: 'A reflection on self and relationships.',
    readTime: '5 min read',
    author: 'Vidushi Meera Devi',
    date: 'Sep 08, 2026',
    content: [
      'Solitude is a sacred space for contemplation and spiritual recharging (Antar-Moun), whereas disconnection stems from emotional exhaustion or unresolved Rahu-Ketu axis tensions.',
      'Ancient Vedic traditions teach that grounding oneself through daily meditation, natural rhythms, and cosmic alignment transforms isolation into empowering self-discovery.',
      'Recognize the subtle signs of disconnection and learn practical contemplative tools to reconnect with your inner self and the world around you.'
    ]
  },
  {
    id: 5,
    image: card5Img,
    category: 'SPIRITUALITY & EVERYDAY LIFE',
    title: 'Can Spiritual Practices Help In Everyday Life?',
    description: 'Why ancient perspectives don\'t need to be reserved for quiet moments.',
    readTime: '4 min read',
    author: 'Pt. Govind Das',
    date: 'Sep 04, 2026',
    content: [
      'Spirituality is often viewed as an escape or something reserved only for temple visits and meditation cushions.',
      'Vedic philosophy teaches that Dharma and spiritual mindfulness are meant to be lived actively in everyday conversations, work, and emotional responses.',
      'Discover practical ways to integrate conscious awareness, grounding breath, and inner clarity into your daily routine.'
    ]
  }
];

export default function TheAkashvaniJournal() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showExploreModal, setShowExploreModal] = useState(false);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setShowExploreModal(false);
  };

  return (
    <section className="the-akashvani-journal-section" id="akashvani-journal">
      <div className="journal-content-wrapper">
        {/* Section Header */}
        <div className="journal-header">
          <h2 className="journal-main-heading">The Akashvani</h2>
          <span className="journal-sub-heading">Journal</span>
        </div>

        {/* 4 Cards Grid - Perfectly Centered & Aligned */}
        <div className="journal-cards-grid">
          {journalArticles.map((article) => (
            <article
              key={article.id}
              className="journal-card"
              onClick={() => handleCardClick(article)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(article);
                }
              }}
              aria-label={`Read article: ${article.title}`}
            >
              <div className="journal-card-image-container">
                <img
                  src={article.image}
                  alt={article.title}
                  className="journal-card-image"
                  loading="lazy"
                />
              </div>

              <div className="journal-card-body">
                <h3 className="journal-card-title">{article.title}</h3>
                <p className="journal-card-description">{article.description}</p>
                
                <div className="journal-card-action">
                  <span className="journal-read-more">
                    READ MORE <span className="read-arrow">→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Explore The Journal Button */}
        <div className="journal-bottom-action">
          <button
            type="button"
            className="explore-journal-svg-btn"
            onClick={() => setShowExploreModal(true)}
            aria-label="Explore The Journal"
          >
            <svg width="318" height="126" viewBox="0 0 318 126" fill="none" xmlns="http://www.w3.org/2000/svg" className="explore-journal-svg">
              <g filter="url(#filter0_d_134_4599_journal)">
                <path d="M34 49C34 32.9837 46.9837 20 63 20H255C271.016 20 284 32.9837 284 49C284 65.0163 271.016 78 255 78H63C46.9837 78 34 65.0163 34 49Z" fill="#BD5B3B" shapeRendering="crispEdges"/>
                <path d="M77.3203 43.5078H83.5938V45.6484H79.4922V47.7266H83.5938V49.8281H79.4922V52.8516H83.5938V55H77.3203V43.5078ZM85.6406 46.5H88.1172L89.7812 48.8203L91.4688 46.5H93.9219L91.0156 50.5234L94.2812 55H91.8047L89.7812 52.2109L87.7812 55H85.3359L88.5547 50.5234L85.6406 46.5ZM98.4922 46.5V47.4375C98.8776 47.0521 99.2943 46.763 99.7422 46.5703C100.19 46.3776 100.669 46.2812 101.18 46.2812C102.289 46.2812 103.232 46.7005 104.008 47.5391C104.784 48.3776 105.172 49.4531 105.172 50.7656C105.172 52.0312 104.771 53.0911 103.969 53.9453C103.167 54.7943 102.216 55.2188 101.117 55.2188C100.628 55.2188 100.172 55.1328 99.75 54.9609C99.3281 54.7839 98.9089 54.4974 98.4922 54.1016V58.1094H96.375V46.5H98.4922ZM100.734 48.25C100.062 48.25 99.5052 48.4792 99.0625 48.9375C98.6198 49.3958 98.3984 49.9948 98.3984 50.7344C98.3984 51.4896 98.6198 52.1016 99.0625 52.5703C99.5052 53.0339 100.062 53.2656 100.734 53.2656C101.385 53.2656 101.932 53.0286 102.375 52.5547C102.823 52.0807 103.047 51.4766 103.047 50.7422C103.047 50.013 102.828 49.4167 102.391 48.9531C101.953 48.4844 101.401 48.25 100.734 48.25ZM107.711 43.2188H109.844V55H107.711V43.2188ZM116.773 46.2812C117.576 46.2812 118.328 46.4818 119.031 46.8828C119.74 47.2839 120.292 47.8281 120.688 48.5156C121.083 49.2031 121.281 49.9453 121.281 50.7422C121.281 51.5443 121.081 52.2943 120.68 52.9922C120.284 53.6901 119.742 54.237 119.055 54.6328C118.367 55.0234 117.609 55.2188 116.781 55.2188C115.562 55.2188 114.521 54.7865 113.656 53.9219C112.797 53.0521 112.367 51.9974 112.367 50.7578C112.367 49.4297 112.854 48.3229 113.828 47.4375C114.682 46.6667 115.664 46.2812 116.773 46.2812ZM116.805 48.2891C116.143 48.2891 115.591 48.5208 115.148 48.9844C114.711 49.4427 114.492 50.0312 114.492 50.75C114.492 51.4896 114.708 52.0885 115.141 52.5469C115.578 53.0052 116.13 53.2344 116.797 53.2344C117.464 53.2344 118.018 53.0026 118.461 52.5391C118.904 52.0755 119.125 51.4792 119.125 50.75C119.125 50.0208 118.906 49.4297 118.469 48.9766C118.036 48.5182 117.482 48.2891 116.805 48.2891ZM123.531 46.5H125.359V47.5703C125.557 47.1484 125.82 46.8281 126.148 46.6094C126.477 46.3906 126.836 46.2812 127.227 46.2812C127.503 46.2812 127.792 46.3542 128.094 46.5L127.43 48.3359C127.18 48.2109 126.974 48.1484 126.812 48.1484C126.484 48.1484 126.206 48.3516 125.977 48.7578C125.753 49.1641 125.641 49.9609 125.641 51.1484L125.648 51.5625V55H123.531V46.5ZM138.672 51.3672H131.82C131.919 51.9714 132.182 52.4531 132.609 52.8125C133.042 53.1667 133.591 53.3438 134.258 53.3438C135.055 53.3438 135.74 53.0651 136.312 52.5078L138.109 53.3516C137.661 53.987 137.125 54.4583 136.5 54.7656C135.875 55.0677 135.133 55.2188 134.273 55.2188C132.94 55.2188 131.854 54.7995 131.016 53.9609C130.177 53.1172 129.758 52.0625 129.758 50.7969C129.758 49.5 130.174 48.4245 131.008 47.5703C131.846 46.7109 132.896 46.2812 134.156 46.2812C135.495 46.2812 136.583 46.7109 137.422 47.5703C138.26 48.4245 138.68 49.5547 138.68 50.9609L138.672 51.3672ZM136.531 49.6875C136.391 49.2135 136.112 48.8281 135.695 48.5312C135.284 48.2344 134.805 48.0859 134.258 48.0859C133.664 48.0859 133.143 48.2526 132.695 48.5859C132.414 48.7943 132.154 49.1615 131.914 49.6875H136.531ZM147.148 43.3672H149.273V46.5H150.539V48.3359H149.273V55H147.148V48.3359H146.055V46.5H147.148V43.3672ZM152.695 43.2188H154.812V47.3594C155.229 47 155.648 46.7318 156.07 46.5547C156.492 46.3724 156.919 46.2812 157.352 46.2812C158.195 46.2812 158.906 46.5729 159.484 47.1562C159.979 47.6615 160.227 48.4036 160.227 49.3828V55H158.125V51.2734C158.125 50.2891 158.078 49.6224 157.984 49.2734C157.891 48.9245 157.729 48.6641 157.5 48.4922C157.276 48.3203 156.997 48.2344 156.664 48.2344C156.232 48.2344 155.859 48.3776 155.547 48.6641C155.24 48.9505 155.026 49.3411 154.906 49.8359C154.844 50.0911 154.812 50.6745 154.812 51.5859V55H152.695V43.2188ZM171.812 51.3672H164.961C165.06 51.9714 165.323 52.4531 165.75 52.8125C166.182 53.1667 166.732 53.3438 167.398 53.3438C168.195 53.3438 168.88 53.0651 169.453 52.5078L171.25 53.3516C170.802 53.987 170.266 54.4583 169.641 54.7656C169.016 55.0677 168.273 55.2188 167.414 55.2188C166.081 55.2188 164.995 54.7995 164.156 53.9609C163.318 53.1172 162.898 52.0625 162.898 50.7969C162.898 49.5 163.315 48.4245 164.148 47.5703C164.987 46.7109 166.036 46.2812 167.297 46.2812C168.635 46.2812 169.724 46.7109 170.562 47.5703C171.401 48.4245 171.82 49.5547 171.82 50.9609L171.812 51.3672ZM169.672 49.6875C169.531 49.2135 169.253 48.8281 168.836 48.5312C168.424 48.2344 167.945 48.0859 167.398 48.0859C166.805 48.0859 166.284 48.2526 165.836 48.5859C165.555 48.7943 165.294 49.1615 165.055 49.6875H169.672ZM183.125 43.5078H185.32V51.1328C185.32 52.3464 185.224 53.1979 185.031 53.6875C184.839 54.1771 184.521 54.5677 184.078 54.8594C183.635 55.1458 183.104 55.2891 182.484 55.2891C181.219 55.2891 180.141 54.7344 179.25 53.625L180.828 52.1484C181.177 52.5443 181.474 52.8099 181.719 52.9453C181.964 53.0807 182.201 53.1484 182.43 53.1484C182.664 53.1484 182.839 53.0495 182.953 52.8516C183.068 52.6536 183.125 52.2188 183.125 51.5469V43.5078ZM192.711 46.2812C193.513 46.2812 194.266 46.4818 194.969 46.8828C195.677 47.2839 196.229 47.8281 196.625 48.5156C197.021 49.2031 197.219 49.9453 197.219 50.7422C197.219 51.5443 197.018 52.2943 196.617 52.9922C196.221 53.6901 195.68 54.237 194.992 54.6328C194.305 55.0234 193.547 55.2188 192.719 55.2188C191.5 55.2188 190.458 54.7865 189.594 53.9219C188.734 53.0521 188.305 51.9974 188.305 50.7578C188.305 49.4297 188.792 48.3229 189.766 47.4375C190.62 46.6667 191.602 46.2812 192.711 46.2812ZM192.742 48.2891C192.081 48.2891 191.529 48.5208 191.086 48.9844C190.648 49.4427 190.43 50.0312 190.43 50.75C190.43 51.4896 190.646 52.0885 191.078 52.5469C191.516 53.0052 192.068 53.2344 192.734 53.2344C193.401 53.2344 193.956 53.0026 194.398 52.5391C194.841 52.0755 195.062 51.4792 195.062 50.75C195.062 50.0208 194.844 49.4297 194.406 48.9766C193.974 48.5182 193.419 48.2891 192.742 48.2891ZM199.961 46.5H202.117V50.5938C202.117 51.3906 202.172 51.9453 202.281 52.2578C202.391 52.5651 202.565 52.8047 202.805 52.9766C203.049 53.1484 203.349 53.2344 203.703 53.2344C204.057 53.2344 204.357 53.151 204.602 52.9844C204.852 52.8125 205.036 52.5625 205.156 52.2344C205.245 51.9896 205.289 51.4661 205.289 50.6641V46.5H207.43V50.1016C207.43 51.5859 207.312 52.6016 207.078 53.1484C206.792 53.8151 206.37 54.3281 205.812 54.6875C205.255 55.0417 204.547 55.2188 203.688 55.2188C202.755 55.2188 202 55.0104 201.422 54.5938C200.849 54.1771 200.445 53.5964 200.211 52.8516C200.044 52.3359 199.961 51.3984 199.961 50.0391V46.5ZM210.078 46.5H211.906V47.5703C212.104 47.1484 212.367 46.8281 212.695 46.6094C213.023 46.3906 213.383 46.2812 213.773 46.2812C214.049 46.2812 214.339 46.3542 214.641 46.5L213.977 48.3359C213.727 48.2109 213.521 48.1484 213.359 48.1484C213.031 48.1484 212.753 48.3516 212.523 48.7578C212.299 49.1641 212.188 49.9609 212.188 51.1484L212.195 51.5625V55H210.078V46.5ZM216.703 46.5H218.828V47.3672C219.312 46.9609 219.75 46.6797 220.141 46.5234C220.536 46.362 220.94 46.2812 221.352 46.2812C222.195 46.2812 222.911 46.5755 223.5 47.1641C223.995 47.6641 224.242 48.4036 224.242 49.3828V55H222.133V51.2734C222.133 50.2578 222.086 49.5833 221.992 49.25C221.904 48.9167 221.745 48.6641 221.516 48.4922C221.292 48.3151 221.013 48.2266 220.68 48.2266C220.247 48.2266 219.875 48.3724 219.562 48.6641C219.255 48.9505 219.042 49.349 218.922 49.8594C218.859 50.125 218.828 50.7005 218.828 51.5859V55H216.703V46.5ZM233.594 46.5H235.719V55H233.594V54.1016C233.177 54.4974 232.758 54.7839 232.336 54.9609C231.919 55.1328 231.466 55.2188 230.977 55.2188C229.878 55.2188 228.927 54.7943 228.125 53.9453C227.323 53.0911 226.922 52.0312 226.922 50.7656C226.922 49.4531 227.31 48.3776 228.086 47.5391C228.862 46.7005 229.805 46.2812 230.914 46.2812C231.424 46.2812 231.904 46.3776 232.352 46.5703C232.799 46.763 233.214 47.0521 233.594 47.4375V46.5ZM231.352 48.25C230.69 48.25 230.141 48.4844 229.703 48.9531C229.266 49.4167 229.047 50.013 229.047 50.7422C229.047 51.4766 229.268 52.0807 229.711 52.5547C230.159 53.0286 230.708 53.2656 231.359 53.2656C232.031 53.2656 232.589 53.0339 233.031 52.5703C233.474 52.1016 233.695 51.4896 233.695 50.7344C233.695 49.9948 233.474 49.3958 233.031 48.9375C232.589 48.4792 232.029 48.25 231.352 48.25ZM238.648 43.2188H240.781V55H238.648V43.2188Z" fill="#F5F0EA"/>
              </g>
              <defs>
                <filter id="filter0_d_134_4599_journal" x="0" y="0" width="318" height="126" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="14"/>
                  <feGaussianBlur stdDeviation="17"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.741176 0 0 0 0 0.356863 0 0 0 0 0.231373 0 0 0 0.28 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_4599"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_4599" result="shape"/>
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      {/* Article Details Modal */}
      {selectedArticle && (
        <div className="journal-modal-backdrop" onClick={closeModal}>
          <div
            className="journal-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="journal-modal-close"
              onClick={closeModal}
              aria-label="Close article"
            >
              ✕
            </button>

            <div className="journal-modal-header">
              <span className="journal-modal-badge">{selectedArticle.category}</span>
              <div className="journal-modal-meta">
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>
            </div>

            <h2 className="journal-modal-title">{selectedArticle.title}</h2>
            <div className="journal-modal-author">
              <span className="author-dot"></span>
              <span>By {selectedArticle.author}</span>
            </div>

            <div className="journal-modal-body">
              <p className="journal-modal-summary">{selectedArticle.description}</p>
              <hr className="journal-modal-divider" />
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx} className="journal-modal-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="journal-modal-footer">
              <button
                type="button"
                className="journal-modal-action-btn"
                onClick={closeModal}
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Explore Journal All Articles Catalog Modal */}
      {showExploreModal && (
        <div className="journal-modal-backdrop" onClick={closeModal}>
          <div
            className="journal-modal-content explore-catalog-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="journal-modal-close"
              onClick={closeModal}
              aria-label="Close explore modal"
            >
              ✕
            </button>

            <div className="explore-catalog-header">
              <span className="journal-modal-badge">AKASHVANI LIBRARY</span>
              <h2 className="journal-modal-title" style={{ marginTop: '10px' }}>
                The Akashvani Journal Collection
              </h2>
              <p className="journal-modal-summary" style={{ fontStyle: 'normal' }}>
                Curated insights on Vedic astrology, relationship dynamics, kundli analysis, and spiritual consciousness.
              </p>
            </div>

            <div className="explore-catalog-list">
              {journalArticles.map((art) => (
                <div
                  key={art.id}
                  className="explore-catalog-item"
                  onClick={() => {
                    setShowExploreModal(false);
                    setSelectedArticle(art);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    className="explore-catalog-thumb"
                  />
                  <div className="explore-catalog-info">
                    <span className="explore-catalog-category">{art.category}</span>
                    <h4 className="explore-catalog-item-title">{art.title}</h4>
                    <span className="explore-catalog-readtime">{art.readTime} • Read Article →</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="journal-modal-footer">
              <button
                type="button"
                className="journal-modal-action-btn"
                onClick={closeModal}
              >
                Close Library
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

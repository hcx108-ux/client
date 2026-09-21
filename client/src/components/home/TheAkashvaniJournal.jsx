import React, { useState } from 'react';
import './TheAkashvaniJournal.css';
import card1Img from '../../assets/journal_card_1.png';
import card2Img from '../../assets/journal_card_2.png';
import card3Img from '../../assets/journal_card_3.png';
import card4Img from '../../assets/journal_card_4.png';

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
            className="explore-journal-btn"
            onClick={() => setShowExploreModal(true)}
            aria-label="Explore all articles in The Akashvani Journal"
          >
            Explore The Journal
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

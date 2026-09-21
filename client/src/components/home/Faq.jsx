import React, { useState } from 'react';
import './Faq.css';
import faqBgWaves from '../../assets/faq_bg_waves.svg';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'What Is Akashvani?',
    answer:
      'Akashvani is a holistic spiritual wellness platform bringing together Vedic wisdom, human guidance, practical perspectives and practices for the mind, body and soul.',
  },
  {
    id: 2,
    question: 'Do I Need To Believe In Astrology?',
    answer:
      'Not at all. Akashvani approaches Vedic astrology as a reflective and philosophical framework for self-discovery rather than rigid dogma. Whether you are deeply spiritual or completely curious, our guidance is designed to offer practical clarity you can apply in your daily life.',
  },
  {
    id: 3,
    question: 'What Happens When I Share My Birth Details?',
    answer:
      'Your date, exact time, and place of birth are used exclusively to calculate your accurate Vedic birth chart (Kundli). Your personal information is kept strictly private, encrypted, and is never sold or shared with any third parties.',
  },
  {
    id: 4,
    question: 'Can Akashvani Help With Relationships?',
    answer:
      'Yes. By examining behavioral patterns, planetary alignments, and emotional temperaments through synastry and Vedic compatibility principles, Akashvani offers deep insights into communication styles, conflict resolution, and mutual growth in relationships.',
  },
  {
    id: 5,
    question: 'Will An Expert Tell Me What To Do?',
    answer:
      'No, our experts act as compassionate guides rather than decision-makers for your life. They provide clarity, deeper perspectives, and ancient Vedic wisdom so you feel empowered to make your own conscious, informed choices.',
  },
  {
    id: 6,
    question: 'What Other Services Are Offered?',
    answer:
      'Beyond birth chart readings, Akashvani offers personal wellness journals, guided meditation and mindfulness practices, transit forecasts, remedial gemstone and mantra consultations, and one-on-one sessions with certified wellness experts.',
  },
];

export default function Faq() {
  // First item open by default matching Figma screenshot
  const [openItems, setOpenItems] = useState({ 1: true });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      {/* Background SVG wave lines from original Figma design */}
      <img
        src={faqBgWaves}
        alt=""
        className="faq-bg-waves"
        aria-hidden="true"
      />

      <div className="faq-container">
        {/* Header aligned with accordion */}
        <div className="faq-header">
          <h2 id="faq-title" className="faq-title">FAQ</h2>
          <p className="faq-subtitle">Questions You May Have</p>
        </div>

        {/* Accordion List */}
        <div className="faq-list" role="region" aria-label="Frequently Asked Questions">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className={`faq-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggleItem(item.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleItem(item.id);
                  }
                }}
              >
                <div className="faq-card-header">
                  <h3 className="faq-question">{item.question}</h3>
                  <span className={`faq-chevron ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2L10 10L18 2"
                        stroke="#F5F0EA"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="faq-card-body">
                  <div className="faq-answer-inner">
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import '../styles/KanjiHero.css';

function KanjiHero() {
  const [currentKanji, setCurrentKanji] = useState(0);
  
  const kanjiWords = [
    { kanji: '挑', meaning: 'Challenge', description: '新しいことに挑戦する' },
    { kanji: '創', meaning: 'Create', description: '未来を創造する' },
    { kanji: '繋', meaning: 'Connect', description: '人と繋がる' },
    { kanji: '成', meaning: 'Achieve', description: '目標を達成する' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKanji((prev) => (prev + 1) % kanjiWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="kanji-hero">
      <div className="kanji-container">
        <div className="kanji-display">
          <div 
            key={currentKanji}
            className="kanji-character animate-in"
          >
            {kanjiWords[currentKanji].kanji}
          </div>
        </div>
        <div className="kanji-info">
          <div className="kanji-meaning">
            {kanjiWords[currentKanji].meaning}
          </div>
          <div className="kanji-description">
            {kanjiWords[currentKanji].description}
          </div>
        </div>
      </div>
      
      <div className="kanji-indicators">
        {kanjiWords.map((_, index) => (
          <div 
            key={index}
            className={`indicator ${index === currentKanji ? 'active' : ''}`}
            onClick={() => setCurrentKanji(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default KanjiHero;
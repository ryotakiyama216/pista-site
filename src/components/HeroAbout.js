import React from 'react';
import '../styles/Hero.css';

function HeroAbout() {
  return (
<section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              ABOUT US
            </h1>
            <p className="hero-description">
              私たちは、大人のためのカルチャー × 出会いを提案するPISTAです。
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <span>今すぐ始める</span>
                <span>🚀</span>
              </button>
              <button className="btn btn-secondary">
                <span>サービス詳細</span>
                <span>📖</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroAbout;
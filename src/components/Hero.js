import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              大人のための<br />
              <span className="highlight">新しい挑戦</span>がここに
            </h1>
            <p className="hero-description">
              バスケ・フットサル・ヨガ・クッキング・ラン・ダンス。<br />
              PISTAで理想の「大人の部活動」を見つけて、<br />
              新しい仲間と充実した時間を過ごしませんか？
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
          <div className="hero-image">
            <div className="hero-placeholder">
              <div className="placeholder-content">
                <h3>🏃‍♂️ アクティブな活動</h3>
                <p>スポーツで身体と心を鍛えよう</p>
              </div>
              <div className="placeholder-content">
                <h3>👥 素敵な出会い</h3>
                <p>同じ趣味を持つ仲間と繋がろう</p>
              </div>
              <div className="placeholder-content">
                <h3>🌟 充実した時間</h3>
                <p>毎日をもっと楽しく過ごそう</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>1,000+</h3>
              <p>活動中のメンバー</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>多様な部活動</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>満足度</p>
            </div>
            <div className="stat-item">
              <h3>24時間</h3>
              <p>サポート体制</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
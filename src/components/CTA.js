import React from 'react';
import '../styles/CTA.css';

function CTA() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>今こそ、新しい自分に出会う時</h2>
            <p className="cta-description">
              PISTAで始める大人の部活動で、
              <br />
              理想の自分へと成長しませんか？
            </p>
            <ul className="cta-benefits">
              <li>
                <span className="benefit-icon">🎯</span>
                <span>明確な目標設定と達成サポート</span>
              </li>
              <li>
                <span className="benefit-icon">👥</span>
                <span>同じ志を持つ仲間との出会い</span>
              </li>
              <li>
                <span className="benefit-icon">📈</span>
                <span>確実なスキルアップと成長実感</span>
              </li>
              <li>
                <span className="benefit-icon">🏆</span>
                <span>成果を形に残せる認定システム</span>
              </li>
            </ul>
          </div>
          
          <div className="cta-action">
            <div className="cta-card">
              <div className="cta-card-header">
                <h3>無料体験から始めよう</h3>
                <p>クレジットカード登録不要</p>
              </div>
              
              <div className="cta-stats">
                <div className="stat">
                  <strong>30日間</strong>
                  <span>返金保証</span>
                </div>
                <div className="stat">
                  <strong>1,000+</strong>
                  <span>満足ユーザー</span>
                </div>
                <div className="stat">
                  <strong>95%</strong>
                  <span>継続率</span>
                </div>
              </div>
              
              <div className="cta-buttons">
                <button className="btn btn-primary btn-large">
                  今すぐ無料体験を始める
                </button>
                <button className="btn btn-secondary">
                  資料請求・お問い合わせ
                </button>
              </div>
              
              <div className="cta-testimonial">
                <p className="testimonial-quote">
                  "PISTAのおかげで新しいスキルを身につけ、
                  転職に成功しました！"
                </p>
                <div className="testimonial-author">
                  <strong>田中 美香さん (29歳)</strong>
                  <span>プログラミング部活 → Web開発者</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cta-floating-elements">
        <div className="floating-element element-1">💡</div>
        <div className="floating-element element-2">🚀</div>
        <div className="floating-element element-3">⭐</div>
        <div className="floating-element element-4">🎯</div>
        <div className="floating-element element-5">🏆</div>
        <div className="floating-element element-6">📚</div>
      </div>
    </section>
  );
}

export default CTA;
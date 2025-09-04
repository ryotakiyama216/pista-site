import React, { useState } from 'react';
import '../styles/Categories.css';

function Categories() {
  const [activeTab, setActiveTab] = useState('sports');

  const categoryTabs = [
    { id: 'sports', name: 'スポーツ', icon: '🏃‍♂️' },
    { id: 'fitness', name: 'フィットネス', icon: '💪' },
    { id: 'creative', name: 'クリエイティブ', icon: '🎨' }
  ];

  const categories = {
    sports: [
      {
        title: 'バスケットボール',
        description: '仲間と一緒に楽しむバスケットボール。初心者から経験者まで歓迎！',
        members: '120+',
        level: '初級〜上級',
        image: '🏀'
      },
      {
        title: 'フットサル',
        description: '室内で楽しむサッカー。チームワークを育みながら汗を流そう！',
        members: '95+',
        level: '初級〜中級',
        image: '⚽'
      }
    ],
    fitness: [
      {
        title: 'ヨガ',
        description: '心と身体のバランスを整えるヨガ。リラックスしながら柔軟性を向上',
        members: '150+',
        level: '初級〜中級',
        image: '🧘‍♀️'
      },
      {
        title: 'ランニング',
        description: 'みんなでジョギング＆ランニング。健康づくりと仲間づくりを同時に',
        members: '200+',
        level: '初級〜上級',
        image: '🏃‍♂️'
      }
    ],
    creative: [
      {
        title: 'クッキング',
        description: '料理を通じて学ぶ・作る・食べる。世界各国の料理に挑戦しよう',
        members: '180+',
        level: '初級〜上級',
        image: '👨‍🍳'
      },
      {
        title: 'ダンス',
        description: '音楽に合わせて身体を動かす楽しさを。様々なジャンルのダンス',
        members: '130+',
        level: '初級〜中級',
        image: '💃'
      }
    ]
  };

  return (
    <section className="categories section">
      <div className="container">
        <div className="categories-header">
          <h2>6つの魅力的な部活動</h2>
          <p className="categories-subtitle">
            スポーツ、フィットネス、クリエイティブな活動で新しい仲間と出会い、充実した時間を過ごそう
          </p>
        </div>

        <div className="category-tabs">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-name">{tab.name}</span>
            </button>
          ))}
        </div>

        <div className="category-content">
          <div className="categories-grid">
            {categories[activeTab].map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image">
                  {category.image}
                </div>
                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                  <div className="category-stats">
                    <div className="stat">
                      <span className="stat-label">参加者</span>
                      <span className="stat-value">{category.members}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">レベル</span>
                      <span className="stat-value">{category.level}</span>
                    </div>
                  </div>
                  <button className="btn btn-outline">
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="categories-cta">
          <h3>気になる部活動はありましたか？</h3>
          <p>まずは無料体験で雰囲気を体験してみてください</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">無料体験に申し込む</button>
            <button className="btn btn-secondary">部活動詳細を見る</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
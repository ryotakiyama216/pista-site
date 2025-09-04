import React from 'react';
import '../styles/Features.css';

function Features() {
  const features = [
    {
      icon: '🎯',
      title: '目標達成サポート',
      description: '個人の目標設定から達成まで、専門コーチがマンツーマンでサポート。進捗を可視化して、確実にスキルアップできます。'
    },
    {
      icon: '👥',
      title: '仲間との繋がり',
      description: '同じ目標や興味を持つ仲間と出会える環境。一人では続かないことも、仲間がいれば楽しく継続できます。'
    },
    {
      icon: '⏰',
      title: '柔軟なスケジュール',
      description: '忙しい大人でも参加しやすい時間設定。平日夜や週末など、ライフスタイルに合わせて選択できます。'
    },
    {
      icon: '📱',
      title: 'オンライン＆オフライン',
      description: 'リモートワークにも対応した多様な参加方法。オンライン活動からリアルイベントまで幅広く展開。'
    },
    {
      icon: '🏆',
      title: '実績・認定制度',
      description: '学習成果を形に残せる認定制度。キャリアアップにも活用できる公式認定を取得できます。'
    },
    {
      icon: '💡',
      title: '多様な学習コンテンツ',
      description: '動画講座、実習ワークショップ、メンタリングなど、様々な学習スタイルに対応したコンテンツを提供。'
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="features-header">
          <h2>PISTAが選ばれる理由</h2>
          <p className="features-subtitle">
            大人の学び直しと成長を、総合的にサポートする6つの特徴
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="features-cta">
          <h3>まずは無料体験から始めませんか？</h3>
          <button className="btn btn-primary">
            無料体験を申し込む
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
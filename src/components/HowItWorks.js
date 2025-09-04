import React from 'react';
import '../styles/HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'チャレンジ',
      description: 'まずは新しいことに挑戦する勇気から。PISTAで最初の一歩を踏み出しましょう。',
      details: ['目標設定のサポート', '適性診断', '個別カウンセリング'],
      icon: '💪',
      kanji: '挑'
    },
    {
      number: '02', 
      title: '環境を整える',
      description: '成功するための環境づくり。仲間やメンターとのつながりを構築します。',
      details: ['コミュニティ参加', 'メンター制度', 'ネットワーキング'],
      icon: '🌱',
      kanji: '整'
    },
    {
      number: '03',
      title: 'プロジェクト',
      description: '実際の案件に取り組み、実践的なスキルと経験を積み重ねていきます。',
      details: ['実案件参加', 'ポートフォリオ作成', 'フィードバック'],
      icon: '🛠️',
      kanji: '実'
    },
    {
      number: '04',
      title: 'クオリティUP',
      description: 'より高いレベルの仕事を目指し、専門性と品質を磨き上げます。',
      details: ['スキル向上', '品質管理', '専門性の追求'],
      icon: '⭐',
      kanji: '磨'
    },
    {
      number: '05',
      title: '報酬と評価',
      description: '努力の成果として正当な報酬を得て、フリーランスとしての地位を確立します。',
      details: ['収入の安定化', '評価向上', '独立達成'],
      icon: '👑',
      kanji: '成'
    }
  ];

  return (
    <section className="how-it-works section">
      <div className="container">
        <div className="how-it-works-header">
          <h2>自立への道筋</h2>
          <p className="how-it-works-subtitle">
            フリーランスとして自立するまでの5つのステージ
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-content">
                <div className="step-number">
                  {step.number}
                </div>
                <div className="step-kanji-container">
                  <div className="step-kanji">{step.kanji}</div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="detail-item">
                      <span className="detail-check">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="how-it-works-timeline">
          <h3>フリーランス独立までの道のり</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">1-3ヶ月</div>
              <div className="timeline-content">
                <h4>基礎固め</h4>
                <p>スキルの習得と基盤作り</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">4-6ヶ月</div>
              <div className="timeline-content">
                <h4>実案件挑戦</h4>
                <p>小規模案件での実績づくり</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">7-9ヶ月</div>
              <div className="timeline-content">
                <h4>スキル向上</h4>
                <p>品質向上と専門性の深化</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">10-12ヶ月</div>
              <div className="timeline-content">
                <h4>完全独立</h4>
                <p>安定収入とフリーランス確立</p>
              </div>
            </div>
          </div>
        </div>

        <div className="how-it-works-cta">
          <h3>今すぐ始めてみませんか？</h3>
          <p>無料体験で、PISTAの雰囲気を体感してください</p>
          <button className="btn btn-primary btn-large">
            無料会員登録して体験する
          </button>
          <p className="cta-note">※クレジットカード登録不要で体験できます</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
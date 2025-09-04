import React from 'react';
import '../styles/TargetUsers.css';

function TargetUsers() {
  const userTypes = [
    {
      title: 'キャリアチェンジを目指す方',
      subtitle: '新しいスキルで人生を変えたい',
      description: 'プログラミング、デザイン、マーケティングなど、転職や副業に活かせるスキルを身につけたい方',
      features: ['実践的なカリキュラム', '転職サポート', '副業案件紹介'],
      image: '💼'
    },
    {
      title: '趣味を本格的に始めたい方',
      subtitle: '人生をより豊かにしたい',
      description: '写真、音楽、料理、スポーツなど、ずっとやりたかった趣味を本格的に始めたい方',
      features: ['基礎から応用まで', '作品発表の場', '趣味仲間との交流'],
      image: '🎨'
    },
    {
      title: '自己啓発に取り組みたい方',
      subtitle: '成長し続けたい自分へ',
      description: 'コミュニケーション能力、リーダーシップ、時間管理など、人間力を高めたい方',
      features: ['個別コーチング', '実践ワークショップ', '成長記録システム'],
      image: '📈'
    },
    {
      title: '仲間作りを求める方',
      subtitle: '新しい出会いと繋がりを',
      description: '同じ目標や価値観を持つ仲間と出会い、切磋琢磨しながら成長したい方',
      features: ['コミュニティ参加', 'イベント企画', 'メンター制度'],
      image: '🤝'
    }
  ];

  return (
    <section className="target-users section">
      <div className="container">
        <div className="target-users-header">
          <h2>こんな方にピッタリです</h2>
          <p className="target-users-subtitle">
            PISTAは、様々な目標を持つ大人の方々を応援します
          </p>
        </div>

        <div className="user-types-grid">
          {userTypes.map((userType, index) => (
            <div key={index} className="user-type-card">
              <div className="user-type-image">
                {userType.image}
              </div>
              <div className="user-type-content">
                <h3 className="user-type-title">{userType.title}</h3>
                <p className="user-type-subtitle">{userType.subtitle}</p>
                <p className="user-type-description">{userType.description}</p>
                <ul className="user-type-features">
                  {userType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="target-users-testimonials">
          <h3>実際の参加者の声</h3>
          <div className="testimonials-showcase">
            <div className="testimonials-container">
              {[
                {
                  name: "田中 雅人",
                  age: "25歳",
                  occupation: "フリーランスデザイナー",
                  activity: "バスケットボール部活",
                  quote: "毎週のバスケで体力がつき、集中力も向上。クライアントワークの効率が格段に上がりました。",
                  image: "🏀",
                  result: "月収50%アップ"
                },
                {
                  name: "佐藤 美香",
                  age: "22歳", 
                  occupation: "エンジニア",
                  activity: "ヨガ部活",
                  quote: "ストレス解消と柔軟性向上で、長時間のコーディングも苦にならなくなりました。",
                  image: "🧘‍♀️",
                  result: "残業時間50%減"
                },
                {
                  name: "山田 健太",
                  age: "20歳",
                  occupation: "コンサルタント", 
                  activity: "ランニング部活",
                  quote: "朝ランで一日の生産性が大幅向上。同じ目標を持つ仲間とのネットワークも広がりました。",
                  image: "🏃‍♂️",
                  result: "案件獲得3倍"
                }
              ].map((testimonial, index) => (
                <div key={index} className="testimonial-card-modern">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <span className="avatar-emoji">{testimonial.image}</span>
                    </div>
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-meta">{testimonial.age} • {testimonial.occupation}</p>
                      <span className="testimonial-activity">{testimonial.activity}</span>
                    </div>
                  </div>
                  <blockquote className="testimonial-quote">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="testimonial-result">
                    <span className="result-badge">{testimonial.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetUsers;
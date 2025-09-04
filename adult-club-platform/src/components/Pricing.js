import React, { useState } from 'react';
import '../styles/Pricing.css';

function Pricing() {
  const [billingType, setBillingType] = useState('monthly');

  const plans = [
    {
      name: 'フリー',
      subtitle: '試してみたい方へ',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: '基本的な機能を無料で体験できます',
      features: [
        '月2回までの部活動参加',
        '基本的な学習コンテンツアクセス',
        'コミュニティ参加',
        'プロフィール作成',
        'チャットサポート（営業時間内）'
      ],
      notIncluded: [
        '専門コーチとの1対1セッション',
        'プレミアムコンテンツ',
        '認定証の発行',
        '優先サポート'
      ],
      popular: false,
      buttonText: '無料で始める',
      color: '#4a5568'
    },
    {
      name: 'スタンダード',
      subtitle: '本格的に学びたい方へ',
      monthlyPrice: 2980,
      yearlyPrice: 29800,
      description: '充実した機能でしっかりと学習を進められます',
      features: [
        '無制限の部活動参加',
        '全ての学習コンテンツアクセス',
        'プレミアムコミュニティ参加',
        '月1回の専門コーチとの個別相談',
        '進捗レポートの提供',
        '基本認定証の発行',
        'チャットサポート（24時間）'
      ],
      notIncluded: [
        '無制限の個別コーチング',
        '企業向け研修プログラム',
        'VIP専用イベント'
      ],
      popular: true,
      buttonText: '14日間無料体験',
      color: '#667eea'
    },
    {
      name: 'プレミアム',
      subtitle: '本気で成果を出したい方へ',
      monthlyPrice: 9800,
      yearlyPrice: 98000,
      description: '最高級のサポートで確実に目標を達成',
      features: [
        'スタンダードの全機能',
        '無制限の専門コーチとの個別セッション',
        '専用の学習プラン作成',
        '企業向け研修プログラム参加',
        'VIP専用イベント招待',
        '上級認定証の発行',
        '専属サポート担当者',
        '転職・副業サポート'
      ],
      notIncluded: [],
      popular: false,
      buttonText: '7日間無料体験',
      color: '#764ba2'
    }
  ];

  const faqs = [
    {
      question: '無料プランでも十分学習できますか？',
      answer: 'フリープランでは基本的な機能を体験できますが、本格的な学習には有料プランをお勧めします。月2回の参加制限があるため、継続的な学習には限界があります。'
    },
    {
      question: 'プランの変更やキャンセルはいつでもできますか？',
      answer: 'はい、いつでもプランの変更やキャンセルが可能です。プランのアップグレードは即座に反映され、ダウングレードは次の請求期間から適用されます。'
    },
    {
      question: '年払いと月払いの違いは何ですか？',
      answer: '年払いを選択すると、月払いと比較して約17%お得になります。また、年払いの方は請求頻度が少なく、管理が簡単です。'
    },
    {
      question: '返金保証はありますか？',
      answer: 'ご満足いただけない場合、初回お支払いから30日以内であれば全額返金いたします。返金をご希望の場合は、サポートまでご連絡ください。'
    }
  ];

  return (
    <section className="pricing section">
      <div className="container">
        <div className="pricing-header">
          <h2>料金プラン</h2>
          <p className="pricing-subtitle">
            あなたの学習スタイルと予算に合わせてお選びください
          </p>
          
          <div className="billing-toggle">
            <button 
              className={`billing-option ${billingType === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingType('monthly')}
            >
              月払い
            </button>
            <button 
              className={`billing-option ${billingType === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingType('yearly')}
            >
              年払い
              <span className="discount-badge">17% お得</span>
            </button>
          </div>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">人気プラン</div>}
              
              <div className="plan-header" style={{borderTopColor: plan.color}}>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-subtitle">{plan.subtitle}</p>
                <div className="plan-price">
                  <span className="currency">¥</span>
                  <span className="amount">
                    {billingType === 'monthly' ? plan.monthlyPrice.toLocaleString() : Math.floor(plan.yearlyPrice / 12).toLocaleString()}
                  </span>
                  <span className="period">/ 月</span>
                </div>
                {billingType === 'yearly' && plan.yearlyPrice > 0 && (
                  <p className="yearly-note">年間 ¥{plan.yearlyPrice.toLocaleString()}</p>
                )}
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-features">
                <h4>含まれる機能</h4>
                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {plan.notIncluded.length > 0 && (
                  <div className="not-included">
                    <h4>含まれない機能</h4>
                    <ul className="not-included-list">
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li key={featureIndex} className="not-included-item">
                          <span className="feature-cross">✗</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="plan-footer">
                <button 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-full`}
                  style={!plan.popular ? {borderColor: plan.color, color: plan.color} : {}}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-guarantee">
          <div className="guarantee-content">
            <h3>🛡️ 30日間返金保証</h3>
            <p>
              ご満足いただけない場合は、初回お支払いから30日以内であれば
              理由を問わず全額返金いたします。
            </p>
          </div>
        </div>

        <div className="pricing-faq">
          <h3>よくある質問</h3>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4 className="faq-question">{faq.question}</h4>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
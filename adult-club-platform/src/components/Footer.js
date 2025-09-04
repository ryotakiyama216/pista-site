import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">PISTA</h3>
            <p className="footer-tagline">
              大人のための部活動・スキルアップ支援プラットフォーム
            </p>
            <p className="footer-description">
              新しい挑戦を始めたいすべての大人の方を、
              PISTAは全力でサポートします。
              あなたの成長の旅を一緒に歩みましょう。
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span>📺</span>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>サービス</h4>
              <ul>
                <li><a href="#features">特徴</a></li>
                <li><a href="#categories">部活動一覧</a></li>
                <li><a href="#pricing">料金プラン</a></li>
                <li><a href="#how-it-works">始め方</a></li>
                <li><a href="#testimonials">利用者の声</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>部活動カテゴリー</h4>
              <ul>
                <li><a href="#tech">テクノロジー</a></li>
                <li><a href="#creative">クリエイティブ</a></li>
                <li><a href="#business">ビジネス</a></li>
                <li><a href="#lifestyle">ライフスタイル</a></li>
                <li><a href="#all-categories">すべて見る</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>サポート</h4>
              <ul>
                <li><a href="#faq">よくある質問</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
                <li><a href="#help">ヘルプセンター</a></li>
                <li><a href="#community">コミュニティ</a></li>
                <li><a href="#status">システム状況</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>企業情報</h4>
              <ul>
                <li><a href="#about">会社概要</a></li>
                <li><a href="#careers">採用情報</a></li>
                <li><a href="#press">プレスリリース</a></li>
                <li><a href="#blog">ブログ</a></li>
                <li><a href="#investors">投資家情報</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>リーガル</h4>
              <ul>
                <li><a href="#terms">利用規約</a></li>
                <li><a href="#privacy">プライバシーポリシー</a></li>
                <li><a href="#cookie">Cookie設定</a></li>
                <li><a href="#security">セキュリティ</a></li>
                <li><a href="#compliance">コンプライアンス</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>最新情報をお届け</h4>
            <p>新しい部活動やキャンペーン情報を定期的にお送りします</p>
          </div>
          <div className="newsletter-form">
            <div className="input-group">
              <input 
                type="email" 
                placeholder="メールアドレスを入力"
                className="newsletter-input"
              />
              <button className="btn btn-primary newsletter-btn">
                登録する
              </button>
            </div>
            <p className="newsletter-note">
              ※いつでも配信停止できます。プライバシーポリシーに基づいて管理します。
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} PISTA Inc. All rights reserved.
            </p>
            <div className="footer-badges">
              <span className="badge">🔒 SSL認証済み</span>
              <span className="badge">✅ プライバシーマーク取得</span>
              <span className="badge">🛡️ ISO27001認証</span>
            </div>
            <div className="footer-contact-info">
              <span>📞 03-1234-5678</span>
              <span>📧 support@pista.co.jp</span>
              <span>🕐 平日 9:00-18:00</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import Header from '../../common/layout/Header';
import Footer from '../../common/layout/Footer';
import MobileMenu from '../../common/layout/MobileMenu';
import OffCanvas from '../../common/layout/OffCanvas';
import SEO from '../../common/SEO';
import { I18nLink } from '../../i18n/I18nLink';
import { generateFaqStructuredData, generateBreadcrumbStructuredData } from '../../seo/structuredData';

const faqEntities = (schema) => {
  const node = (schema['@graph'] || []).find((n) => n['@type'] === 'FAQPage');
  return node?.mainEntity || [];
};

const SECTORS = [
  {
    rank: 1,
    name: "Dwarka Expressway — Sector 106, 108, 109",
    type: "Capital Appreciation",
    priceRange: "₹7,500 – ₹11,000/sq ft",
    expectedReturn: "12–18% over 3 years",
    rentalYield: "3.8–4.5%",
    reason:
      "DWARKA EXPRESSWAY is now fully operational, reducing commute to IGI Airport and Dwarka to under 20 minutes. Several infrastructure projects (metro extension, DMIC corridor) are driving rapid appreciation. Best for capital gains investors.",
    risk: "Low-Medium",
    horizon: "3–5 years",
    bestFor: "Capital appreciation",
    verdict: "🏆 Top Pick 2026",
  },
  {
    rank: 2,
    name: "New Gurugram — Sector 82–95",
    type: "Rental Yield",
    priceRange: "₹5,500 – ₹8,000/sq ft",
    expectedReturn: "8–12% over 3 years",
    rentalYield: "4.2–5.1%",
    reason:
      "Lowest entry price point in Gurugram with growing infrastructure. IMT Manesar expansion is driving blue-collar and mid-level IT demand. High rental yields due to lower purchase prices vs rental income.",
    risk: "Medium",
    horizon: "3–7 years",
    bestFor: "Rental yield",
    verdict: "📈 Best Yield",
  },
  {
    rank: 3,
    name: "Golf Course Extension Road — Sector 65–70",
    type: "Premium Residential",
    priceRange: "₹9,000 – ₹14,000/sq ft",
    expectedReturn: "8–10% over 3 years",
    rentalYield: "3.2–3.8%",
    reason:
      "Established premium micro-market. Strong demand from senior IT and MNC executives. Excellent social infrastructure. Stable values with low volatility — suitable for conservative investors.",
    risk: "Low",
    horizon: "3–5 years",
    bestFor: "Stable premium investment",
    verdict: "🛡️ Safest Bet",
  },
  {
    rank: 4,
    name: "Sohna Road — Sector 47–57",
    type: "Mid-Segment",
    priceRange: "₹5,000 – ₹7,500/sq ft",
    expectedReturn: "7–9% over 3 years",
    rentalYield: "3.5–4.2%",
    reason:
      "Good connectivity, affordable entry, improving social infrastructure. KMP Expressway access improving. Solid mid-segment market with stable demand from IT and services sector employees.",
    risk: "Low-Medium",
    horizon: "4–6 years",
    bestFor: "Mid-budget investment",
    verdict: "✅ Solid Choice",
  },
  {
    rank: 5,
    name: "DLF Phase 5 — Sector 53, 54, 55",
    type: "Ultra Premium",
    priceRange: "₹18,000 – ₹28,000/sq ft",
    expectedReturn: "5–7% over 3 years",
    rentalYield: "2.5–3.2%",
    reason:
      "Gurugram's most prestigious address. Values are high but appreciation is slower due to already-elevated pricing. Best suited as a luxury lifestyle purchase rather than pure investment.",
    risk: "Low",
    horizon: "5+ years",
    bestFor: "Wealth preservation, lifestyle",
    verdict: "💎 Ultra-Premium",
  },
];

const RISK_COLOR = {
  "Low": 'var(--success-color)',
  'Low-Medium': 'var(--warning-color)',
  "Medium": 'var(--warning-color)',
  "Medium-High": 'var(--danger-color)',
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Sectors for Property Investment in Gurugram 2026",
      "description":
        "A curated guide to the best areas for real estate investment in Gurugram in 2026, ranked by expected returns, rental yield, and risk profile.",
      "url": "https://360ghar.com/best-sectors-investment-2026",
      "author": { "@type": "Organization", "name": "360Ghar", "url": "https://360ghar.com" },
      "publisher": { "@type": "Organization", "name": "360Ghar" },
      "datePublished": "2026-01-01",
      "dateModified": "2026-01-01",
      "image": "https://360ghar.com/og-image-home.jpg",
      "keywords": [
        "best place to invest in Gurugram 2026",
        "upcoming areas Gurugram investment",
        "Gurugram property investment returns",
        "which sector in Gurugram is best for investment",
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which sector in Gurugram is best for property investment in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Dwarka Expressway (Sector 106–109) is the top pick for 2026 investment, driven by fully operational connectivity, metro expansion, and DMIC corridor development. Expected returns are 12–18% over 3 years. For rental yield, New Gurugram sectors (82–95) offer 4.2–5.1% annual yields due to lower purchase prices.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the average property price per sq ft in Gurugram in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Property prices in Gurugram in 2026 range from ₹5,500–8,000 per sq ft in New Gurugram sectors, ₹7,500–11,000 on Dwarka Expressway, ₹9,000–14,000 on Golf Course Extension Road, and ₹18,000–28,000 in DLF Phase 5. Prices vary significantly by micro-location and project quality.",
          },
        },
        {
          "@type": "Question",
          "name": "What rental yield can I expect from Gurugram property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Rental yields in Gurugram range from 2.5% to 5.1% annually depending on the area. New Gurugram and Dwarka Expressway offer the highest yields (4–5%) due to lower property prices relative to rental income. Established premium areas like DLF Phase 5 yield 2.5–3.2% but offer more capital stability.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Gurugram real estate a good investment in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Gurugram remains one of India's strongest real estate markets in 2026. Key drivers include expanding IT and MNC presence in Cyber City, improving infrastructure (Dwarka Expressway, metro), proximity to IGI Airport, and strong rental demand from a large professional tenant base. Property values across most micro-markets grew 8–15% in 2025.",
          },
        },
      ],
    },
  ],
};

export default function BestSectorsInvestment2026() {
  const faqs = faqEntities(SCHEMA).map((q) => ({
    question: q.name,
    answer: q.acceptedAnswer?.text || '',
  }));

  const datasetNodes = (SCHEMA['@graph'] || []).filter((n) => n['@type'] !== 'FAQPage');

  return (
    <>
      <SEO
        title={`Best Sectors for Property Investment in Gurugram 2026 | 360Ghar`}
        description={`Top 5 areas to invest in Gurugram property in 2026. Ranked by expected returns, rental yield, and risk. Expert analysis by 360Ghar.`}
        keywords={`best place to invest Gurugram 2026, upcoming areas Gurugram investment, which sector Gurugram best investment, Gurugram property returns 2026, Dwarka Expressway investment, New Gurugram sectors`}
        canonical="/best-sectors-investment-2026"
        structuredData={[
          ...datasetNodes,
          generateFaqStructuredData(faqs),
          generateBreadcrumbStructuredData([
            { name: 'Home', url: 'https://360ghar.com/' },
            { name: 'Data Hub', url: 'https://360ghar.com/builder-reputation' },
            { name: 'Best Sectors Investment 2026', url: 'https://360ghar.com/best-sectors-investment-2026' },
          ]),
        ]}
      />
      <OffCanvas />
      <MobileMenu />
      <main className="body-bg">
        <Header />
        <div className="geo-page best-sectors-investment">


        {/* Hero */}
        <section className="geo-hero">
          <div className="geo-hero__breadcrumb">
            <I18nLink to="/">Home</I18nLink> › Best Sectors for Investment in Gurugram 2026
          </div>
          <h1 className="geo-hero__title">Best Sectors for Property Investment — Gurugram 2026</h1>
          <p className="geo-hero__subtitle">
            5 micro-markets ranked by expected capital appreciation, rental yield, and risk profile.
            Research by 360Ghar. Last updated January 2026.
          </p>
        </section>

        {/* Investment Cards */}
        <section className="geo-section">
          <div className="investment-list">
            {SECTORS.map((s) => (
              <article key={s.name} className="investment-card">
                <div className="investment-card__rank">#{s.rank}</div>
                <div className="investment-card__body">
                  <div className="investment-card__top">
                    <div>
                      <h2 className="investment-card__name">{s.name}</h2>
                      <span className="investment-card__type">{s.type}</span>
                    </div>
                    <span className="investment-card__verdict">{s.verdict}</span>
                  </div>

                  <div className="investment-card__metrics">
                    <div className="investment-card__metric">
                      <span className="investment-card__metric-label">Price Range</span>
                      <strong>{s.priceRange}</strong>
                    </div>
                    <div className="investment-card__metric">
                      <span className="investment-card__metric-label">Expected Returns</span>
                      <strong style={{ color: 'var(--success-color)' }}>{s.expectedReturn}</strong>
                    </div>
                    <div className="investment-card__metric">
                      <span className="investment-card__metric-label">Rental Yield</span>
                      <strong>{s.rentalYield}</strong>
                    </div>
                    <div className="investment-card__metric">
                      <span className="investment-card__metric-label">Risk Level</span>
                      <strong style={{ color: RISK_COLOR[s.risk] || 'var(--warning-color)' }}>{s.risk}</strong>
                    </div>
                    <div className="investment-card__metric">
                      <span className="investment-card__metric-label">Time Horizon</span>
                      <strong>{s.horizon}</strong>
                    </div>
                    <div className="investment-card__metric">
                      <span className="investment-card__metric-label">Best For</span>
                      <strong>{s.bestFor}</strong>
                    </div>
                  </div>

                  <p className="investment-card__reason">{s.reason}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="investment-disclaimer">
            <strong>Disclaimer:</strong> Investment projections are based on current market trends and
            expert analysis. Real estate investments carry risk. Past performance does not guarantee
            future returns. Always consult a SEBI-registered investment advisor before making property
            investment decisions.
          </div>
        </section>

        {/* FAQ */}
        <section className="geo-faq geo-section--alt">
          <div className="geo-section__inner">
            <h2 className="geo-section__heading">Frequently Asked Questions</h2>
            {faqEntities(SCHEMA).map((q) => (
              <details key={q.name} className="geo-faq__item">
                <summary className="geo-faq__question">{q.name}</summary>
                <p className="geo-faq__answer">{q.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="geo-cta">
          <h2 className="geo-cta__title">Ready to Find Your Investment Property?</h2>
          <p className="geo-cta__sub">
            Browse verified investment-ready properties across Gurugram's top sectors with 360° virtual tours.
          </p>
          <div className="geo-cta__buttons">
            <I18nLink to="/properties" className="geo-btn geo-btn--primary">Browse Properties</I18nLink>
            <I18nLink to="/contact" className="geo-btn geo-btn--outline">Talk to an Expert</I18nLink>
          </div>
        </section>
      
        </div>
        <Footer />
      </main>
    </>
  );
}

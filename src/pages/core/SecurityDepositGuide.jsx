import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../common/layout/Header';
import Footer from '../../common/layout/Footer';
import MobileMenu from '../../common/layout/MobileMenu';
import OffCanvas from '../../common/layout/OffCanvas';
import Cta from '../../components/ui/Cta';
import SEO from '../../common/SEO';
import {
  generateBreadcrumbStructuredData,
  generateFaqStructuredData,
  generateHowToStructuredData,
  generateQAPageStructuredData,
} from '../../seo/structuredData';
import { I18nLink } from '../../i18n/I18nLink';

const PAGE_URL = 'https://360ghar.com/landlord-not-returning-security-deposit';

const SecurityDepositGuide = () => {
  const { t } = useTranslation();
  const [tSeo] = useTranslation('seo');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const breadcrumbs = [
    { name: 'Home', url: 'https://360ghar.com/' },
    { name: 'Security Deposit Refund Guide', url: PAGE_URL },
  ];

  const faqItems = [
    {
      question: 'What to do if the owner does not return the security deposit?',
      answer:
        'Start with a written demand (email or WhatsApp) asking for the refund and an itemised deduction list, and give the owner 15 days. If that fails, send a formal legal notice by registered post, then escalate to the state Rent Authority or Rent Controller, a consumer forum, or a civil suit for recovery. Keep every document: rent agreement, deposit receipt, payment proofs, and move-in/move-out photos. In states like Tamil Nadu the refund is legally due within one month of vacation, and under the Model Tenancy Act framework the deposit must be returned when vacant possession is handed over.',
    },
    {
      question: 'Can a landlord legally keep the security deposit?',
      answer:
        'Only to the extent of genuine, documented dues. A landlord can deduct unpaid rent, unpaid utility or maintenance bills owed by the tenant, and the cost of repairing damage caused by the tenant beyond normal wear and tear. The landlord cannot keep the deposit for normal wear and tear, for repainting after a long tenancy, for repairs the agreement makes the landlord responsible for, or for vague "miscellaneous" charges without receipts. Any balance must be refunded.',
    },
    {
      question: 'How many months of rent can a landlord ask as a security deposit in India?',
      answer:
        'Under the Model Tenancy Act, 2021 the cap is two months\' rent for residential premises and six months\' rent for non-residential (commercial) premises. Tamil Nadu is the only state with a clear statutory cap: three times the monthly rent, unless the agreement says otherwise (Section 11, Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017). Most other states have no statutory cap on the deposit, though Gujarat\'s 1947 Act treats rent in advance beyond 3 months for residential premises as an illegal premium (Section 18, Explanation I). Market practice varies: about 2–3 months in Delhi NCR, 3–6 months in Mumbai and Pune, around 10 months in Bengaluru, and 1–3 months in Kolkata and Gurgaon.',
    },
    {
      question: 'Is the security deposit refundable when you leave a rented flat?',
      answer:
        'Yes. A security deposit is the tenant\'s own money held by the landlord as security against unpaid rent, unpaid bills, and damage beyond normal wear and tear. Once the tenancy ends and the premises are handed over, the deposit must be returned after deducting only legitimate, documented amounts. Under the Model Tenancy Act framework it is refunded at the time of taking over vacant possession; Tamil Nadu law requires refund within one month of vacation.',
    },
    {
      question: 'Can the landlord deduct painting and cleaning charges from the deposit?',
      answer:
        'Only if the charges are for actual damage caused by the tenant and are backed by invoices, or if the agreement explicitly allows them. Normal wear and tear — faded paint, minor scuffs, ageing fixtures — is the cost of ownership and cannot be charged to the tenant. After a long tenancy (3+ years), a full repainting charge is generally not a fair deduction because the paint would have aged anyway. Always ask for an itemised deduction statement with receipts before accepting a reduced refund.',
    },
    {
      question: 'How long does a landlord have to return the security deposit after you vacate?',
      answer:
        'Under Tamil Nadu\'s Tenancy Act 2017 the deposit must be refunded within one month of vacation (after due deductions). Under the Model Tenancy Act, 2021 the deposit is returned at the time the landlord takes over vacant possession. In states without a statutory timeline, courts consider 15–30 days reasonable for final bills and inspection. If your agreement mentions a specific refund period, that clause governs — check it first.',
    },
    {
      question: 'Can I file a consumer complaint against a landlord who does not refund the deposit?',
      answer:
        'Consumer forums have entertained security deposit complaints where the service is provided by a property management company, co-living operator, broker, or business entity. Against an individual landlord letting out a personal property, many State Commissions hold that a landlord–tenant dispute is not a "consumer" dispute, so the forum may reject it. It is still worth trying in cases involving companies, but the reliable routes are the Rent Authority/Rent Controller, mediation, and a civil suit for recovery.',
    },
    {
      question: 'Should I file a police complaint (criminal breach of trust) for an unpaid deposit?',
      answer:
        'Courts in India repeatedly hold that a security deposit dispute is essentially civil in nature, and criminal cases under criminal breach of trust or cheating provisions (Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023) are generally not entertained for a mere failure to refund money. A police complaint can be used as pressure in a clear case of dishonesty, but you should not rely on it as your main remedy. File it only on a lawyer\'s advice, alongside the civil route.',
    },
    {
      question: 'What if I do not have a rent agreement — can I still recover the deposit?',
      answer:
        'Yes, but it is harder. Without a written agreement, you must prove the deposit was paid and its amount through bank transfer records, deposit receipts, WhatsApp messages, or witnesses. The absence of an agreement does not make the landlord\'s retention lawful — the deposit is still refundable. Your evidence trail becomes everything: bank statements showing the transfer with "security deposit" in the reference, any receipt, and all messages. Many cases without agreements are won on bank records alone.',
    },
    {
      question: 'Does the landlord have to pay interest on the security deposit?',
      answer:
        'There is no general statutory right to interest on the deposit in India, and most landlords pay none. However, when a court or tribunal orders a refund after wrongful retention, it routinely awards interest (commonly 9–12% per annum from the date of vacation) as compensation. Demand interest in your legal notice and in the suit — it is often granted at the final order.',
    },
    {
      question: 'What is the security deposit rule under the Model Tenancy Act, 2021?',
      answer:
        'The Model Tenancy Act, 2021 caps the deposit at two months\' rent for residential premises and six months\' rent for non-residential premises, and requires the landlord to return it when vacant possession is handed over, after lawful deductions. It also sets up a three-tier dispute mechanism — Rent Authority, Rent Court, and Rent Tribunal — for fast resolution. The Act is a model law: it applies only where a state adopts it, so always check your state\'s notified rules.',
    },
    {
      question: 'How much does it cost to recover a security deposit legally?',
      answer:
        'A written demand and a legal notice are low cost (a lawyer\'s fee of a few thousand rupees, or even self-drafted on a lawyer\'s template). Complaints to a Rent Authority or Rent Controller have minimal court fees. A civil suit involves court fees (usually a small percentage of the claim) plus lawyer fees, and most deposit suits are resolved in months rather than years because the amounts are small. Free legal aid is available through State Legal Services Authorities for eligible applicants, and Lok Adalats settle disputes without heavy costs.',
    },
  ];

  const howToSteps = [
    {
      name: 'Collect every document before you act',
      text: 'Assemble the rent agreement, deposit receipt, bank transfer proofs (with the exact amount and date), rent payment records, and move-in/move-out photos. This one step decides whether every later step succeeds — courts decide deposit cases almost entirely on documentary evidence.',
    },
    {
      name: 'Do a dated move-out inspection with the owner',
      text: 'Walk through the property together, photograph and video every room, and take the meter readings and society dues in writing. A jointly signed handover note stating "no damage beyond wear and tear" is the strongest evidence you can produce.',
    },
    {
      name: 'Send a written demand with a clear deadline',
      text: 'Email or WhatsApp the owner demanding the full refund and an itemised deduction list, citing the agreement clause and the applicable law, and give 15 days. Written communication signals that you are prepared to escalate and resolves most disputes on its own.',
    },
    {
      name: 'Send a formal legal notice by registered post',
      text: 'If the written demand fails, send a legal notice through a lawyer (or on a lawyer\'s template) by registered post with acknowledgement due, giving 15 days to refund. Mention the deposit amount, the dates, the clause breached, and your intention to sue with interest and costs.',
    },
    {
      name: 'Complain to the Rent Authority or Rent Controller',
      text: 'In states with a Rent Authority (Model Tenancy Act framework) or a Rent Controller (older rent control acts), file a complaint for recovery. These forums are faster, cheaper, and designed for landlord–tenant disputes. Check the local authority\'s address and filing procedure for your district.',
    },
    {
      name: 'File a consumer complaint if a business is involved',
      text: 'If the deposit is held by a property management company, co-living operator, broker firm, or any business entity, file a complaint before the District Consumer Commission under the Consumer Protection Act, 2019. Complaints up to ₹50 lakh are within the District Commission\'s jurisdiction and do not need a lawyer.',
    },
    {
      name: 'File a civil suit for recovery with interest',
      text: 'File a money suit in the civil court of the area where the property is located, claiming the deposit plus interest (commonly 9–12% per annum) and costs. Attach the notice, the agreement, and all payment proofs. Small deposit suits are usually disposed of faster than general civil litigation.',
    },
    {
      name: 'Try mediation or Lok Adalat before a full trial',
      text: 'Courts often refer deposit disputes to mediation or Lok Adalat (organised by Legal Services Authorities). A settlement there is binding, fast, and costs almost nothing. Many owners agree to refund in a Lok Adalat to avoid litigation.',
    },
    {
      name: 'Consider a criminal complaint only on legal advice',
      text: 'A police complaint for criminal breach of trust or cheating (Bharatiya Nyaya Sanhita, 2023) can be filed where the owner\'s conduct is clearly dishonest, but courts routinely treat deposit retention as a civil dispute. Use it as a supplement — never as your primary remedy — and only after consulting a lawyer.',
    },
    {
      name: 'Enforce the order or decree if the owner still does not pay',
      text: 'If the Rent Authority or court orders a refund and the owner ignores it, execute the decree through the court: attach the owner\'s bank account or property. The decree also carries interest, so every month of delay increases what the owner must pay.',
    },
  ];

  const structuredData = [
    generateBreadcrumbStructuredData(breadcrumbs),
    {
      '@type': 'Article',
      headline: 'Landlord Not Returning Security Deposit? Complete Legal Guide & Steps to Recover',
      description:
        'What to do when a landlord refuses to return the security deposit: central laws, state-wise rules, legal notice, refund timelines, and a 10-step recovery action plan for Indian tenants.',
      url: PAGE_URL,
      image: 'https://360ghar.com/assets/images/logo/logo.png',
      author: {
        '@type': 'Organization',
        name: '360Ghar',
      },
      publisher: {
        '@type': 'Organization',
        name: '360Ghar',
        logo: {
          '@type': 'ImageObject',
          url: 'https://360ghar.com/assets/images/logo/logo.png',
        },
      },
      datePublished: '2026-08-12',
      dateModified: '2026-08-12',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': PAGE_URL,
      },
    },
    generateFaqStructuredData(faqItems),
    generateHowToStructuredData({
      name: 'How to Recover Your Security Deposit When the Owner Does Not Return It',
      description:
        'Step-by-step action plan for Indian tenants to recover a security deposit withheld by a landlord: documentation, written demand, legal notice, and escalation to rent authorities, consumer forums, and courts.',
      steps: howToSteps,
    }),
    generateQAPageStructuredData({
      question: 'What to do if the owner does not return the security deposit?',
      answer:
        'Send a written demand for refund with an itemised deduction list and a 15-day deadline. If the owner refuses, escalate to the state Rent Authority or Rent Controller, a consumer forum (if a company is involved), or a civil suit for recovery with interest. Keep the rent agreement, deposit receipt, payment proofs, and move-in/move-out photos — courts decide these cases on documents.',
      questionUrl: PAGE_URL,
      answerUrl: PAGE_URL,
      dateCreated: '2026-08-12',
      datePublished: '2026-08-12',
    }),
  ];

  return (
    <>
      <SEO
        title={tSeo('securityDepositGuide.title')}
        description={tSeo('securityDepositGuide.description')}
        keywords="security deposit refund India, landlord not returning security deposit, rent deposit rules, how to recover security deposit from landlord, security deposit deduction rules, Model Tenancy Act security deposit, tenant rights security deposit, security deposit refund timeline, state wise security deposit rules"
        canonical="/landlord-not-returning-security-deposit"
        type="article"
        articlePublishedTime="2026-08-12T00:00:00+05:30"
        articleModifiedTime="2026-08-12T00:00:00+05:30"
        articleSection="Tenant Rights"
        articleTags={['security deposit', 'tenant rights', 'rental laws', 'Model Tenancy Act']}
        structuredData={structuredData}
      />

      <OffCanvas />
      <MobileMenu />

      <main className="body-bg">
        <Header
          headerClass="dark-header has-border"
          headerMenusClass="mx-auto"
          btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
          btnLink="/post-property"
          btnText={t('common:header.postProperty')}
          spanClass="icon-right text-gradient"
          showContactNumber={false}
        />

        <section className="padding-y-120">
          <div className="container container-two">
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><I18nLink to="/">Home</I18nLink></li>
                <li className="breadcrumb-item active" aria-current="page">Security Deposit Refund Guide</li>
              </ol>
            </nav>

            <div className="section-heading text-center mb-5">
              <h1 className="section-heading__title">
                Landlord Not Returning Security Deposit? Complete Legal Guide
              </h1>
              <p className="section-heading__desc">
                What the law says, state-wise rules, central acts, refund timelines, and a
                10-step action plan to get your money back when the owner does not return
                your security deposit.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-8 mx-auto">
                <article>
                  {/* Direct answer — AEO block */}
                  <div className="speakable-summary p-4 rounded-3 bg-white border mb-5">
                    <h2 className="h5 mb-3">
                      <i className="fas fa-bullhorn text-gradient me-2" />
                      Quick Answer: What to Do If the Owner Does Not Return the Deposit
                    </h2>
                    <p className="mb-2">
                      A security deposit is <strong>your money</strong> held by the landlord as
                      security. When the tenancy ends, it must be refunded after deducting only
                      unpaid rent, unpaid bills, and documented damage beyond normal wear and tear.
                    </p>
                    <ol className="mb-0">
                      <li>Send a written demand for refund with an itemised deduction list (15-day deadline).</li>
                      <li>Send a formal legal notice by registered post if the owner refuses.</li>
                      <li>Complain to the Rent Authority / Rent Controller, or file a consumer complaint if a company holds the deposit.</li>
                      <li>File a civil suit for recovery with interest; try Lok Adalat or mediation first.</li>
                    </ol>
                    <p className="mt-3 mb-0 text-muted small">
                      Under the Model Tenancy Act, 2021 the deposit is capped at 2 months&apos;
                      rent (residential) and returned when vacant possession is handed over. Tamil
                      Nadu law requires refund within one month of vacation.
                    </p>
                  </div>

                  {/* Key facts — AEO highlights */}
                  <div className="speakable-highlights p-4 rounded-3 bg-light border mb-5">
                    <h2 className="h5 mb-3">
                      <i className="fas fa-list-check text-gradient me-2" />
                      Key Facts at a Glance
                    </h2>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-white border h-100">
                          <h3 className="h6 mb-1">Deposit cap (Model Tenancy Act, 2021)</h3>
                          <p className="text-muted small mb-0">
                            2 months&apos; rent residential · 6 months&apos; rent commercial. Applies
                            where the state adopts the Act.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-white border h-100">
                          <h3 className="h6 mb-1">Only state with a statutory cap + refund deadline</h3>
                          <p className="text-muted small mb-0">
                            Tamil Nadu: max 3 months&apos; rent, refund within 1 month of vacation
                            (Tenancy Act, 2017, Section 11).
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-white border h-100">
                          <h3 className="h6 mb-1">Legal deductions only</h3>
                          <p className="text-muted small mb-0">
                            Unpaid rent, unpaid bills, tenant-caused damage beyond wear and tear —
                            each backed by documents.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-white border h-100">
                          <h3 className="h6 mb-1">Never deductible</h3>
                          <p className="text-muted small mb-0">
                            Normal wear and tear, repainting after a long tenancy, vague
                            &ldquo;miscellaneous&rdquo; charges, broker compensation.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-white border h-100">
                          <h3 className="h6 mb-1">Refund timeline</h3>
                          <p className="text-muted small mb-0">
                            On handing over possession (MTA framework); 1 month statutory in Tamil
                            Nadu; 15–30 days is the accepted practice elsewhere.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-white border h-100">
                          <h3 className="h6 mb-1">Best evidence</h3>
                          <p className="text-muted small mb-0">
                            Bank transfer with &ldquo;security deposit&rdquo; in the reference, written
                            receipt, move-in/move-out photo inventory, signed handover note.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What the law says */}
                  <h2 className="mb-4">Is the Landlord Legally Allowed to Keep the Security Deposit?</h2>
                  <p>
                    No — not as a general rule. In Indian law a security deposit is an
                    <strong> advance sum paid by the tenant</strong>, held by the landlord as
                    security against unpaid rent, unpaid utility bills, and damage caused by the
                    tenant beyond normal wear and tear. It remains the tenant&apos;s money throughout
                    the tenancy. Once the tenancy ends and the tenant hands over vacant possession,
                    the deposit must be returned, <strong>after deducting only lawful amounts</strong>.
                  </p>
                  <p>
                    A landlord who refuses to refund without a lawful, documented reason is not
                    entitled to keep the money. Even where the landlord claims damage or arrears,
                    the deduction must be genuine, itemised, and backed by receipts or invoices.
                    Courts award interest on deposits wrongfully withheld, which is why the
                    written-demand step matters: it establishes the date from which interest runs.
                  </p>

                  {/* Central laws table */}
                  <h2 className="mb-4">Central Laws, Acts and Regulations That Protect You</h2>
                  <p>
                    Rental housing is a <strong>State subject</strong> under the Seventh Schedule
                    of the Constitution of India, so the day-to-day rules come from state rent
                    control acts. But several central laws and the Model Tenancy Act, 2021 frame
                    your rights at the national level:
                  </p>
                  <div className="table-responsive mb-5">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Law / Act</th>
                          <th>What It Says</th>
                          <th>How It Helps You</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Model Tenancy Act, 2021</strong> (Ministry of Housing &amp; Urban Affairs)</td>
                          <td>
                            Caps security deposit at <strong>2 months&apos; rent (residential)</strong> and{' '}
                            <strong>6 months&apos; rent (non-residential)</strong>; deposit returned at the
                            time of taking over vacant possession; written agreement mandatory;
                            three-tier Rent Authority / Rent Court / Rent Tribunal.
                          </td>
                          <td>
                            The benchmark for fair deposits and refunds. Adopted by several states
                            via their own rules — check if your state has notified them.
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Transfer of Property Act, 1882</strong> (Section 106, 108)</td>
                          <td>
                            Governs termination of tenancy (notice requirements) and the tenant&apos;s
                            duty to maintain the property and hand over possession on expiry.
                          </td>
                          <td>
                            Your handover ends the tenancy lawfully; the landlord&apos;s duty to return
                            the deposit flows from the tenancy relationship it regulates.
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Indian Contract Act, 1872</strong></td>
                          <td>
                            A rent agreement is a contract; refund of the deposit is a contractual
                            obligation enforceable by law.
                          </td>
                          <td>
                            Breach of the refund clause is a breach of contract — the basis of your
                            legal notice and civil suit.
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Consumer Protection Act, 2019</strong></td>
                          <td>
                            Allows complaints for deficiency in service before District / State /
                            National Consumer Commissions.
                          </td>
                          <td>
                            Useful where the deposit is held by a property management company,
                            co-living operator, or broker — complaints up to ₹50 lakh go to the
                            District Commission without a lawyer.
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Code of Civil Procedure, 1908</strong></td>
                          <td>
                            Provides the procedure for money suits for recovery of the deposit with
                            interest and costs.
                          </td>
                          <td>
                            Your civil suit for recovery is filed under it; court fees on small
                            claims are nominal.
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Bharatiya Nyaya Sanhita, 2023</strong> (Sections 316, 318)</td>
                          <td>
                            Criminal breach of trust (Section 316) and cheating (Section 318) —
                            the successor provisions to IPC Sections 405–420.
                          </td>
                          <td>
                            A police remedy exists for dishonest retention, but courts treat deposit
                            disputes as civil — use it only on a lawyer&apos;s advice.
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Legal Services Authorities Act, 1987</strong></td>
                          <td>
                            Establishes Lok Adalats and free legal aid for eligible persons.
                          </td>
                          <td>
                            Lok Adalat is a fast, near-zero-cost settlement forum for deposit
                            disputes; free lawyers are available through the State Legal Services
                            Authority.
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Constitution of India</strong> (Seventh Schedule, State List)</td>
                          <td>
                            Rent control and tenancy regulation is a state subject — each state has
                            its own governing act.
                          </td>
                          <td>
                            Explains why the rules differ by city and why you must check your
                            state&apos;s act before acting.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* State-wise table */}
                  <h2 className="mb-4">State-Wise Security Deposit Rules in India</h2>
                  <p>
                    Except in Tamil Nadu and states that have adopted the Model Tenancy Act
                    framework, most Indian states do <strong>not</strong> cap the deposit by
                    statute. The table below separates <strong>what the law says</strong> from{' '}
                    <strong>what the market practises</strong>, so you know exactly what you can
                    legally insist on.
                  </p>
                  <div className="table-responsive mb-4">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>State / City</th>
                          <th>Governing Law</th>
                          <th>Statutory Deposit Cap</th>
                          <th>Market Practice</th>
                          <th>Refund Forum</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Haryana (Gurugram)</strong></td>
                          <td>Haryana Urban (Control of Rent &amp; Eviction) Act, 1973</td>
                          <td>No cap in the Act. Model Tenancy rules drafted but not yet notified (as of early 2026).</td>
                          <td>1–2 months&apos; rent</td>
                          <td>Civil courts / Rent Controller under the 1973 Act</td>
                        </tr>
                        <tr>
                          <td><strong>Delhi</strong></td>
                          <td>Delhi Rent Act, 1995</td>
                          <td>No deposit cap. Written + registered agreement is mandatory (Section 4); rent receipts mandatory (Section 15).</td>
                          <td>2–3 months&apos; rent</td>
                          <td>Rent Authority and Rent Tribunal under the 1995 Act</td>
                        </tr>
                        <tr>
                          <td><strong>Maharashtra (Mumbai, Pune)</strong></td>
                          <td>Maharashtra Rent Control Act, 1999</td>
                          <td>No statutory cap — Section 56 expressly makes it lawful for landlords to receive deposits and premiums. The &ldquo;3-month cap&rdquo; widely quoted online is not in the Act. Leave &amp; licence agreements are the norm.</td>
                          <td>3–6 months&apos; rent</td>
                          <td>Competent Authority / civil courts under the 1999 Act</td>
                        </tr>
                        <tr>
                          <td><strong>Karnataka (Bengaluru)</strong></td>
                          <td>Karnataka Rent Act, 1999</td>
                          <td>No deposit cap in the Act (the ~10-month figure is practice, not law).</td>
                          <td>~10 months&apos; rent</td>
                          <td>Rent Controller under the 1999 Act</td>
                        </tr>
                        <tr>
                          <td><strong>Tamil Nadu (Chennai)</strong></td>
                          <td>TN Regulation of Rights &amp; Responsibilities of Landlords and Tenants Act, 2017</td>
                          <td><strong>Yes — max 3 months&apos; rent</strong> (unless agreement says otherwise); refund <strong>within 1 month</strong> of vacation (Section 11).</td>
                          <td>~3 months&apos; rent</td>
                          <td>Rent Authority under the 2017 Act</td>
                        </tr>
                        <tr>
                          <td><strong>West Bengal (Kolkata)</strong></td>
                          <td>West Bengal Premises Tenancy Act, 1997</td>
                          <td>No deposit cap in the Act.</td>
                          <td>1–3 months&apos; rent</td>
                          <td>Rent Controller / civil courts</td>
                        </tr>
                        <tr>
                          <td><strong>Uttar Pradesh (Noida, Lucknow)</strong></td>
                          <td>UP Urban Buildings (Regulation of Letting, Rent and Eviction) Act, 1972</td>
                          <td>No deposit cap in the Act. State drafted Model Tenancy rules — adoption status changes; check the state portal.</td>
                          <td>1–3 months&apos; rent</td>
                          <td>Rent Control Officer / civil courts</td>
                        </tr>
                        <tr>
                          <td><strong>Rajasthan</strong></td>
                          <td>Rajasthan Rent Control Act, 2001</td>
                          <td>No specific deposit cap in the Act.</td>
                          <td>2–3 months&apos; rent</td>
                          <td>Rent Tribunal / civil courts</td>
                        </tr>
                        <tr>
                          <td><strong>Gujarat</strong></td>
                          <td>Bombay Rents, Hotel &amp; Lodging House Rates Control Act, 1947 (as applicable in Gujarat)</td>
                          <td>No explicit cap, but rent in advance beyond 3 months for residential premises is deemed an illegal premium (Section 18, Explanation I). Receiving any fine, premium or deposit beyond standard rent is punishable with up to 6 months&apos; imprisonment plus a fine of at least the amount received (Section 18(1)); the tenant can recover it within 6 months or deduct it from rent (Section 18(2)).</td>
                          <td>1–3 months&apos; rent</td>
                          <td>Civil courts / Small Causes Court</td>
                        </tr>
                        <tr>
                          <td><strong>Punjab</strong></td>
                          <td>Punjab Rent Act, 1995</td>
                          <td>No deposit cap in the Act.</td>
                          <td>2–3 months&apos; rent</td>
                          <td>Rent Controller / civil courts</td>
                        </tr>
                        <tr>
                          <td><strong>Telangana &amp; Andhra Pradesh</strong></td>
                          <td>Buildings (Lease, Rent and Eviction) Control Act, 1960</td>
                          <td>No deposit cap in the Act.</td>
                          <td>2–3 months&apos; rent (more if furnished)</td>
                          <td>Rent Controller / civil courts</td>
                        </tr>
                        <tr>
                          <td><strong>Kerala</strong></td>
                          <td>Kerala Building (Lease and Rent Control) Act, 1965</td>
                          <td>No deposit cap in the Act.</td>
                          <td>2–3 months&apos; rent</td>
                          <td>Rent Control Court / civil courts</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="alert alert-warning mb-5">
                    <h3 className="h6 mb-2">Before you rely on any figure</h3>
                    <p className="mb-0">
                      State tenancy laws change frequently — states keep notifying rules under the
                      Model Tenancy Act framework. Verify the current position on your state&apos;s
                      housing/revenue department portal or with a local lawyer before acting. The
                      caps above reflect the statutes as enacted; where no cap exists, demanding a
                      refund of the <em>full deposit</em> (minus lawful deductions) is always your
                      right under general contract and property law.
                    </p>
                  </div>

                  {/* Deductions */}
                  <h2 className="mb-4">What Can the Landlord Deduct — and What They Cannot</h2>
                  <p>
                    Deductions are lawful only if they are genuine, itemised, and documented. If
                    the owner refuses to give you a written deduction statement with receipts, the
                    deduction is almost certainly not lawful.
                  </p>
                  <div className="row g-3 mb-5">
                    <div className="col-md-6">
                      <div className="p-3 rounded-3 bg-white border h-100">
                        <h3 className="h6 mb-2">
                          <i className="fas fa-check-circle text-success me-2" />
                          Lawful deductions
                        </h3>
                        <ul className="small text-muted mb-0 ps-3">
                          <li>Unpaid rent for the final month or notice period</li>
                          <li>Unpaid electricity, water, gas or society maintenance bills</li>
                          <li>Repair of damage caused by you beyond normal wear and tear</li>
                          <li>Cleaning or repainting if the agreement explicitly allows it</li>
                          <li>Replacement of fixtures listed at move-in and missing at move-out</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded-3 bg-white border h-100">
                        <h3 className="h6 mb-2">
                          <i className="fas fa-times-circle text-danger me-2" />
                          Never lawful
                        </h3>
                        <ul className="small text-muted mb-0 ps-3">
                          <li>Normal wear and tear — faded paint, minor scuffs, ageing fixtures</li>
                          <li>Full repainting after a tenancy of 3+ years</li>
                          <li>Repairs the agreement makes the landlord responsible for</li>
                          <li>Society or RWA charges that are the owner&apos;s liability</li>
                          <li>Vague &ldquo;miscellaneous&rdquo;, &ldquo;cleaning&rdquo; or &ldquo;brokerage&rdquo; charges with no breakdown</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Refund timeline */}
                  <h2 className="mb-4">How Long Can the Owner Take to Return the Deposit?</h2>
                  <ul>
                    <li>
                      <strong>Model Tenancy Act framework:</strong> the deposit is returned when the
                      landlord takes over vacant possession.
                    </li>
                    <li>
                      <strong>Tamil Nadu (statutory):</strong> refund within <strong>one month</strong> of
                      vacation, after due deductions (Section 11, Tenancy Act 2017).
                    </li>
                    <li>
                      <strong>Accepted practice elsewhere:</strong> 15–30 days after handover, used to
                      verify final bills and inspect the property.
                    </li>
                    <li>
                      <strong>Your agreement:</strong> if the rent agreement fixes a refund period,
                      that clause governs — cite it in your demand letter.
                    </li>
                  </ul>
                  <p>
                    Delays beyond a reasonable window entitle you to interest: courts commonly
                    award 9–12% per annum from the date of vacation on wrongfully withheld deposits.
                    State it in your notice — it changes the owner&apos;s maths.
                  </p>

                  {/* 10-step action plan */}
                  <h2 className="mb-4">What to Do If the Owner Doesn&apos;t Return the Deposit: 10-Step Action Plan</h2>
                  <p>
                    Work through these steps in order. Most deposits are recovered at step 2 or 3 —
                    the legal steps exist to make the owner take the demand seriously.
                  </p>
                  <div className="mb-5">
                    {howToSteps.map((step, idx) => (
                      <div className="d-flex align-items-start mb-3" key={step.name}>
                        <div
                          className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-main text-white fw-bold me-3"
                          style={{ width: 40, height: 40, fontSize: '0.9rem' }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="h6 mb-1">{step.name}</h3>
                          <p className="text-muted small mb-0">{step.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Legal notice */}
                  <h2 className="mb-4">What Your Legal Notice Must Contain</h2>
                  <p>
                    A legal notice is not a court document — it is a formal demand that puts the
                    owner on notice and creates the paper trail you will need in court. It should
                    include:
                  </p>
                  <ul className="mb-5">
                    <li>Your name, address, and the property address</li>
                    <li>The tenancy period and the rent agreement reference (or its absence)</li>
                    <li>The exact deposit amount, payment date, and payment mode (bank reference)</li>
                    <li>The date you vacated and handed over possession</li>
                    <li>The refund clause from the agreement and the applicable law (e.g., Section 11 of TN Act 2017, or the Model Tenancy Act cap)</li>
                    <li>A demand for the full deposit with an itemised deduction statement, and 15 days to comply</li>
                    <li>Intimation that you will file a suit with <strong>interest at 12–18% per annum</strong> plus costs, and a complaint before the Rent Authority</li>
                    <li>Signature of your lawyer (or your own signature) with date</li>
                  </ul>
                  <p className="mb-5">
                    Send it by registered post with acknowledgement due, and keep a copy with the
                    postal receipt. Many owners refund on receiving a lawyer&apos;s notice because the
                    cost of defending a suit — plus interest — exceeds the deposit.
                  </p>

                  {/* Prevention */}
                  <h2 className="mb-4">How to Protect Your Deposit Before You Even Move In</h2>
                  <p>
                    The strongest protection is documentation created <em>before</em> the dispute
                    starts. Follow this checklist at move-in and move-out:
                  </p>
                  <div className="row g-3 mb-5">
                    <div className="col-md-6">
                      <div className="p-3 rounded-3 bg-white border h-100">
                        <h3 className="h6 mb-2">
                          <i className="fas fa-file-signature text-gradient me-2" />
                          At move-in
                        </h3>
                        <ul className="small text-muted mb-0 ps-3">
                          <li>Sign a written, registered (or at least e-stamped) rent agreement with a clear refund clause</li>
                          <li>Pay the deposit by bank transfer with &ldquo;security deposit&rdquo; in the reference — never cash</li>
                          <li>Take a dated written receipt for the deposit</li>
                          <li>Photograph and video every room, fixture and appliance; note existing damage in writing</li>
                          <li>List every fitting and its condition; sign the inventory with the owner</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded-3 bg-white border h-100">
                        <h3 className="h6 mb-2">
                          <i className="fas fa-camera text-gradient me-2" />
                          At move-out
                        </h3>
                        <ul className="small text-muted mb-0 ps-3">
                          <li>Photograph and video the property again, ideally with the owner present</li>
                          <li>Take final meter readings and clear utility dues in writing</li>
                          <li>Get a signed handover note stating the property&apos;s condition</li>
                          <li>Send the refund demand in writing with the exact amount and date</li>
                          <li>Never accept a verbal &ldquo;I&apos;ll send it next week&rdquo; — get a date in writing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FAQ */}
                  <h2 className="mb-4">Frequently Asked Questions</h2>
                  <div className="accordion mb-5" id="securityDepositFaqAccordion">
                    {faqItems.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div className="accordion-item border-0 border-bottom" key={faq.question}>
                          <h3 className="accordion-header" id={`sdFaqHeading${idx}`}>
                            <button
                              className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={`sdFaqCollapse${idx}`}
                              onClick={() =>
                                setOpenFaqIndex((currentIndex) =>
                                  currentIndex === idx ? -1 : idx
                                )
                              }
                            >
                              {faq.question}
                            </button>
                          </h3>
                          <div
                            id={`sdFaqCollapse${idx}`}
                            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                            aria-labelledby={`sdFaqHeading${idx}`}
                          >
                            <div className="accordion-body text-muted">{faq.answer}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <div className="text-center mb-4">
                    <I18nLink to="/properties" className="btn btn-main me-3">
                      Browse Verified Rental Properties
                    </I18nLink>
                    <I18nLink to="/rent-receipt" className="btn btn-outline-main me-3">
                      Generate a Rent Receipt
                    </I18nLink>
                    <I18nLink to="/contact" className="btn btn-outline-main">
                      Contact 360Ghar
                    </I18nLink>
                  </div>

                  {/* Disclaimer */}
                  <div className="alert alert-info mb-0">
                    <h3 className="h6 mb-2">Disclaimer</h3>
                    <p className="mb-0 small">
                      This page is general information for education, not legal advice. Rental laws
                      in India vary by state and change frequently. Verify the current position in
                      your state with the official authorities or a qualified lawyer before taking
                      any legal step. For state gazette notifications and regulatory updates, see
                      our{' '}
                      <I18nLink to="/regulatory-updates">Regulatory Updates</I18nLink>{' '}
                      page.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <Cta ctaClass="" />

        <Footer />
      </main>
    </>
  );
};

export default SecurityDepositGuide;

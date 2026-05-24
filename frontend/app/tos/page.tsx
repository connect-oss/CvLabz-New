"use client";

import LegalPage from "@/components/layout/LegalPage";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

export default function TermsOfService() {
  const { t, lang } = useLanguage();
  const { getField } = usePageContent("tos");

  const pageTitle = getField("hero", "title", lang) || t("Terms of Service", "Algemene Voorwaarden");
  const effectiveDate = getField("hero", "effectiveDate", lang) || "28 May 2025";
  const cmsBody = getField("content", "body", lang);

  return (
    <LegalPage title={pageTitle} effectiveDate={effectiveDate}>
      {cmsBody ? (
        <div dangerouslySetInnerHTML={{ __html: cmsBody }} />
      ) : (
        <>
          <h2>1. Who We Are</h2>
          <p>KVK-nummer: 95264973</p>
          <p>Email: connect@cvlabz.com</p>
          <p>Website: www.cvlabz.com</p>

          <h2>2. Acceptance of Terms</h2>
          <p>
            By accessing or using CV Labz (&ldquo;the Service&rdquo;), you agree to
            be bound by these Terms of Service (&ldquo;Terms&rdquo;), our Privacy
            Policy, and any other applicable rules. If you do not agree, do not use
            the Service.
          </p>

          <h2>3. Eligibility</h2>
          <p>
            You must be at least 16 years old to use CV Labz. By using our Service,
            you represent that you meet this requirement.
          </p>

          <h2>4. Services Provided</h2>
          <p>
            CV Labz provides digital tools to help job seekers:
          </p>
          <ul>
            <li>Create CVs and online portfolios</li>
            <li>Practice interviews using AI simulations</li>
            <li>Receive feedback and career tips</li>
            <li>Track applications</li>
            <li>Use templates and assessments for job readiness</li>
          </ul>
          <p>
            We reserve the right to modify or discontinue any features without prior
            notice.
          </p>

          <h2>5. Accounts and Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account.
            You agree to provide accurate information and to notify us immediately of
            any unauthorized access.
          </p>

          <h2>6. User Content</h2>
          <p>
            By uploading content (e.g., CVs, videos, answers), you grant CV Labz a
            non-exclusive license to store, display, and use that content solely to
            provide our services to you. You retain full ownership of your content.
          </p>

          <h2>7. AI-Generated Content</h2>
          <p>
            AI tools may generate suggestions, feedback, or content. You understand
            that these outputs are informational and not legally binding advice or
            guaranteed to ensure job offers. You are solely responsible for the use
            of such content.
          </p>

          <h2>8. Subscription &amp; Payments</h2>
          <ul>
            <li>Free and paid plans are available.</li>
            <li>Subscriptions auto-renew monthly unless canceled.</li>
            <li>All fees are non-refundable unless stated otherwise.</li>
            <li>Prices are subject to change with reasonable notice.</li>
          </ul>

          <h2>9. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for illegal purposes</li>
            <li>Attempt to reverse-engineer or scrape the platform</li>
            <li>Upload misleading, discriminatory, or harmful content</li>
            <li>
              Use generated content in violation of any laws or third-party rights
            </li>
          </ul>

          <h2>10. Intellectual Property</h2>
          <p>
            All content and code on CV Labz is owned by or licensed to us. You may
            not copy, modify, or distribute our materials without permission.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate your account for violations of these Terms,
            with or without notice. You may delete your account at any time.
          </p>

          <h2>12. Disclaimers</h2>
          <p>
            The Service is provided &ldquo;as is.&rdquo; We do not guarantee:
          </p>
          <ul>
            <li>That you&rsquo;ll get hired</li>
            <li>The accuracy of AI outputs</li>
            <li>That the site will be uninterrupted or error-free</li>
          </ul>

          <h2>13. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, CV Labz shall not be liable for
            any indirect, incidental, or consequential damages, including loss of job
            opportunities.
          </p>

          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by the laws of The Netherlands. Disputes shall
            be resolved exclusively in Dutch courts.
          </p>

          <h2>15. Changes to Terms</h2>
          <p>
            We may update these Terms periodically. Continued use of the Service
            after changes constitutes acceptance.
          </p>

          <h2>16. Contact</h2>
          <p>For questions or legal concerns: connect@cvlabz.com</p>

          <h2>17. Enterprise Use</h2>
          <p>
            For enterprise clients (e.g., universities, bootcamps, or companies
            using CV Labz for multiple users), a separate Enterprise Agreement may
            apply. These Terms apply unless explicitly overridden in a signed
            agreement. Enterprise users are responsible for:
          </p>
          <ul>
            <li>Ensuring end users are informed of these Terms</li>
            <li>
              Compliance with data privacy regulations applicable in their
              jurisdiction
            </li>
            <li>
              Avoiding unauthorized redistribution or resale of CV Labz
              content/tools
            </li>
          </ul>

          <h2>18. Payment Provider (Stripe)</h2>
          <p>
            We use Stripe as our secure payment processor. Stripe handles:
          </p>
          <ul>
            <li>Credit card payments</li>
            <li>Subscription billing</li>
            <li>Payment authentication and compliance</li>
          </ul>
          <p>
            We do not store your payment details. By purchasing a subscription, you
            also agree to Stripe&rsquo;s Services Agreement and Privacy Policy.
          </p>

          <h2>19. Data Processing and GDPR</h2>
          <p>
            CV Labz processes personal data in accordance with the General Data
            Protection Regulation (GDPR). We only collect and process personal data
            necessary to provide our services, including:
          </p>
          <ul>
            <li>User-generated CVs, assessments, and interview data</li>
            <li>Login and contact details</li>
            <li>Behavioral data (e.g., feature usage for improvement)</li>
          </ul>
          <p>Users have the right to:</p>
          <ul>
            <li>Access their data</li>
            <li>Correct or delete their data</li>
            <li>Withdraw consent</li>
            <li>
              Request a full data export or account deletion via connect@cvlabz.com
            </li>
          </ul>
          <p>
            We act as a Data Controller for most user data, and as a Data Processor
            when organizations onboard candidates under a managed contract.
          </p>
          <p>
            All data is stored in secure, GDPR-compliant cloud infrastructure within
            the EU.
          </p>

          <h2>20. Use of AI</h2>
          <p>CV Labz integrates AI features to assist users with:</p>
          <ul>
            <li>Resume feedback</li>
            <li>Motivation letter generation</li>
            <li>Interview simulation &amp; feedback</li>
            <li>Job matching suggestions</li>
          </ul>
          <p>AI output is:</p>
          <ul>
            <li>Based on your inputs (CV, answers, preferences)</li>
            <li>Not legally or professionally binding advice</li>
            <li>Intended to assist, not replace, human judgment</li>
          </ul>
          <p>By using these features, you acknowledge:</p>
          <ul>
            <li>
              That generated content may not be perfect or suitable for all use cases
            </li>
            <li>
              That you remain responsible for reviewing and editing AI-generated
              content before use
            </li>
          </ul>
          <p>
            We use models from providers such as OpenAI and/or other large language
            models. These providers may process your inputs transiently for model
            inference. We do not allow any training or long-term storage of your data
            by these third parties.
          </p>

          <h2>21. TikTok Agent &amp; Developer Terms</h2>
          <p>
            By using TikTok-related features (e.g. Login Kit, Share Kit, Content
            Posting API), you agree to:
          </p>
          <ul>
            <li>
              Your content and usage must comply with the TikTok Developer Terms and
              Business Products (Data) Terms.
            </li>
            <li>
              You will not imply endorsement or affiliation with TikTok, and follow
              all TikTok Brand Guidelines.
            </li>
            <li>
              TikTok may audit your use at any time, and you will support requests
              per &sect;II.4 of the Developer Terms.
            </li>
            <li>
              You recognise that TikTok Information is licensed, not transferred, per
              TikTok&rsquo;s terms.
            </li>
            <li>
              You must immediately disconnect TikTok APIs in case of any system
              breach or security deficit.
            </li>
          </ul>

          <h2>22. AI-Content Disclosure Rules</h2>
          <p>
            When AI-generated or AI-edited content is posted to TikTok (video,
            audio, or image), you must ensure users:
          </p>
          <ul>
            <li>
              Apply TikTok&rsquo;s &ldquo;creator labeled as AI-generated&rdquo;
              tag/sticker or use equivalent disclosure.
            </li>
            <li>
              Do not remove TikTok watermarks or mislead viewers about content
              origin.
            </li>
            <li>Review and approve all AI outputs before publishing to TikTok.</li>
          </ul>
        </>
      )}
    </LegalPage>
  );
}

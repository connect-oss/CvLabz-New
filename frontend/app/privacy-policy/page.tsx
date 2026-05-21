import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how CV Labz collects, uses, and protects your personal data. GDPR-compliant privacy practices for our CV builder and career tools.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="28 May 2025">
      <p>
        Your privacy is important to us. This policy explains what data we
        collect, why, and how we protect it.
      </p>

      <h2>1. Who We Are</h2>
      <p>KVK-nummer: 95264973</p>
      <p>E-mailadres: connect@cvlabz.com</p>
      <p>Website: www.cvlabz.com</p>

      <h2>2. Data We Process</h2>
      <p>We collect and process the following types of personal data:</p>
      <ul>
        <li>Name and contact information</li>
        <li>Email address</li>
        <li>CV content and uploaded documents</li>
        <li>Assessment results and scores</li>
        <li>Platform usage and activity data</li>
        <li>IP address and browser information</li>
        <li>Payment information (processed via Stripe)</li>
      </ul>

      <h2>3. Purposes of Processing</h2>
      <ul>
        <li>To create and manage your profile</li>
        <li>To provide assessment and career tools</li>
        <li>To provide personalized recommendations</li>
        <li>To improve our services</li>
        <li>To process payments</li>
        <li>To communicate updates and information</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>4. Legal Basis (GDPR)</h2>
      <ul>
        <li>Performance of a contract</li>
        <li>Your consent</li>
        <li>Legitimate interests</li>
        <li>Legal obligation</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain your data for as long as your account is active or as needed
        to provide services. You may request deletion at any time by contacting
        connect@cvlabz.com.
      </p>

      <h2>6. Sharing Your Data</h2>
      <p>We do not sell your data. We only share data with:</p>
      <ul>
        <li>Service providers (e.g., Stripe for payments)</li>
        <li>AI providers (for anonymized processing)</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h2>7. Your Rights</h2>
      <ul>
        <li>Right to access your data</li>
        <li>Right to correct inaccurate data</li>
        <li>Right to request deletion</li>
        <li>Right to object to processing</li>
        <li>Right to data portability</li>
      </ul>
      <p>To exercise your rights, contact us at connect@cvlabz.com.</p>

      <h2>8. Security</h2>
      <p>
        We implement industry-standard security measures including encryption,
        secure servers, and regular security audits to protect your data.
      </p>

      <h2>9. Complaints</h2>
      <p>
        If you have concerns about our data practices, you can file a complaint
        with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).
      </p>
    </LegalPage>
  );
}

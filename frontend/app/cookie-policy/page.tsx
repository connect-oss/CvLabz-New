import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about the cookies CV Labz uses, including functional, analytical, and marketing cookies, and how to manage your preferences.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy">
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device to help the website
        provide a better user experience. They are widely used to remember your
        preferences, track your activity, and personalize content.
      </p>

      <h2>Types of Cookies We Use</h2>

      <h3>Functional Cookies</h3>
      <p>
        Essential for the website to function properly. These cookies enable core
        functionalities like security, session management, and accessibility.
      </p>

      <h3>Analytical Cookies</h3>
      <p>
        Help us understand how visitors interact with our website. We use this
        data to improve performance and content.
      </p>

      <h3>Marketing Cookies</h3>
      <p>
        Used to track visitors across websites. The intention is to display ads
        that are relevant and engaging for the individual user.
      </p>

      <h2>Managing Your Cookie Preferences</h2>
      <p>
        You can manage your cookie preferences at any time. Disabling some
        cookies may affect your experience on our website.
      </p>

      <h2>Questions About Cookies?</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at
        connect@cvlabz.com.
      </p>
    </LegalPage>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, ArrowRight, Loader2, KeyRound } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { api } from "@/lib/api";
import { useLanguage } from "@/lib/language";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [step, setStep] = useState<"email" | "reset">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api("/api/v1/auth/forgot-password", {
        method: "POST",
        body: { email },
      });
      setStep("reset");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleResetSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api("/api/v1/auth/reset-password", {
        method: "POST",
        body: { email, otp, newPassword },
      });
      router.push("/login?reset=true");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Icon & Title */}
          <div className="text-center mb-8">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
              <KeyRound className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900">
              {step === "email" ? t("Forgot your password?", "Wachtwoord vergeten?") : t("Reset your password", "Wachtwoord resetten")}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              {step === "email"
                ? t("Enter your email and we'll send you a reset code.", "Voer je e-mailadres in en we sturen je een resetcode.")
                : t("Enter the 6-digit code sent to your email and your new password.", "Voer de 6-cijferige code in die naar je e-mail is gestuurd en je nieuwe wachtwoord.")}
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-medium">
              {error}
            </div>
          )}

          {step === "email" ? (
            <form onSubmit={handleEmailSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">
                  {t("Email address", "E-mailadres")}
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-extrabold text-base hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    {t("Send reset code", "Verstuur resetcode")}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleResetSubmit} className="space-y-5">
              <div>
                <label htmlFor="otp" className="block text-sm font-bold text-gray-700 mb-1.5">
                  {t("Reset code", "Resetcode")}
                </label>
                <input
                  id="otp"
                  type="text"
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder={t("Enter 6-digit code", "Voer 6-cijferige code in")}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center text-lg tracking-[0.3em]"
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-bold text-gray-700 mb-1.5">
                  {t("New password", "Nieuw wachtwoord")}
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder={t("Enter new password", "Voer nieuw wachtwoord in")}
                    className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-12 py-3 text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-extrabold text-base hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    {t("Reset password", "Wachtwoord resetten")}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => { setStep("email"); setError(""); setOtp(""); setNewPassword(""); }}
                className="w-full text-sm text-gray-500 font-medium hover:text-gray-700 transition-colors"
              >
                {t("Didn't receive a code? Try again", "Geen code ontvangen? Probeer opnieuw")}
              </button>
            </form>
          )}

          {/* Back to login */}
          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("Back to login", "Terug naar inloggen")}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

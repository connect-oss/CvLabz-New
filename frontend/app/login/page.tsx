"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Check, Loader2 } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { api, getGoogleAuthUrl } from "@/lib/api";
import { useLanguage } from "@/lib/language";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Google OAuth redirect
  useEffect(() => {
    const success = searchParams.get("success");
    const errorParam = searchParams.get("error");
    if (success === "true") {
      router.push("/");
    }
    if (errorParam) {
      setError("Google login failed. Please try again.");
    }
  }, [searchParams, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignUp) {
        await api("/api/v1/auth/register", {
          method: "POST",
          body: { name, email, password },
        });
      } else {
        await api("/api/v1/auth/login", {
          method: "POST",
          body: { email, password },
        });
      }
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function handleGoogleLogin() {
    window.location.href = getGoogleAuthUrl();
  }

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <div className="flex-1 flex">
        {/* Left panel — branding */}
        <div className="hidden lg:flex lg:w-[45%] relative bg-gray-900 flex-col justify-center gap-10 p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
          </div>

          <div className="relative z-10 space-y-8">
            <div>
              <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                {t("Build the CV that", "Bouw het CV dat")}
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t("gets you hired.", "je aan een baan helpt.")}
                </span>
              </h1>
              <p className="text-gray-400 font-medium text-lg max-w-md leading-relaxed">
                {t(
                  "Join thousands of professionals using AI-powered tools to land their dream job.",
                  "Sluit je aan bij duizenden professionals die AI-tools gebruiken om hun droombaan te vinden."
                )}
              </p>
            </div>

            <div className="space-y-4">
              {[
                t("AI-powered CV builder & scorer", "AI-aangedreven CV-bouwer & scorer"),
                t("LinkedIn profile analyzer", "LinkedIn-profiel analyzer"),
                t("Job match scoring in seconds", "Baanmatch-score in seconden"),
                t("ATS-friendly templates", "ATS-vriendelijke sjablonen"),
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check size={13} className="text-emerald-400" strokeWidth={3} />
                  </div>
                  <span className="text-gray-300 font-medium text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              &ldquo;{t(
                "I went from zero callbacks to 4 interviews in two weeks. The AI feedback was a game-changer.",
                "Ik ging van nul reacties naar 4 sollicitatiegesprekken in twee weken. De AI-feedback was een doorbraak."
              )}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                SM
              </div>
              <div>
                <p className="text-white text-xs font-bold">Sarah M.</p>
                <p className="text-gray-500 text-xs">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md"
          >
            {/* Toggle */}
            <div className="flex items-center bg-white rounded-xl p-1 border border-gray-200 mb-8 shadow-sm">
              <button
                onClick={() => { setIsSignUp(false); setError(""); }}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                  !isSignUp
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {t("Sign in", "Inloggen")}
              </button>
              <button
                onClick={() => { setIsSignUp(true); setError(""); }}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                  isSignUp
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {t("Create account", "Account aanmaken")}
              </button>
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              {isSignUp ? t("Create your account", "Maak je account aan") : t("Welcome back", "Welkom terug")}
            </h2>
            <p className="text-gray-500 font-medium mb-8">
              {isSignUp
                ? t("Start building your career with CV Labz.", "Begin je carri\u00e8re met CV Labz.")
                : t("Sign in to continue to your dashboard.", "Log in om naar je dashboard te gaan.")}
            </p>

            {/* Error message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-medium">
                {error}
              </div>
            )}

            {/* Google login */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl py-3 font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm mb-4"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>{t("Continue with Google", "Doorgaan met Google")}</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("or", "of")}</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {isSignUp && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    {t("Full name", "Volledige naam")}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  {t("Email address", "E-mailadres")}
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-bold text-gray-700">
                    {t("Password", "Wachtwoord")}
                  </label>
                  {!isSignUp && (
                    <a href="/forgot-password" className="text-xs font-bold text-blue-600 hover:text-blue-700">
                      {t("Forgot password?", "Wachtwoord vergeten?")}
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("Enter your password", "Voer je wachtwoord in")}
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
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-extrabold text-base hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    {isSignUp ? t("Create account", "Account aanmaken") : t("Sign in", "Inloggen")}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Terms */}
            {isSignUp && (
              <p className="text-xs text-gray-400 font-medium mt-4 text-center leading-relaxed">
                {t("By creating an account, you agree to our", "Door een account aan te maken ga je akkoord met onze")}{" "}
                <Link href="/tos" className="text-blue-600 hover:underline">{t("Terms of Service", "Algemene Voorwaarden")}</Link>{" "}
                {t("and", "en")}{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">{t("Privacy Policy", "Privacybeleid")}</Link>.
              </p>
            )}

            {/* Bottom switch */}
            <p className="text-sm text-gray-500 font-medium text-center mt-8">
              {isSignUp ? t("Already have an account?", "Heb je al een account?") : t("Don\u2019t have an account?", "Heb je nog geen account?")}{" "}
              <button
                onClick={() => { setIsSignUp(!isSignUp); setError(""); }}
                className="text-blue-600 font-bold hover:underline"
              >
                {isSignUp ? t("Sign in", "Inloggen") : t("Create one", "Maak er een")}
              </button>
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

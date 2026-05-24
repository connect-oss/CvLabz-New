"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

export default function AboutPage() {
  const { lang } = useLanguage();
  const { getField, getItems } = usePageContent("about");

  const values = getItems("values", lang);
  const defaultValues = [
    {
      title: "Genuine Care",
      description:
        "We are genuinely invested in each person\u2019s success. Every tool we build, every piece of guidance we provide, stems from our sincere commitment to helping people achieve their career goals.",
    },
    {
      title: "Comprehensive Preparation",
      description:
        "We believe thorough preparation is the key to success. Our platform ensures candidates are ready for every aspect of their job search journey. From crafting compelling applications to acing interviews.",
    },
    {
      title: "Accessibility",
      description:
        "Career success shouldn\u2019t be reserved for those who can afford expensive career coaches. We make professional-grade career tools and guidance accessible to everyone.",
    },
    {
      title: "Continuous Growth",
      description:
        "The job market evolves, and so do we. We continuously enhance our platform to meet the changing needs of job seekers and employers.",
    },
  ];
  const valuesList = values.length > 0 ? values : defaultValues;

  const gradients = [
    "from-blue-50 to-purple-50",
    "from-purple-50 to-pink-50",
    "from-pink-50 to-red-50",
    "from-red-50 to-orange-50",
  ];

  const whatThisMeansItems = getItems("whatThisMeans", lang);
  const defaultWhatThisMeans = [
    {
      title: "Before Your Interview:",
      description:
        "We help you prepare thoroughly by polishing your CV, practicing your pitch, researching salary expectations and building confidence through our business case trainer.",
    },
    {
      title: "During Your Journey:",
      description:
        "Our AI career coach provides personalized guidance tailored to your specific situation, industry and goals.",
    },
    {
      title: "Beyond the Hire:",
      description:
        "We\u2019re committed to your long-term career success, not just landing your next job.",
    },
  ];
  const whatThisMeansList =
    whatThisMeansItems.length > 0 ? whatThisMeansItems : defaultWhatThisMeans;

  const promiseItems = getItems("promise", lang);
  const defaultPromiseItems = [
    "Feel confident and well-prepared for their interviews",
    "Have professional-quality application materials",
    "Understand their market value and negotiation position",
    "Receive personalized guidance that respects their unique career journey",
    "Get the maximum return on their time and effort invested in job searching",
  ];
  const promiseList =
    promiseItems.length > 0
      ? promiseItems.map((item) => item.text || item.title || "")
      : defaultPromiseItems;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden pt-20">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight mt-2 md:mt-3 font-extrabold">
            <span className="text-black">
              {getField("hero", "title", lang) || "About "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {getField("hero", "titleHighlight", lang) || "CV Labz"}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            {getField("hero", "subtitle", lang) ||
              "Built by Recruiters, For Job Seekers"}
          </p>
        </div>

        {/* Content card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <p className="text-gray-600 leading-relaxed mb-8">
            {getField("intro", "content", lang) ||
              "CV Labz was founded and built by experienced recruiters who have seen firsthand what separates successful candidates from the rest. We\u2019ve been on the other side of the table, reviewing thousands of CVs, conducting countless interviews, and understanding exactly what employers are looking for."}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {getField("intro", "content2", lang) ||
              "This inside knowledge drives everything we do."}
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {getField("mission", "title", lang) || "Our Mission"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {getField("mission", "content", lang) ||
              "Empowering every job seeker to unlock their full potential and achieve career success through comprehensive preparation, personalized guidance, and innovative tools."}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {getField("mission", "content2", lang) ||
              "We exist to bridge the gap between talent and opportunity. We believe that with the right preparation, tools, and support, every candidate can present their best self and secure the career they deserve."}
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {getField("vision", "title", lang) || "Our Vision"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {getField("vision", "content", lang) ||
              "To be the most trusted career partner that transforms how people approach job searching. Turning anxiety into confidence, uncertainty into clarity, and potential into success."}
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {getField("values", "title", lang) || "Our Core Values"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {valuesList.map((value, idx) => (
              <div
                key={value.title}
                className={`bg-gradient-to-br ${gradients[idx % gradients.length]} p-6 rounded-xl`}
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {getField("whatThisMeans", "title", lang) ||
              "What This Means for You"}
          </h2>
          <div className="space-y-4 mb-8">
            {whatThisMeansList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0" />
                <p className="text-gray-600 leading-relaxed">
                  <strong>{item.title}</strong> {item.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {getField("promise", "title", lang) || "Our Promise"}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {getField("promise", "intro", lang) ||
              "Every candidate who uses CV Labz will:"}
          </p>
          <div className="space-y-3 mb-8">
            {promiseList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed">
            {getField("promise", "closing", lang) ||
              "We\u2019re not just a platform, we\u2019re your dedicated career partner, genuinely committed to seeing you succeed."}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

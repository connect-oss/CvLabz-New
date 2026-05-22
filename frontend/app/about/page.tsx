import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden pt-20">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight mt-2 md:mt-3 font-extrabold">
            <span className="text-black">About </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CV Labz
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Built by Recruiters, For Job Seekers
          </p>
        </div>

        {/* Content card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <p className="text-gray-600 leading-relaxed mb-8">
            CV Labz was founded and built by experienced recruiters who have seen
            firsthand what separates successful candidates from the rest.
            We&apos;ve been on the other side of the table, reviewing thousands
            of CVs, conducting countless interviews, and understanding exactly
            what employers are looking for.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            This inside knowledge drives everything we do.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Empowering every job seeker to unlock their full potential and
            achieve career success through comprehensive preparation,
            personalized guidance, and innovative tools.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We exist to bridge the gap between talent and opportunity. We believe
            that with the right preparation, tools, and support, every candidate
            can present their best self and secure the career they deserve.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            To be the most trusted career partner that transforms how people
            approach job searching. Turning anxiety into confidence, uncertainty
            into clarity, and potential into success.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Genuine Care
              </h3>
              <p className="text-gray-600">
                We are genuinely invested in each person&apos;s success. Every
                tool we build, every piece of guidance we provide, stems from our
                sincere commitment to helping people achieve their career goals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Comprehensive Preparation
              </h3>
              <p className="text-gray-600">
                We believe thorough preparation is the key to success. Our
                platform ensures candidates are ready for every aspect of their
                job search journey. From crafting compelling applications to
                acing interviews.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Accessibility
              </h3>
              <p className="text-gray-600">
                Career success shouldn&apos;t be reserved for those who can
                afford expensive career coaches. We make professional-grade
                career tools and guidance accessible to everyone.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Continuous Growth
              </h3>
              <p className="text-gray-600">
                The job market evolves, and so do we. We continuously enhance our
                platform to meet the changing needs of job seekers and employers.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            What This Means for You
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0" />
              <p className="text-gray-600 leading-relaxed">
                <strong>Before Your Interview:</strong> We help you prepare
                thoroughly by polishing your CV, practicing your pitch,
                researching salary expectations and building confidence through
                our business case trainer.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0" />
              <p className="text-gray-600 leading-relaxed">
                <strong>During Your Journey:</strong> Our AI career coach
                provides personalized guidance tailored to your specific
                situation, industry and goals.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0" />
              <p className="text-gray-600 leading-relaxed">
                <strong>Beyond the Hire:</strong> We&apos;re committed to your
                long-term career success, not just landing your next job.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Our Promise
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every candidate who uses CV Labz will:
          </p>
          <div className="space-y-3 mb-8">
            {[
              "Feel confident and well-prepared for their interviews",
              "Have professional-quality application materials",
              "Understand their market value and negotiation position",
              "Receive personalized guidance that respects their unique career journey",
              "Get the maximum return on their time and effort invested in job searching",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed">
            We&apos;re not just a platform, we&apos;re your dedicated career
            partner, genuinely committed to seeing you succeed.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

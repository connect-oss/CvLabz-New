import { COMPANY_LOGOS } from "@/data/constants-data";

export default function LogoBar() {
  return (
    <section className="py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        <span className="text-sm font-black text-gray-300 uppercase tracking-widest">Our users got hired at:</span>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {COMPANY_LOGOS.map(logo => <span key={logo.name} className={`${logo.color} text-2xl font-black opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer`}>
            {logo.name}
          </span>)}
        </div>
      </div>
    </section>
  );
}

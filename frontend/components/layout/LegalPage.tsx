import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          {title}
        </h1>
        {effectiveDate && (
          <p className="text-sm font-bold text-gray-400 mb-12">
            Effective Date: {effectiveDate}
          </p>
        )}
        <div className="prose prose-gray max-w-none [&>h2]:text-xl [&>h2]:font-extrabold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-gray-800 [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:text-gray-600 [&>ul]:mb-4 [&>ul]:pl-5 [&>ul>li]:mb-1.5 [&>ol]:text-gray-600 [&>ol]:mb-4 [&>ol]:pl-5 [&>ol>li]:mb-1.5 [&>hr]:my-8 [&>hr]:border-gray-100">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

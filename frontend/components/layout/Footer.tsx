import { Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Newsletter CTA band — sits above the footer */}
      <section className="bg-gray-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-2xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-md">
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Stay in the loop
              </h3>
              <p className="text-gray-400 font-medium">
                Get weekly career tips, CV advice, and product updates. No spam.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:flex-1 md:w-72 bg-white/10 border border-white/10 rounded-xl px-5 py-3.5 text-white font-bold placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-black transition-colors flex items-center justify-center gap-2 shrink-0">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main grid: brand left + 3 link columns right */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.5fr,1fr,1fr,1fr] gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden shadow-sm">
                  <div className="w-4.5 h-4.5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <div className="absolute bottom-0.5 w-5 h-2.5 border-2 border-white rounded-t-full border-b-0" />
                </div>
                <span className="text-xl font-black">CV Labz</span>
              </div>
              <p className="text-gray-400 font-medium leading-relaxed max-w-xs text-sm">
                The all-in-one platform that helps you build your CV, get more
                interviews, and land your dream job.
              </p>
            </div>

            {/* Tools */}
            <div>
              <h5 className="font-black text-xs uppercase tracking-widest text-blue-400 mb-6">
                Tools
              </h5>
              <ul className="space-y-3 text-sm font-bold text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CV Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CV Matcher
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cover Letter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn Analyzer
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-black text-xs uppercase tracking-widest text-blue-400 mb-6">
                Company
              </h5>
              <ul className="space-y-3 text-sm font-bold text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h5 className="font-black text-xs uppercase tracking-widest text-blue-400 mb-6">
                Resources
              </h5>
              <ul className="space-y-3 text-sm font-bold text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Learning Hub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar: copyright, socials, legal */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
            <p className="text-sm font-bold text-gray-500">
              &copy; 2025 CV Labz. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-6 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* =============================================================================
 * ORIGINAL FOOTER — uncomment this and delete everything above to rollback
 * =============================================================================
 *
 * import { Linkedin, Instagram, Youtube } from "lucide-react";
 *
 * export default function Footer() {
 *   return (
 *     <footer className="pt-28 pb-12 bg-gray-900 text-white">
 *       <div className="max-w-7xl mx-auto px-4">
 *         <div className="grid md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1fr,2fr] gap-12 mb-24">
 *           <div className="space-y-8">
 *             <div className="flex items-center gap-2">
 *               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
 *               <span className="text-2xl font-black">CV Labz</span>
 *             </div>
 *             <p className="text-gray-400 font-bold leading-relaxed max-w-xs">
 *               The all-in-one platform that helps you build your CV, get more interviews, and land your dream job.
 *             </p>
 *             <div className="flex items-center gap-4">
 *               {[Linkedin, Instagram, Youtube].map((Icon, i) => <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
 *                 <Icon size={18} />
 *               </a>)}
 *             </div>
 *           </div>
 *           <div>
 *             <h5 className="font-black text-sm uppercase tracking-widest text-blue-400 mb-8">Tools</h5>
 *             <ul className="space-y-4 font-bold text-gray-400">
 *               <li><a href="#" className="hover:text-white transition-colors">CV Builder</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">CV Matcher</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">Cover Letter</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">LinkedIn Analyzer</a></li>
 *             </ul>
 *           </div>
 *           <div>
 *             <h5 className="font-black text-sm uppercase tracking-widest text-blue-400 mb-8">Company</h5>
 *             <ul className="space-y-4 font-bold text-gray-400">
 *               <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
 *             </ul>
 *           </div>
 *           <div>
 *             <h5 className="font-black text-sm uppercase tracking-widest text-blue-400 mb-8">Resources</h5>
 *             <ul className="space-y-4 font-bold text-gray-400">
 *               <li><a href="#" className="hover:text-white transition-colors">Learning Hub</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
 *               <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
 *             </ul>
 *           </div>
 *           <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10">
 *             <h5 className="font-black text-sm uppercase tracking-widest text-blue-400 mb-4">Stay in the loop</h5>
 *             <p className="text-gray-400 font-bold text-sm mb-6">Get career tips and updates.</p>
 *             <div className="space-y-4">
 *               <input type="email" placeholder="Your email" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
 *               <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-colors">
 *                 Subscribe
 *               </button>
 *             </div>
 *           </div>
 *         </div>
 *         <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-6">
 *           <p className="text-sm font-bold text-gray-500">&copy; 2025 CV Labz. All rights reserved.</p>
 *           <div className="flex items-center gap-8 text-sm font-bold text-gray-500">
 *             <a href="#" className="hover:text-white">Privacy Policy</a>
 *             <a href="#" className="hover:text-white">Cookies</a>
 *           </div>
 *         </div>
 *       </div>
 *     </footer>
 *   );
 * }
 */

import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

/* LINE icon – official logo simplified to a single SVG path */
function LineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 5.83 2 10.5c0 4.07 3.53 7.48 8.3 8.33.32.07.76.22.87.5.1.25.07.65.03.91l-.14.85c-.04.25-.2.97.85.53s5.65-3.33 7.71-5.7C21.53 13.78 22 12.2 22 10.5 22 5.83 17.52 2 12 2zm-3.38 11.03H6.58a.6.6 0 01-.6-.6V8.6a.6.6 0 011.2 0v3.23h1.44a.6.6 0 010 1.2zm1.86-.6a.6.6 0 01-1.2 0V8.6a.6.6 0 011.2 0v3.83zm4.24 0a.6.6 0 01-.48.59.6.6 0 01-.65-.28l-2.04-2.78v2.47a.6.6 0 01-1.2 0V8.6a.6.6 0 01.48-.59.6.6 0 01.65.28l2.04 2.78V8.6a.6.6 0 011.2 0v3.83zm3.28-2.63a.6.6 0 010 1.2H16.56v1.03H18a.6.6 0 010 1.2h-2.04a.6.6 0 01-.6-.6V8.6a.6.6 0 01.6-.6H18a.6.6 0 010 1.2h-1.44v1.0H18a.6.6 0 010 1.2z" />
    </svg>
  );
}

/* TikTok icon */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.41a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.84z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const serviceList = t("footer.serviceList", { returnObjects: true }) as string[];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="/logo.png" 
                alt="ColaSola Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("footer.brandDesc")}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/1CXofwPmAn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-[#1877F2] transition-colors group" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://line.me/ti/p/~cola-sola" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-[#06C755] transition-colors group" aria-label="LINE">
                <LineIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://www.tiktok.com/@colasola6" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-[#ff0050] transition-colors group" aria-label="TikTok">
                <TikTokIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm hover:text-cola-blue transition-colors">{t("nav.home")}</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-cola-blue transition-colors">{t("nav.about")}</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-cola-blue transition-colors">{t("nav.services")}</Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-cola-blue transition-colors">{t("nav.projects")}</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm hover:text-cola-blue transition-colors">{t("nav.pricing")}</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-cola-blue transition-colors">{t("nav.careers")}</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">{t("footer.coreServices")}</h3>
            <ul className="space-y-4">
              {serviceList.map((item) => (
                <li key={item} className="text-sm text-gray-400">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">{t("footer.contact")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cola-blue shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  {t("footer.chiangMaiHq")}<br />
                  169 Moo 5, Nong Hoi, Mueang Chiang Mai
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cola-blue shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  {t("footer.pattayaBranch")}<br />
                  Pattaya, Chon Buri
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cola-blue shrink-0" />
                <span className="text-sm">+66 6 2345 8238</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cola-blue shrink-0" />
                <span className="text-sm">hi@colasola.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} ColaSola. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

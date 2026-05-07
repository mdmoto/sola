import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

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
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cola-blue transition-colors group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cola-blue transition-colors group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cola-blue transition-colors group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
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
                  83 2 Suriyawong 5 Rd, Tambon Hai Y, Chiang Mai
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

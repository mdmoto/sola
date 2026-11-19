import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const languages = [
  { code: 'th', name: 'ไทย' },
  { code: 'en', name: 'EN' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.pricing"), path: "/pricing" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setLangMenuOpen(false);
  }, [location.pathname]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem("lng", lng);
    } catch {
      // ignore
    }
    setLangMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo and Ecosystem Back-Link */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="ColaSola Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:block h-6 w-px bg-gray-200" />

          {/* Direct jump back to Chiang Mai AI Center / lazzor.com */}
          <a
            href="https://lazzor.com"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-cola-blue bg-gray-50 hover:bg-gray-100/90 px-3 py-1.5 rounded-full border border-gray-200 transition-all shadow-2xs group/back"
            title="Chiang Mai AI Center (lazzor.com)"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t("nav.backToCmai")}</span>
            <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover/back:text-cola-blue transition-colors" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-cola-blue relative py-2",
                location.pathname === link.path
                  ? "text-cola-blue"
                  : "text-gray-600"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cola-blue rounded-full"
                  transition={{ type: "spring", bounce: 0.25, stiffness: 130, damping: 9, duration: 0.3 }}
                />
              )}
            </Link>
          ))}

          {/* Cross-ecosystem link to AI Center */}
          <a
            href="https://lazzor.com"
            className="hidden xl:inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-cola-blue transition-colors py-2"
          >
            <span>{t("nav.cmaiHome")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>
          
          {/* Language Switcher Desktop */}
          <div className="relative ml-2">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-cola-blue transition-colors px-2 py-2"
            >
              <Globe className="w-4 h-4" />
              {languages.find(l => l.code === i18n.language)?.name || 'ไทย'}
            </button>
            
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden py-2"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm transition-colors",
                        i18n.language === lang.code
                          ? "bg-cola-blue/5 text-cola-blue font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="ml-2 bg-cola-blue hover:bg-cola-blue-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-cola-blue/20 active:scale-95"
          >
            {t("nav.getQuote")}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-cola-blue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-3">
              {/* Parent Ecosystem Banner in Mobile Drawer */}
              <div className="p-3.5 bg-gray-50/90 rounded-2xl border border-gray-200/80 mb-1">
                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {t("nav.ecosystemTitle")}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">lazzor.com</span>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  <a
                    href="https://lazzor.com"
                    className="flex items-center justify-between px-3 py-2 text-xs font-medium text-gray-800 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 hover:text-cola-blue transition-colors shadow-2xs"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">🏛️</span>
                      <span>{t("nav.cmaiHome")}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                  <a
                    href="https://lazzor.com/workspace"
                    className="flex items-center justify-between px-3 py-2 text-xs font-medium text-gray-800 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 hover:text-cola-blue transition-colors shadow-2xs"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">🏢</span>
                      <span>{t("nav.cmaiWorkspace")}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                  <a
                    href="https://cloud.lazzor.com"
                    className="flex items-center justify-between px-3 py-2 text-xs font-medium text-gray-800 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 hover:text-cola-blue transition-colors shadow-2xs"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">⚡</span>
                      <span>{t("nav.cmaiCloud")}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium px-4 py-3 rounded-xl transition-colors",
                    location.pathname === link.path
                      ? "bg-cola-blue/5 text-cola-blue"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Language Switcher Mobile */}
              <div className="px-4 py-2 mt-2 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t("common.languages")}</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "flex items-center justify-center py-2.5 rounded-lg text-sm transition-colors border",
                        i18n.language === lang.code
                          ? "bg-cola-blue text-white border-cola-blue"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                      )}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-cola-blue text-white px-5 py-3.5 rounded-xl text-base font-semibold hover:bg-cola-blue-dark transition-colors shadow-md shadow-cola-blue/20"
                >
                  {t("nav.getQuote")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

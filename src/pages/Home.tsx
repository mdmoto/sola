import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Home as HomeIcon, Sun, Zap, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

export default function Home() {
  const [posterOk, setPosterOk] = useState(true);
  const { t } = useTranslation();

  const packages = useMemo(
    () =>
      t("home.pricingPreview.packages", { returnObjects: true }) as Array<{
        kw: string;
        title: string;
        price: string;
        gen: string;
      }>,
    [t]
  );

  const stats = useMemo(
    () =>
      t("home.stats.items", { returnObjects: true }) as Array<{
        label: string;
        value: string;
        unit: string;
      }>,
    [t]
  );

  const serviceCards = useMemo(
    () =>
      t("home.solutions.cards", { returnObjects: true }) as Array<{
        title: string;
        desc: string;
      }>,
    [t]
  );

  const pricingHighlights = useMemo(
    () => t("home.pricingPreview.highlights", { returnObjects: true }) as string[],
    [t]
  );

  const whyBullets = useMemo(() => t("home.why.bullets", { returnObjects: true }) as string[], [t]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20villa%20with%20solar%20panels%20in%20phuket%20thailand%20at%20sunset%2C%20high%20quality%2C%20photorealistic&image_size=landscape_16_9"
            alt={t("home.hero.bgAlt")}
            className="w-full h-full object-cover animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gray-900/60 bg-gradient-to-r from-gray-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cola-blue/10 border border-cola-blue/20 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cola-blue animate-ping" />
              <span className="text-sm font-medium text-cola-yellow uppercase tracking-wider">
                {t("home.hero.badge")}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
              {t("home.hero.titleLine1")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cola-yellow to-cola-yellow-light">
                {t("home.hero.titleHighlight")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {t("home.hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cola-blue hover:bg-cola-blue-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-cola-blue/25 active:scale-95"
              >
                {t("home.hero.ctaPrimary")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all active:scale-95"
              >
                {t("home.hero.ctaSecondary")}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-auto text-gray-50" viewBox="0 0 1440 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-gray-900 flex items-baseline justify-center gap-1">
                  {stat.value}
                  <span className="text-xl text-cola-blue font-bold">{stat.unit}</span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <h2 className="text-cola-blue font-semibold tracking-wider uppercase text-sm">{t("home.sectionLabels.residentialCommercial")}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              <Trans i18nKey="home.solutions.title" components={{ accent: <span className="text-cola-blue" /> }} />
            </h3>
            <p className="text-gray-600 text-lg">
              {t("home.solutions.promise")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <HomeIcon className="w-8 h-8" /> },
              { icon: <Zap className="w-8 h-8" /> },
              { icon: <ShieldCheck className="w-8 h-8" /> },
              { icon: <Sun className="w-8 h-8" /> },
            ].map((base, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-cola-blue-dark/5 transition-all duration-300 border border-transparent hover:border-cola-blue/10"
              >
                <div className="w-16 h-16 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                  {base.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{serviceCards[idx]?.title}</h4>
                <p className="text-gray-600 leading-relaxed">{serviceCards[idx]?.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{t("home.pricingPreview.title")}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("home.pricingPreview.desc")}
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {packages.map((p) => (
                  <div key={p.kw} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-cola-blue">{p.kw}</div>
                    <div className="text-xl font-bold text-gray-900 mt-1">{p.title}</div>
                    <div className="text-2xl font-extrabold text-cola-blue mt-4">{p.price}</div>
                    <div className="text-sm text-gray-500 mt-1">{p.gen}</div>
                    <div className="mt-5 space-y-2 text-sm text-gray-600">
                      {pricingHighlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-cola-blue shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-cola-blue hover:bg-cola-blue-dark text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:shadow-lg hover:shadow-cola-blue/20 active:scale-95"
                >
                  {t("home.pricingPreview.viewDetails")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-cola-blue px-7 py-3.5 rounded-full text-base font-semibold transition-all border border-cola-blue/25 active:scale-95"
                >
                  {t("home.pricingPreview.getAccurateQuote")}
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">{t("common.poster")}</h3>
                <a
                  href="/pricing-poster.png"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-cola-blue hover:text-cola-blue-dark transition-colors"
                >
                  {t("common.viewOriginal")}
                </a>
              </div>

              {posterOk ? (
                <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm">
                  <img
                    src="/pricing-poster.png"
                    alt={t("common.poster")}
                    className="w-full max-h-[560px] object-contain rounded-2xl bg-gray-50"
                    onError={() => setPosterOk(false)}
                  />
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-7 border border-gray-100 text-gray-600">
                  <div className="text-lg font-bold text-gray-900">{t("common.notFoundPosterTitle")}</div>
                  <p className="mt-2 text-sm leading-relaxed">
                    {t("common.notFoundPosterBody", {
                      file: "pricing-poster.png",
                      dir: "public/",
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (GEO Optimized) */}
      <section className="py-20 md:py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cola-blue/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
	              viewport={{ once: true }}
	              className="space-y-8"
	            >
	              <div className="space-y-4">
	                <h2 className="text-cola-blue font-semibold tracking-wider uppercase text-sm">{t("home.sectionLabels.localExpertise")}</h2>
	                <h3 className="text-3xl md:text-5xl font-bold leading-tight">
	                  {t("home.why.titleTop")}<br />
	                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cola-yellow to-cola-yellow-light">{t("home.why.titleBottom")}</span>
	                </h3>
	              </div>
	              <p className="text-gray-400 text-lg leading-relaxed">
	                {t("home.why.intro")}
	              </p>
	              <ul className="space-y-5 pt-4">
	                {whyBullets.map((item, idx) => (
	                  <li key={idx} className="flex items-center gap-4 text-gray-300">
	                    <CheckCircle2 className="w-6 h-6 text-cola-blue shrink-0" />
	                    <span className="text-lg">{item}</span>
	                  </li>
	                ))}
	              </ul>
	              <div className="pt-8">
	                <Link
	                  to="/about"
	                  className="inline-flex items-center gap-2 text-cola-yellow hover:text-cola-yellow-light font-semibold text-lg transition-colors group"
	                >
	                  {t("home.why.learnTeam")}
	                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
	                </Link>
	              </div>
	            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cola-blue-dark/20 aspect-[4/3] lg:aspect-square"
            >
	              <img
	                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=engineers%20installing%20solar%20panels%20on%20a%20luxury%20home%20roof%2C%20professional%2C%20high%20quality&image_size=square_hd"
	                alt={t("home.why.imageAlt")}
	                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
	              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
	              <div className="absolute bottom-8 left-8 right-8">
	                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
	                  <div className="text-2xl font-bold text-white mb-2">{t("home.why.cardTitle")}</div>
	                  <p className="text-gray-300">{t("home.why.cardDesc")}</p>
	                </div>
	              </div>
	            </motion.div>
	          </div>
	        </div>
	      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-cola-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
	            className="max-w-3xl mx-auto space-y-8"
	          >
	            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
	              {t("home.cta.title")}
	            </h2>
	            <p className="text-xl text-white/90">
	              {t("home.cta.desc")}
	            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cola-yellow hover:bg-cola-yellow-light text-cola-blue-dark px-10 py-4 rounded-full text-lg font-bold transition-all hover:shadow-xl hover:shadow-black/10 active:scale-95"
	              >
	                {t("home.cta.button")}
	                <ArrowRight className="w-5 h-5" />
	              </Link>
	            </div>
	          </motion.div>
        </div>
      </section>
    </div>
  );
}

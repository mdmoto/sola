import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { useTranslation } from "react-i18next";

type PackageItem = {
  title: string;
  kw: string;
  price: string;
  generation: string;
  highlights: string[];
};

export default function Pricing() {
  const [posterOk, setPosterOk] = useState(true);
  const { t } = useTranslation();

  const packages = useMemo<PackageItem[]>(
    () => t("pricing.packages", { returnObjects: true }) as PackageItem[],
    [t]
  );

  const notes = useMemo(() => t("pricing.notes", { returnObjects: true }) as string[], [t]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-cola-blue/20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-5"
          >
            <h1 className="text-4xl md:text-6xl font-bold">{t("pricing.headerTitle")}</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t("pricing.headerDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cola-blue hover:bg-cola-blue-dark text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:shadow-lg hover:shadow-cola-blue/20 active:scale-95"
              >
                {t("pricing.getAccurateQuote")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="/pricing-poster.png"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all active:scale-95"
              >
                {t("pricing.downloadPoster")}
                <Download className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={pkg.kw}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.45 }}
                    className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-cola-blue">
                          {pkg.kw}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mt-1">{pkg.title}</h2>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-extrabold text-cola-blue">{pkg.price}</div>
                        <div className="text-sm text-gray-500 mt-1">{pkg.generation}</div>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {pkg.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-cola-blue shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-7 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">{t("common.importantNotes")}</h3>
                <ul className="mt-4 space-y-3 text-gray-600 text-sm leading-relaxed">
                  {notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
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
                    className="w-full max-h-[720px] object-contain rounded-2xl bg-gray-50"
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
    </div>
  );
}

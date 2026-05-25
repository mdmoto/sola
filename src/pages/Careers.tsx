import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Languages,
  DollarSign,
  CheckCircle,
  Users,
  FileText,
  Mail,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Careers() {
  const { t } = useTranslation();

  const responsibilities = useMemo(
    () => t("careers.responsibilities", { returnObjects: true }) as string[],
    [t]
  );
  const reqLangs = useMemo(
    () => t("careers.reqLangs", { returnObjects: true }) as string[],
    [t]
  );
  const reqCores = useMemo(
    () => t("careers.reqCores", { returnObjects: true }) as string[],
    [t]
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cola-blue/20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-cola-blue/20 border border-cola-blue/30 text-cola-blue px-4 py-1.5 rounded-full text-sm font-medium">
              <Briefcase className="w-4 h-4" />
              {t("careers.positionTitle")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              {t("careers.headerTitle")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t("careers.headerDesc")}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-cola-blue" />
                <span>{t("careers.location")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Languages className="w-5 h-5 text-cola-blue" />
                <span>{t("careers.langReq")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-cola-blue font-semibold mb-4">
              <FileText className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm">I</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("careers.sectionResponsibilities")}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid gap-5">
            {responsibilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-5"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cola-blue/10 text-cola-blue font-bold text-lg shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-cola-blue font-semibold mb-4">
              <Users className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm">II</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("careers.sectionRequirements")}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Language Skills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100"
            >
              <Languages className="w-10 h-10 text-cola-blue mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t("careers.reqLangTitle")}
              </h3>
              <ul className="space-y-3">
                {reqLangs.map((lang, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <CheckCircle className="w-5 h-5 text-cola-blue shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{lang}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Professional Background */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100"
            >
              <Briefcase className="w-10 h-10 text-cola-blue mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t("careers.reqBgTitle")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("careers.reqBg")}
              </p>
            </motion.div>

            {/* Core Qualities */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100"
            >
              <CheckCircle className="w-10 h-10 text-cola-blue mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t("careers.reqCoreTitle")}
              </h3>
              <ul className="space-y-3">
                {reqCores.map((core, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <CheckCircle className="w-5 h-5 text-cola-blue shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{core}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stress Resilience */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100"
            >
              <Users className="w-10 h-10 text-cola-blue mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t("careers.reqStressTitle")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("careers.reqStress")}
              </p>
            </motion.div>
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-8"
          >
            <div className="bg-cola-blue/5 border border-cola-blue/20 rounded-2xl p-6 text-center">
              <p className="text-cola-blue-dark font-medium text-sm leading-relaxed">
                {t("careers.reqNote")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compensation */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-cola-blue font-semibold mb-4">
              <DollarSign className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm">III</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("careers.sectionCompensation")}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-14 h-14 bg-cola-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <DollarSign className="w-7 h-7 text-cola-blue" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {t("careers.salaryLabel")}
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {t("careers.salary")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-14 h-14 bg-cola-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <FileText className="w-7 h-7 text-cola-blue" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {t("careers.commissionLabel")}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t("careers.commission")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-14 h-14 bg-cola-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-7 h-7 text-cola-blue" />
              </div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {t("careers.benefitsLabel")}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t("careers.benefits")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cola-blue to-cola-blue-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("careers.ctaTitle")}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              {t("careers.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:${t("careers.ctaEmail")}`}
                className="inline-flex items-center gap-2 bg-white text-cola-blue px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors active:scale-95"
              >
                <Mail className="w-5 h-5" />
                {t("careers.ctaEmail")}
              </a>
              <a
                href={`tel:${t("careers.ctaPhone")}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold transition-colors active:scale-95"
              >
                <Phone className="w-5 h-5" />
                {t("careers.ctaPhone")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

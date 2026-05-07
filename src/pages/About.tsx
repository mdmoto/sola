import { motion } from "framer-motion";
import { Target, Leaf } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=abstract%20green%20solar%20energy%20concept%20background%2C%20high%20tech&image_size=landscape_16_9')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">{t("about.headerTitle")}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t("about.headerDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("about.storyTitle")}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("about.storyP1")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("about.storyP2")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                <Trans
                  i18nKey="about.storyP3"
                  components={{ strong: <strong className="text-cola-blue font-semibold" /> }}
                />
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=friendly%20solar%20engineering%20team%20in%20thailand%20smiling%2C%20high%20quality&image_size=landscape_4_3" alt="Solar team" className="rounded-2xl h-48 w-full object-cover" />
                <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close%20up%20of%20solar%20panel%20installation%20on%20roof%20tiles&image_size=portrait_4_3" alt="Solar installation" className="rounded-2xl h-64 w-full object-cover" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20villa%20with%20solar%20panels%20in%20chiang%20mai%20thailand&image_size=portrait_4_3" alt="Solar panels" className="rounded-2xl h-64 w-full object-cover" />
                <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=eco%20friendly%20green%20home%20concept%20with%20solar%20panels&image_size=landscape_4_3" alt="Green energy" className="rounded-2xl h-48 w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Target className="w-12 h-12 text-cola-blue mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("about.missionTitle")}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("about.missionDesc")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Leaf className="w-12 h-12 text-cola-blue mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("about.visionTitle")}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("about.visionDesc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

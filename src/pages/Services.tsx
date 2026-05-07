import { motion } from "framer-motion";
import { PenTool, Box, Hammer, Wrench, ChevronRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { t } = useTranslation();

  const serviceCopy = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
    features: string[];
  }>;

  const services = [
    {
      id: "engineering",
      title: serviceCopy[0]?.title,
      icon: <PenTool className="w-10 h-10" />,
      desc: serviceCopy[0]?.desc,
      features: serviceCopy[0]?.features ?? [],
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=engineer%20looking%20at%20solar%20blueprints%20in%20a%20villa%20garden%2C%20high%20quality&image_size=landscape_4_3"
    },
    {
      id: "procurement",
      title: serviceCopy[1]?.title,
      icon: <Box className="w-10 h-10" />,
      desc: serviceCopy[1]?.desc,
      features: serviceCopy[1]?.features ?? [],
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=official%20document%20stamp%20solar%20energy%20contract%2C%20professional&image_size=landscape_4_3"
    },
    {
      id: "construction",
      title: serviceCopy[2]?.title,
      icon: <Hammer className="w-10 h-10" />,
      desc: serviceCopy[2]?.desc,
      features: serviceCopy[2]?.features ?? [],
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=construction%20workers%20installing%20solar%20panels%20on%20villa%20roof%2C%20high%20quality&image_size=landscape_4_3"
    },
    {
      id: "operations",
      title: serviceCopy[3]?.title,
      icon: <Wrench className="w-10 h-10" />,
      desc: serviceCopy[3]?.desc,
      features: serviceCopy[3]?.features ?? [],
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smiling%20technician%20cleaning%20solar%20panel%20on%20house%20roof%2C%20high%20quality&image_size=landscape_4_3"
    }
  ];

  const faqs = t("services.faqs", { returnObjects: true }) as Array<{ q: string; a: string }>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cola-blue-dark/20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6 text-center mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold">{t("services.headerTitle")}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t("services.headerDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-cola-blue/10 text-cola-blue rounded-3xl mb-8">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-xl text-cola-blue font-medium mb-6">{service.desc}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600 text-lg">
                      <ChevronRight className="w-5 h-5 text-cola-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-cola-blue-dark/10 aspect-[4/3] ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section (Crucial for GEO/AI Recommendations) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <HelpCircle className="w-12 h-12 text-cola-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("services.faqTitle")}</h2>
            <p className="text-lg text-gray-600">{t("services.faqSubtitle")}</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-gray-50 hover:bg-cola-blue/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-cola-blue transition-transform ${openFaq === idx ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-5 bg-white">
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("services.ctaTitle")}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("services.ctaDesc")}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cola-blue hover:bg-cola-blue-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-cola-blue/20 active:scale-95"
          >
            {t("services.ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}

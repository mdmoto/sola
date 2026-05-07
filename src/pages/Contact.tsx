import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export default function Contact() {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6 text-center mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold">{t("contact.headerTitle")}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t("contact.headerDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">{t("contact.infoTitle")}</h2>
                <p className="text-gray-600 text-lg">{t("contact.infoDesc")}</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t("contact.officeHq")}</h3>
                    <p className="text-gray-600 leading-relaxed">83 2 Suriyawong 5 Rd,<br />Mueang Chiang Mai 50000, Thailand</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t("contact.officeBranch")}</h3>
                    <p className="text-gray-600 leading-relaxed">Pattaya, Bang Lamung District,<br />Chon Buri 20150, Thailand</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t("contact.phoneTitle")}</h3>
                    <p className="text-gray-600 leading-relaxed">+66 6 2345 8238<br />{t("contact.phoneNote")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t("contact.emailTitle")}</h3>
                    <p className="text-gray-600 leading-relaxed">hi@colasola.com<br /></p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t("contact.hoursTitle")}</h3>
                    <p className="text-gray-600 leading-relaxed">{t("contact.hoursLine1")}<br />{t("contact.hoursLine2")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10 p-8 text-center"
                  >
                    <div className="w-20 h-20 bg-cola-blue/10 text-cola-blue rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{t("contact.successTitle")}</h3>
                    <p className="text-gray-600 text-lg">{t("contact.successDesc")}</p>
                  </motion.div>
                ) : null}

                <h3 className="text-2xl font-bold text-gray-900 mb-8">{t("contact.formTitle")}</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.fields.name")} <span className="text-red-500">*</span></label>
                      <input
                        {...register("name", { required: t("contact.validation.nameRequired") })}
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.name ? 'border-red-300 focus:ring-red-500' : 'border-transparent focus:border-cola-blue focus:ring-cola-blue'} focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.fields.phone")} <span className="text-red-500">*</span></label>
                      <input
                        {...register("phone", { required: t("contact.validation.phoneRequired") })}
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-transparent focus:border-cola-blue focus:ring-cola-blue'} focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                        placeholder="+66 8 1234 5678"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.fields.email")}</label>
                      <input
                        {...register("email", { 
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: t("contact.validation.emailInvalid") }
                        })}
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.email ? 'border-red-300 focus:ring-red-500' : 'border-transparent focus:border-cola-blue focus:ring-cola-blue'} focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.fields.company")}</label>
                      <input
                        {...register("company")}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-transparent focus:border-cola-blue focus:ring-2 focus:ring-cola-blue focus:ring-opacity-20 focus:outline-none transition-all"
                        placeholder="ABC Corporation"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t("contact.fields.message")} <span className="text-red-500">*</span></label>
                    <textarea
                      {...register("message", { required: t("contact.validation.messageRequired") })}
                      rows={5}
                      className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.message ? 'border-red-300 focus:ring-red-500' : 'border-transparent focus:border-cola-blue focus:ring-cola-blue'} focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all resize-none`}
                      placeholder={t("contact.placeholders.message")}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-cola-blue hover:bg-cola-blue-dark disabled:bg-cola-yellow text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-cola-blue/20 active:scale-95"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t("contact.sending")}
                      </span>
                    ) : (
                      <>
                        {t("contact.send")}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

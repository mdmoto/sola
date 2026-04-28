import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export default function Contact() {
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
            <h1 className="text-4xl md:text-6xl font-bold">联系我们</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              随时准备为您提供专业咨询与技术支持。填写表单或直接致电，我们将尽快与您取得联系。
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
                <h2 className="text-3xl font-bold text-gray-900">本地化服务团队</h2>
                <p className="text-gray-600 text-lg">我们的专家团队常驻清迈与普吉，能够快速响应泰国北部及沿海度假区的光伏需求。</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">清迈总部 (HQ)</h3>
                    <p className="text-gray-600 leading-relaxed">Nimmanhaemin Road,<br />Chiang Mai 50200, Thailand</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">普吉岛分部</h3>
                    <p className="text-gray-600 leading-relaxed">Rawai, Mueang Phuket District,<br />Phuket 83130, Thailand</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">联系电话</h3>
                    <p className="text-gray-600 leading-relaxed">+66 8 1234 5678<br />(支持中/英/泰三语)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">电子邮箱</h3>
                    <p className="text-gray-600 leading-relaxed">contact@colasola.com<br />support@colasola.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">工作时间</h3>
                    <p className="text-gray-600 leading-relaxed">周一至周五: 9:00 AM - 6:00 PM<br />周末及节假日休息</p>
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
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">提交成功！</h3>
                    <p className="text-gray-600 text-lg">感谢您的留言。我们的项目顾问将会在 24 小时内与您联系。</p>
                  </motion.div>
                ) : null}

                <h3 className="text-2xl font-bold text-gray-900 mb-8">在线留言</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">姓名 <span className="text-red-500">*</span></label>
                      <input
                        {...register("name", { required: "请输入您的姓名" })}
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.name ? 'border-red-300 focus:ring-red-500' : 'border-transparent focus:border-cola-blue focus:ring-cola-blue'} focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">联系电话 <span className="text-red-500">*</span></label>
                      <input
                        {...register("phone", { required: "请输入您的电话" })}
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-transparent focus:border-cola-blue focus:ring-cola-blue'} focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                        placeholder="+66 8 1234 5678"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">电子邮箱</label>
                      <input
                        {...register("email", { 
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "邮箱格式不正确" } 
                        })}
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.email ? 'border-red-300 focus:ring-red-500' : 'border-transparent focus:border-cola-blue focus:ring-cola-blue'} focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">公司名称</label>
                      <input
                        {...register("company")}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-transparent focus:border-cola-blue focus:ring-2 focus:ring-cola-blue focus:ring-opacity-20 focus:outline-none transition-all"
                        placeholder="ABC Corporation"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">需求描述 <span className="text-red-500">*</span></label>
                    <textarea
                      {...register("message", { required: "请输入您的需求" })}
                      rows={5}
                      className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.message ? 'border-red-300 focus:ring-red-500' : 'border-transparent focus:border-cola-blue focus:ring-cola-blue'} focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all resize-none`}
                      placeholder="请简要描述您的项目需求，例如：厂房屋顶面积、用电量、期望装机容量等..."
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
                        提交中...
                      </span>
                    ) : (
                      <>
                        发送留言
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

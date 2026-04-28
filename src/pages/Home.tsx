import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Home as HomeIcon, Sun, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20villa%20with%20solar%20panels%20in%20phuket%20thailand%20at%20sunset%2C%20high%20quality%2C%20photorealistic&image_size=landscape_16_9"
            alt="泰国户用别墅光伏"
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
                专注清迈、清莱、普吉岛、芭提雅
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
              为您在泰国打造<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cola-yellow to-cola-yellow-light">
                专属绿色家庭能源
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              超过 90% 的客户是像您一样的别墅与家庭业主。我们避开曼谷的拥堵，深耕泰国北部与沿海度假区，为您提供最快响应的本地化光伏安装、PEA并网与售后服务。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cola-blue hover:bg-cola-blue-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-cola-blue/25 active:scale-95"
              >
                免费获取家庭光伏方案
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all active:scale-95"
              >
                查看周边案例
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
            {[
              { label: "服务家庭与别墅", value: "1,000+", unit: "户" },
              { label: "平均装机容量", value: "10-20", unit: "kW" },
              { label: "度假村/精品商业", value: "50+", unit: "个" },
              { label: "本地服务网点", value: "4", unit: "城" },
            ].map((stat, idx) => (
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
            <h2 className="text-cola-blue font-semibold tracking-wider uppercase text-sm">Residential & Commercial</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              为您的家庭与生意 <span className="text-cola-blue">量身定制</span>
            </h3>
            <p className="text-gray-600 text-lg">
              90% 的户用别墅经验 + 9% 的精品商业/度假村经验。我们懂您的需求，更懂如何让您的屋顶产生最大价值。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <HomeIcon className="w-8 h-8" />,
                title: "户用光伏 (Residential)",
                desc: "5kW - 30kW 别墅屋顶系统。完美匹配家庭日常与空调用电，美观且不破坏原有屋面结构。",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "精品商业 (Small Commercial)",
                desc: "专为度假村、酒店、精品民宿设计的 30kW - 100kW 系统，大幅削减商业阶梯电费。",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "PEA 并网代办 (Grid Connection)",
                desc: "熟悉清迈、普吉等外府电力局（PEA）政策，全程代办并网许可，让您合法合规享受太阳能。",
              },
              {
                icon: <Sun className="w-8 h-8" />,
                title: "本地运维 (Local O&M)",
                desc: "驻扎北部与海岛的本地团队。定期的面板清洗与逆变器维护，24小时内响应本地故障。",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-cola-blue-dark/5 transition-all duration-300 border border-transparent hover:border-cola-blue/10"
              >
                <div className="w-16 h-16 bg-cola-blue/10 text-cola-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cola-blue group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
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
                <h2 className="text-cola-blue font-semibold tracking-wider uppercase text-sm">Local Expertise</h2>
                <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                  为什么在泰国北部与沿海<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cola-yellow to-cola-yellow-light">选择 ColaSola？</span>
                </h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                不同于扎堆在曼谷及大都会区的同行，ColaSola 坚信“本地化”的价值。我们在清迈、清莱、普吉岛和芭提雅设立了实体服务团队。
              </p>
              <ul className="space-y-5 pt-4">
                {[
                  "精准聚焦：90% 项目为别墅与家庭户用，懂您的屋顶",
                  "极速响应：本地团队，免去跨府调度的漫长等待",
                  "外府并网：精通 PEA (省级电力局) 并网流程与政策",
                  "透明报价：无隐形消费，提供 15-25 年设备质保",
                ].map((item, idx) => (
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
                  了解我们的本地化团队
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
                alt="泰国本地光伏安装"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <div className="text-2xl font-bold text-white mb-2">清迈/普吉首选</div>
                  <p className="text-gray-300">超过一千个外府家庭通过我们实现了用电自由。</p>
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
              您在普吉或清迈有别墅吗？
            </h2>
            <p className="text-xl text-white/90">
              联系我们的本地专家，获取免费的现场勘测与专属光伏系统设计方案。
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cola-yellow hover:bg-cola-yellow-light text-cola-blue-dark px-10 py-4 rounded-full text-lg font-bold transition-all hover:shadow-xl hover:shadow-black/10 active:scale-95"
              >
                立即获取报价
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

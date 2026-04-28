import { motion } from "framer-motion";
import { PenTool, Box, Hammer, Wrench, ChevronRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      id: "engineering",
      title: "现场勘测与专属设计",
      icon: <PenTool className="w-10 h-10" />,
      desc: "针对泰国别墅屋顶量身定制",
      features: ["清迈/普吉等本地工程师免费上门", "阴影遮挡与屋顶承重分析", "系统发电量与投资回报模拟", "不破坏原有别墅外观的美学设计"],
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=engineer%20looking%20at%20solar%20blueprints%20in%20a%20villa%20garden%2C%20high%20quality&image_size=landscape_4_3"
    },
    {
      id: "procurement",
      title: "PEA 并网代办服务",
      icon: <Box className="w-10 h-10" />,
      desc: "熟悉泰国省级电力局规范",
      features: ["全程代办 PEA 审批手续", "单相/三相电表升级申请", "余电上网 (Sell Back) 政策指导", "确保合法合规安全并网"],
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=official%20document%20stamp%20solar%20energy%20contract%2C%20professional&image_size=landscape_4_3"
    },
    {
      id: "construction",
      title: "专业施工与安装",
      icon: <Hammer className="w-10 h-10" />,
      desc: "标准化的家庭光伏交付",
      features: ["清迈/普吉自有施工团队，无外包", "Tier 1 品牌组件与微型逆变器", "防漏水、防台风加固处理", "通常在 3-5 个工作日内完工"],
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=construction%20workers%20installing%20solar%20panels%20on%20villa%20roof%2C%20high%20quality&image_size=landscape_4_3"
    },
    {
      id: "operations",
      title: "本地售后与运维",
      icon: <Wrench className="w-10 h-10" />,
      desc: "随叫随到的周边管家",
      features: ["手机 App 实时监控发电量", "清迈/普吉本地团队快速上门", "定期面板清洗套餐服务", "长达 15-25 年的设备质保"],
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smiling%20technician%20cleaning%20solar%20panel%20on%20house%20roof%2C%20high%20quality&image_size=landscape_4_3"
    }
  ];

  const faqs = [
    {
      q: "在清迈/普吉岛安装家庭光伏，大约需要多少钱？",
      a: "通常一栋中大型别墅安装 5kW 到 10kW 的系统，费用大约在 15万 到 30万 泰铢之间（具体视屋顶结构与设备品牌而定）。我们提供免费的上门勘测与报价服务。"
    },
    {
      q: "投资回报期 (ROI) 大概是多久？",
      a: "在泰国目前的电价水平下，户用光伏系统的投资回报期通常在 4 到 5 年左右。如果白天开空调的时间较长，回本速度会更快。"
    },
    {
      q: "你们负责向 PEA (省级电力局) 申请并网吗？",
      a: "是的。我们专精于外府（清迈、清莱、普吉、芭提雅等）的 PEA 并网流程。从图纸审批、电表更换到最终并网，我们全程代办，无需您亲自跑腿。"
    },
    {
      q: "为什么你们不接曼谷及大都会区的项目？",
      a: "我们坚信本地化服务的价值。避开曼谷的拥堵，我们把资源集中在泰国北部和沿海地区，这样我们可以保证对客户的售后响应时间在 24 小时以内，提供最优质的体验。"
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold">核心服务</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              ColaSola 专注于别墅与中小型商业光伏。从现场勘测、PEA并网代办到最终安装，为您提供省心的一站式本地化服务。
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">常见问题解答 (FAQ)</h2>
            <p className="text-lg text-gray-600">为您解答在泰国安装家庭光伏最关心的问题</p>
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
            想要了解我们能为您做什么？
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            立即联系我们的本地团队，获取免费的上门勘测与定制化报价。
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cola-blue hover:bg-cola-blue-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-cola-blue/20 active:scale-95"
          >
            免费获取方案
          </Link>
        </div>
      </section>
    </div>
  );
}

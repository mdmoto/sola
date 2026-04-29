import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";

type PackageItem = {
  title: string;
  kw: string;
  price: string;
  generation: string;
  highlights: string[];
};

export default function Pricing() {
  const [posterOk, setPosterOk] = useState(true);

  const packages = useMemo<PackageItem[]>(
    () => [
      {
        title: "小型住宅",
        kw: "3 kW",
        price: "฿ 89,000",
        generation: "~360 kWh/月",
        highlights: ["0% 首付（以最终方案为准）", "并网型（Grid-tied）", "包含 PEA 并网申请", "本地质保与售后"],
      },
      {
        title: "中型家庭",
        kw: "6 kW",
        price: "฿ 139,000",
        generation: "~720 kWh/月",
        highlights: ["0% 首付（以最终方案为准）", "并网型（Grid-tied）", "包含 PEA 并网申请", "本地质保与售后"],
      },
      {
        title: "高端别墅",
        kw: "9 kW",
        price: "฿ 198,000",
        generation: "~1,080 kWh/月",
        highlights: ["0% 首付（以最终方案为准）", "并网型（Grid-tied）", "包含 PEA 并网申请", "本地质保与售后"],
      },
    ],
    []
  );

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
            <h1 className="text-4xl md:text-6xl font-bold">户用套餐与价格</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              下面是 ColaSola 常见的 3kW / 6kW / 9kW 户用光伏套餐参考。最终报价会根据屋顶结构、用电习惯、线缆走线距离与并网条件进行确认。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cola-blue hover:bg-cola-blue-dark text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:shadow-lg hover:shadow-cola-blue/20 active:scale-95"
              >
                获取精确报价
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="/pricing-poster.png"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white px-7 py-3.5 rounded-full text-base font-semibold transition-all active:scale-95"
              >
                下载海报
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
                <h3 className="text-lg font-bold text-gray-900">重要说明</h3>
                <ul className="mt-4 space-y-3 text-gray-600 text-sm leading-relaxed">
                  <li>价格为参考区间，最终以现场勘测与书面报价为准。</li>
                  <li>月发电量为估算值，受屋顶朝向、遮挡与当地日照影响。</li>
                  <li>如果您在清迈/清莱/普吉/芭提雅，我们可安排本地团队上门评估。</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">套餐海报</h3>
                <a
                  href="/pricing-poster.png"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-cola-blue hover:text-cola-blue-dark transition-colors"
                >
                  查看原图
                </a>
              </div>

              {posterOk ? (
                <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm">
                  <img
                    src="/pricing-poster.png"
                    alt="ColaSola 户用套餐海报"
                    className="w-full max-h-[720px] object-contain rounded-2xl bg-gray-50"
                    onError={() => setPosterOk(false)}
                  />
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-7 border border-gray-100 text-gray-600">
                  <div className="text-lg font-bold text-gray-900">未找到海报图片</div>
                  <p className="mt-2 text-sm leading-relaxed">
                    请将你那张套餐海报保存为 <span className="font-semibold">pricing-poster.png</span> 并放到项目的{" "}
                    <span className="font-semibold">public/</span> 目录，然后重新部署即可显示。
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

import { motion } from "framer-motion";
import { Target, Leaf } from "lucide-react";

export default function About() {
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
            <h1 className="text-4xl md:text-6xl font-bold">关于 ColaSola</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              深耕泰国北部与沿海地区，专注为家庭别墅与度假村提供高品质、最省心的本地化光伏系统。
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">我们的故事</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                ColaSola 的诞生源于一个简单的理念：太阳能安装不应该是一次性的买卖，而是长达25年的服务承诺。
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                在考察了泰国市场后，我们发现许多公司扎堆在曼谷，而当清迈、普吉或芭提雅的家庭需要安装光伏或寻求售后时，往往面临漫长的等待与高昂的跨府差旅费。
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                因此，我们选择了一条不同的路：<strong className="text-cola-blue font-semibold">不做曼谷市场，全面扎根外府。</strong> 我们在清迈、清莱、普吉和芭提雅建立本地实体团队。如今，我们90%以上的业务来自于这些地区的户用别墅，赢得了超过上千个家庭的信赖。
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                为泰国非都会区的家庭与度假村提供最高效、最可靠的户用光伏系统解决方案，降低用电成本，普及绿色生活。
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的愿景</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                成为清迈、普吉等地区最具口碑的本地化新能源管家。让清洁能源像水电一样触手可及，随叫随到。
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

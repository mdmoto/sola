import { motion } from "framer-motion";
import { MapPin, Zap, Home as HomeIcon, Building2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "普吉岛海景别墅光伏",
      location: "Phuket, Thailand",
      type: "户用屋顶",
      capacity: "15 kW",
      icon: <HomeIcon className="w-5 h-5" />,
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20pool%20villa%20in%20phuket%20with%20solar%20panels%20on%20roof%2C%20high%20quality&image_size=landscape_4_3"
    },
    {
      id: 2,
      title: "清迈素贴山山居别墅",
      location: "Chiang Mai, Thailand",
      type: "户用屋顶",
      capacity: "10 kW",
      icon: <HomeIcon className="w-5 h-5" />,
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20house%20in%20chiang%20mai%20mountains%20with%20solar%20roof%2C%20high%20quality&image_size=landscape_4_3"
    },
    {
      id: 3,
      title: "芭提雅精品度假酒店",
      location: "Pattaya, Thailand",
      type: "小型商业",
      capacity: "50 kW",
      icon: <Building2 className="w-5 h-5" />,
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=boutique%20resort%20in%20pattaya%20with%20solar%20panels%2C%20tropical%2C%20high%20quality&image_size=landscape_4_3"
    },
    {
      id: 4,
      title: "清莱有机农场民宿",
      location: "Chiang Rai, Thailand",
      type: "小型商业",
      capacity: "20 kW",
      icon: <Building2 className="w-5 h-5" />,
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=eco%20friendly%20homestay%20farm%20with%20solar%20panels%2C%20thailand%2C%20high%20quality&image_size=landscape_4_3"
    },
    {
      id: 5,
      title: "普吉拉威区现代私宅",
      location: "Rawai, Phuket",
      type: "户用屋顶",
      capacity: "8 kW",
      icon: <HomeIcon className="w-5 h-5" />,
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20minimalist%20house%20with%20solar%20roof%2C%20sunny%20day%2C%20high%20quality&image_size=landscape_4_3"
    },
    {
      id: 6,
      title: "清迈杭东家庭自建房",
      location: "Hang Dong, Chiang Mai",
      type: "户用屋顶",
      capacity: "12 kW",
      icon: <HomeIcon className="w-5 h-5" />,
      img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20suburban%20house%20with%20solar%20panels%20on%20roof%2C%20thailand%2C%20high%20quality&image_size=landscape_4_3"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6 text-center mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold">项目案例</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              从普吉岛的海景别墅，到清迈的山居小屋。我们为上千个泰国非都会区家庭与精品商业提供了可靠的绿色能源。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-cola-blue-dark/10 transition-all duration-300 border border-transparent hover:border-cola-blue/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-cola-blue-dark px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-sm">
                    <Zap className="w-4 h-4" />
                    {project.capacity}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-cola-blue font-semibold uppercase tracking-wider mb-3">
                    {project.icon}
                    {project.type}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cola-blue transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-5 h-5 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

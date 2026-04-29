import { Link } from "react-router-dom";
import { Sun, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="/logo.png" 
                alt="ColaSola Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              我们是泰国领先的光伏集成服务商，在清迈、普吉岛、芭提雅等地设有服务网点，致力于为别墅家庭与精品商业提供最省心的绿色能源解决方案。
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cola-blue transition-colors group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cola-blue transition-colors group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cola-blue transition-colors group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">快捷导航</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm hover:text-cola-blue transition-colors">首页</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-cola-blue transition-colors">关于我们</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-cola-blue transition-colors">核心服务</Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-cola-blue transition-colors">项目案例</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm hover:text-cola-blue transition-colors">套餐价格</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">核心服务</h3>
            <ul className="space-y-4">
              <li className="text-sm text-gray-400">工程设计 (Engineering)</li>
              <li className="text-sm text-gray-400">采购与供应链 (Procurement)</li>
              <li className="text-sm text-gray-400">施工管理 (Construction)</li>
              <li className="text-sm text-gray-400">运维服务 (O&M)</li>
              <li className="text-sm text-gray-400">储能解决方案</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cola-blue shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  清迈总部:<br />
                  83 2 Suriyawong 5 Rd, Tambon Hai Y, Chiang Mai
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cola-blue shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  芭提雅分部:<br />
                  Rawai, Phuket
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cola-blue shrink-0" />
                <span className="text-sm">+66 6 2345 8238</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cola-blue shrink-0" />
                <span className="text-sm">hi@colasola.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} ColaSola. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Seo from "@/components/seo/Seo";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
      <Seo />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

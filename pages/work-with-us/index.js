import Navbar from "@/components/Navbar/Navbar";
import HeroWork from "@/components/HeroWorkWithUs/HeroWork";
import Footer from "@/components/Footer/Footer";

export default function WorkWithUs() {
  return <div className="flex min-h-screen flex-col bg-[#ffffff]">
    <Navbar/>
    <HeroWork/>
    <Footer/>
  </div>
}
import Navbar from "@/components/Navbar/Navbar";
import HeroWork from "@/components/HeroWorkWithUs/HeroWork";
import Footer from "@/components/Footer/Footer";
import FormWork from "@/components/FormWorkWithUs/FormWork";

export default function WorkWithUs() {
  return <div className="flex min-h-screen flex-col bg-[#ffffff]">
    <Navbar/>
    <HeroWork/>
    <FormWork/>
    <Footer/>
  </div>
}
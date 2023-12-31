import Navbar from "@/components/Navbar/Navbar";
import HeroWork from "@/components/HeroWorkWithUs/HeroWork";
import Footer from "@/components/Footer/Footer";
import FormWork from "@/components/FormWorkWithUs/FormWork";

export default function WorkWithUs() {
  return <div className="flex flex-col bg-[#090E34] m-0 p-0">
    <Navbar/>
    <HeroWork/>
    <FormWork/>
    <Footer/>
  </div>
}
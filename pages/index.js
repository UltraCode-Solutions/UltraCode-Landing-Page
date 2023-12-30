
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";

import { Contact } from "@/components/Contact/index.js";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col bg-[#ffffff]">
         <Navbar />
         <Hero />

         <Contact/>
         <Footer/>
         
      </main>
   );
}
import Hero from "@/components/hero/Hero.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
export default function Home() {
   return (
      <main className="flex min-h-screen flex-col bg-[#ffffff]">
         <Navbar />
         <Hero />
      </main>
   );
}

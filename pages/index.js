import Navbar from "../components/Navbar/Navbar.jsx";
import { Contact } from "@/components/Contact/index.js";
export default function Home() {
   return (
      <main className="flex min-h-screen flex-col bg-[#ffffff]">
         <Navbar />
         <Contact/>
      </main>
   );
}

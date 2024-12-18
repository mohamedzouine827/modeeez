import Image from "next/image";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar/>
      <HeroSection/>
      
    </main>
  );
}

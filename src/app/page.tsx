import Navbar from "@/components/Navbar/Navbar";
import TitleScreen from "@/components/Section/TitleScreen";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navbar/>
      <TitleScreen/>
      <TitleScreen/>
    </div>
  );
}

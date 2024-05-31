import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import More from "@/components/More";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div  className="bg-black ">
      <Header/>
      <Hero/>
    </div>
    <More/>

    <Info/>
   

    </>
   
  );
}

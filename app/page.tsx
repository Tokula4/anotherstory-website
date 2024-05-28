import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div  className=" bg-black ">
      <Header/>
      <Hero/>
    </div>

    <Info/>
    <Footer/>

    </>
   
  );
}

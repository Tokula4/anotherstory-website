import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import More from "@/components/More";
import SupportUs from "@/components/SupportUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Header/>
    <div  className=" bg-[url('/bg.png')] bg-cover  ">
     
      <Hero/>
      
    </div>
  
    <Info/>
    <More/>
    <ContactForm/>

   
   
   

    </>
   
  );
}

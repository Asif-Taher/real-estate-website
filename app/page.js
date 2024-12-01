import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Header from "@/Components/Home/Header";
import Project from "@/Components/Project/Project";
import Footer from "@/Components/Share/Footer";
import Textimonial from "@/Components/Testimonial/Textimonial";

export default function Home() {
  return (
   <div className="w-full overflow-hidden mb-10">

    <Header />
    <About />
    <Project />
    <Textimonial />
    <Contact />
    <Footer />
   </div>
  );
}

import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import Technologies from "./components/technologies";
import Workflow from "./components/workflow";
import Faq from "./components/faq";
import PreFooter from "./components/preFooter";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {

  
  return (
    <>
    <Navbar />
    <Hero />
    <Stats />
    <Services />
    <Technologies />
    <Workflow />
    <Pricing />
    <Faq />
    <PreFooter />
    <Footer />
    </>
  );
}

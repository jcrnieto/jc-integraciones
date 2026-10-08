import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problemas from "@/components/Problemas";
import Servicios from "@/components/Servicios";
import ComoTrabajo from "@/components/ComoTrabajo";
import SobreMi from "@/components/SobreMi";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
export default function Home() {
    return (
      <>
        <Navbar />
        <main id="contenido">
          <Hero />
          <Problemas />
          <Servicios />
          <ComoTrabajo />
          <SobreMi />
          <Contacto />
        </main>
        <Footer />
      </>
    );
}

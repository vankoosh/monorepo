import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import * as Container from "../components/ui/Container";

export default function Landing() {
  return (
    <Container.Full>
      <Navbar />
      <Hero />
      <Contact />

      <Footer />
    </Container.Full>
  );
}

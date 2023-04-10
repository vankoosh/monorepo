import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import * as Container from "../components/ui/Container";

export default function Landing() {
  return (
    <Container.Full height="50vh">
      <Navbar />
      <Hero />
      <Contact />

      <Footer />
    </Container.Full>
  );
}

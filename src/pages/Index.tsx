
import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FitnessKeywords from "../components/FitnessKeywords";
import About from "../components/About";
import Services from "../components/Services";
import Trainers from "../components/Trainers";
import Membership from "../components/Membership";
import Testimonials from "../components/Testimonials";
import Classes from "../components/Classes";
import Schedule from "../components/Schedule";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import OffersPopup from "../components/OffersPopup";
import ContactForm from "@/components/ContactForm";
import 'leaflet/dist/leaflet.css';

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "contact":
        return <Contact />;
      case "gallery":
        return <Gallery />;
      default:
        return (
          <>
            <Hero />
            <FitnessKeywords />
            <About />
            <Services />
            <Trainers />
            <Membership />
            <Testimonials />
            <Classes />
            <Schedule />
            <Blog />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
       <ContactForm />
      <Footer />
      <OffersPopup />
    </div>
  );
};

export default Index;

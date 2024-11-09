import ContactPage from "./Contact";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import Project from "./Project";
import SkillsSection from "./Skills";
import { Banner } from "./Slider";

export const PortFolioMain = () => {
  return (
    <div className="dark:text-gray-300  font-sans">
      <Navbar />
      <Banner />
      <Project />
      <SkillsSection />
      <ContactPage />
      <Footer />
    </div>
  );
};

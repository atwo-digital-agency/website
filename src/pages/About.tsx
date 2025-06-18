import AboutUs from "../componants/AboutUs";
import ContactUs from "../componants/ContactUs";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

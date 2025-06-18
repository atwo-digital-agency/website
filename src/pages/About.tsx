import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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

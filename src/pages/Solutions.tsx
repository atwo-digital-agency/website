import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Solution from "../components/Solution";

export default function Solutions() {
  return (
    <>
      <Navbar />
      <main>
        <Solution />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

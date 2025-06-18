import ContactUs from "../componants/ContactUs";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";
import Solution from "../componants/Solution";

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

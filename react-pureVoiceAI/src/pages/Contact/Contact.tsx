import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className="py-5">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default Contact;

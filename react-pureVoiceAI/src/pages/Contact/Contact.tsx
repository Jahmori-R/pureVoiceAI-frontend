import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default Contact;

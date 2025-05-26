import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import PageTitle from "../../components/PageTitle";

function Contact() {
  return (
    <>
      <header>
        {/* Video background and overlay moved to the top-level here */}
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="video-bg">
            <source src="videos/contact.mp4" type="video/mp4" />
          </video>
          <div className="overlay overlay-contact"></div>
        </div>
        <NavBar />
      </header>
      <section>
        <PageTitle
          text="Get In Touch"
          className="text-light display-3 fw-bold"
        />
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default Contact;

import NavBar from "../../components/NavBar";
import AboutIntroduction from "../../components/AboutIntroduction";
import AboutProblemStatement from "../../components/AboutProblemStatement";
import AboutProjectDetails from "../../components/AboutProjectDetails";
import Footer from "../../components/Footer";

function About() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        <AboutIntroduction />
      </section>
      <section>
        <AboutProblemStatement />
      </section>
      <section>
        <AboutProjectDetails />
      </section>
      <Footer />
    </>
  );
}

export default About;

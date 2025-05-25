import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SectionDivider from "../../components/SectionDivider";
import HeroSection from "../../components/HeroSection";

function Results() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <section>
        <HeroSection
          title="Results Page"
          subtitle="This is the results page where users can view their results."
        />
      </section>
      <Footer />
    </>
  );
}
export default Results;

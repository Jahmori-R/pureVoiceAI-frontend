import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import ResultsCheck from "../../components/ResultsChat";

function Results() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <section>
        <HeroSection
          title="Results Page"
          textColor="white"
          backgroundColor="var(--near-black)"
          backgroundImage="images/results.jpg"
          backgroundImageOpacity={0.2}
          subtitle="This is the results page where users can view their results."
        />
      </section>
      <section>
        <ResultsCheck />
      </section>
      <Footer />
    </>
  );
}
export default Results;

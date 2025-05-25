import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UseCaseGrid from "../../components/UseCaseGrid";
import HeroSection from "../../components/HeroSection";

function UseCase() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HeroSection
          title="Use Cases"
          subtitle="Discover practical use cases where our speech separation, diarization,
          and transcription pipeline adds value."
        />
        <section>
          <UseCaseGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default UseCase;

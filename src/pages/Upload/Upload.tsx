import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UploadInstructions from "../../components/UploadInstructions";
import UploadRecord from "../../components/UploadRecord";
import HeroSection from "../../components/HeroSection";
import SectionDivider from "../../components/SectionDivider";
import PageTitle from "../../components/PageTitle";

function Upload() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <section>
          <HeroSection
            title="Upload"
            backgroundColor="var(--bright-blue)"
            textColor="black"
            subtitle="Upload a pre-recorded audio file or record a new one directly from your browser. Once submitted, the audio will be processed by our AI pipeline to perform speaker separation, speaker diarization, and transcription."
          />
        </section>
        <SectionDivider color="black" />

        <section>
          <PageTitle text="Take Note" tag="h1" className="display-4 fw-light" />
          <UploadInstructions />
        </section>

        <SectionDivider color="black" />

        <section>
          <PageTitle text="Take Note" tag="h1" className="display-4" />

          <UploadRecord />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Upload;

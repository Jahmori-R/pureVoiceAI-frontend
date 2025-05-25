import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UploadInstructions from "../../components/UploadInstructions";
import UploadRecord from "../../components/UploadRecord";
import HeroSection from "../../components/HeroSection";
import SectionDivider from "../../components/SectionDivider";

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
            backgroundColor="bg-primary"
            textColor="text-white"
            subtitle="Upload a pre-recorded audio file or record a new one directly from your browser. Once submitted, the audio will be processed by our AI pipeline to perform speaker separation, speaker diarization, and transcription."
          />
        </section>

        <SectionDivider color="#3B71CA" />

        <section>
          <UploadInstructions />
        </section>

        <SectionDivider color="#3B71CA" />

        <section>
          <UploadRecord />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Upload;

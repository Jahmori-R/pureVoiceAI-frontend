import NavBar from "../../components/NavBar";
import HomeIntroduction from "../../components/HomeIntroduction";
import Footer from "../../components/Footer";
import InfoCard from "../../components/InfoCard";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className="">
        <HomeIntroduction />
      </section>
      <section className="">
        <div className="d-flex gap-5 flex-wrap justify-content-center">
          <InfoCard
            title="Speaker Separation"
            text="Isolate individual voices from overlapping audio using deep learning models trained for speech separation."
            imageSrc="/pureVoiceAI-frontend/public/images/separation.gif"
            width="400px"
            height="400px"
          />
          <InfoCard
            title="Speaker Diarization"
            text="Identify who spoke when by assigning speaker labels to different segments of the audio."
            imageSrc="/pureVoiceAI-frontend/public/images/diarization.gif"
            width="400px"
            height="400px"
          />
          <InfoCard
            title="Speaker Transcription"
            text="Automatically convert speech into accurate text with timestamps and speaker attribution."
            imageSrc="/pureVoiceAI-frontend/public/images/transcription.gif"
            width="400px"
            height="400px"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;

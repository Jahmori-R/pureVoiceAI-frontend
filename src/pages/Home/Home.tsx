import NavBar from "../../components/NavBar";
import HomeIntroduction from "../../components/HomeIntroduction";
import Footer from "../../components/Footer";
import ItemCard from "../../components/ItemCard";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className="bg-primary bg-gradient">
        <HomeIntroduction />
      </section>
      <section>
        <div className="d-flex gap-5 flex-wrap justify-content-center">
          <ItemCard
            title="Speaker Separation"
            text="Isolate individual voices from overlapping audio using deep learning models trained for speech separation."
            imageSrc="/react-pureVoiceAI/public/vite.svg"
          />
          <ItemCard
            title="Speaker Diarization"
            text="Identify who spoke when by assigning speaker labels to different segments of the audio."
            imageSrc="/assets/maxresdefault.jpg"
          />
          <ItemCard
            title="Speaker Transcription"
            text="Automatically convert speech into accurate text with timestamps and speaker attribution."
            imageSrc="/assets/maxresdefault.jpg"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;

import NavBar from "../../components/NavBar";
import HomeCardHeader from "../../components/HomeCardHeader";
import Footer from "../../components/Footer";
import ItemCard from "../../components/ItemCard";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className="" style={{ backgroundColor: "#0d6efd" }}>
        <HomeCardHeader />
      </section>
      <section className="d-flex justify-content-center flex-wrap gap-5">
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
      </section>
      <Footer />
    </>
  );
}

export default Home;

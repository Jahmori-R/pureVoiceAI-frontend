import NavBar from "../../components/NavBar";
import HomeIntroduction from "../../components/HomeIntroduction";
import Footer from "../../components/Footer";
import InfoCard from "../../components/InfoCard";
import SectionDivider from "../../components/SectionDivider";
import PageTitle from "../../components/PageTitle";

function Home() {
  return (
    <>
      <header>
        {/* Video background and overlay moved to the top-level here */}
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="video-bg">
            <source src="videos/talking.mp4" type="video/mp4" />
          </video>
          <div className="overlay overlay-home"></div>
        </div>
        <NavBar />
      </header>
      <main>
        <section>
          <HomeIntroduction />
        </section>
        <SectionDivider color="white" />
        <PageTitle
          text="Core Features"
          tag="h3"
          className="text-white display-5 fw-bold "
        />
        <section>
          <div className="d-flex gap-5 flex-wrap justify-content-center align-items-center">
            <InfoCard
              title="Speaker Separation"
              text="Isolate individual voices from overlapping audio using deep learning models trained for speech separation."
              imageSrc="images/separation.gif"
              width="400px"
              height="400px"
            />
            <InfoCard
              title="Speaker Diarization"
              text="Identify who spoke when by assigning speaker labels to different segments of the audio."
              imageSrc="images/diarization.gif"
              width="400px"
              height="400px"
            />
            <InfoCard
              title="Speaker Transcription"
              text="Automatically convert speech into accurate text with timestamps and speaker attribution."
              imageSrc="images/transcription.gif"
              width="400px"
              height="400px"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;

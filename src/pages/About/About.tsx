import NavBar from "../../components/NavBar";
import AboutIntroduction from "../../components/AboutIntroduction";
import Footer from "../../components/Footer";
import InfoCardBlock from "../../components/InfoCardBlock";
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
        <InfoCardBlock
          title="What is PureVoiceAI?"
          color="primary"
          content={
            <>
              <strong>PureVoiceAI</strong> is a demonstration web application
              that serves as a proof-of-concept for an end-to-end AI pipeline
              capable of <strong>separating</strong>, <strong>diarizing</strong>
              , and <strong>transcribing</strong> speech from audio recordings
              with multiple speakers.
            </>
          }
        />

        <InfoCardBlock
          title="The Problem"
          color="danger"
          content={
            <>
              In today’s world, audio recordings are almost always cluttered
              with background noise and overlapping speech, making manual
              transcription time-consuming, error-prone, and inefficient.
              <br />
              <br />
              The need for transcription documents exists not only for personal
              use but also for legal and professional purposes.
              Transcribers—such as researchers, note-takers, and
              journalists—often spend hours transcribing information from raw
              audio. This applies to interviews, meetings, courtrooms, and more.
              <br />
              <br />
              With recent advances in deep learning, it is now possible to
              significantly reduce transcription time and improve productivity
              using models that perform speech separation, speaker diarization,
              and automatic transcription.
            </>
          }
        />
        <InfoCardBlock
          title="The Project"
          color="success"
          content={
            <>
              <strong>Origin:</strong> Final Year Project at The University of
              Buckingham
              <br />
              <strong>Inspiration:</strong> Automating time-intensive tasks for
              researchers and professionals using state-of-the-art AI models.
            </>
          }
        />
      </section>
      <Footer />
    </>
  );
}

export default About;

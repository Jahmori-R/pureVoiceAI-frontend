import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import OverviewPipeline from "../../components/OverviewPipeline";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";

function Overview() {
  return (
    <>
      {/* Video background and overlay moved to the top-level here */}
      <div className="video-wrapper">
        <div
          className="overlay bg-gradient bg-info"
          style={
            {
              "--mdb-bg-opacity": "0.9",
            } as React.CSSProperties
          }
        ></div>
      </div>

      <header>
        <NavBar />
      </header>
      <section>
        <MDBContainer className="my-5">
          <MDBTypography tag="h1" className="mb-4 text-center">
            AI Pipeline Overview
          </MDBTypography>
          <MDBTypography className="mb-4 text-center">
            This AI pipeline processes complex multi-speaker audio through three
            stages: speaker separation, diarization, and transcription. Each
            stage enhances the audio for clearer analysis and structured output.
          </MDBTypography>

          <MDBRow className="g-4">
            <MDBCol md="4">
              <OverviewPipeline
                stepNumber={1}
                title="ConvTasNet - Speaker Separation"
                description="ConvTasNet separates mixed audio signals into clean, individual speaker streams."
                details={
                  <>
                    <p>
                      In many real-world scenarios, multiple people talk
                      simultaneously, creating overlapping speech that is
                      difficult to analyze. ConvTasNet is a state-of-the-art
                      deep neural network designed to perform time-domain speech
                      separation directly on raw audio waveforms.
                    </p>
                    <p>
                      Unlike traditional frequency-domain methods, ConvTasNet
                      uses convolutional blocks and learned masks to isolate
                      each speaker's voice with high fidelity and low latency.
                      This enables downstream models to focus on one speaker at
                      a time, greatly improving accuracy.
                    </p>
                    <p>
                      The model's architecture is efficient and compact, making
                      it suitable for real-time or embedded applications.
                    </p>
                  </>
                }
              />
            </MDBCol>

            <MDBCol md="4">
              <OverviewPipeline
                stepNumber={2}
                title="Diarization - Pyannote.AI"
                description="Pyannote.AI identifies and segments speech by individual speakers."
                details={
                  <>
                    <p>
                      After speaker separation, it's crucial to determine who
                      spoke when. Speaker diarization performs this task by
                      detecting speaker change points and grouping speech
                      segments belonging to the same speaker.
                    </p>
                    <p>
                      Pyannote.AI employs deep learning embeddings combined with
                      clustering algorithms to accurately track multiple
                      speakers over time, even in noisy environments or with
                      overlapping speech segments.
                    </p>
                    <p>
                      This step produces timestamps and speaker labels,
                      providing a structured map of the conversation flow that
                      can be paired with transcriptions.
                    </p>
                  </>
                }
              />
            </MDBCol>

            <MDBCol md="4">
              <OverviewPipeline
                stepNumber={3}
                title="Transcription - Whisper"
                description="Whisper converts audio streams into readable and searchable text transcripts."
                details={
                  <>
                    <p>
                      The final step in the pipeline is to convert the cleaned,
                      diarized speech into text. Whisper, an advanced automatic
                      speech recognition (ASR) system developed by OpenAI, uses
                      transformer models trained on large diverse datasets.
                    </p>
                    <p>
                      Whisper supports multiple languages, handles accents, and
                      performs robustly even with background noise or
                      low-quality audio.
                    </p>
                    <p>
                      By leveraging the outputs from previous stages, Whisper
                      transcribes each speaker's utterances accurately, enabling
                      downstream applications such as conversation
                      summarization, keyword spotting, or sentiment analysis.
                    </p>
                  </>
                }
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <Footer />
    </>
  );
}

export default Overview;

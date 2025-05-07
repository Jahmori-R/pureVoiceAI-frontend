function AboutHeader() {
  return (
    <div className="container">
      <h1 className="display-5 fw-bold text-center mb-5">
        What is PureVoiceAI?
      </h1>

      {/* Introduction */}
      <div className="mb-5">
        <h2 className="h4 fw-semibold text-primary">Introduction</h2>
        <p>
          <strong>PureVoiceAI</strong> is a demonstration web application that
          serves as a proof-of-concept for an end-to-end AI pipeline capable of
          separating, diarizing, and transcribing speech from audio recordings
          with multiple speakers.
        </p>
      </div>

      {/* The Problem */}
      <div className="mb-5">
        <h2 className="h4 fw-semibold text-danger">The Problem</h2>
        <p>
          In today’s world, audio recordings are almost always cluttered with
          background noise and overlapping speech, making manual transcription
          time-consuming, error-prone, and inefficient.
        </p>
        <p>
          The need for transcription documents exists not only for personal use
          but also for legal and professional purposes. Transcribers—such as
          researchers, note-takers, and journalists—often spend hours
          transcribing information from raw audio. This applies to interviews,
          meetings, courtrooms, and more.
        </p>
        <p>
          With recent advances in deep learning, it is now possible to
          significantly reduce transcription time and improve productivity using
          models that perform speech separation, speaker diarization, and
          automatic transcription.
        </p>
      </div>

      {/* The Project */}
      <div className="mb-4">
        <h2 className="h4 fw-semibold text-success">The Project</h2>
        <ul className="list-unstyled ms-3">
          <li>
            <strong>Origin:</strong> Final Year Project at The University of
            Buckingham
          </li>
          <li>
            <strong>Inspiration:</strong> Automating time-intensive tasks for
            researchers and professionals using state-of-the-art AI models.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutHeader;

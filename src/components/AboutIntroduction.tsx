function AboutIntroduction() {
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
    </div>
  );
}

export default AboutIntroduction;

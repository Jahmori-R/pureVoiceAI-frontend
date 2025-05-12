function UploadIntroduction() {
  return (
    <div className="container">
      <h1>Welcome to the Upload page!</h1>
      <p>
        Here, you can either <b>upload a pre-recorded audio file</b> or{" "}
        <b>record a new one directly from your browser.</b> Once submitted, the
        audio will be processed by our AI pipeline to perform{" "}
        <b>speaker separation, speaker diarization,</b> and{" "}
        <b>transcription.</b>
      </p>
      {/* Add your upload form or component here */}
    </div>
  );
}

export default UploadIntroduction;

function UploadInstructions() {
  return (
    <div className="container">
      <h2>Upload Instructions</h2>
      <p>Accepted file formats: .wav, .mp3, or .flac</p>
      <p>
        For live recording, please ensure your microphone is enabled and grant
        browser permissions when prompted
      </p>
      <p>To upload your files, please follow these steps:</p>
      <ol>
        <li>Select the files you want to upload.</li>
        <li>Click the "Upload" button.</li>
        <li>Wait for the upload to complete.</li>
      </ol>
    </div>
  );
}

export default UploadInstructions;

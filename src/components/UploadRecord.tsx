import { MDBBtnGroup, MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";

function UploadRecord() {
  //State to manage the selected mode (upload or record)
  const [selected, setSelected] = useState<"upload" | "record">("upload");
  const recorderControls = useVoiceVisualizer();
  const uploadControls = useVoiceVisualizer();

  const { recordedBlob, error } = recorderControls;

  // Handle file upload
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadControls.setPreloadedAudioBlob(file);
    }
  };

  // Get the recorded audio blob
  useEffect(() => {
    if (!recordedBlob) return;
  }, [recordedBlob]);

  // Get the error when it occurs
  useEffect(() => {
    if (!error) return;

    console.error(error);
  }, [error]);

  return (
    <>
      <MDBContainer className="mb-5">
        {/* Pill Buttons */}
        <MDBBtnGroup>
          <MDBBtn
            className={selected === "upload" ? "active" : "btn-light"}
            onClick={() => {
              setSelected("upload");
              recorderControls.clearCanvas();
              recorderControls.stopRecording();
            }}
          >
            Upload
          </MDBBtn>
          <MDBBtn
            className={selected === "record" ? "active" : "btn-light"}
            onClick={() => {
              setSelected("record");
              uploadControls.clearCanvas();
              uploadControls.stopRecording();
            }}
          >
            Record
          </MDBBtn>
        </MDBBtnGroup>

        {/*Conditional Content */}
        {selected === "upload" ? (
          <div className="text-center">
            <h5 className="mb-3">Upload an audio file</h5>
            <div className="d-flex flex-column align-items-center gap-3">
              <MDBInput type="file" accept="audio/*" onChange={handleUpload} />

              <VoiceVisualizer
                height={200}
                controls={uploadControls}
                mainBarColor="blue"
                secondaryBarColor="black"
                defaultMicrophoneIconColor="blue"
                defaultAudioWaveIconColor="blue"
                speed={3}
                gap={1}
                barWidth={2}
                rounded={3}
                isDownloadAudioButtonShown={true}
                isProgressIndicatorOnHoverShown={true}
                isControlPanelShown={!!uploadControls.recordedBlob}
                isDefaultUIShown={false}
                mainContainerClassName="shadow-3-strong rounded-3 py-3 w-100"
              />
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h5>Recording Mode</h5>
            <div className="mt-3">
              <VoiceVisualizer
                height={200}
                controls={recorderControls}
                mainBarColor="red"
                secondaryBarColor="black"
                defaultMicrophoneIconColor="red"
                defaultAudioWaveIconColor="red"
                speed={3}
                gap={1}
                barWidth={2}
                rounded={3}
                isDownloadAudioButtonShown={true}
                mainContainerClassName="shadow-3-strong rounded-3 py-3"
              />
              <p className="text-muted mt-4">Listening...</p>
            </div>
          </div>
        )}
      </MDBContainer>
    </>
  );
}

export default UploadRecord;

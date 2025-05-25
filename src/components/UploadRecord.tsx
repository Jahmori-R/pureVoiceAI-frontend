import {
  MDBBtnGroup,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
  MDBInput,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState, useEffect, useRef } from "react";
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";

// UploadRecord component allows users to either upload an audio file or record audio directly
function UploadRecord() {
  // State to track selected mode: "upload" or "record"
  const [modeSelected, setModeSelected] = useState<"upload" | "record">(
    "upload"
  );
  // State to track if a file is selected/uploaded
  const [fileSelected, setFileSelected] = useState(false);
  // State to control the confirmation modal visibility
  const [confirmModal, setConfirmModal] = useState(false);

  // Toggle function for the confirmation modal
  const toggleOpen = () => setConfirmModal(!confirmModal);
  // Ref for the file input element
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Controls for the voice visualizer (recording and uploading)
  const recorderControls = useVoiceVisualizer();
  const uploadControls = useVoiceVisualizer();
  const { recordedBlob, error } = recorderControls;

  // Handle file upload event
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadControls.setPreloadedAudioBlob(file);
      setFileSelected(true);
    }
  };

  // Update fileSelected state when a recording is made
  useEffect(() => {
    setFileSelected(!!recordedBlob);
  }, [recordedBlob]);

  // Log errors from the recorder
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <>
      <MDBContainer className="my-5 p-5 border bg-light">
        {/* Title */}
        <MDBTypography
          tag="h4"
          className="text-center mb-4 fw-bold text-primary"
        >
          Choose Input Mode
        </MDBTypography>

        {/* Mode selection buttons */}
        <MDBBtnGroup className="d-flex justify-content-center mb-4">
          <MDBBtn
            color={modeSelected === "upload" ? "primary" : "light"}
            onClick={() => {
              setModeSelected("upload");
              recorderControls.clearCanvas();
              recorderControls.stopRecording();
              setFileSelected(false);
            }}
          >
            <MDBIcon icon="upload" className="me-2" />
            Upload
          </MDBBtn>
          <MDBBtn
            color={modeSelected === "record" ? "danger" : "light"}
            onClick={() => {
              setModeSelected("record");
              uploadControls.clearCanvas();
              uploadControls.stopRecording();
              setFileSelected(false);
            }}
          >
            <MDBIcon icon="microphone" className="me-2" />
            Record
          </MDBBtn>
        </MDBBtnGroup>

        {/* Conditional rendering: Upload or Record Mode */}
        {modeSelected === "upload" ? (
          <MDBCard className="shadow-sm p-3">
            <MDBCardBody>
              <h5 className="text-center mb-3 text-primary">
                Upload an Audio File
              </h5>

              {/* File input and clear button */}
              <div className="d-flex gap-3 flex-column flex-md-row justify-content-center align-items-center mb-3">
                <MDBInput
                  type="file"
                  accept=".wav, .mp3, .flac"
                  onChange={handleUpload}
                  ref={fileInputRef}
                />
                <MDBBtn
                  color="danger"
                  onClick={() => {
                    uploadControls.clearCanvas();
                    if (fileInputRef.current) fileInputRef.current.value = "";
                    setFileSelected(false);
                  }}
                >
                  <MDBIcon fas icon="trash" />
                </MDBBtn>
              </div>

              {/* Audio visualizer for uploaded file */}
              <VoiceVisualizer
                height={200}
                controls={uploadControls}
                mainBarColor="blue"
                secondaryBarColor="black"
                speed={3}
                gap={1}
                barWidth={2}
                rounded={3}
                isDownloadAudioButtonShown={true}
                isProgressIndicatorOnHoverShown={true}
                isControlPanelShown={!!uploadControls.recordedBlob}
                isDefaultUIShown={false}
                mainContainerClassName="rounded-3 py-3 w-100"
              />
            </MDBCardBody>
          </MDBCard>
        ) : (
          <MDBCard className="shadow-sm p-3">
            <MDBCardBody>
              <h5 className="text-center text-danger">Recording Mode</h5>

              {/* Audio visualizer for recording */}
              <VoiceVisualizer
                height={200}
                controls={recorderControls}
                mainBarColor="red"
                secondaryBarColor="black"
                speed={3}
                gap={1}
                barWidth={2}
                rounded={3}
                isDownloadAudioButtonShown={true}
                mainContainerClassName="rounded-3 py-3"
              />
              <p className="text-muted mt-4 text-center">Listening...</p>
            </MDBCardBody>
          </MDBCard>
        )}
      </MDBContainer>

      {/* Pass Audio Button and Confirmation Modal */}
      <MDBContainer className="text-center mb-5">
        {(fileSelected || recordedBlob) && (
          <>
            {/* Button to trigger confirmation modal */}
            <MDBBtn size="lg" className="px-5 py-3 mt-3" onClick={toggleOpen}>
              <MDBIcon icon="check-circle" className="me-2" />
              Pass Audio
            </MDBBtn>

            {/* Confirmation modal */}
            <MDBModal staticBackdrop open={confirmModal} tabIndex="-1">
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Confirm Pass?</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleOpen}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    Are you sure you want to send this audio for processing?
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggleOpen}>
                      Cancel
                    </MDBBtn>
                    <MDBBtn
                      color="primary"
                      onClick={() => {
                        console.log("Clicked");
                      }}
                    >
                      Yes, Proceed
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </>
        )}
      </MDBContainer>
    </>
  );
}

export default UploadRecord;

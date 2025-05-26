import {
  MDBContainer,
  MDBTypography,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

function UploadInstructions() {
  return (
    <MDBContainer className="py-5 px-4 bg-light rounded shadow-2 mb-5">
      <MDBTypography tag="h2" className="mb-4 text-primary fw-bold">
        <MDBIcon icon="info-circle" className="me-2" />
        Upload Instructions
      </MDBTypography>

      <p className="mb-3">
        <MDBIcon icon="file-audio" className="me-2 text-success" />
        <strong>Accepted formats:</strong> <code>.wav</code>, <code>.mp3</code>,{" "}
        <code>.flac</code>
      </p>

      <p className="mb-3">
        <MDBIcon icon="microphone" className="me-2 text-danger" />
        <strong>Recording:</strong> Enable your microphone and allow browser
        permissions when prompted.
      </p>

      <p className="fw-semibold mb-3">
        <MDBIcon icon="upload" className="me-2 text-primary" />
        Follow these steps to upload:
      </p>

      <MDBListGroup flush className="mb-0">
        <MDBListGroupItem className="d-flex align-items-center">
          <MDBIcon icon="check-circle" className="me-3 text-success" />
          Select or drag the audio file you want to upload input.
        </MDBListGroupItem>
        <MDBListGroupItem className="d-flex align-items-center">
          <MDBIcon icon="cloud-upload-alt" className="me-3 text-info" />
          Click the <strong>"Pass Audio"</strong> button and confirm.
        </MDBListGroupItem>
        <MDBListGroupItem className="d-flex align-items-center">
          <MDBIcon icon="spinner" className="me-3 text-warning" spin />
          Wait for the upload to complete and results to appear.
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
  );
}

export default UploadInstructions;

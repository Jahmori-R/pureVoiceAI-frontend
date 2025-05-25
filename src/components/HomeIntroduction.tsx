import { MDBContainer, MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function HomeIntroduction() {
  return (
    <MDBContainer
      className="bg-white text-dark shadow-5-strong rounded-5 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url('your-image-url.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        textAlign: "center",
        marginTop: "10vh",
      }}
    >
      <div className="">
        <MDBTypography tag="h1" className="display-5 fw-bold mb-4">
          PureVoiceAI — All in One Click
        </MDBTypography>
        <MDBTypography tag="p" className="mb-5 text-muted fs-5">
          Our AI pipeline extracts speakers and transcripts from noisy
          conversations in seconds. Say goodbye to manual transcription.
        </MDBTypography>

        <MDBBtn tag={Link} to="/upload" size="lg" className="btn-primary py-3">
          Try It Now!
        </MDBBtn>
      </div>
    </MDBContainer>
  );
}

export default HomeIntroduction;

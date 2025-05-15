import { MDBContainer, MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function HomeIntroduction() {
  return (
    <div className="hero-section text-white text-center">
      <MDBContainer className="hero-content bg-white text-dark shadow-5 rounded-5 py-5">
        <MDBTypography tag="h1" className="display-5 fw-bold fst-italic mb-4">
          PureVoiceAI — All in One Click
        </MDBTypography>
        <MDBTypography tag="p" className="mb-4 text-muted fs-5">
          Our AI pipeline extracts speakers and transcripts from noisy
          conversations in seconds. Say goodbye to manual transcription.
        </MDBTypography>

        <MDBBtn tag={Link} to="/upload" size="lg" color="primary">
          Try It Now!
        </MDBBtn>
      </MDBContainer>
    </div>
  );
}

export default HomeIntroduction;

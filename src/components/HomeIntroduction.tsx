import { MDBContainer, MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function HomeIntroduction() {
  return (
    <div className="hero-section position-relative text-white text-center">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="videos/talking.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="overlay bg-primary bg-gradient"
        style={{ "--mdb-bg-opacity": "0.9" } as React.CSSProperties}
      ></div>
      <MDBContainer className="hero-content position-relative z-2 bg-white text-dark shadow-5 rounded-5 py-5 px-4">
        <MDBTypography tag="h1" className="display-5 fw-bold fst-italic mb-4">
          PureVoiceAI — All in One Click
        </MDBTypography>

        <p className="fs-4 mb-5 text-muted">
          Our AI pipeline extracts speakers and transcripts from noisy
          conversations in seconds. Say goodbye to manual transcription.
        </p>
        <MDBBtn tag={Link} to="/upload" size="lg" color="primary">
          Try It Now!
        </MDBBtn>
      </MDBContainer>
    </div>
  );
}

export default HomeIntroduction;

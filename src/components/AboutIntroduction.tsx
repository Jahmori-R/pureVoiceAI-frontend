import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

function AboutIntroduction() {
  return (
    <MDBContainer
      className="my-5 d-flex justify-content-center align-items-center bg-dark rounded-5"
      style={{
        backgroundImage: "url('your-image-url.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div>
        <MDBTypography tag="h1" className="display-3 mb-4">
          About PureVoiceAI
        </MDBTypography>
        <MDBTypography tag="p" className="lead mb-4">
          Discover how PureVoiceAI is revolutionizing voice technology with
          advanced AI-driven solutions.
        </MDBTypography>
      </div>
    </MDBContainer>
  );
}

export default AboutIntroduction;

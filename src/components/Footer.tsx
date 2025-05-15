import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <MDBContainer className="text-md-start mt-5 pt-4">
        <MDBRow className="mt-3">
          {/* Quick Links */}
          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 text-center">
            <h6 className="text-dark fs-4 mb-3">
              <MDBIcon fas icon="route" /> Explore PureVoiceAI
            </h6>
            <ul className="list-unstyled">
              <li>
                <Link className="text-primary" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-primary" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-primary" to="/upload">
                  Upload Audio
                </Link>
              </li>
              <li>
                <Link className="text-primary" to="/results">
                  Results
                </Link>
              </li>
              <li>
                <Link className="text-primary" to="/overview">
                  Overview
                </Link>
              </li>
              <li>
                <Link className="text-primary" to="/use-cases">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link className="text-primary" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </MDBCol>

          {/* About / Project Info */}
          <MDBCol md="5" lg="4" xl="5" className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">
              <MDBIcon fas icon="info-circle" /> About This Project
            </h6>
            <p>
              Built with React, TypeScript, and PyTorch. Styling via Material
              Design Bootstrap.
              <br />
              Speech datasets:{" "}
              <a
                href="https://www.openslr.org/12"
                target="_blank"
                rel="noreferrer"
              >
                LibriSpeech
              </a>
              ,{" "}
              <a
                href="https://github.com/JorisCos/LibriMix"
                target="_blank"
                rel="noreferrer"
              >
                LibriMix
              </a>
              ,{" "}
              <a
                href="https://wham.whisper.ai/"
                target="_blank"
                rel="noreferrer"
              >
                WHAM!
              </a>
            </p>
            <p>
              Developed for academic purposes at The University Of Buckingham.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 PureVoiceAI - Final Year Project Demo
      </div>
    </MDBFooter>
  );
}

export default Footer;

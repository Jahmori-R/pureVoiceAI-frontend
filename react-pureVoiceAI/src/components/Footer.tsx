import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer fixed-bottom bg-light text-center border-top  ">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <h5 className="text-dark fs-4 text-underline">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  className="link-underline link-underline-opacity-0 text-secondary"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline link-underline-opacity-0 text-secondary"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline link-underline-opacity-0 text-secondary"
                  to="/upload"
                >
                  Upload Audio
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline link-underline-opacity-0 text-secondary"
                  to="/results"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline link-underline-opacity-0 text-secondary"
                  to="/overview"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline link-underline-opacity-0 text-secondary"
                  to="/use-cases"
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline link-underline-opacity-0 text-secondary"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fs-4 mb-3 text-dark">Info</h5>
          </div>
        </div>
        <div>© 2025 PureVoiceAI – Final Year Project Demo</div>
        <div>
          Built with React, TypeScript, and PyTorch. Styling via Bootstrap.
        </div>
        <div>
          Speech datasets:{" "}
          <a href="https://www.openslr.org/12" target="_blank" rel="noreferrer">
            LibriSpeech
          </a>
          ,
          <a href="https://wham.whisper.ai/" target="_blank" rel="noreferrer">
            WHAM!
          </a>
        </div>
        <div>Developed for academic purposes at [Your University Name].</div>
      </div>
    </footer>
  );
}

export default Footer;

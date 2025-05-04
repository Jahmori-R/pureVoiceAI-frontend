import { Link } from "react-router-dom";

function HomeCardHeader() {
  return (
    <>
      <header className="py-5 border-bottom">
        <div className="container px-lg-5 px-md-2">
          <div className="p-4 p-lg-5 bg-light rounded-5 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold fst-italic">
                PureVoiceAI - All in One Click
              </h1>
              <p className="fs-4 mb-5">
                Our AI pipeline lets you extract speakers and transcripts from
                noisy conversations in seconds. No more waiting for hours or
                days to get your results.
              </p>
              <div className="d-flex justify-content-center gap-5">
                <Link className="btn btn-primary btn-lg" to={"/upload"}>
                  Try It Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomeCardHeader;

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function Upload() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        <div className="container mt-5">
          <h1>Upload Page</h1>
          <p>This is the upload page where users can upload audio files.</p>
          {/* Add your upload form or component here */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Upload;

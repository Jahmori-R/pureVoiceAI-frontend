import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UploadIntroduction from "../../components/UploadIntroduction";
import UploadInstructions from "../../components/UploadInstructions";

function Upload() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        <UploadIntroduction />
      </section>
      <section>
        <UploadInstructions />
      </section>
      <Footer />
    </>
  );
}

export default Upload;

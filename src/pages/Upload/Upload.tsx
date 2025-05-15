import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UploadIntroduction from "../../components/UploadIntroduction";
import UploadInstructions from "../../components/UploadInstructions";
import UploadRecord from "../../components/UploadRecord";

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
      <section>
        <UploadRecord />
      </section>
      <Footer />
    </>
  );
}

export default Upload;

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function Results() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        <div className="container mt-5">
          <h1>Results Page</h1>
          <p>This is the results page where users can view their results.</p>
          {/* Add your results display component here */}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Results;

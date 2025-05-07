import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function Results() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <h1>Results Page</h1>
        <p>This is the results page where users can view their results.</p>
        {/* Add your results display component here */}
      </div>
      <Footer />
    </>
  );
}
export default Results;

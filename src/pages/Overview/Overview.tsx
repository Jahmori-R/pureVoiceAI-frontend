import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function Overview() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <h1>Overview Page</h1>
        <p>
          This is the overview page where users can learn about the application.
        </p>
        {/* Add your overview content here */}
      </div>
      <Footer />
    </>
  );
}

export default Overview;

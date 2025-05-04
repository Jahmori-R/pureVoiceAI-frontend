import NavBar from "../../components/NavBar";

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
    </>
  );
}

export default Overview;
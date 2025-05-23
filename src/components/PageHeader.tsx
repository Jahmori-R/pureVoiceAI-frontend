import { MDBBtn } from "mdb-react-ui-kit";

function PageHeader() {
  return (
    <div className="p-5 text-center bg-light">
      <h1 className="mb-3">Heading</h1>
      <h4 className="mb-3">Subheading</h4>
      <MDBBtn to=""></MDBBtn>
      <a className="btn btn-primary" href="" role="button">
        Call to action
      </a>
    </div>
  );
}

export default PageHeader;

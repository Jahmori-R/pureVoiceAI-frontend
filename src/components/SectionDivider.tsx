import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

const SectionDivider: React.FC = () => {
  return (
    <MDBContainer className="my-5">
      <hr style={{ borderColor: "white", opacity: 1 }} />
    </MDBContainer>
  );
};

export default SectionDivider;

import { MDBContainer } from "mdb-react-ui-kit";

interface DividerProps {
  color?: string;
}

function SectionDivider({ color }: DividerProps) {
  return (
    <MDBContainer className="my-5">
      <hr style={{ borderColor: color, opacity: 1 }} />
    </MDBContainer>
  );
}

export default SectionDivider;

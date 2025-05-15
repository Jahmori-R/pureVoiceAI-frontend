import {
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBContainer,
} from "mdb-react-ui-kit";

type InfoCardBlockProps = {
  title: string;
  color: string;
  content: string | React.ReactNode;
};

function InfoCardBlock({ title, color, content }: InfoCardBlockProps) {
  return (
    <MDBContainer className="my-5">
      <MDBCard
        className={`bg-light item-card-block-hover shadow-3-strong border-start border-${color} border-5`}
      >
        <MDBCardBody>
          <MDBTypography
            tag="h2"
            className={`h4 fw-semibold text-${color} mb-4`}
          >
            {title}
          </MDBTypography>

          <MDBTypography tag="p" className="text-muted mb-3">
            {content}
          </MDBTypography>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default InfoCardBlock;
